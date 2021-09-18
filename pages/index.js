import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, HStack, Link, List, ListItem, Spacer, Text, Grid, LinkBox, VStack } from "@chakra-ui/layout";

const FLowSection = () => {
  const titleText = "Ide kamu ceritakan, kami yang wujudkan."
  const flowDatas = [
    {
      icon: null,
      title: "Ceritakan Ide Kreatif",
      description: "Ide apa yang ingin kamu wujudkan? Kami akan dengarkan"
    },
    {
      icon: null,
      title: "Kolaborasi Ide dan Teknologi",
      description: "Mempertemukan kebutuhan idemu dengan teknologi kami"
    },
    {
      icon: null,
      title: "Pengembangan Aplikasi dan Website",
      description: "Proses pembuatan aplikasi dan website oleh Tim Ahli Archv"
    },
  ]

  return (
    <Box as="section">
      <Box>
        <Heading textAlign="center" size="lg">{titleText}</Heading>
        <Flex>
          {flowDatas.map((v, i) => (
            <Box key={i}>
              <Heading as="h3" size="md">{v.title}</Heading>
              <Text>{v.description}</Text>
            </Box>
          ))}
        </Flex>
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
    image: "https://archv.id/static/media/banner.94034895.png",
    alt: "aksara kode teknologi"
  }
  return (
    <Box alignItems="center" d={["block", "block", "flex", "flex"]}>
      <Box w="600px" textColor="white">
        <Heading>{titleText}</Heading>
        <Text>{descriptionText}</Text>

        <Flex alignItems="center">
          <Button bg="blue">{ctaStartText}</Button>
          <Text>{seeMoreText}</Text>
        </Flex>

      </Box>
      <Spacer/>
      <Box>
      <Image src={ImageData.image} alt={ImageData.alt}/> 
      </Box>
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
      <Image maxW="200px" src="https://archv.id/static/media/logoHeader.e98c78fb.png" alt="aksara logo" />

      <Spacer/>

      <List display={{base: "none", md:"block"}} py="20px" textColor="white">
        <HStack>
          {menuDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </HStack>
      </List>
      
      <Spacer/>

      <Button display={{base: "none", md:"block"}} bg="blue">{ctaContactUsText}</Button>

      {/* TODO */}
      <Box visibility={{sm: "visible", md:"hidden"}}>
        <Button>Menu</Button>
      </Box>
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

export default function Home() {
  return (
    <>
      {/* head */}
      <Box bg="blue.700">
        <Container maxW="container.xl" >
          <Menu/> 
          <Banner/> 
        </Container>
      </Box>

      {/* body */}
      <Container maxW="container.xl" py="50px">
        <VStack spacing="50px">
          <FLowSection/>  
          <BenefitSection/>
          <CustomerReviewSection/>
          <ContactUsSection/>
        </VStack>
      </Container>

      {/* footer */}
      <Box bg="blue.700" py="30px">
        <Container maxW="container.xl">
          <FooterMenu/>  
        </Container>
      </Box>  
    </>
  )
}
