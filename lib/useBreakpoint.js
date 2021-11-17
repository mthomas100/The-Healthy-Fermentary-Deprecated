import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({
  xxs: 325,
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
});

export default useBreakpoint;
