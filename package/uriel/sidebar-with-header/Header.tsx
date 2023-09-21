import { Box, Center, Flex, IconButton, Icon } from '@chakra-ui/react';
import { IHeaderProps } from './_types.d';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export default function Header(props: IHeaderProps) {
    const { showSidebarButton, isShowSidebar, onShowSidebar, onCloseSidebar } = props;

    return (
        <Box bg='tomato' p={4} color='white'>
            {showSidebarButton &&
                <IconButton
                    aria-label='Search database'
                    icon={<Icon as={isShowSidebar ? AiOutlineMenuFold : AiOutlineMenuUnfold} />}
                    backgroundColor='transparent'
                    border='none'
                    color='white'
                    paddingLeft={10}
                    onClick={isShowSidebar ? onCloseSidebar : onShowSidebar}
                />
            }
        </Box>
    );
}
