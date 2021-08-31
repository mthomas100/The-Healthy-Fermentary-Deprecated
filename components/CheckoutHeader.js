import { Typography } from '@material-ui/core';

export default function CheckoutHeader({ children }) {
  return (
    <Typography
      variant="overline"
      color="textSecondary"
      component="p"
      className="fullWidth"
      style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '1.5rem',
        fontWeight: 600,
      }}
    >
      {children}
    </Typography>
  );
}
