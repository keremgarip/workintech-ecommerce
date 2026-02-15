import { useMemo } from "react";
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

export default function TopCategories() {
  const categories = useSelector((s) => s.product.categories) || [];

  const top5 = useMemo(() => {
    const copy = [...categories];
    copy.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
    return copy.slice(0, 5);
  }, [categories]);

  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-bold mb-4">Top Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {top5.map((cat) => {
          const id = cat.id ?? cat.category_id ?? cat._id;

          const rawName = cat.title ?? cat.name ?? "category";
          const displayName = categoryLabel(rawName);

          const dept = departmentFromCategory(cat);

          const img = cat.img ?? cat.image ?? cat.image_url;

          return (
            <Link
              key={id}
              to={`/shop/${dept}/${slugify(displayName)}/${id}`}
              className="border border-[#ECECEC] rounded overflow-hidden hover:border-[#23A6F0]"
            >
              <div className="h-28 bg-gray-100">
                {img ? (
                  <img src={img} alt={displayName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-3">
                <div className="font-semibold text-sm">{displayName}</div>
                <div className="text-xs text-gray-500">rating: {cat.rating ?? 0}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
