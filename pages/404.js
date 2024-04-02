import { Box, Button, Container, Divider, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>Not Found</Heading>
            <Text>
                The page you&apos;re looking fow was not found
            </Text>
            <Divider my={6} />

            <Box my={6} align='center'>
                <Link
                    as={NextLink}
                    href='/'
                >
                    <Button colorScheme='teal'>
                        Return to home
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default NotFound