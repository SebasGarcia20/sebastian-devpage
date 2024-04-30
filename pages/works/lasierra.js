import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="La Sierra">
            <Container>
                <Title>
                    La Sierra Annapolis <Badge>2024</Badge>
                </Title>
                <P>
                    A restaurant website highlighting authentic rancho cuisine and exotic dragon fruit plates,
                    complete with catering services and upcoming event details.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://lasierraannapolismd.com/' target="_blank">
                            https://lasierraannapolismd.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>WEB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> HTML, Javascript, PHP, CSS</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/laSierra/lasierra_01.png' />
                <WorkImage src='/images/works/laSierra/lasierra_02.png' />
                <WorkImage src='/images/works/laSierra/lasierra_03.png' />
                <WorkImage src='/images/works/laSierra/lasierra_04.png' />
                <WorkImage src='/images/works/laSierra/lasierra_05.png' />
            </Container>
        </Layout>
    )
}

export default Work
