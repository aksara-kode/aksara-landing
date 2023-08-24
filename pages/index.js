import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon, ChevronLeftIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, HStack, Link, List, ListItem, Spacer, Text, Grid, Center, SimpleGrid} from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LogoIcon, RocketIcon, ShieldIcon, SettingIcon, QualityIcon, CodeIcon, ChatIcon, BranchIcon, PreviousArrowIcon, NextArrowIcon } from "../icons/icons";
import NextImage from "next/image"
import { chakra } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
import { scroller } from "react-scroll"

import bannerImage from "../public/banner.94034895.png"
import logoBagiDataImage from "../public/logo-bagidata.0fb72baa.png"
import logoMiminImage from "../public/logo-mimin.3ae8cd81.png"
import logoSTKIPImage from "../public/logo-stkip.a939117d.png"
import logoTelkomImage from "../public/logo-telkom.bbdcc5c7.png"
import logoAterkiaImage from "../public/aterkia.png"
import logoFgteamImage from "../public/fgteam.png"
import logoGofleetImage from "../public/gofleet.png"
import wywgImage from "../public/what-you-will-get.d3c6061f.png"

import stackNodeImage from "../public/tech-stacks/nodejs.png"
import stackCloudflareImage from "../public/tech-stacks/cloudflare.png"
import stackMYSQLImage from "../public/tech-stacks/mysql.png"
import stackReactImage from "../public/tech-stacks/react.png"
import stackPythonImage from "../public/tech-stacks/python.png"
import stackGrafanaImage from "../public/tech-stacks/grafana.jpeg"
import stackAndroidSDImage from "../public/tech-stacks/android-sdk.png"
import stackDockerImage from "../public/tech-stacks/docker.png"
import stackElasticsearchImage from "../public/tech-stacks/elasticsearch.png"
import stackGolangImage from "../public/tech-stacks/golang.png"
import stackJenkinsImage from "../public/tech-stacks/jenkins.png"
import stackReactNativeImage from "../public/tech-stacks/react-native.jpeg"
import stackRedisImage from "../public/tech-stacks/redis.png"
import stackWordpressImage from "../public/tech-stacks/wordpress.png"
import stackMongodbImage from "../public/tech-stacks/mongodb.png"
import stackNginxImage from "../public/tech-stacks/nginx.png"
import stackPHPImage from "../public/tech-stacks/php.jpeg"
import stackTypescriptImage from "../public/tech-stacks/typescript.jpeg"
import stackDokkuImage from "../public/tech-stacks/dokku.jpeg"

import SwiperCore, {
  Autoplay,
  Navigation
} from 'swiper';


const CNextImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'placeholder'].includes(prop),
})

const scrollToElement = (elementName) => {
  scroller.scrollTo(elementName, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

const contactWALink = "https://api.whatsapp.com/send/?phone=6282214899172&text=Hello+Aksara%2C+I%27m+%5Byour-name-here%5D+from+%5Byour-company%2Fstartup-name%5D+is+looking+for+%5Bwebsite%2Fmobile+apps%5D+Developer.&app_absent=0"

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const FlowSection = () => {
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
      description: "Proses pembuatan aplikasi dan website oleh Tim Ahli Aksara"
    },
  ]

  return (
    <Box as="section" w="100%" pb="24px">
      <Box>
        {/* <Element name="element-flow" className="element"> */}
          <Heading mb="64px" textAlign="center" size="lg">{titleText}</Heading>
        {/* </Element> */}
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
      Icon: CodeIcon,
      iconBgColor: "rgba(29,203,161,.3)",
      color: "#1ECAA1",
      title: "Sesuai Kebutuhan",
      description: "Kustomisasi fitur untuk memenuhi kebutuhan khusus"
    },
    {
      Icon: SettingIcon,
      iconBgColor: "rgba(255,192,97,.3)",
      color: "#FFC061",
      title: "Pemeliharaan Lebih Mudah",
      description: "Dengan metode Microservice"
    },
    {
      Icon: QualityIcon,
      iconBgColor: "rgba(97,145,219,.3)",
      color: "",
      title: "Pengujian Standar Internasional",
      description: "Memastikan aplikasi dan website berfungsi dengan baik"
    },
    {
      Icon: ChatIcon,
      iconBgColor: "rgba(255,51,31,.3)",
      color: "",
      title: "Gratis Konsultasi",
      description: "Bebas biaya tambahan untuk konsultasi produk"
    },
  ]
  const imageData = {
    image: wywgImage,
    alt: "benefit"
  }
  return (
    <Box as="section" w="100%">
      <Flex>
        <Box w={{base: "100%", md: "unset"}}>
          <Heading mb="64px" size="lg">{titleText}</Heading>  
          <Grid w="100%" templateColumns={{base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)"}} gap={6} pr={{base: "0px", md: "24px"}}>
            {benetifDatas.map((v, i) => (
              <Box w="100%" key={i} bg="white" p="24px" borderRadius="10px" boxShadow="md">
                <Center w="45px" h="45px" bg={v.iconBgColor} borderRadius="10px" mb="20px">
                  <v.Icon textColor={v.color} h="35px" w="35px"/>
                </Center>
                <Heading mb="8px" as="h3" size="md">{v.title}</Heading>
                <Text>{v.description}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
        <Spacer d={{base: "none", md: "block"}}/>
        <Box d={{base: "none", md: "block"}}>
          <CNextImage placehoder="blur" width={507} height={713} src={imageData.image} alt={imageData.alt} />
        </Box>
      </Flex>
    </Box>
  )
}

const CustomerReviewSection = () => {
  const titleText = "Pengalaman Bersama Kami"
  const reviewDatas = [
    {
      avatarImage: "/syahrul.3b0eb5b0.png",
      name: "Syahrul Rasyid",
      jobTitle: "PT Telkom Indonesia",
      review: "Aksara sangat membantu di era digital saat ini khususnya di Indonesia masih kurang dengan Talent-talent digital.",
      star: 5
    }
  ]
  return (
    <Box as="section" w="100%">
      <Heading mb="64px" textAlign="center" size="lg">{titleText}</Heading>
        <Flex>
          <Flex direction="column" justifyContent="center" mr="24px">
            <Box cursor="pointer" mb="4" className="swipe-review-prev">
              <PreviousArrowIcon w="45px" h="45px" />
            </Box>
            <Box cursor="pointer" className="swipe-review-next">
              <NextArrowIcon w="45px" h="45px" />
            </Box>
          </Flex>
          <Swiper
            navigation={{
              prevEl: '.swipe-review-prev',
              nextEl: '.swipe-review-next',
            }}
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={false} 
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            style={{
              height: "100%",
              padding: "5px"
            }}
          >
            {reviewDatas.map((v, i) => (
              <SwiperSlide style={{
                maxWidth: "300px",
              }} key={i}>
                <Box key={i} bg="white" borderRadius="10px" p="24px" boxShadow="md">
                  <Flex mb="16px">
                    <Avatar mr="12px" src={v.avatarImage} name={v.name}/>
                    <Box>
                      <Heading mb="2px" as="h4" size="sm">{v.name}</Heading>
                      <Text fontSize="xs" textColor="gray.800">{v.jobTitle}</Text>
                    </Box>
                  </Flex>
                  <Text mb="24px" textColor="gray.700">{v.review}</Text>
                  <Center w="100%">
                    {[...Array(v.star)].map((_, i) => (
                      <StarIcon textColor="#FFC105" m="2px" key={i}/>
                    ))}
                  </Center>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
    </Box>
  )
}

const ContactUsSection = () => {
  const titleText = "Ayo ceritakan Idemu, kami yang wujudkan impian kamu"
  const buttonText = "Hubungi Kami"
  return (
    <Box as="section" width="100%">
      <Box d={{base: "block", md: "flex"}} bgGradient="linear(#4A67DB, #334DCF)" p="20px" textColor="white" alignItems="center" borderRadius="10px">
        <Heading textAlign={{base: "center", md: "left"}} mb={{base: "12px", md: "0px"}} size="md">{titleText}</Heading>
        <Spacer/> 
        <Link href={contactWALink} target="_blank" _hover={{textDecoration: "none"}}>
          <Button w={{base: "100%", md: "150px"}} mr="24px" bg="#506eff" _hover={{boxShadow: "xl"}} _active={{bg: "#334DCF"}}>{buttonText}</Button> 
        </Link>
      </Box>
    </Box>
  )
}

const Banner = () => {
  const titleText = "Buat Ide Jadi Nyata, Bisa Dimulai Sekarang."
  const descriptionText = "Aksara adalah partner pembuatan aplikasi dan website yang memahami keinginanmu. Ceritakan ide yang kamu simpan, biar kami yang wujudkan."

  const ctaStartText = "Mulai"
  const seeMoreText = "Lihat kreasi kami"

  const ImageData = {
    image: bannerImage,
    alt: "aksara kode teknologi"
  }
  return (
    <Box alignItems="center" d={["block", "block", "flex", "flex"]} pt="48px" pb="96px">
      <Box maxW="600px" textColor="white" mb="24px">
        <Heading mb="12px" h="100px">
          <Typewriter
            options={{
              strings: ['< Hello World! />', titleText],
              delay: 20,
              deleteSpeed: 5,
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>

        <Text mb="24px" textColor="#c7d2ff">{descriptionText}</Text>

        <Flex alignItems="center">
          <Button onClick={() => scrollToElement("element-flow")} w="150px" mr="24px" bg="#506eff" _hover={{boxShadow: "xl"}} _active={{bg: "#334DCF"}}>{ctaStartText}</Button>

          {/* TODO */}
          {/* <Flex alignItems="center">
            <Link mr="4px" fontSize="sm" fontWeight="bold"  textColor="white">{seeMoreText}</Link>
            <ChevronRightIcon textColor="white" />
          </Flex> */}
        </Flex>

      </Box>
      <Spacer/>
      <CNextImage 
        borderRadius="10px"
        placeholder="blur" 
        height={406} 
        width={507} 
        src={ImageData.image} 
        alt={ImageData.alt}
      /> 
    </Box>
  )
}

const Menu = () => {
  const menuDatas = [
    {
      title: "Flow",
      linkTo: "",
      elementTo: "element-flow"
    },
    {
      title: "Benefit",
      linkTo: "",
      elementTo: "element-benefit"
    },
    {
      title: "Ulasan",
      linkTo: "",
      elementTo: "element-customer-review"
    },
    {
      title: "Tech Stack",
      linkTo: "",
      elementTo: "element-tech-stack"
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
              <Link onClick={() => scrollToElement(v.elementTo)} fontWeight="medium" _hover={{
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
          <Link onClick={() => scrollToElement("element-contact-us")} mr="4px" fontSize="sm" fontStyle="italic" fontWeight="bold"  textColor="white">{ctaContactUsText}</Link>
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
      title: "aksarakodeteknologi@gmail.com",
      linkTo: ""
    },
    {
      title: "+62 822-1489-9172",
      linkTo: ""
    },
  ]

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} columnGap={100} rowGap={10} textColor="white">
      <Box>
        <Link mb="12px">
          <LogoIcon w="50px" h="50px"/>
        </Link>
        <Text textColor="#c7d2ff">{infoData.description}</Text>
      </Box>
      {/* TODO */}
      {/* <Box>
        <Heading as="h4" mb="8px" size="sm">{supportText}</Heading>
        <List>
          {supportMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Heading as="h4" mb="8px" size="sm">{linkText}</Heading>
        <List>
          {linktMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box> */}
      <Box>
        <Heading as="h4" mb="8px" size="sm">{contactUsText}</Heading>
        <List>
          {contactMenusDatas.map((v, i) => (
            <ListItem key={i}>
              <Link>{v.title}</Link>
            </ListItem>
          ))}
        </List>
        {/* TODO social media */}
      </Box>
      
    </Grid> 
  )
}

const OurClient = () => {
  const swipeDatas  = [
    {
      image: logoTelkomImage,
      alt: "Telkom Indonesia", 
      linkTo: "",
      width: 150, 
      height: 64
    },
    {
      image: logoGofleetImage,
      alt: "GoFleet",
      linkTo: "",
      width: 180, 
      height: 50 
    },
    {
      image: logoBagiDataImage,
      alt: "Bagidata",
      linkTo: "",
      width: 180, 
      height: 40 
    },
    {
      image: logoMiminImage,
      alt: "Mimin Chat",
      linkTo: "",
      width: 90, 
      height: 73 
    },
    {
      image: logoSTKIPImage,
      alt: "STKIP Muhammadiyah Bogor",
      linkTo: "",
      width: 300, 
      height: 75 
    },
    {
      image: logoFgteamImage,
      alt: "FG Team",
      linkTo: "",
      width: 75, 
      height: 75 
    },
    {
      image: logoAterkiaImage,
      alt: "Aterkia",
      linkTo: "",
      width: 180, 
      height: 50 
    }
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
              <CNextImage placeholder="blur" width={v.width} height={v.height} src={v.image} alt={v.alt}/>
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

const TechStack = () => {
  const titleText = "Aksara Tech Stacks"
  const stackDatas = [
    {
      image: stackGolangImage,
      name: "Golang",
    },
    {
      image: stackPythonImage,
      name: "Python",
    },
    {
      image: stackPHPImage,
      name: "PHP",
    },
    {
      image: stackNodeImage,
      name: "Node JS",
    },
    {
      image: stackTypescriptImage,
      name: "Typescript",
    },
    {
      image: stackReactImage,
      name: "React",
    },
    {
      image: stackReactNativeImage,
      name: "React Native",
    },
    {
      image: stackAndroidSDImage,
      name: "Android SDK",
    },
    {
      image: stackDockerImage,
      name: "Docker",
    },
    {
      image: stackDokkuImage,
      name: "Dokku",
    },
    {
      image: stackMYSQLImage,
      name: "MYSQL",
    }, 
    {
      image: stackMongodbImage,
      name: "Mongo DB",
    }, 
    {
      image: stackRedisImage,
      name: "Redis",
    }, 
    {
      image: stackElasticsearchImage,
      name: "Elastic Search",
    }, 
    {
      image: stackGrafanaImage,
      name: "Grafana",
    }, 
    {
      image: stackJenkinsImage,
      name: "Jenkins",
    }, 
    {
      image: stackNginxImage,
      name: "NGINX",
    }, 
    {
      image: stackCloudflareImage,
      name: "Cloudflare",
    }, 
    {
      image: stackWordpressImage,
      name: "Wordpress",
    }, 
  ]
  return (
    <Box as="section" w="100%">
      <Heading mb="64px" textAlign="center" size="lg">{titleText}</Heading>
      <SimpleGrid minChildWidth="90px" spacing="12px">
        {stackDatas.map((v,i) => (
          <Box justifySelf="center" borderRadius="5px" bg="white" w="90px" h="90px" key={i} d="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box mb="2px">
              <CNextImage src={v.image} alt={v.name} width={50} height={50} placeholder="blur"/>
            </Box>
            <Text fontSize="xs" textColor="gray.700">{v.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
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
      <Box>
        <Box w="100%" py="48px">
          <Container maxW="container.xl">
            <OurClient/>
          </Container>
        </Box>

        <Box name="element-flow" w="100%" py="48px">
          <Container maxW="container.xl">
            <FlowSection/>  
          </Container>
        </Box>

        <Box name="element-benefit" w="100%" bg="#F9F9FA" py="48px">
          <Container maxW="container.xl">
            <BenefitSection/>
          </Container>
        </Box>

        <Box name="element-customer-review" w="100%" py="48px">
          <Container maxW="container.xl">
            <CustomerReviewSection/>
          </Container>
        </Box>

        <Box name="element-contact-us" w="100%" py="48px">
          <Container maxW="container.xl">
            <ContactUsSection/>
          </Container>
        </Box>

        <Box name="element-tech-stack" w="100%" py="48px" bg="#F9F9FA">
          <Container maxW="container.xl">
            <TechStack/>
          </Container>
        </Box>
      </Box>

      {/* footer */}
      <Box py="30px" bg="#334DCF">
        <Container maxW="container.xl">
          <FooterMenu/>  
        </Container>
      </Box>  
    </>
  )
}
