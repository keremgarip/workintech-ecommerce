import { useEffect, useState } from "react";
import api from "../api/axios";

export default function CreditCardStep() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const [form, setForm] = useState({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
    });

    const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

    const refresh = async () => {
        setLoading(true);
        try {
            const res = await api.get("/user/card");
            setCards(res.data || []);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refresh();
    }, []);

    const openNew = () => {
        setEditItem(null);
        setForm({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
        setShowForm(true);
    };

    const openEdit = (c) => {
        setEditItem(c);
        setForm({
            card_no: c.card_no || "",
            expire_month: c.expire_month || "",
            expire_year: c.expire_year || "",
            name_on_card: c.name_on_card || "",
        });
        setShowForm(true);
    };

    const save = async () => {
        setLoading(true);
        try {
            const payload = {
                card_no: String(form.card_no),
                expire_month: Number(form.expire_month),
                expire_year: Number(form.expire_year),
                name_on_card: String(form.name_on_card),
            };

            if (editItem?.id) {
                await api.put("/user/card", { ...payload, id: editItem.id });
            } else {
                await api.post("/user/card", payload);
            }

            setShowForm(false);
            setEditItem(null);
            await refresh();
        } finally {
            setLoading(false);
        }
    };

    const del = async (id) => {
        setLoading(true);
        try {
            await api.delete(`/user/card/${id}`);
            await refresh();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Kart Bilgileri</h2>
                <button className="px-4 py-2 rounded border border-gray-200" onClick={openNew}>
                    + Yeni Kart
                </button>
            </div>

            {loading && <p className="mt-3 text-gray-500">Loading...</p>}

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((c) => (
                    <div key={c.id} className="border border-gray-200 rounded p-4">
                        <div className="font-bold">{maskCard(c.card_no)}</div>
                        <div className="text-sm text-gray-600 mt-1">
                            {c.expire_month}/{c.expire_year}
                        </div>
                        <div className="text-sm mt-1">{c.name_on_card}</div>

                        <div className="flex gap-3 mt-3">
                            <button className="text-[#23A6F0] font-semibold" onClick={() => openEdit(c)}>
                                Düzenle
                            </button>
                            <button className="text-red-600 font-semibold" onClick={() => del(c.id)}>
                                Sil
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="mt-6 border border-gray-200 rounded p-4">
                    <h3 className="font-bold mb-3">{editItem ? "Kartı Düzenle" : "Yeni Kart"}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input label="Kart Numarası" value={form.card_no} onChange={set("card_no")} />
                        <Input label="Kart Üzerindeki İsim" value={form.name_on_card} onChange={set("name_on_card")} />
                        <Input label="Ay" value={form.expire_month} onChange={set("expire_month")} />
                        <Input label="Yıl" value={form.expire_year} onChange={set("expire_year")} />
                    </div>

                    <div className="mt-4 flex gap-2 justify-end">
                        <button
                            className="px-4 py-2 border border-gray-200 rounded"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-[#F57C00] text-white font-bold rounded disabled:opacity-50"
                            disabled={loading}
                            onClick={save}>
                            Save
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-6 flex justify-end">
                <button className="bg-gray-800 text-white font-bold px-6 py-3 rounded">
                    Ödeme Yap
                </button>
            </div>
        </div>
    );
}

function Input({label, value, onChange}) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input value={value} onChange={onChange} className="w-full border border-gray-200 rounded px-3 py-2" />
        </div>
    );
}

function maskCard(cardNo = "") {
    const s = String(cardNo).replace(/\s+/g, "");
    if (s.length < 8) return s;
    return `${s.slice(0,4)} **** **** ${s.slice(-4)}`;
}