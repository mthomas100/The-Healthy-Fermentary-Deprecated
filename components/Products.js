import styled from 'styled-components';
import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import Product from './Product';
import { useCart } from '../lib/cartState';
import AddToCart from './AddToCart';

export default function Products({ products, selectedCategory }) {
  const { setCartIsHovering } = useCart();
  const [contentSizeArray, setContentSizeArray] = useState([]);
  const [maxContentHeight, setMaxContentHeight] = useState(undefined);

  useLayoutEffect(() => {
    setMaxContentHeight(Math.max(...contentSizeArray));
  }, [contentSizeArray, maxContentHeight]);

  return (
    <div className="bg-white px-4 xs:px-8 md:px-12">
      <div className="max-w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mt-2 grid gap-y-12 gap-x-4 grid-cols-1 xs:grid-cols-2 xs:gap-x-8 md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 lg:gap-x-20">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative w-full min-h-[30rem] bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image
                  src={product.image.url}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="30% 50%"
                  className="absolute inset-0 z-0"
                />
              </div>
              <div className="mt-4 flex flex-col py-2">
                <div
                  id="titleAndPrice"
                  className="flex justify-between text-xl mb-4"
                >
                  <div id="title">{product.title}</div>
                  <div id="price">${product.price}</div>
                </div>
                <div
                  id="description"
                  className="text-lg leading-[3rem] font-extralight"
                >
                  {product.description}
                </div>
                <AddToCart product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* MAKE SITE CATEGORIES MORE PLEASING */
/* MAKE SOME CART STATE ALWAYS BE OPEN */
