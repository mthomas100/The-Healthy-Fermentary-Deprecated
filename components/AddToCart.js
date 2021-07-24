import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { Button, FormHelperText } from '@material-ui/core';
import { useState } from 'react';
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

export default function AddToCart({ product }) {
  const classes = useStyles();
  const { modifyCartQuantity, openCart } = useCart();
  const [selectValue, setSelectValue] = useState(1);

  function handleQuantityChange(e) {
    setSelectValue(e.target.value);
  }

  function handleAddToCart() {
    modifyCartQuantity(product, selectValue); // TODO: Needs to add X to whats already there
    openCart();
  }

  return (
    <QuantitySelectorStyles>
      <div className="quantity">
        <FormControl
          className={`${classes.formControl}`}
          variant="outlined"
          size="small"
        >
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            defaultValue="something"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            className={classes.selectEmpty}
            displayEmpty
          >
            {quantityArrMap.map((_, i) => {
              if (i > 0) return <MenuItem value={i}>{i}</MenuItem>;
            })}
          </Select>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </FormControl>
      </div>
    </QuantitySelectorStyles>
  );
}
