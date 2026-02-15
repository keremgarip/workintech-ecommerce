import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "../utils/slugify";

const CATEGORY_LABEL_MAP = {
    kadin: "Meyve & Sebze",
    erkek: "Et, Tavuk & Balık",
    cocuk: "Süt & Kahvaltılık",
    ev: "Temizlik",
    kozmetik: "Kişisel Bakım",
    ayakkabi: "Atıştırmalık",
    aksesuar: "İçecekler",
};

const categoryLabel = (rawName) => {
    const key = String(rawName || "").toLowerCase().trim();
    return CATEGORY_LABEL_MAP[key] || rawName || "Category";
};

const departmentFromCategory = (cat) => {
    const raw = String(cat.gender || cat.group || cat.department || "").toLowerCase();

    if (!raw) return "market";

    if (raw.includes("fresh") || raw.includes("taze")) return "fresh";
    if (raw.includes("house") || raw.includes("temiz") || raw.includes("ev")) return "household";
    if (raw.includes("care") || raw.includes("bakim") || raw.includes("kozmetik")) return "personal-care";

    if (raw === "gida") return "market";

    return "market";
};

export default function CategoriesList() {
    const categories = useSelector((s) => s.product.categories) || [];

    return (
        <section className="max-w-5xl mx-auto px-4 mt-10">
            <h2 className="text-xl font-bold mb-4">Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => {
                    const id = cat.id ?? cat.category_id ?? cat._id;
                    const rawName = cat.title ?? cat.name ?? "category";

                    const displayName = categoryLabel(rawName);
                    const dept = departmentFromCategory(cat);

                    return (
                        <Link
                            key={id}
                            to={`/shop/${dept}/${slugify(displayName)}/${id}`}
                            className="border border-[#ECECEC] rounded p-4 hover:border-[#23A6F0]"
                        >
                            {displayName}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}