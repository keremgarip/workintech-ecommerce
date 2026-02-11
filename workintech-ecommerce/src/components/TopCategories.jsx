import {useMemo} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import slugify from "../utils/slugify";

export default function TopCategories() {
    const categories = useSelector((s) => s.product.categories);

    const top5 = useMemo(() => {
        const copy = [...categories];
        copy.sort((a,b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
        return copy.slice(0,5);
    }, [categories]);

    return (
        <section className="max-w-5xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-bold mb-4">Top Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {top5.map((cat) => {
          const id = cat.id ?? cat.category_id ?? cat._id;
          const name = cat.title ?? cat.name ?? "category";
          const gender = (cat.gender || cat.group || "kadin").toLowerCase();
          const img = cat.img ?? cat.image ?? cat.image_url;

          return (
            <Link
              key={id}
              to={`/shop/${gender}/${slugify(name)}/${id}`}
              className="border border-[#ECECEC] rounded overflow-hidden hover:border-[#23A6F0]"
            >
              <div className="h-28 bg-gray-100">
                {img ? (
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-xs text-gray-500">rating: {cat.rating ?? 0}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
    );
}