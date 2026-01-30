import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerMenus, heroSlides } from "../data/home.data";
import { ShoppingCart, Search, UserRound, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % heroSlides.length);
    const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);

    useEffect(() => {
        const id = setInterval(next, 4000);
        return () => clearInterval(id);
    }, []);

    const active = heroSlides[index];

    return (
        <div className="w-full">
            <nav className="flex justify-evenly px-2 py-4 items-center">
                <h3 className="font-bold text-2xl">Bandage</h3>
                <ul className="list-none flex gap-4">
                    {headerMenus.map((menu) => (
                        <li key={menu.path}>
                            <Link to={menu.path}>
                                {menu.label}
                            </Link>
                        </li>
                    ))}
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
            <section className="relative w-full h-[640px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${active.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '640px' }}>
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative h-full py-10 flex flex-col gap-6 justify-center items-center text-white text-center px-4">
                    <div key={active.id} className="animate-[fadeIn_.5s_ease-out]">
                        <h1 className="font-bold text-[42px] md:text-[58px]">{active.title}</h1>
                        <h4 className="text-xl">{active.subtitle}</h4>

                        <Link
                            to={active.ctaLink}
                            className="inline-flex items-center justify-center font-bold text-xl bg-[#23A6F0] rounded-[5px] px-10 py-[15px] mt-2"
                        >
                            {active.cta}
                        </Link>
                    </div>
                </div>
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroSlides.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => setIndex(i)}
                            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <style>
                    {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
                </style>
            </section>
        </div>
    )
}