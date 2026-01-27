export default function AllProducts() {
    return (
    <div className="bg-[#FAFAFA] px-2 py-12">
        <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
        <div className="flex gap-[30px] justify-center">
            <div className="justify-items-center">
                <img src="src\assets\carafe.png" alt="Carafe" className="max-h-64 max-w-[240px]"/>
                <h5 className="font-bold text-base">Carafe</h5>
                <a href="#" className="text-sm">Kitchen Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="src\assets\cheese-tray.png" alt="Cheese Tray" className="max-h-64 max-w-[240px]"/>
                <h5 className="font-bold text-base">Cheese Tray</h5>
                <a href="#" className="text-sm">Kitchen Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="src\assets\bleach.png" alt="Bleach" className="max-h-64 max-w-[240px]"/>
                <h5 className="font-bold text-base">Bleach</h5>
                <a href="#" className="text-sm">Cleaning Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="src\assets\caramel-candy.png" alt="Caramel Candies" className="max-h-64 max-w-[240px]"/>
                <h5 className="font-bold text-base">Caramel Candies</h5>
                <a href="#" className="text-sm">Grocery Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
        </div>
    </div>
    )
}