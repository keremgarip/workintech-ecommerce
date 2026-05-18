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
    const userId = Number(localStorage.getItem("userId"));
    const [cartCount, setCartCount] = useState(0);
    const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));

    useEffect(() => {
        const syncUser = () => {
            setUserEmail(localStorage.getItem("email"));
        };

        window.addEventListener("storage", syncUser);
        window.addEventListener("userLoggedIn", syncUser);

        return () => {
            window.removeEventListener("storage", syncUser);
            window.removeEventListener("userLoggedIn", syncUser);
        };
    }, []);

    const loadCartCount = async () => {
        try {
            const cart = await getCart(userId);

            const count =
                cart?.items?.reduce((sum, item) => sum + Number(item.quantity || 0), 0) || 0;

            setCartCount(count);
        } catch (error) {
            console.error("Cart count error:", error);
        }
    };

    useEffect(() => {
        loadCartCount();

        const handleCartUpdated = () => {
            loadCartCount();
        };

        window.addEventListener("cartUpdated", handleCartUpdated);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdated);
        };
    }, []);

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

                            {userEmail ? (
                                <span className="font-bold">{userEmail}</span>
                            ) : (
                                <Link to="/login">Login / Register</Link>
                            )}
                        </div>

                        {userEmail && open && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                                <Link
                                    to="/previous-orders"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    Previous Orders
                                </Link>

                                {userEmail && (
                                    <button
                                        onClick={() => {
                                            localStorage.clear();
                                            setUserEmail(null);
                                            window.dispatchEvent(new Event("cartUpdated"));
                                        }}
                                        className="ml-3 text-red-500"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        )}
                    </li>
                    <li className="flex gap-1 items-center">
                        <Link to="/cart" className="flex gap-1 items-center">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-sm font-semibold">
                                {cartCount}
                            </span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}