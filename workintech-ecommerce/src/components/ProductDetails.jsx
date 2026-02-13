import { ChevronRight, Star, Heart, ShoppingBasket, Eye, ChevronDown } from "lucide-react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../actions/productThunks";
import { FETCHING } from "../reducers/productReducer";

import { relatedProducts } from "../data/home.data"

function Spinner() {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-transparent" />
    </div>
  );
}

export default function ProductDetails(props) {
  const dispatch = useDispatch();
  const { productId, gender, categoryName, categoryId } = props.match.params;

  const product = useSelector((s) => s.product.selectedProduct);
  const fetchState = useSelector((s) => s.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (fetchState === FETCHING || !product) return <Spinner />;

  const mainImg = product.images?.[0]?.url;

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="py-6 px-5 bg-[#FAFAFA]">
          <div className="flex gap-[15px] py-2.5">
            <a href="/">Home</a>
            <ChevronRight />
            <a href="/shop">Shop</a>
          </div>
        </div>
        <div className="flex gap-7.5">
          <div className="pb-12 flex flex-col gap-6">
            <img src="src\assets\pillow.jpg" alt="Pillow" className="h-[450px]" />
            <div className="flex gap-5">
              <img src="src\assets\sofa.jpg" alt="" className="h-[100px]" />
              <img src="src\assets\sofa.jpg" alt="" className="h-[100px]" />
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3">
            <h4 className="text-xl font-semibold">Pillow</h4>
            <div className="flex gap-3">
              <div className="flex gap-[5px]">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h6 className="font-bold">10 Reviews</h6>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <h5 className="font-bold text-2xl">$1,139.33</h5>
              <div className="flex gap-1 font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className="text-[#23A6F0]">In Stock</span>
              </div>
            </div>
            <p>Paragraph</p>
            <div className="flex gap-2.5 items-center">
              <button>Select Options</button>
              <div className="p-2 border border-[#ECECEC] rounded-full cursor-pointer">
                <Heart className="w-5 h-5 text-gray-700" />
              </div>
              <div
                className="p-2 border border-[#ECECEC] rounded-full cursor-pointer"
                onClick={() => dispatch(addToCart(product))}
                title="Add to cart"
              >
                <ShoppingBasket className="w-5 h-5 text-gray-700" />
              </div>
              <div className="p-2 border border-[#ECECEC] rounded-full cursor-pointer">
                <Eye className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center gap-20 font-semibold border-b border-[#ECECEC] py-5">
            <h6>Description</h6>
            <h6>Additional Infotmation</h6>
            <h6>Reviews (0)</h6>
          </div>
          <div className="flex gap-70 justify-between mt-4">
            <div>
              <img src="src\assets\salad.jpg" alt="" className="w-[316px] h-[372px]" />
            </div>
            <div className="pb-[25px] flex flex-col gap-7.5">
              <h3 className="font-bold text-2xl">Benefit Title</h3>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Product Features</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 1
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 2
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 3
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 4
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-3">
                <h3 className="text-2xl font-bold">Product Features</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 1
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 2
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 3
                  </div>
                  <div className="flex gap-5">
                    <ChevronDown />
                    Feature 4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] py-12">
          <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
          <div className="grid grid-cols-4 text-center mt-5">
            {relatedProducts.map((product) => (
              <div key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-[280px]"
                />

                <div className="px-[25px] pt-[25px] pb-[35px] text-center">
                  <h5 className="font-bold">{product.name}</h5>

                  <a href="#" className="text-sm text-gray-500">
                    {product.category}
                  </a>

                  <div className="flex gap-[5px] justify-center">
                    <h5 className="text-[#BDBDBD] font-bold">
                      ${product.oldPrice.toFixed(2)}
                    </h5>
                    <h5 className="text-[#23856D] font-bold">
                      ${product.price.toFixed(2)}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 py-[50px] flex gap-30 flex items-center justify-center">
          <div className="clients-item">
            <img src="src\assets\hooli.png" alt="Hooli" className="max-w-40" />
          </div>
          <div className="clients-item">
            <img src="src\assets\lyft.png" alt="Lyft" className="max-w-40 max-h-15" />
          </div>
          <div className="clients-item">
            <img src="src\assets\meta.png" alt="Meta" className="max-w-40 max-h-18" />
          </div>
          <div className="clients-item">
            <img src="src\assets\stripe.png" alt="Stripe" className="max-w-40 max-h-13" />
          </div>
          <div className="clients-item">
            <img src="src\assets\aws.png" alt="Amazon Web Services" className="max-w-40 max-h-15" />
          </div>
          <div className="clients-item">
            <img src="src\assets\reddit.png" alt="Reddit" className="max-w-40 max-h-18" />
          </div>
        </div>
      </div>
    </div>
  )
}