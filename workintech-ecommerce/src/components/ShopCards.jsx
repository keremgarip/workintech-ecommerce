export default function ShopCards() {
    return (
        <div className="flex justify-between px-2 py-20 gap-4">
            <div className="flex border border-[#ECECEC]">
                <div className="flex flex-col gap-2 justify-around">
                    <h6 className="font-normal text-sm">New Arrival</h6>
                    <h2 className="font-bold text-2xl">Ice Cream</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="src/assets/ice-cream.png" className="max-w-[200px]" alt="Ice Cream" />
                </div>
            </div>
            <div className="flex border border-[#ECECEC]">
                <div className="flex flex-col gap-2 justify-around">
                    <h6 className="font-normal text-sm">Ends Today</h6>
                    <h2 className="font-bold text-2xl">Apple</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="src/assets/apple.png" className="max-w-[200px]" alt="Apple" />
                </div>
            </div>
            <div className="flex border border-[#ECECEC]">
                <div className="flex flex-col gap-2 justify-around">
                    <h6 className="font-normal text-sm">Best Seller</h6>
                    <h2 className="font-bold text-2xl">Steak</h2>
                    <h6 className="font-normal text-xs">Explore Items</h6>
                </div>
                <div className="shopCardRight">
                    <img src="src/assets/steak.png" className="max-w-[200px]" alt="Steak" />
                </div>
            </div>
        </div>
    )
}