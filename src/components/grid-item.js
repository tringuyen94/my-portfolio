import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, } from '@chakra-ui/react'
import { Global } from '@emotion/react'
export const GridItem = ({ children, href, title, thumbnail }) => {
   return (
      <Box w="100%" alignContent='center'>
         <LinkBox cursor='pointer'>
            <Image src={thumbnail}
               alt={title}
               className="grid-item-thumbnail"
               placeholder='blur'
               loading='lazy'
            />
            <LinkOverlay href={href} target='_blank'>
               <Text mt={2} fontSize={18}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
         </LinkBox>
      </Box>

   )
}
export const WorkGridItem = ({ children, id, title, thumbnail }) => {
   return (
      <Box w="100%" alignContent='center'>
         <LinkBox cursor='pointer'>
            <Image src={thumbnail}
               alt={title}
               className='grid-item-thumbnail'
               placeholder='blur'
               loading='lazy' />
            <LinkOverlay href={`/works/${id}`}>
               <Text mt={2} fontSize={18}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
         </LinkBox>

      </Box >
   )
}
export const GridItemStyle = () => {
   <Global
      styles={`
      .grid-item-thumbnail{
         border-radius:12pxl
      }`}
   />
}