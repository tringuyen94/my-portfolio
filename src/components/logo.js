import NextLink from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.div`
font-weight:bold;
font-size:18px;
display:inline-flex;
align-items:center;
height:30px;
line-height:20px;
padding:10px;
&:hover img{
   transform:rotate(20deg)
}
`
const Logo = () => {
   const footPrintImg = `/apple-touch-icon.png`
   return (
      <NextLink href='/'>
         <LogoBox>
            <Image src={footPrintImg} width={20} height={20} alt='logo' />
            <Text
               color={useColorModeValue('gray.800', 'whiteAlpha.900')}
               fontWeight='bold'
               ml={3}
            >
               Tri Nguyen
            </Text>
         </LogoBox>
      </NextLink >
   )
}

export default Logo