import {
    IconButton,
    Flex,
    HStack,
    useColorModeValue,
    Text,
    FlexProps,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

interface MobileProps extends FlexProps {
    onOpen: () => void;
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            name='mobile-nav'
            w={{ base: 'full' }}
            pos="fixed"
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="12"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                ml={{ sm: 56 }}
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                SIGEVENDEES
            </Text>

            <HStack />

        </Flex>
    );
};

export default MobileNav;