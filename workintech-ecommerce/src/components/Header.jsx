import { Link } from "react-router-dom";
import { ShoppingCart, Search, UserRound, Heart } from "lucide-react";

export default function Header() {
    return (
        <div className="w-full">
            <nav className="flex justify-between px-2 py-4 items-center">
                <h3 className="font-bold text-2xl">Bandage</h3>
                <ul className="list-none flex gap-4">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/shop" >Shop</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/blog" >Blog</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/pages" >Pages</Link></li>
                </ul>
                <ul className="flex gap-3.5 items-center">
                    <li className="flex gap-1">
                        <UserRound className="w-5 h-5" />
                        <a href="#">
                            Login / Register
                        </a>
                    </li>
                    <li><a href="#"><Search className="w-5 h-5" /></a></li>
                    <li className="flex gap-1.5">
                        <ShoppingCart className="w-5 h-5" />
                        <a href="#">
                            1
                        </a>
                    </li>
                    <li className="flex gap-1.5">
                        <Heart className="w-5 h-5" />
                        <a href="#">
                            1
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}