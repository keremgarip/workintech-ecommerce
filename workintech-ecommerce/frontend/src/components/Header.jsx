import { Link, useHistory } from "react-router-dom";
import { headerMenus } from "../data/home.data";
import { ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { setUser } from "../actions/clientActions";
import { setAuthToken } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesIfNeeded } from "../actions/productThunks";
import { getCart } from "../api/cartApi";

export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));

    useEffect(() => {
        const syncUser = () => {
            setUserEmail(localStorage.getItem("email"));
        };

        syncUser();

        window.addEventListener("userLoggedIn", syncUser);
        window.addEventListener("storage", syncUser);

        return () => {
            window.removeEventListener("userLoggedIn", syncUser);
            window.removeEventListener("storage", syncUser);
        };
    }, []);

    const loadCartCount = async () => {
        try {
            const userId = Number(localStorage.getItem("userId"));

            if (!userId) {
                setCartCount(0);
                return;
            }

            const cart = await getCart(userId);
            const count = cart?.items?.reduce(
                (sum, item) => sum + Number(item.quantity || 0),
                0
            ) || 0;

            setCartCount(count);
        } catch (error) {
            console.error("Cart count error:", error);
            setCartCount(0);
        }
    };

    useEffect(() => {
        loadCartCount();

        const handleCartUpdated = () => {
            loadCartCount();
        };

        window.addEventListener("cartUpdated", handleCartUpdated);
        window.addEventListener("userLoggedIn", handleCartUpdated);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdated);
            window.removeEventListener("userLoggedIn", handleCartUpdated);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchCategoriesIfNeeded());
    }, [dispatch]);

    const logout = () => {
        localStorage.clear();
        setAuthToken(null);
        dispatch(setUser(null));
        setUserEmail(null);
        setCartCount(0);
        setOpen(false);
        window.dispatchEvent(new Event("userLoggedIn"));
        window.dispatchEvent(new Event("cartUpdated"));
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
                        {userEmail ? (
        <>
            <button
                type="button"
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-haspopup="menu"
            >
                <UserRound className="w-5 h-5" />
                <span className="font-bold">{userEmail}</span>
            </button>

            {open && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50"
                    role="menu"
                >
                    <Link
                        to="/previous-orders"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        Previous Orders
                    </Link>

                    <button
                        type="button"
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </>
    ) : (
        <div className="flex gap-2 items-center">
            <UserRound className="w-5 h-5" />

            <Link
                to="/login"
                className="hover:text-[#23A6F0]"
            >
                Login
            </Link>

            <span className="text-gray-400">/</span>

            <Link
                to="/signup"
                className="hover:text-[#23A6F0]"
            >
                Register
            </Link>
        </div>
    )}
                    </li>

                    <li className="flex gap-1 items-center">
                        <Link to="/cart" className="flex gap-1 items-center">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-sm font-semibold">{cartCount}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}