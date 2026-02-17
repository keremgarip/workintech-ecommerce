import { Link, useHistory } from "react-router-dom";
import { headerMenus } from "../data/home.data";
import { ShoppingCart, Search, UserRound, Heart, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { setUser } from "../actions/clientActions";
import { setAuthToken } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesIfNeeded } from "../actions/productThunks";
import CategoriesDropdown from "./CategoriesDropdown";

export default function Header() {
    const user = useSelector((s) => s.client.user);
    const cart = useSelector((s) => s.shoppingCart.cart || []);
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const categories = useSelector((s) => s.product.categories);

    const [shopOpen, setShopOpen] = useState(false);
    useEffect(() => {
        dispatch(fetchCategoriesIfNeeded());
    }, [dispatch]);

    const logout = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
        dispatch(setUser(null));
        history.push("/");
    };

    return (
        <div className="w-full">
            <nav className="flex justify-evenly px-2 py-4 items-center">
                <h3 className="font-bold text-2xl">Bandage</h3>
                <ul className="list-none flex gap-4">
                    {headerMenus.map((menu) => {
                        if (menu.label !== "Shop") {
                            return (
                                <li key={menu.path}>
                                    <Link to={menu.path}>{menu.label}</Link>
                                </li>
                            );
                        }
                        return (
                            <li
                                key={menu.path}
                                className="relative"
                                onMouseEnter={() => setShopOpen(true)}
                                onMouseLeave={() => setShopOpen(false)}
                            >
                                <Link to={menu.path} className="inline-flex items-center gap-1">
                                    {menu.label}
                                </Link>

                            </li>
                        );
                    })}
                </ul>
                <ul className="flex gap-4 items-center relative">

                    <li className="relative">
                        <div
                            className="flex gap-1 items-center cursor-pointer"
                            onClick={() => setOpen((p) => !p)}
                        >
                            <UserRound className="w-5 h-5" />

                            {user ? (
                                <span className="text-sm font-semibold">
                                    {user.name || user.email}
                                </span>
                            ) : (
                                <Link to="/login" className="text-sm font-semibold">
                                    Login / Register
                                </Link>
                            )}
                        </div>

                        {user && open && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                                <Link
                                    to="/previous-orders"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    Previous Orders
                                </Link>

                                <button
                                    onClick={logout}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </li>
                    <li className="flex gap-1 items-center">
                        <Link to="/cart" className="flex gap-1 items-center">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-sm font-semibold">
                                {cart.reduce((sum, item) => sum + item.count, 0)}
                            </span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}