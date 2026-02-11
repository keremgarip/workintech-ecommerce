import {useMemo} from "react";
import {Link} from "react-router-dom";
import slugify from "../utils/slugify";

function getGenderKey(cat) {
    return (cat.gender || cat.group || "gida").toLowerCase();
}

function groupLabel(key) {
    const map = {
        gida: "Gıda",
        temizlik: "Temizlik",
        icecek: "İçecek",
        atistirmalik: "Atıştırmalık",
    };
    return map[key] || key;
}

export default function CategoriesDropdown({categories = []}) {
    const grouped = useMemo(() => {
    const g = {};
    for (const c of categories) {
      const k = getGenderKey(c);
      if (!g[k]) g[k] = [];
      g[k].push(c);
    }
    Object.keys(g).forEach((k) => {
      g[k].sort((a, b) => String(a.title || a.name).localeCompare(String(b.title || b.name)));
    });
    return g;
  }, [categories]);

  const keys = Object.keys(grouped);

  return (
    <div className="absolute left-0 top-full mt-2 w-[520px] bg-white border border-gray-200 rounded shadow-lg p-6 z-50">
      <div className="grid grid-cols-2 gap-8">
        {keys.slice(0, 2).map((k) => (
          <div key={k}>
            <h4 className="font-bold mb-3">{groupLabel(k)}</h4>
            <ul className="space-y-2">
              {grouped[k].map((cat) => {
                const id = cat.id ?? cat.category_id ?? cat._id;
                const name = cat.title ?? cat.name ?? "category";
                return (
                  <li key={id}>
                    <Link
                      className="text-gray-700 hover:text-[#23A6F0]"
                      to={`/shop/${k}/${slugify(name)}/${id}`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}