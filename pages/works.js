import {
    Container,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbCinemaHive from '../public/images/works/cinemahive_eyecatch.png'
import thumbPitaya from '../public/images/works/pitaya_eyecatch.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading
                    as='h3'
                    fontSize={20}
                    mb={4}
                >
                    Works
                </Heading>
                <SimpleGrid column={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="cinemahive"
                            title="CinemaHive"
                            thumbnail={thumbCinemaHive}
                        >
                            A website to cine
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="pitayarestaurant"
                            title="Pitaya Mexican Restaurant"
                            thumbnail={thumbPitaya}
                        >
                            A website to cine
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works