import {Calendar, MessageCircleMore, ChevronRight} from "lucide-react";

export default function Blog() {
    return (
        <div className="px-2 py-28">
            <h6 className="font-bold text-sm text-[#23A6F0] text-center">Practice Advice</h6>
            <h2 className="font-bold text-[40px] text-center">Featured Posts</h2>
            <div className="flex gap-[30px]">
                <div className="blog-item">
                    <img src="" alt="Blog Post 1" />
                    <div className="px-[25px] pt-[25px] pb-[35px]">
                        <ul className="flex gap-[15px] text-xs">
                            <li>Google</li>
                            <li>Trend</li>
                            <li>New</li>
                        </ul>
                        <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                        <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                        <div className="flex text-xs py-[15px] justify-between">
                            <div className="flex">
                                <Calendar className="w-4 h-4" />
                                <span>22 April 2024</span>
                            </div>
                            <div className="flex">
                                <MessageCircleMore className="w-4 h-4" />
                                <span>10 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-2.5">
                            <a href="#">Read More</a>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
                <div className="blog-item">
                    <img src="" alt="Blog Post 2" />
                    <div className="px-[25px] pt-[25px] pb-[35px]">
                        <ul className="flex gap-[15px] text-xs">
                            <li>Google</li>
                            <li>Trend</li>
                            <li>New</li>
                        </ul>
                        <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                        <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                        <div className="flex text-xs py-[15px] justify-between">
                            <div className="flex">
                                <Calendar className="w-4 h-4" />
                                <span>22 April 2024</span>
                            </div>
                            <div className="flex">
                                <MessageCircleMore className="w-4 h-4" />
                                <span>10 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-2.5">
                            <a href="#">Read More</a>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
                <div className="blog-item">
                    <img src="" alt="Blog Post 3" />
                    <div className="px-[25px] pt-[25px] pb-[35px]">
                        <ul className="flex gap-[15px] text-xs">
                            <li>Google</li>
                            <li>Trend</li>
                            <li>New</li>
                        </ul>
                        <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                        <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                        <div className="flex text-xs py-[15px] justify-between">
                            <div className="flex">
                                <Calendar className="w-4 h-4" />
                                <span>22 April 2024</span>
                            </div>
                            <div className="flex">
                                <MessageCircleMore className="w-4 h-4" />
                                <span>10 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-2.5">
                            <a href="#">Read More</a>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}