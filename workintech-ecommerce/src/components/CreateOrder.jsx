import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axios";
import OrderSummaryBox from "./OrderSummaryBox";
import { setAddressList } from "../actions/clientActions";
import { setAddress } from "../actions/shoppingCartActions";
import CreditCardStep from "./CreditCardStep";

export default function CreateOrderPage() {
    const dispatch = useDispatch();
    const cart = useSelector((s) => s.shoppingCart.cart) || [];
    const addressList = useSelector((s) => s.client.addressList) || [];
    const selectedAddress = useSelector((s) => s.shoppingCart.address);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) api.defaults.headers.Authorization = token;
    }, []);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                setLoading(true);
                const res = await api.get("/user/address");
                dispatch(setAddressList(res.data || []));
            } finally {
                setLoading(false);
            }
        };
        fetchAddresses();
    }, [dispatch]);

    const onSelect = (addr) => dispatch(setAddress(addr));

    const onSave = async (payload) => {
        setLoading(true);
        try {
            if (editItem?.id) {
                await api.put("/user/address", { ...payload, id: editItem.id });
            } else {
                await api.post("/user/address", payload);
            }
            const res = await api.get("/user/address");
            dispatch(setAddress(res.data || []));
            setShowForm(false);
            setEditItem(null);
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async (id) => {
        setLoading(true);
        try {
            await api.delete(`/user/address/${id}`);
            const res = await api.get("/user/address");
            dispatch(setAddressList(res.data || []));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-start">
                <div>
                    <div className="flex gap-4 border-b border-gray-200 mb-6">
                        <button
                            className={`py-3 font-bold ${step === 1 ? "border-b-2 border-[#F57C00]" : "text-gray-500"}`}
                            onClick={() => setStep(1)}
                        >
                            1. Adres Bilgileri
                        </button>
                        <button
                            className={`py-3 font-bold ${step === 2 ? "border-b-2 border-[#F57C00]" : "text-gray-500"}`}
                            onClick={() => setStep(2)}
                            disabled={!selectedAddress}
                        >
                            2. Ödeme Seçenekleri
                        </button>
                    </div>

                    {step === 1 ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Teslimat Adresi</h2>
                                <button
                                    className="px-4 py-2 rounded border border-gray-200"
                                    onClick={() => {
                                        setShowForm(true);
                                        setEditItem(null);
                                    }}
                                >
                                    + Yeni Adres Ekle
                                </button>
                            </div>

                            {loading && <p className="mt-3 text-gray-500">Loading...</p>}

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addressList.map((a) => (
                                    <div
                                        key={a.id}
                                        className={`border rounded p-4 cursor-pointer ${selectedAddress?.id === a.id ? "border-[#F57C00]" : "border-gray-200"
                                            }`}
                                        onClick={() => onSelect(a)}
                                    >
                                        <div className="flex justify-between">
                                            <div className="font-bold">{a.title}</div>
                                            <div className="text-sm text-gray-500">{a.city}</div>
                                        </div>
                                        <div className="text-sm mt-2">{a.name} {a.surname}</div>
                                        <div className="text-sm text-gray-600 mt-1">{a.district} / {a.neighborhood}</div>
                                        <div className="text-sm text-gray-600 mt-1">{a.address}</div>
                                        <div className="text-sm text-gray-600 mt-1">{a.phone}</div>

                                        <div className="flex gap-2 mt-3">
                                            <button
                                                className="text-[#23A6F0] font-semibold"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setEditItem(a);
                                                    setShowForm(true);
                                                }}
                                            >
                                                Düzenle
                                            </button>
                                            <button
                                                className="text-red-600 font-semibold"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDelete(a.id);
                                                }}
                                            >
                                                Sil
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {showForm && (
                                <AddressForm
                                    initial={editItem}
                                    onCancel={() => {
                                        setShowForm(false);
                                        setEditItem(null);
                                    }}
                                    onSave={onSave}
                                    loading={loading}
                                />
                            )}

                            <div className="mt-6 flex justify-end">
                                <button
                                    className="bg-[#F57C00] text-white font-bold px-6 py-3 rounded disabled:opacity-50"
                                    disabled={!selectedAddress}
                                    onClick={() => setStep(2)}
                                >
                                    Kaydet ve Devam Et
                                </button>
                            </div>
                        </>
                    ) : (
                        <CreditCardStep />
                    )}
                </div>

                <OrderSummaryBox cart={cart} />
            </div>
        </div>
    );
}

function AddressForm({ initial, onCancel, onSave, loading }) {
    const [form, setForm] = useState({
        title: initial?.title || "",
        name: initial?.name || "",
        surname: initial?.surname || "",
        phone: initial?.phone || "",
        city: initial?.city || "",
        district: initial?.district || "",
        neighborhood: initial?.neighborhood || "",
        address: initial?.address || "",
    });

    const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

    return (
        <div className="mt-6 border border-gray-200 rounded p-4">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">{initial ? "Adresi Düzenle" : "Yeni Adres"}</h3>
                <button onClick={onCancel} className="text-gray-600">X</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <Input label="Address Title" value={form.title} onChange={set("title")} />
                <Input label="Name" value={form.name} onChange={set("name")} />
                <Input label="Surname" value={form.surname} onChange={set("surname")} />
                <Input label="Phone" value={form.phone} onChange={set("phone")} />
                <Input label="City" value={form.city} onChange={set("city")} />
                <Input label="District" value={form.district} onChange={set("district")} />
                <Input label="Neighborhood" value={form.neighborhood} onChange={set("neighborhood")} />
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">Address</label>
                    <textarea
                        value={form.address}
                        onChange={set("address")}
                        className="w-full border border-gray-200 rounded px-3 py-2 min-h-[90px]"
                    />
                </div>
            </div>

            <div className="mt-4 flex gap-2 justify-end">
                <button onClick={onCancel} className="px-4 py-2 border border-gray-200 rounded">
                    Cancel
                </button>
                <button
                    onClick={() => onSave(form)}
                    disabled={loading}
                    className="px-4 py-2 bg-[#F57C00] text-white font-bold rounded disabled:opacity-50"
                >
                    Save
                </button>
            </div>
        </div>
    );
}

function Input({ label, value, onChange }) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input
                value={value}
                onChange={onChange}
                className="w-full border border-gray-200 rounded px-3 py-2"
            />
        </div>
    );
}