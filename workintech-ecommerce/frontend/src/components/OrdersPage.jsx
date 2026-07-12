import { Fragment, useEffect, useState } from "react";
import { getOrderHistory } from "../api/orderApi";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
    const run = async () => {
        const userId = Number(localStorage.getItem("userId"));

        if (!userId) {
            setOrders([]);
            return;
        }

        setLoading(true);

        try {
            const data = await getOrderHistory(userId, 0, 20);
            setOrders(data?.content || []);
        } catch (error) {
            console.error(
                "Order history could not be fetched:",
                error?.response?.status,
                error?.response?.data || error.message
            );
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    run();
}, []);

    const getProducts = (data) => data?.items || [];

    const getItemCount = (order) => {
        return (order?.items || []).reduce(
            (sum, item) =>
                sum + (Number(item.quantity) || 0),
            0
        );
    };

    const toggleDetails = (id) => {
        setOpenId((currentId) =>
            currentId === id ? null : id
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold">
                Previous Orders
            </h1>

            {loading && (
                <p className="text-gray-500 mt-3">
                    Loading...
                </p>
            )}

            {error && (
                <p className="text-red-600 mt-3">
                    {error}
                </p>
            )}

            {!loading && !error && orders.length === 0 && (
                <div className="mt-6 border border-gray-200 rounded p-6 text-center text-gray-600">
                    Henüz bir siparişiniz bulunmuyor.
                </div>
            )}

            {orders.length > 0 && (
                <div className="mt-6 border border-gray-200 rounded overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-sm">
                            <tr>
                                <th className="p-3">
                                    Order No
                                </th>

                                <th className="p-3">
                                    Date
                                </th>

                                <th className="p-3">
                                    Status
                                </th>

                                <th className="p-3">
                                    Total
                                </th>

                                <th className="p-3">
                                    Items
                                </th>

                                <th className="p-3"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((o) => {
    const isOpen = openId === o.id;
    const itemsText = String(getItemCount(o));

    return (
        <Fragment key={o.id}>
            <tr className="border-t">
                <td className="p-3 font-semibold">
                    {o.orderNumber}
                </td>

                <td className="p-3">
                    {formatDate(o.createdAt)}
                </td>

                <td className="p-3 font-bold">
                    ₺ {Number(o.totalAmount || 0).toFixed(2)}
                </td>

                <td className="p-3 font-semibold">
                    {itemsText}
                </td>

                <td className="p-3 text-right">
                    <button
                        type="button"
                        className="text-[#23A6F0] font-semibold"
                        onClick={() => toggleDetails(o.id)}
                    >
                        {isOpen ? "Hide" : "Details"}
                    </button>
                </td>
            </tr>

            {isOpen && (
                <tr className="border-t bg-gray-50">
                    <td colSpan={5} className="p-4">
                        <OrderDetails
                            order={o}
                            getProducts={getProducts}
                        />
                    </td>
                </tr>
            )}
        </Fragment>
    );
})}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function OrderDetails({ order }) {
    const products = Array.isArray(order?.items)
        ? order.items
        : [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">
                    Order Information
                </div>

                <div className="text-sm text-gray-700 space-y-1">
                    <div>
                        Order No: {order.orderNumber}
                    </div>

                    <div>
                        Status: {order.status || "-"}
                    </div>

                    <div>
                        Date: {formatDate(order.createdAt)}
                    </div>

                    <div>
                        Total: ₺{" "}
                        {Number(
                            order.totalAmount || 0
                        ).toFixed(2)}
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">
                    Products
                </div>

                {products.length === 0 ? (
                    <div className="text-sm text-gray-600">
                        No products found.
                    </div>
                ) : (
                    <div className="space-y-2">
                        {products.map((product, index) => (
                            <div
                                key={`${product.productId}-${index}`}
                                className="flex justify-between gap-4 text-sm border-b pb-2"
                            >
                                <div>
                                    <div className="font-semibold">
                                        {product.productName}
                                    </div>

                                    <div className="text-gray-500">
                                        ₺{" "}
                                        {Number(
                                            product.unitPrice || 0
                                        ).toFixed(2)}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="font-bold">
                                        x{product.quantity}
                                    </div>

                                    <div>
                                        ₺{" "}
                                        {Number(
                                            product.lineTotal || 0
                                        ).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function formatDate(iso) {
    if (!iso) return "-";

    const date = new Date(iso);

    return Number.isNaN(date.getTime())
        ? iso
        : date.toLocaleString("tr-TR");
}
