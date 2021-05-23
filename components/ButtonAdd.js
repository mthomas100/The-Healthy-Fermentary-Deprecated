import { Button as ButtonRebass } from 'rebass';

export default function Button({ children }) {
  return (
    <ButtonRebass
      variant="outline"
      mb={3}
      mr={3}
      color="black"
      sx={{
        border: '1px solid black',
        fontFamily: "'Pathway Gothic One', sans-serif;",
        fontSize: '20px',
        lineHeight: '20px',
        letterSpacing: '1px',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        borderTopLeftRadius: '2px',
        borderTopRightRadius: '2px',
        display: 'block',
        width: `100%`,
      }}
    >
      {children}
    </ButtonRebass>
  );
}
