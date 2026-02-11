import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "../utils/slugify";

export default function CategoriesList() {
    const categories = useSelector((s) => s.product.categories);

    return (
        <section className="max-w-5xl mx-auto px-4 mt-10">
            <h2 className="text-xl font-bold mb-4">Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => {
                    const id = cat.id ?? cat.category_id ?? cat._id;
                    const name = cat.title ?? cat.name ?? "category";
                    const gender = (cat.gender || cat.group || "gida").toLowerCase();

                    return (
                        <Link
                        key={id}
                        to={`/shop/${gender}/${slugify(name)}/${id}`}
                        className="border border-[#ECECEC] rounded p-4 hover:border-[#23A6F0]"
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}