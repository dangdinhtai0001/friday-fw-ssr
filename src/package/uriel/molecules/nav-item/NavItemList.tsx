import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import NavItem from './NavItem';
import { INavItemProps } from './_type';
function NavItemList(props: INavItemProps) {
    const { _children = [] } = props;

    return (
        <>
            <Accordion variant={"sidebar"} allowMultiple>
                <AccordionItem>
                    <AccordionButton
                        textDecoration='none'
                        _hover={{
                            bgColor: mode('primary.100', 'primary.900'),
                        }}>
                        <NavItem {...props}></NavItem>
                    </AccordionButton>
                    {_children ? (
                        <AccordionPanel>
                            {_children.map((item, index) => (
                                <NavItem {...item} pl={16} key={index}></NavItem>
                            ))}
                        </AccordionPanel>
                    ) : null}
                </AccordionItem>
            </Accordion>
        </ >
    );
};

export default NavItemList;