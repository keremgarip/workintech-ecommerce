import { useEffect, useState } from "react";
import api from "../api/axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const run = async () => {
            setLoading(true);
            try {
                const res = await api.get("/order");
                setOrders(res.data || []);
            } finally {
                setLoading(false);
            }
        };
        run();
    }, []);

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
                            const itemCount = (o.products || []).reduce((s,p) => s + (p.count || 0),0);

                            return(
                                <>
                                    <tr key={o.id} className="border-t">
                                        <td className="p-3 font-semibold">{o.id}</td>
                                        <td className="p-3">{formatDate(o.order_date)}</td>
                                        <td className="p-3 font-bold">₺ {Number(o.price || 0).toFixed(2)}</td>
                                        <td className="p-3 font-semibold">{itemCount}</td>
                                        <td className="p-3 text-right">
                                            <button
                                              className="text-[#23A6F0] font-semibold"
                                              onClick={() => setOpenId(isOpen ? null : o.id)}
                                            >
                                            {isOpen ? "Hide" : "Details"}
                                            </button>
                                        </td>
                                    </tr>

                                    {isOpen && (
                                        <tr className="border-t bg-gray-50">
                                            <td colSpan="5" className="p-4">
                                                <OrderDetails order={o}/>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function OrderDetails({ order }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">Address</div>
                <pre className="text-xs whitespace-pre-wrap text-gray-700">
                    {JSON.stringify(order.address || {}, null, 2)}
                </pre>
            </div>
            <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="font-bold mb-2">Products</div>
                <div className="space-y-2">
                    {(order.products || []).map((p, idx) => (
                        <div key={idx} className="flex justify-between text-sm border-b pb-2">
                            <span>
                                #{p.product_id} • {p.detail || "-"}
                            </span>
                            <b>x{p.count}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function formatDate(iso) {
    if (!iso) return "-";
    const d = new Date(iso);
    return isNaN(d.getTime()) ? iso : d.toLocaleString();
}