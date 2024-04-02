import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'
import VoxelCat from '../voxel-cat'
import noSsr from '../no-ssr'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pt={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial=scale=1' />
                <title> Sebastian Garcia - HomePage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelCat />
                </NoSsr>
                {children}
            </Container>
        </Box >
    )
}

export default Main