import NextLink from "next/link"
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import Layout from "../components/article"


const Custom404 = () => {
   return (
      <Layout title="Not Found">

         <Container>
            <Heading as='h1'>
               <Text>This route does not exist</Text>
            </Heading>
            <Divider my={6} />
            <Box my={6} alignContent='center'>
               <NextLink href='/'>
                  <Button colorScheme='teal'>Return to home</Button>
               </NextLink>
            </Box>
         </Container>
      </Layout>

   )
}
export default Custom404