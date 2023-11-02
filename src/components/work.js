import NextLink from 'next/link'
import {Heading,Box,Image,Link,Badge}  from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
export const Title= ({children})=>{
   return (
      <Box>
         <Link as={NextLink} href='/works'>
         </Link>  
         <span>
            &nbsp;
            <ChevronRightIcon/>
            &nbsp;
         </span>
         <Heading as='h3' display='inline-block' mb={4} fontSize={20}>
            {children}
         </Heading>
      </Box>
      
   )
}
export const WorkImage=({src,alt})=>{
   return (
      <Image borderRadius='lg' mb={4} src={src} alt={alt}/>
   )
}
export const Meta =({children})=>{
   return (
      <Badge colorScheme='green' mr='2'>
            {children}
      </Badge>
   )
}