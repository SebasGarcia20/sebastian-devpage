import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbCinemaHive from '../public/images/works/cinemahive_eyecatch.png'
import thumbPitaya from '../public/images/works/pitaya_eyecatch.png'
import thumbSierra from '../public/images/works/lasierra_eyecatch.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading
                    as='h3'
                    fontSize={20}
                    mb={4}
                >
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="cinemahive"
                            title="CinemaHive"
                            thumbnail={thumbCinemaHive}
                        >
                            An all-in-one film production platform. Creative documents. Calendars. Contacts. Call sheets. Payroll.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="lasierra"
                            title="La Sierra Annapolis"
                            thumbnail={thumbSierra}
                        >
                            A restaurant site showcasing ranch cuisine, exotic dragon fruit plates, catering, and events.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="pitaya"
                            title="Pitaya Restaurant"
                            thumbnail={thumbPitaya}
                        >
                            A restaurant website featuring ranch cuisine, dragon fruit dishes, catering, and events.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        My Projects
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="cinemahive"
                            title="CinemaHive"
                            thumbnail={thumbCinemaHive}
                        >
                            An all-in-one film production platform. Creative documents. Calendars. Contacts. Call sheets. Payroll.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="pitaya"
                            title="Pitaya Mexican Restaurant"
                            thumbnail={thumbPitaya}
                        >
                            A restaurant website dedicated to showcasing authentic rancho cuisine and exotic dragon fruit plates,
                            along with their catering services and upcoming events
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works