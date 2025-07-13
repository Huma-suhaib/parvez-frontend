import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart, backendUrl } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.post(`${backendUrl}/api/product/single`, { productId });
        if (res.data.success) {
          setProduct(res.data.product);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart(product._id, selectedSize);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 p-10">
      {/* Left: Image section */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {product.image.map((img, index) => (
            <img key={index} src={img} alt={`thumb-${index}`} className="w-20 h-20 object-cover" />
          ))}
        </div>
        <div>
          <img src={product.image[0]} alt="main" className="w-[400px] h-auto rounded-lg" />
        </div>
      </div>

      {/* Right: Product info */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500">★★★★★</span>
          <span>({product.reviews || 0})</span>
        </div>
        <p className="text-xl font-semibold mb-4">₹{product.price}</p>

        {/* Size selector */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 mt-4 rounded hover:opacity-90"
        >
          ADD TO CART
        </button>

        <p className="mt-4 text-sm text-gray-600">
          100% Original product. <br />
          Easy return and exchange policy within 7 days.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;