import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import { M_PLUS_1_Code } from 'next/font/google'
import VoxelDog from '../voxel-dog'


const mPlus1C = M_PLUS_1_Code({
   weight: ['400', '700'],
   style: ['normal'],
   subsets: ['latin'],
   display: 'swap',
})

const Main = ({ children, router, }) => {
   return (
      <Box as='main' pb={8} className={mPlus1C.className}>
         <Head>
            <meta name='viewport' content="width=device-width,intial-scale=1" />
            <title>Tri Nguyen </title>
         </Head>
         <Navbar path={router.asPath} />
         <Container maxW="container.md" pt={14}>
            <VoxelDog />
            {children}
         </Container>
      </Box>
   )
}
export default Main