import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-[#252b42] w-full text-white">

            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10">
                <div className="space-y-2">
                    <h3 className="font-bold text-2xl">
                        New season drops weekly. Stay in style.
                    </h3>
                    <p className="text-white/80 max-w-2xl">
                        Discover the latest women’s & men’s fashion, trending essentials, and best deals.
                    </p>
                </div>

                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center py-[15px] px-10 bg-[#23A6F0] rounded-[5px] font-bold text-xs w-fit !text-white"
                >
                    Contact Us
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                <div className="flex flex-col gap-5">
                    <h5 className="text-base font-bold">Company</h5>
                    <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                        <li><Link className="hover:text-white" to="/about">About Us</Link></li>
                        <li><Link className="hover:text-white" to="/shop">Shop</Link></li>
                        <li><Link className="hover:text-white" to="/blog">Blog</Link></li>
                        <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h5 className="text-base font-bold">Help</h5>
                    <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                        <li><a className="hover:text-white" href="#">Shipping & Delivery</a></li>
                        <li><a className="hover:text-white" href="#">Returns & Refunds</a></li>
                        <li><a className="hover:text-white" href="#">Size Guide</a></li>
                        <li><a className="hover:text-white" href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h5 className="text-base font-bold">Account</h5>
                    <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                        <li><Link className="hover:text-white" to="/login">Login</Link></li>
                        <li><Link className="hover:text-white" to="/signup">Register</Link></li>
                        <li><Link className="hover:text-white" to="/orders">My Orders</Link></li>
                        <li><Link className="hover:text-white" to="/cart">Shopping Cart</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h5 className="text-base font-bold">Legal</h5>
                    <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                        <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-white" href="#">Terms of Service</a></li>
                        <li><a className="hover:text-white" href="#">Cookie Policy</a></li>
                        <li><a className="hover:text-white" href="#">Data Protection</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h5 className="text-base font-bold">Get In Touch</h5>
                    <div className="flex flex-col gap-3 text-sm text-white/80">
                        <div className="flex items-center gap-2.5">
                            <Phone className="w-5 h-5" />
                            <span>(480) 555-01-03</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <MapPin className="w-5 h-5" />
                            <span>4517 Washington Ave.</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Mail className="w-5 h-5" />
                            <span>kerem@kerem.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-[25px] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <h6 className="text-white/80 text-sm">
                        © {new Date().getFullYear()} Workintech Commerce. All rights reserved.
                    </h6>

                    <div className="flex gap-5">
                        <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}