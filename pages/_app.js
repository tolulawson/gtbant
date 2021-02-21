import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme';
import '../styles/globals.scss';

// console.log(customTheme);
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
