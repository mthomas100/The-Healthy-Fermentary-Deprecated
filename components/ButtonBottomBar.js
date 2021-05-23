import { Button as ButtonRebass } from 'rebass';

export default function Button({ children }) {
  return (
    <ButtonRebass
      variant="outline"
      mb={3}
      mr={3}
      p={2}
      color="black"
      sx={{
        border: '1px solid black',
        fontFamily: "'Pathway Gothic One', sans-serif;",
        fontSize: ['12px', '14px', '14px', '20px'],
        lineHeight: ['12px', '14px', '14px', '20px'],
        letterSpacing: '1px',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        borderTopLeftRadius: '2px',
        borderTopRightRadius: '2px',
        minWidth: 'fit-content',
      }}
    >
      {children}
    </ButtonRebass>
  );
}
