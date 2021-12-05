import Image from 'next/image';
import { useWindowSize } from 'react-use';
import getSmallCloudinary from '../util/getSmallCloudinary';
import AddToCart from './AddToCart';

function Product({ product }) {
  return (
    <div className="group relative flex flex-col w-[275px]">
      <div className="relative w-full min-h-[30rem] bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Image
          src={product.image.url}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="30% 50%"
          className="absolute inset-0 z-0"
          placeholder="blur"
          blurDataURL={getSmallCloudinary(product.image.url)}
        />
      </div>
      <div id="productInfo" className="mt-4 flex flex-col flex-1 gap-4">
        <div
          id="titleAndPrice"
          className="flex justify-between text-xl font-semibold tracking-widest"
        >
          <div id="title">{product.title}</div>
          <div id="price">${product.price}</div>
        </div>
        <div
          id="description"
          className="text-xl leading-[3rem] font-extralight  justify-self-start flex-1 h-full"
        >
          {product.description}
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default function Products({ products, selectedCategory }) {
  const { width } = useWindowSize();
  const weirdWidth = width > 950 && width < 1200;
  return (
    <div className="bg-white pb-10" style={{ minHeight: '300px' }}>
      <div
        id="productsContainer"
        className="max-w-full px-[10px] lg:px-[132px]"
      >
        <div
          className={`flex justify-center flex-wrap ${
            weirdWidth ? 'gap-x-32' : 'gap-x-16'
          } gap-y-16`}
        >
          {products.map((product) => {
            const categoriesArray = [];
            product.categories.map((category) => {
              categoriesArray.push(category.name);
            });

            if (selectedCategory === 'All') {
              return <Product key={product.id} product={product} />;
            }

            if (categoriesArray.includes(selectedCategory)) {
              return <Product key={product.id} product={product} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
