import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '1.75rem 0',
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: '0',
    textAlign: 'center',
  },
  inputLabel: {
    width: '100%',
    fontSize: '1.3rem',
    position: 'relative',
  },
}));

const CartItemStyles = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;

  .MuiSelect-icon {
    top: unset !important;
  }

  .picture {
    grid-area: 1 / 1 / 2 / 2;
  }
  .quantity {
    grid-area: 2 / 1 / 3 / 2;
  }

  .title {
    grid-area: 1 / 2 / 2 / 3;
    align-self: center;
    font-family: 'Nunito';
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  .price {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0.5rem;
    font-size: 1.3rem;
    font-family: 'Nunito';
    width: auto;

    .times {
    }

    .value {
      margin-left: 2rem;
      font-weight: 400;
      white-space: nowrap;
    }
  }

  .rhs {
    margin-left: 2rem;
  }
`;

const quantityArrMap = Array.from(Array(10).keys());

export default function CartItem({ product }) {
  const classes = useStyles();
  const { modifyCartQuantity, removeFromCart, cartItemTotal } = useCart();

  function modifyQuantityHandler(e) {
    const selectedValue = e.target.value;
    const { id } = product;
    if (selectedValue === 0) {
      return removeFromCart(id);
    }
    modifyCartQuantity(id, selectedValue);
  }

  return (
    <CartItemStyles>
      <div className="pictureWrapper picture">
        <Image
          src={product.image.url}
          alt="Picture of the author"
          width="100%"
          height="auto"
          layout="responsive"
        />
      </div>
      <div className="quantityWrappper quantity">
        <FormControl
          className={`${classes.formControl}`}
          variant="outlined"
          size="small"
        >
          <InputLabel
            shrink
            id="demo-simple-select-placeholder-label-label"
            className={classes.inputLabel}
          >
            Quantity
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={product.quantity}
            onChange={modifyQuantityHandler}
            displayEmpty
            className={classes.selectEmpty}
          >
            {quantityArrMap.map((_, i) => (
              <MenuItem value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {cartItemTotal > 0 && (
        <>
          <div className="title rhs">{product.title}</div>
          <div className="price rhs">
            <div className="times">&#xd7;</div>
            <div className="value">
              <b>₹</b> {product.price}
            </div>
          </div>
        </>
      )}
    </CartItemStyles>
  );
}
