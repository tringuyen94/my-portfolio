import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/article";

const Work = () => {
   return (
      <Layout title="Inkdrop">
         <Container>
            <Title>Inkdrop <Badge>2016</Badge></Title>
            <Paragraph>An App I make</Paragraph>
         </Container>
         <List ml={4} my={4}>
            <ListItem>
               <Meta>Website</Meta>
               <Link href='https://www.inkdrop.app/'>
                  https://www.inkdrop.app/ <ExternalLinkIcon mx='2px' />
               </Link>
            </ListItem>
            <ListItem>
               <Meta>Platform</Meta>
               <span>Web</span>
            </ListItem>
            <ListItem>
               <Meta>Stack</Meta>
               <span>NodesJS, MongoDB, Express, ReactJS</span>
            </ListItem>
         </List>
      </Layout>
   )
}
export default Work