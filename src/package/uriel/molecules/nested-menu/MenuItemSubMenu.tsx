import { MenuItem } from "@chakra-ui/menu";
import { IMenuItemSubMenuProps } from "./_types";

const MenuItemSubMenu = (props: IMenuItemSubMenuProps) => {
    const { children } = props;

    return (
        <MenuItem
            as="div"
            w='full'
            p={0}
            boxShadow="0px 2px 0px 0px transparent"
        >
            {children}
        </MenuItem>
    );
};

export default MenuItemSubMenu;
