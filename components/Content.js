import { Box } from 'rebass/styled-components';
import Header from './Header';

export default function MainLayout({ children }) {
  return (
    <Box
      padding="3"
      sx={{
        width: ['100%', '100%', '100%', '100%'],
        margin: '0 auto',
        height: '100%',
      }}
    >
      <Header />
      {children}
    </Box>
  );
}
