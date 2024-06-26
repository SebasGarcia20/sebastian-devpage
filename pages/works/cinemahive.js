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
                    An all-in-one film production platform. Creative documents. Calendars. Contacts. Call sheets. Payroll.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://cinemahive.com/' target="_blank">
                            https://cinemahive.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> ReactJs, GraphQL, Apollo Client, TypeScript, Django</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/cinemahive_eyecatch.png' />
                <WorkImage src='/images/works/cinemahive/cinemahive1.png' />
                <WorkImage src='/images/works/cinemahive/cinemahive3.png' />
                <WorkImage src='/images/works/cinemahive/cinemahive2.png' />
            </Container>
        </Layout>
    )
}

export default Work
