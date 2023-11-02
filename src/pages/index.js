
import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/article'


const Page = () => {
   return (
      <Layout>
         <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center  '>
               Hello, I&#39;m a full-stack developer in Vietnam
            </Box>
            <Box display={{ md: 'flex' }}>
               <Box flexGrow={1}>
                  <Heading as='h3' variant='page-title'>
                     Nguyen Le Minh Tri
                  </Heading>
                  <p>Front-end Developer</p>
               </Box>
               <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} alignContent={"center"}>
                  <Image
                     borderColor="whiteAlpha.800"
                     borderWidth={2} borderStyle='solid'
                     maxWidth='100px' display='inline-block'
                     borderRadius='full'
                     src='/images/takuya.jpg'
                     alt='avatar' />
               </Box>
            </Box>
            <Section delay={0.1}>
               <Heading as="h3" variant="section-title">
                  Work
               </Heading>
               <Paragraph>
                  I am a freelance Developer here is my {' '}
                  <Link as={NextLink} href="/works" style={{ display: "inline" }}>
                     Inkdrop
                  </Link>
               </Paragraph>
               <Box align='center' my={4}>
                  <NextLink href="/works">
                     <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>My portfolio</Button>
                  </NextLink>
               </Box>
            </Section>
            <Section delay={0.2}>
               <Heading as="h3" variant='section-title'>
                  Bio
               </Heading>
               <BioSection>
                  <BioYear>1994</BioYear>
                  Born in Quang Nam, Vietnam
               </BioSection>
               <BioSection>
                  <BioYear>2014</BioYear>
                  Complete the Bachelors of Information Technology at University of Finance and Marketing
               </BioSection>
               <BioSection>
                  <BioYear>2014&nbsp;-&nbsp;now</BioYear>
                  IT Helpdesk at Thu Duc Agromarket
                  Freelance as Frontend Developer (ReactJS,NodeJS,..)
               </BioSection>

            </Section>

         </Container >
      </Layout>

   )
}
export default Page