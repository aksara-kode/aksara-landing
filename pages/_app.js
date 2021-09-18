import "@fontsource/roboto"

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

import "swiper/css/bundle";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
