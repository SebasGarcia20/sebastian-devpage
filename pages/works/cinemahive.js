import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Cinemahive">
            <Container>
                <Title>
                    Cinemahive <Badge>2022</Badge>
                </Title>
                <P>
                    A Markdow seadfasdf asdjfkjljksdfjkld jlkasjlkasdflkjsdfakljdfskljsdaf
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.cinemahive.com'>
                            https://www.cinemahive.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs/Linux/iOs/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> ReactJs, GraphQL, Apollo Client, Django</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/cinemahive_eyecatch.png'/>
            </Container>
        </Layout>
    )
}

export default Work
