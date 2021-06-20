import { Box } from 'rebass/styled-components';
import Header from './Header';

export default function MainLayout({ children }) {
  return (
    <Box
      padding="3"
      sx={{ width: ['100%', '100%', '100%', '1000px'], margin: '0 auto' }}
    >
      <Header />
      {children}
    </Box>
  );
}
