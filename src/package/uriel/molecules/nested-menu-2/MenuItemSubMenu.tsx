import { MenuItem } from "@chakra-ui/menu";
import { IMenuItemSubMenuProps } from "./_types";
import { Flex, Text } from "@chakra-ui/react";

const MenuItemSubMenu = (props: IMenuItemSubMenuProps) => {
    const { children } = props;

    return (
        <MenuItem as={Flex} w='full' p={0} >
            {children}
        </MenuItem>
    );
};

export default MenuItemSubMenu;
