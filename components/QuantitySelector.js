import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

const quantityArrMap = Array.from(Array(10).keys());

export default function QuantitySelector({ product }) {
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
    <div className="quantity">
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
          {quantityArrMap.map((_, i) => {
            if (i === 0) {
              return <MenuItem value={i}>{i} (remove) </MenuItem>;
            }
            return <MenuItem value={i}>{i}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
