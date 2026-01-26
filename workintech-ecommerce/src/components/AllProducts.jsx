export default function AllProducts() {
    return (
    <div className="bg-[#FAFAFA] px-2 py-12">
        <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
        <div className="flex gap-[30px]">
            <div className="justify-items-center">
                <img src="" alt="Carafe"/>
                <h5 className="font-bold text-base">Carafe</h5>
                <a href="#" className="text-sm">Kitchen Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="" alt="Cheese Tray"/>
                <h5 className="font-bold text-base">Cheese Tray</h5>
                <a href="#" className="text-sm">Kitchen Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="" alt="Bleach"/>
                <h5 className="font-bold text-base">Bleach</h5>
                <a href="#" className="text-sm">Cleaning Department</a>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
            </div>
            <div className="justify-items-center">
                <img src="" alt="Caramel Candies"/>
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