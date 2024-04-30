import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'
import VoxelCat from '../voxel-cat'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pt={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Sebastian's homepage" />
                <meta name="author" content="Sebastian Garcia" />
                <meta name="author" content="sebastiangflorez" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/image.png" type="image/x-icon" />
                <meta property="og:site_name" content="Sebastian Garcia" />
                <meta name="og:title" content="Sebastian Garcia" />
                <meta property="og:type" content="website" />
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