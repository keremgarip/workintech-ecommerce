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
            <section className="carousel" style={{ backgroundImage: "url('src/assets/pizza-with-berries.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '640px' }}>
                <div className="h-full py-10 flex flex-col gap-6 justify-center items-center text-white">
                    <h1 className="font-bold text-[58px]">GROCERIES DELIVERY</h1>
                    <h4 className="text-xl">Fast and reliable delivery to your doorstep.</h4>
                    <h3 className="font-bold text-2xl bg-[#23A6F0] rounded-[5px] px-10 py-[15px] w-50 h-16 text-white">Start Now</h3>
                </div>
            </section>
        </div>
    )
}