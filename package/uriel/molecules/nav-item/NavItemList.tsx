import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import NavItem from './NavItem';
import { INavItemProps } from './_type';

function NavItemList(props: INavItemProps) {
    const { title, items = [] } = props;

    return (
        <>
            <Accordion variant={"sidebar"} allowMultiple>
                <AccordionItem>
                    <AccordionButton
                        _hover={{
                            bgColor: mode('primary.100', 'primary.900'),
                            color: 'white',
                        }}>
                        <NavItem {...props}></NavItem>
                    </AccordionButton>
                    {items.length > 0 ? (
                        <AccordionPanel>
                            {items.map((item, index) => (
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
