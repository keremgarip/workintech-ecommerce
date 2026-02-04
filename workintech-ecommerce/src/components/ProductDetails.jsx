export default function ProductDetails() {
    return (
        <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Link to="/shop" className="text-[#23A6F0] hover:underline">
          ← Back to Shop
        </Link>

        <h1 className="text-3xl font-bold mt-4">Product Details</h1>
        <p className="text-gray-600 mt-2">Slug: {slug}</p>

        {slug === "ice-cream" ? (
          <div className="mt-8 flex gap-8">
            <img src="src/assets/ice-cream.png" alt="Ice Cream" className="w-72" />
            <div>
              <h2 className="text-2xl font-bold">Ice Cream</h2>
              <p className="text-gray-600 mt-2">Frozen Products</p>

              <div className="flex gap-3 mt-4">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-8 text-red-500">Product not found.</p>
        )}
      </div>
    </main>
    )
}