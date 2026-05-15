import { useEffect, useState, Fragment, useMemo } from "react";
import api from "../api/axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [detailsById, setDetailsById] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) api.defaults.headers.Authorization = token.startsWith("Bearer ")
            ? token
            : `Bearer ${token}`;

        const run = async () => {
            setLoading(true);
            try {
                const userId = 1;

                const res = await api.get(`/orders?userId=${userId}`);
                setOrders(res.data.content || []);
            } finally {
                setLoading(false);
            }
        };

        run();
    }, []);

    const getProducts = (data) => data?.items || [];

    const getItemCount = (data) =>
        getProducts(data).reduce((sum, p) => sum + (Number(p.quantity) || 0), 0);

    /* const toggleDetails = async (id) => {
        const willOpen = openId !== id;
        setOpenId(willOpen ? id : null);

        if (!willOpen || detailsById[id]) return;

        try {
            const res = await api.get(`/order/${id}`);
            let detail = res.data;

            if (detail?.address_id && !detail?.address) {
                const addrRes = await api.get("/user/address");
                const list = addrRes.data || [];
                detail.address = list.find((a) => String(a.id) === String(detail.address_id)) || null;
            }

            setDetailsById((p) => ({ ...p, [id]: detail }));
        } catch (e) {
            const status = e?.response?.status;

            if (status === 404) {
                setDetailsById((p) => ({ ...p, [id]: { __noDetailEndpoint: true } }));
                return;
            }

            alert("Order detail could not be fetched.");
        }
    }; */


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold">Previous Orders</h1>
            {loading && <p className="text-gray-500 mt-3">Loading...</p>}

            <div className="mt-6 border border-gray-200 rounded overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-sm">
                        <tr>
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Items</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((o) => {
                            const isOpen = openId === o.id;
                            const detail = detailsById[o.id];

                            // Items sadece detail yüklendiyse gösterelim.
                            const itemsText = detail ? String(getItemCount(detail)) : "-";

                            return (
                                <Fragment key={o.id}>
                                    <tr className="border-t">
                                        <td className="p-3 font-semibold">{o.id}</td>
                                        <td className="p-3">{formatDate(o.createdAt)}</td>
                                        <td className="p-3 font-bold">
                                            ₺ {Number(o.totalAmount || 0).toFixed(2)}
                                        </td>
                                        <td className="p-3 font-semibold">{itemsText}</td>
                                        <td className="p-3 text-right">
                                            <button
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
                                                    order={detail || o}
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
        </div>
    );
}

function OrderDetails({ order, getProducts }) {
    const products = useMemo(() => getProducts(order), [order, getProducts]);

    const addressObj =
        (order && typeof order.address === "object" && order.address) || null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">Address</div>

                <div className="text-sm text-gray-700 space-y-1">
                    <div>{order.shippingAddress}</div>
                    <div>{order.paymentMethod}</div>
                </div>
            </div>

            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">Products</div>

                {products.length === 0 ? (
                    <div className="text-sm text-gray-600">No products found.</div>
                ) : (
                    <div className="space-y-2">
                        {products.map((p, idx) => (
                            <div
                                key={`${p.product_id ?? p.id ?? "p"}-${idx}`}
                                className="flex justify-between text-sm border-b pb-2"
                            >
                                <span>
                                    #{p.productId} • {p.productName}
                                </span>
                                <b>x{p.quantity}</b>
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
    const d = new Date(iso);
    return isNaN(d.getTime()) ? iso : d.toLocaleString();
}
