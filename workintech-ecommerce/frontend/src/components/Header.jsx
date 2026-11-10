import { Link, useHistory } from "react-router-dom";
import { headerMenus } from "../data/home.data";
import { useEffect, useState } from "react";
import { setUser } from "../actions/clientActions";
import { setAuthToken } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesIfNeeded } from "../actions/productThunks";
import { getCart } from "../api/cartApi";
import { ShoppingCart, UserRound, Menu, X } from "lucide-react";

export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));

    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinkClass = "text-[#252B42] hover:text-[#23A6F0] transition";

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
    }, [userEmail]);

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
        <header className="w-full bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="font-bold text-2xl text-[#252B42]"
                    >
                        Bandage
                    </Link>

                    <ul className="hidden md:flex list-none gap-6 items-center">
                        {headerMenus.map((menu) => (
                            <li key={menu.path}>
                                <Link to={menu.path} className={`inline-flex items-center gap-1 ${navLinkClass}`}>
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex gap-4 items-center">
                        <div className="relative">
                            {userEmail ? (
                                <>
                                    <button
                                        type="button"
                                        className="flex gap-2 items-center bg-transparent !text-[#252B42]"
                                        onClick={() => setOpen((prev) => !prev)}
                                    >
                                        <UserRound className="w-5 h-5" />
                                        <span className="font-bold text-[#252B42]">
                                            {userEmail}
                                        </span>
                                    </button>

                                    {open && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
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
                                                className="block w-full text-left px-4 py-2 text-sm !text-red-500 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex gap-2 items-center">
                                    <UserRound className="w-5 h-5" />

                                    <Link to="/login" className={navLinkClass}>
                                        Login
                                    </Link>

                                    <span className="text-gray-400">/</span>

                                    <Link to="/signup" className={navLinkClass}>
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/cart"
                            className="flex gap-1 items-center"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-sm font-semibold">
                                {cartCount}
                            </span>
                        </Link>
                    </div>

                    {/* Mobile buttons */}
                    <div className="flex md:hidden items-center gap-3">
                        {userEmail && (
                            <li className="flex gap-1 items-center">
                                <Link to="/cart" className="flex gap-1 items-center">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="text-sm font-semibold">
                                        {cartCount}
                                    </span>
                                </Link>
                            </li>
                        )}

                        <button
                            type="button"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="bg-white !text-[#252B42] p-1"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="md:hidden pt-5 pb-3 border-t mt-4">
                        <div className="flex flex-col gap-4">
                            {headerMenus.map((menu) => (
                                <Link
                                    key={menu.path}
                                    to={menu.path}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {menu.label}
                                </Link>
                            ))}

                            <div className="border-t pt-4">
                                {userEmail ? (
                                    <>
                                        <p className="font-bold break-all">
                                            {userEmail}
                                        </p>

                                        <Link
                                            to="/previous-orders"
                                            className="block mt-3"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Previous Orders
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={logout}
                                            className="mt-3 bg-white !text-red-500"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex gap-3">
                                        <Link to="/login">
                                            Login
                                        </Link>

                                        <span>/</span>

                                        <Link to="/signup">
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}