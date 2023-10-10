import { AiOutlineMenu } from 'react-icons/ai';
import { Flex, useColorModeValue, IconButton, Icon, Box } from '@chakra-ui/react';
import { INavBarProps } from './_types.d';

function NavBar(props: INavBarProps) {
    const { height = '70px', onClickToggle } = props;

    const handleOnClickToggle = () => {
        onClickToggle?.();
    }

    return (
        <Box h={height}        >
            <Flex align='center' justify='space-between'
                bgColor={useColorModeValue('surface.100', 'surface.900')}
                className='nav-bar'
            >
                <IconButton
                    icon={<Icon as={AiOutlineMenu} />}
                    aria-label='navbar-toggle'
                    bgColor='transparent'
                    _hover={{ bgColor: 'transparent' }}
                    onClick={handleOnClickToggle}
                />
            </Flex>
        </Box>
    );
};

export default NavBar;
