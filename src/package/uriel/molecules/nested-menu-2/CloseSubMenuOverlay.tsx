import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";

import { ICloseSubMenuOverlayProps } from "./_types";

const CloseSubMenuOverlay = (props: ICloseSubMenuOverlayProps) => {
    const { isActive, closeSubMenu } = props;

    const refMenuOverlay = useRef<HTMLDivElement | null>(null);

    function onMouseMenuOverlayEnterHanler() {
        closeSubMenu();
    }

    useEffect(() => {
        if (refMenuOverlay.current) {
            refMenuOverlay.current.addEventListener(
                "mouseenter",
                onMouseMenuOverlayEnterHanler
            );
        }

        return () => {
            if (refMenuOverlay.current) {
                refMenuOverlay.current.removeEventListener(
                    "mouseenter",
                    onMouseMenuOverlayEnterHanler
                );
            }
        };
    }, []);

    return (
        <Box
            ref={refMenuOverlay}
            position="fixed"
            pointerEvents={isActive ? "auto" : "none"}
            w="100vw"
            h="100vh"
            zIndex={999}
        ></Box>
    );
};

export default CloseSubMenuOverlay;
