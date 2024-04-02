import { Box, Container, Heading, Image, useColorModeValue, Link, Button, ListItem, Icon, List } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius='lg' bg={useColorModeValue('purple.300', 'cyan.800')} p={3} mb={6} align='center'>
                    Hello, I&apos;m a frontend developer based in Colombia!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Sebastián García
                        </Heading>
                        <div>
                            Developer / Designer / Artist
                        </div>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor={useColorModeValue('purple.700', 'cyan.600')}
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <Image
                                src="/images/sebastian.jpg"
                                style={{
                                    marginTop: '-20px',
                                    marginLeft: '38px',
                                    transform: 'scale(2.2)'
                                }}
                                objectFit='cover'
                                alt="Profile image"
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as='h3' variant='section-title'>
                        Work
                    </Heading>
                    <Paragraph>
                        Meet Sebastian, a Frontend Developer specializing in crafting scalable and efficient applications.
                        Proficient in technologies like React and Next.js, Sebastian is driven by the ambition to develop
                        innovative solutions and contribute to organizational growth. Their expertise in GraphQL and
                        TypeScript further enhances their ability to deliver top-notch work while staying abreast of the latest
                        technological trends.
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Outside the realm of code, Sebastian enjoys artistic activities like&nbsp;
                        <Link as={NextLink} href="/works/cinemahive">
                            drawing
                        </Link>
                        &nbsp;and&nbsp;
                        <Link as={NextLink} href="/works/cinemahive">
                            photography
                        </Link>
                        , especially during hikes or travels. Sebastian is currently working for a startup called&nbsp;
                        <Link as={NextLink} href="/works/cinemahive">
                            CinemaHive
                        </Link>.
                    </Paragraph>
                    <Box align='center' my={5}>
                        <Button
                            as={NextLink}
                            href='/works'
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme={useColorModeValue('purple', 'teal')}
                        >
                            My portfolio
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1999</BioYear>
                        Born in Santander, Colombia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed the Bachelor&apos;s Program in Systems Engineering at Universidad Industrial de Santander.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to present</BioYear>
                        Works as Frontend Developer in CinemaHive
                    </BioSection>
                </Section>\

                <Section>
                    <Heading as='h3' variant='section-title'>
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/SebasGarcia20" target="_blank">
                                <Button
                                    variant='ghost'
                                    colorScheme={useColorModeValue('purple', 'teal')}
                                    leftIcon={<Icon as={IoLogoGithub} />}

                                >
                                    @SebasGarcia20
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/sebastiangflorez/" target="_blank">
                                <Button
                                    variant='ghost'
                                    colorScheme={useColorModeValue('purple', 'teal')}
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @sebastianfglorez
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/sebastiangflorez/" target="_blank">
                                <Button
                                    variant='ghost'
                                    colorScheme={useColorModeValue('purple', 'teal')}
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    @sebastiangflorez
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                   
                </Section>

            </Container>
        </Layout>
    )

}

export default Page