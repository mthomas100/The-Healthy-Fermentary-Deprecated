import { Box } from 'rebass';

export default function Layout({ children }) {
  return (
    <Box sx={{ width: ['100%', '100%', '100%', '1000px'], margin: '0 auto' }}>
      {children}
    </Box>
  );
}
