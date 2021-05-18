import styled, { ThemeProvider } from 'styled-components';
import { space, layout, color, fontSize } from 'styled-system';
import theme from '../components/styles/theme';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  box-sizing: 'border-box';
  min-width: 0;
`;

const Spacer = styled.div(space);

const Heading = styled.h2`
  ${space}
  ${color} /* width: 50%; */
  ${layout}
  ${color}
`;

export default function styledSystem() {
  return (
    <>
      <Box
        bg={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'green' }}
        fontSize="small"
        width={200}
        p={20}
        m="50px auto"
      >
        This is an item
      </Box>
      <Box
        bg={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'green' }}
        fontSize="small"
        width={200}
        p={20}
        m="50px auto"
      >
        This is an item
      </Box>
      <Box
        bg={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'green' }}
        fontSize="small"
        width={200}
        p={20}
        m="50px auto"
      >
        This is an item
      </Box>
      <Box
        bg={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'green' }}
        fontSize="small"
        width={200}
        p={20}
        m="50px auto"
      >
        This is an item
      </Box>
    </>
  );
}
