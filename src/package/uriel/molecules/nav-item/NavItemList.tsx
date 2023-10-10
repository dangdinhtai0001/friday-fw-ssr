import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import NavItem from './NavItem';
import { INavItemProps } from './_type';
function NavItemList(props: INavItemProps) {
    const { _children = [], navSize } = props;

    return (
        <>
            <Accordion variant={"sidebar"} allowMultiple>
                <AccordionItem>
                    <AccordionButton
                        onClick={() => {
                            console.log("click nav item");
                        }}
                        w='100%'
                        _hover={{
                            bgColor: mode('primary.100', 'primary.900'),
                        }}
                    >
                        <NavItem {...props} />
                    </AccordionButton>
                    {_children ? (
                        <AccordionPanel>
                            {_children.map((item, index) => (
                                <NavItem
                                    {...item}
                                    navSize={navSize}
                                    key={index}
                                    pl={navSize === 'small' ? 5 : 12}
                                />
                            ))}
                        </AccordionPanel>
                    ) : null}
                </AccordionItem>
            </Accordion>
        </ >
    );
};

export default NavItemList;