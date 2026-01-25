export default function ShopCards() {
    return (
        <div className="flex justify-between px-2 py-4 gap-4">
            <div className="flex border border-[#ECECEC]">
                <div className="gap-2">
                    <h6 className="font-normal text-sm">New Arrival</h6>
                    <h2 className="font-bold text-2xl">Ice Cream</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="" alt="Ice Cream" />
                </div>
            </div>
            <div className="flex border border-[#ECECEC]">
                <div className="gap-2">
                    <h6 className="font-normal text-sm">Ends Today</h6>
                    <h2 className="font-bold text-2xl">Apple</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="" alt="Apple" />
                </div>
            </div>
            <div className="flex border border-[#ECECEC]">
                <div className="gap-2">
                    <h6 className="font-normal text-sm">Best Seller</h6>
                    <h2 className="font-bold text-2xl">Steak</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="" alt="Steak" />
                </div>
            </div>
        </div>
    )
}