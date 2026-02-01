import React from "react";
import { Link } from "react-router-dom";

export default function Shop() {
    return (
        <main className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-end justify-between mb-6">
                    <h1 className="text-3xl font-bold">Shop</h1>
                    <p className="text-sm text-[#737373]">Showing 1-12 of 200 results</p>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    <aside className="col-span-3">
                        <div className="border rounded-lg p-4">
                            <h2 className="font-semibold mb-3">Filters</h2>
                            <p className="text-sm text-gray-500">Filter area(later)</p>
                        </div>
                    </aside>
                    <section className="col-span-9">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="border rounded-lg p-4">Product Card</div>
                            <div className="border rounded-lg p-4">Product Card</div>
                            <div className="border rounded-lg p-4">Product Card</div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}