import { useRef } from "react"
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, HStack, Link, List, ListItem, Spacer, Text, Grid, LinkBox, VStack, Center } from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LogoIcon, RocketIcon, ShieldIcon, SettingIcon, QualityIcon, CodeIcon, ChatIcon, BranchIcon } from "../icons/generateIcon";

import SwiperCore, {
  Autoplay,
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const FLowSection = () => {
  const titleText = "Ide kamu ceritakan, kami yang wujudkan."
  const flowDatas = [
    {
      Icon: RocketIcon,
      iconBgColor: "rgba(157,68,181,.3)",
      color: "",
      title: "Ceritakan Ide Kreatif",
      description: "Ide apa yang ingin kamu wujudkan? Kami akan dengarkan"
    },
    {
      Icon: ShieldIcon,
      iconBgColor: "rgba(29,203,161,.3)",
      color: "#1ECAA1",
      title: "Kolaborasi Ide dan Teknologi",
      description: "Mempertemukan kebutuhan idemu dengan teknologi kami"
    },
    {
      Icon: BranchIcon,
      iconBgColor: "rgba(255,51,31,.3)",
      color: "#FF341E",
      title: "Pengembangan Aplikasi dan Website",
      description: "Proses pembuatan aplikasi dan website oleh Tim Ahli Archv"
    },
  ]

  return (
    <Box as="section" w="100%">
      <Box>
        <Heading mb="64px" textAlign="center" size="lg">{titleText}</Heading>
        <Box d={{base: "block", md:"flex"}} justifyContent="space-between" >
          {flowDatas.map((v, i) => (
            <Box key={i} maxW={{base: "100%", md: "300px"}} mb={{base: "32px", md: "0px"}} d="flex" flexDirection="column" alignItems="center">
              <Center w="75px" h="75px" bg={v.iconBgColor} borderRadius="10px" mb="20px">
                <v.Icon textColor={v.color} h="45px" w="45px"/>
              </Center>
              <Heading mb="8px" textAlign="center" as="h3" size="md">{v.title}</Heading>
              <Text textAlign="center">{v.description}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

const BenefitSection = () => {
  const titleText = "Dukungan kami untukmu"
  const benetifDatas = [
    {
      icon: null,
      title: "Sesuai Kebutuhan",
      description: "Kustomisasi fitur untuk memenuhi kebutuhan khusus"
    },
    {
      icon: null,
      title: "Pemeliharaan Lebih Mudah",
      description: "Dengan metode Microservice"
    },
    {
      icon: null,
      title: "Pengujian Standar Internasional",
      description: "Memastikan aplikasi dan website berfungsi dengan baik"
    },
    {
      icon: null,
      title: "Gratis Konsultasi",
      description: "Bebas biaya tambahan untuk konsultasi produk"
    },
  ]
  return (
    <Box as="section">
      <Flex>
        <Box>
          <Heading size="lg">{titleText}</Heading>  
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {benetifDatas.map((v, i) => (
              <Box key={i}>
                <Heading as="h3" size="md">{v.title}</Heading>
                <Text>{v.description}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
        <Spacer/>
        <Image src="https://archv.id/static/media/what-you-will-get.d3c6061f.png" alt="benetif" />
      </Flex>
    </Box>
  )
}

const CustomerReviewSection = () => {
  const titleText = "Pengalaman Bersama Kami"
  const reviewDatas = [
    {
      avatarImage: "https://archv.id/static/media/syahrul.3b0eb5b0.png",
      name: "Syahrul Rasyid",
      jobTitle: "PM MyCarrier at PT Telkom Indonesia",
      review: "Archv sangat membantu di era digital saat ini khususnya di Indonesia masih kurang dengan Talent-talent digital.",
      star: 3
    },
    {
      avatarImage: "https://archv.id/static/media/syahrul.3b0eb5b0.png",
      name: "Syahrul Rasyid",
      jobTitle: "PM MyCarrier at PT Telkom Indonesia",
      review: "Archv sangat membantu di era digital saat ini khususnya di Indonesia masih kurang dengan Talent-talent digital.",
      star: 3
    },
    {
      avatarImage: "https://archv.id/static/media/syahrul.3b0eb5b0.png",
      name: "Syahrul Rasyid",
      jobTitle: "PM MyCarrier at PT Telkom Indonesia",
      review: "Archv sangat membantu di era digital saat ini khususnya di Indonesia masih kurang dengan Talent-talent digital.",
      star: 3
    },
  ]
  return (
    <Box as="section">
      <Heading textAlign="center" size="lg">{titleText}</Heading>
      <Grid templateColumns="repeat(3, 1fr)">
        {reviewDatas.map((v, i) => (
          <Box key={i}>
            <Flex>
              <Avatar src={v.avatarImage} name={v.name}/>
              <Box>
                <Heading as="h4" size="md">{v.name}</Heading>
                <Text>{v.jobTitle}</Text>
              </Box>
            </Flex>
            <Text>{v.review}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

const ContactUsSection = () => {
  const titleText = "Ide kamu ceritakan, kami yang wujudkan."
  const buttonText = "Hubungi Kami"
  return (
    <Box as="section" width="100%">
      <Flex>
        <Heading size="xl">{titleText}</Heading>
        <Spacer/> 
        <Button>{buttonText}</Button>
      </Flex>
    </Box>
  )
}

const Banner = () => {
  const titleText = "Buat Ide Jadi Nyata, Bisa Dimulai Sekarang."
  const descriptionText = "Archv Adalah Partner Pembuatan Aplikasi Dan Website Yang Memahami Keinginanmu. Ceritakan Ide Yang Kamu Simpan, Biar Kami Yang Wujudkan."

  const ctaStartText = "Mulai"
  const seeMoreText = "Lihat kreasi kami"

  const ImageData = {
    image: "/banner.94034895.png",
    alt: "aksara kode teknologi"
  }
  return (
    <Box alignItems="center" d={["block", "block", "flex", "flex"]} pt="48px" pb="96px">
      <Box maxW="600px" textColor="white" mb="24px">
        <Heading mb="12px">{titleText}</Heading>
        <Text mb="24px" textColor="#c7d2ff">{descriptionText}</Text>

        <Flex alignItems="center">
          <Button w="150px" mr="24px" bg="#506eff" _hover={{boxShadow: "xl"}} _active={{bg: "#334DCF"}}>{ctaStartText}</Button>

          <Flex alignItems="center">
            <Link mr="4px" fontSize="sm" fontWeight="bold"  textColor="white">{seeMoreText}</Link>
            <ChevronRightIcon textColor="white" />
          </Flex>
        </Flex>

      </Box>
      <Spacer/>
      <Image borderRadius="4px" src={ImageData.image} alt={ImageData.alt}/> 
    </Box>
  )
}

const Menu = () => {
  const menuDatas = [
    {
      title: "Home",
      linkTo: ""
    },
    {
      title: "Product",
      linkTo: ""
    },
    {
      title: "Layanan",
      linkTo: ""
    },
    {
      title: "Ulasan",
      linkTo: ""
    },
    {
      title: "Blog",
      linkTo: ""
    },
    {
      title: "Karir",
      linkTo: ""
    },
  ]
  const ctaContactUsText = "Hubungi Kami"
  return (
    <Flex alignItems="center">
      {/* logo */}
      <Link>
        <LogoIcon w="100px" h="100px" />
      </Link>

      <Spacer/>

      <List display={{base: "none", md:"block"}} py="20px" textColor="white">
        <HStack spacing={4}>
          {menuDatas.map((v, i) => (
            <ListItem key={i}>
              <Link fontWeight="medium" _hover={{
                textDecoration: "none",
                pb: "6px",
                borderBottom: "2px",
                borderColor: "white",
                fontWeight: "bold"
              }} >{v.title}</Link>
            </ListItem>
          ))}
        </HStack>
      </List>
      
      <Spacer/>

      {/* <Button display={{base: "none", md:"block"}} bg="blue">{ctaContactUsText}</Button> */}

      <Flex alignItems="center">
        <Box h="1px" bg="#c7d2ff" w="100px" mr="12px" />
        <Link mr="4px" fontSize="sm" fontStyle="italic" fontWeight="bold"  textColor="white">{ctaContactUsText}</Link>
        <ChevronRightIcon textColor="white" />
      </Flex>

      {/* TODO */}
      {/* <Box visibility={{sm: "visible", md:"hidden"}}>
        <Button>Menu</Button>
      </Box> */}
    </Flex>
  )
}

const FooterMenu = () => {
  const infoData = {
    imageData: {
      image: "https://archv.id/static/media/logoHeader.e98c78fb.png",
      alt: "aksara logo"
    },
    description: "Menghasilkan karya, produk, dan jasa dalam bidang Teknologi Informasi seperti aplikasi mobile untuk berbagai macam platform (Android/iOS) dan Website."
  }

  const supportText = "Support"
  const supportMenusDatas = [
    {
      title: "FAQ",
      linkTo: ""
    },
    {
      title: "Feature",
      linkTo: ""
    },
    {
      title: "Customer Service",
      linkTo: ""
    },
  ]

  const linkText = "Links"
  const linktMenusDatas = [
    {
      title: "Team",
      linkTo: ""
    },
    {
      title: "Portofolio",
      linkTo: ""
    },
    {
      title: "Carrer",
      linkTo: ""
    },
  ]

  const contactUsText = "Contact Us"
  const contactMenusDatas = [
    {
      title: "archvcreative@gmail.com",
      linkTo: ""
    },
    {
      title: "0859126486414",
      linkTo: ""
    },
  ]

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} columnGap={100} rowGap={10} textColor="white">
      <Box>
        <Image maxW="200px" src={infoData.imageData.image} alt={infoData.imageData.alt} />
        <Text>{infoData.description}</Text>
      </Box>
      <Box>
        <Text>{supportText}</Text>
        <List>
          {supportMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text>{linkText}</Text>
        <List>
          {linktMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text>{contactUsText}</Text>
        <List>
          {contactMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
        <p>facebook dll</p>
      </Box>
      
    </Grid> 
  )
}

const OurClient = () => {
  const swipeDatas  = [
    {
      image: "/logo-telkom.bbdcc5c7.png",
      alt: "Telkom Indonesia", 
      linkTo: "",
      resize: "50%" 
    },
    {
      image: "/logo-bagidata.0fb72baa.png",
      alt: "Bagidata",
      linkTo: "",
      resize: "60%" 
    },
    {
      image: "/logo-mimin.3ae8cd81.png",
      alt: "Mimin Chat",
      linkTo: "",
      resize: "30%" 
    },
    {
      image: "/logo-stkip.a939117d.png",
      alt: "STKIP Muhammadiyah Bogor",
      linkTo: "",
      resize: "100%" 
    },
  ]

  return (
    <Box as="section" w="100%" mt="-130px">
      <Flex alignItems="center" mb="8px">
        <Box h="2px" bg="#c7d2ff" w="30px" mr="12px" />
        <Text mr="4px" fontSize="sm" fontWeight="bold"  textColor="#c7d2ff">OUR CLIENTS</Text>
      </Flex>
      <Flex bg="white" h="100px" w="100%" boxShadow="lg" borderRadius="8px" alignItems="center">
        <Box p="20px" cursor="pointer" className="swipe-our-client-prev">
          <ChevronLeftIcon h={10} w={10} />
        </Box>

        <Swiper
          navigation={{
            prevEl: '.swipe-our-client-prev',
            nextEl: '.swipe-our-client-next',
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          loop={true} 
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          style={{
            height: "100%"
          }}
        >
          {swipeDatas.map((v, i) => (
          <SwiperSlide style={{
            maxWidth: "300px",
            height: "100%",
          }} key={i}>
            <Center h="100%" w="100%">
              <Image w={v.resize} src={v.image} alt={v.alt}/>
            </Center>
          </SwiperSlide>
          ))}
        </Swiper>
        
        <Box p="20px" cursor="pointer" className="swipe-our-client-next">
          <ChevronRightIcon h={10} w={10} />
        </Box>
      </Flex>
      
    </Box>
  )
}

export default function Home() {
  return (
    <>
      {/* head */}
      <Box bgGradient="linear(#4A67DB, #334DCF)">
        <Container maxW="container.xl" >
          <Menu/> 
          <Banner/> 
        </Container>
      </Box>

      {/* body */}
      <Box bg="#F9F9FA">
        <Container maxW="container.xl" py="50px">
          <VStack spacing="50px">
            <OurClient/>
            <FLowSection/>  
            {/* <BenefitSection/> */}
            {/* <CustomerReviewSection/> */}
            {/* <ContactUsSection/> */}
          </VStack>
        </Container>
      </Box>
      {/* footer */}
      <Box bg="blue.700" py="30px">
        <Container maxW="container.xl">
          {/* <FooterMenu/>   */}
        </Container>
      </Box>  
    </>
  )
}
