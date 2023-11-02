import React from 'react'
import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../../public/images/inkdrop-banner.jpg'
import Layout from '../components/article'
// import thumbWalknote from '../../public/images/works/walknote_01.png'
export default function Works() {
   return (
      <Layout title="Works">
         <Container>
            <Heading as='h3' fontSize={20} mb={4}   >
               Works
            </Heading>
            <SimpleGrid column={[1, 1, 2]} gap={6}>
               <Section delay={0.5}>
                  <WorkGridItem id='inkdrop' title={'Inkdrop'} thumbnail={thumbInkdrop}>
                     A markdown note-taking app
                  </WorkGridItem>
               </Section>
            </SimpleGrid>
         </Container>
      </Layout>
   )
}
