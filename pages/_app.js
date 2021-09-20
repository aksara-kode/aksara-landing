import "@fontsource/roboto"

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import SEO from '../next-seo.config';
import { CorporateContactJsonLd } from 'next-seo';

import "swiper/css/bundle";
import { DefaultSeo } from "next-seo";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
})

const GlobalSEO = () => (
  <>
    <DefaultSeo {...SEO} />
    <CorporateContactJsonLd
      url="https://aksaracode.com"
      logo="https://aksaracode.com/logo.png"
      contactPoint={[
          {
            telephone: '+62-822-1489-9172',
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['English', 'Indonesia'],
          },
      ]}
    />
  </>
)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalSEO/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
