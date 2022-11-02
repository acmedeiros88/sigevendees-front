import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const customTheme: Partial<ChakraTheme> = {
    config: {
        useSystemColorMode: false,
        initialColorMode: 'light',
    },
    fonts: {
        heading: 'Roboto',
        bady: 'Roboto',
    },
}

export default extendTheme(customTheme);