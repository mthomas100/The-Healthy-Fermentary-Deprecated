import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { useCart } from '../../lib/cartState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '1.75rem 0',
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: '0',
    textAlign: 'center',
  },
}));

const quantityArrMap = Array.from(Array(10).keys());

const QuantitySelectorStyles = styled.div`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;

  .inputLabelWrapper {
    position: relative;
  }

  .inputLabel {
    position: relative;
    bottom: 4px;
    margin: 0 auto;

    font-family: 'Nunito';
  }

  .inputLabelProduct {
    position: relative;
    bottom: 5px;
    left: 1px;
  }
`;

export default function QuantitySelector({ product, componentOrigin }) {
  const classes = useStyles();
  const { modifyCartQuantity, removeFromCart, openCart } = useCart();

  function modifyQuantityHandler(e) {
    const selectedValue = e.target.value;
    if (selectedValue === 0) {
      return removeFromCart(product.id);
    }
    modifyCartQuantity(product, selectedValue);
  }

  return (
    <QuantitySelectorStyles>
      {/* <div className="quantity"> */}
      <FormControl
        className={`${classes.formControl}`}
        variant="outlined"
        size="small"
      >
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={product.quantity}
          onChange={modifyQuantityHandler}
          className={classes.selectEmpty}
          displayEmpty
        >
          {quantityArrMap.map((_, i) => {
            if (i === 0)
              return (
                <MenuItem key={uuid()} value={i}>
                  {i} (remove){' '}
                </MenuItem>
              );
            return (
              <MenuItem key={uuid()} value={i}>
                {i}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* </div> */}
    </QuantitySelectorStyles>
  );
}
