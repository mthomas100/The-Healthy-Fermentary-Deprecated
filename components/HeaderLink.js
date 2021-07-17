import { Text } from 'rebass';
import { fontFamily } from 'styled-system';

export default function HeaderLink({
  children,
  fontFamilyCSS,
  fontSize,
  lineHeight,
}) {
  return (
    <Text
      font="sans"
      fontWeight="n"
      color="primary"
      sx={{
        fontSize,
        lineHeight,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: `${fontFamilyCSS}`,
      }}
      fontFamily
    >
      {children}
    </Text>
  );
}
