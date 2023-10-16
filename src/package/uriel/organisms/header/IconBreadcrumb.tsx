import { useState } from "react";
import {
    Flex, Icon, IconButton, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Text
} from "@chakra-ui/react";

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdStarRate } from 'react-icons/md';


import { ToggleIcon } from '@package/uriel/atoms/toggle-icon';

export default function IconBreadcrumb() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isRated, setRated] = useState<boolean>(false);

    return (
        <Flex
            alignItems='center'
            gap='measurement.8'
            borderRadius='measurement.0'
        >
            {/* -------------------------------------------- Icon group -------------------------------------------- */}
            <Flex
                alignItems='center'
                alignContent='center'
                gap='measurement.8'
                flexWrap='wrap'
                borderRadius='measurement.8'
            >
                <IconButton
                    p='measurement.4'
                    justifyContent='center'
                    alignItems='center'
                    gap='measurement.4'
                    borderRadius='measurement.8'
                    aria-label=""
                    bgColor='transparent'
                    icon={<ToggleIcon
                        closeIcon={AiOutlineMenuFold}
                        openIcon={AiOutlineMenuUnfold}
                        isOpen={isOpen}
                        iconProps={{ w: 'measurement.20', h: 'measurement.20' }}
                    />}
                    onClick={() => { setOpen(!isOpen) }}
                />
                <IconButton
                    p='measurement.4'
                    justifyContent='center'
                    alignItems='center'
                    gap='measurement.4'
                    borderRadius='measurement.8'
                    aria-label=""
                    bgColor='transparent'
                    icon={<Icon as={MdStarRate} w='measurement.20' h='measurement.20' color={isRated ? 'secondary.orange' : 'black.40'} />}
                    onClick={() => { setRated(!isRated) }}
                />
            </Flex>
            {/* -------------------------------------------- Breadcrumb -------------------------------------------- */}

            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        <Text color='black.40' textStyle='14.regular'>Home</Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Text color='black.40' textStyle='14.regular'>Docs</Text>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>
                        <Text color='black.100' textStyle='14.regular'>Breadcrumb</Text>
                    </BreadcrumbLink>

                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    );
}
