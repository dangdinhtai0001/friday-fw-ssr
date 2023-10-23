import { useEffect, useState } from "react";
import {
    Flex, IconButton, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text
} from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import _ from 'lodash';

import { IconSwitcher } from '@package/uriel/atoms/icon-switcher';
import { SidebarHide, SidebarShow, Star, FavoriteStar } from '@package/uriel/atoms/icons'
import { useApplicationStore } from "@/package/michael/stores/application";
import { getCategory } from '@package/michael/config'

export default function IconBreadcrumb() {
    const { savedCategories, removeSavedCategory, addSavedCategory } = useApplicationStore(state => state);
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isRated, setRated] = useState<boolean>(_.includes(savedCategories, location.pathname));

    const handleOnClickRate = () => {
        isRated ? removeSavedCategory?.(location.pathname) : addSavedCategory?.(location.pathname);

        setRated(!isRated)
    }

    useEffect(() => {
        setRated(_.includes(savedCategories, location.pathname));
    }, [location]);

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
                    icon={<IconSwitcher
                        closeIcon={<SidebarShow color='black.40' w='measurement.20' h='measurement.20' />}
                        openIcon={<SidebarHide color='black.40' w='measurement.20' h='measurement.20' />}
                        isOpen={isOpen}
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
                    icon={<IconSwitcher
                        openIcon={<Star color='black.10' w='measurement.20' h='measurement.20' />}
                        closeIcon={<FavoriteStar color={isRated ? 'secondary.orange' : 'black.10'} w='measurement.20' h='measurement.20' />}
                        isOpen={isRated}
                    />}
                    onClick={handleOnClickRate}
                />
            </Flex>
            {/* -------------------------------------------- Breadcrumb -------------------------------------------- */}
            {/* {location.pathname === "/" ? null : <Link to="/">Home</Link>} */}
            <Breadcrumb>
                {pathnames.map((_, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return (
                        <BreadcrumbItem key={index}>
                            {last ? (
                                <BreadcrumbLink href={to} >
                                    <Text color='black.100' textStyle='14.regular'>{getCategory(to).label}</Text>
                                </BreadcrumbLink>
                            ) : (
                                <Text color='black.40' textStyle='14.regular'>{getCategory(to).label}</Text>
                            )}
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb>
        </Flex>
    );
}