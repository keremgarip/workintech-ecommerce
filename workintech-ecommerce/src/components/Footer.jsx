import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <div className="bg-[#252b42] text-white px-48">
            <div className="py-10 flex gap-80">
                <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-2xl">Consulting Agency For Your Business</h3>
                <p>We provide expert business consulting services to help you achieve your goals and drive growth.</p>
                </div>
                    <h3 className="py-[15px] px-10 bg-[#23A6F0] rounded-[5px] w-40 h-13 font-bold text-xs">Contact Us</h3>
            </div>
            <div className="flex py-[50px] gap-[80px] font-bold">
                <div className="flex flex-col gap-5">
                    <h5 className="text-base">Company Info</h5>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-base">Legal</h5>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Data Protection</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-base">Features</h5>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li><a href="#">Business Marketing</a></li>
                        <li><a href="#">User Analytic</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Unlimited Support</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-base">Resources</h5>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">API Status</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h5>Get In Touch</h5>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-2.5">
                            <Phone/>
                            <span>(480) 555-01-03</span>
                        </div>
                        <div className="flex gap-2.5">
                            <MapPin/>
                            <span>4517 Washington Ave.</span>
                        </div>
                        <div className="flex gap-2.5">
                            <Mail/>
                            <span>kerem@kerem.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex py-[25px] gap-52">
                <h6>&copy; 2023 Your Company Name. All rights reserved.</h6>
                <div className="flex gap-5">
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </div>
        </div>
    )
}