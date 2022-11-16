import React from 'react';
import {
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    BoxProps,
    FlexProps
} from '@chakra-ui/react';
import {
    FiFile,
    FiList,
    FiShoppingCart,
    FiUsers,
    FiBarChart2,
    FiBook,
    FiLayers,
    FiLogOut
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
    name: string;
    href: string;
    icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Pedido', href: '/pedido', icon: FiFile },
    { name: 'Estoque', href: '/estoque', icon: FiList },
    { name: 'Venda', href: '/venda', icon: FiShoppingCart },
    { name: 'Cliente', href: '/cliente', icon: FiUsers },
    { name: 'Receita', href: '/receita', icon: FiBook },
    { name: 'Histórico', href: '/historico', icon: FiBarChart2 },
    { name: 'Balanço', href: '/balanco', icon: FiLayers },
    { name: 'Sair', href: '/', icon: FiLogOut },
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

interface NavItemProps extends FlexProps {
    href: string;
    icon: IconType;
    children: string;
}

const NavItem = ({ href, icon, children, ...rest }: NavItemProps) => {
    return (
        <Box as='li' listStyleType='none'>
            <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="5"
                    mx="2"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            as='nav'
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex
                h="20"
                mx="8"
                alignItems="center"
                justifyContent="space-between">
                <Link href='#' fontSize="2xl" fontFamily="monospace" mb={6} fontWeight="bold" style={{ textDecoration: 'none' }}>
                    SIGEVENDEES
                </Link>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Box as='ul' mt={-5}>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} href={link.href} icon={link.icon}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        </Box>
    );
}

export default SidebarContent;