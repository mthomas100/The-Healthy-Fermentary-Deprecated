export default function calcTotalPrice(cartContents) {
  return cartContents.reduce((tally, item) => {
    const itemTotal = item.price * item.quantity;
    return tally + itemTotal;
  }, 0);
}
