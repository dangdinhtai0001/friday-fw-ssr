import { createIcon } from "@chakra-ui/react";

export const TextStyleOne = createIcon({
    displayName: "TextStyleOne",
    viewBox: "0 0 48 48",
    path: (
        <>
            {/* <rect width="48" height="48" fill="currentColor" fillOpacity="0.01" /> */}
            <path
                d="M4 42L8.94118 30M32 42L27.0588 30M27.0588 30L25 25L18 8L11 25L8.94118 30M27.0588 30H8.94118"
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 10L44 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M32 20L44 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M36 30L44 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M40 40H44" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                strokeLinejoin="round" />
        </>
    ),
});