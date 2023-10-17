import { useState } from "react";
import {
    Flex, Icon, IconButton, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Text
} from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdStarRate } from 'react-icons/md';


import { ToggleIcon } from '@package/uriel/atoms/toggle-icon';

export default function IconBreadcrumb() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isRated, setRated] = useState<boolean>(false);

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

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
                    icon={<ToggleIcon
                        closeIcon={MdStarRate}
                        openIcon={MdStarRate}
                        isOpen={isRated}
                        iconProps={{ w: 'measurement.20', h: 'measurement.20', color: isRated ? 'secondary.orange' : 'black.10' }}
                    />}
                    onClick={() => { setRated(!isRated) }}
                />
            </Flex>
            {/* -------------------------------------------- Breadcrumb -------------------------------------------- */}
            {/* {location.pathname === "/" ? null : <Link to="/">Home</Link>} */}
            <Breadcrumb>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return (
                        <BreadcrumbItem key={index}>
                            {last ? (
                                <BreadcrumbLink href={to} >
                                    <Text color='black.100' textStyle='14.regular'>{value}</Text>
                                </BreadcrumbLink>
                            ) : (
                                <Text color='black.40' textStyle='14.regular'>{value}</Text>
                            )}

                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb>
        </Flex>
    );
}
