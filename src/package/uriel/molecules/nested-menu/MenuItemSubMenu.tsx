import { MenuItem } from "@chakra-ui/menu";
import { IMenuItemSubMenuProps } from "./_types";
import { Flex, Text } from "@chakra-ui/react";

const MenuItemSubMenu = (props: IMenuItemSubMenuProps) => {
    const { children } = props;

    return (
        <MenuItem
            as={Flex}
            w='full'
            p={0}
            boxShadow="0px 2px 0px 0px transparent"
        >
            <Text color='black.100' textStyle='14.regular'>{children}</Text>

        </MenuItem>
    );
};

export default MenuItemSubMenu;
