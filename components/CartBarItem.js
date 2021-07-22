import Image from 'next/image';
import QuantitySelector from './QuantitySelector';
import CartBarItemStyles from './styles/CartBarItemStyles';

export default function CartBarItem({ product, index, cartHover }) {
  return (
    <CartBarItemStyles index={index} cartHover={cartHover}>
      <div className="pictureWrapper picture">
        <Image
          src={product.image.url}
          alt="Picture of the author"
          height="100%"
          width="100%"
          layout="responsive"
        />
      </div>
      <QuantitySelector product={product} />

      <div className="title rhs">{product.title}</div>
      <div className="price rhs">
        <div className="times">&#xd7;</div>
        <div className="value">
          <b>₹</b> {product.price}
        </div>
      </div>
    </CartBarItemStyles>
  );
}
