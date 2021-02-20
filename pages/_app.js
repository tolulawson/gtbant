import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme';
import '../styles/globals.css';

// console.log(customTheme);
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
