import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article"
import { GridItem } from '../components/grid-item'

import thumbFishWorkFlow from '../public//images/works/cinemahive_eyecatch.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading
                as="h4"
                fontSize={20}
                mb={4}
            >
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="My fIrst WorkFLow"
                        thumbnail={thumbFishWorkFlow}
                        href="https://www.google.com"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts