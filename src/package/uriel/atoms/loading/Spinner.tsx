import { Box, Flex } from '@chakra-ui/react';
import { ISpinnerProps } from './_types.d';
import './Spinner.scss';

// source: https://codepen.io/jeremywynn/pen/ZEywNW

export default function Spinner(props: ISpinnerProps) {
    return (
        <Flex position='relative'>
            {Array.from({ length: 12 }, (_, index) => (
                <Box
                    key={index}
                    className="sheath"
                    position='absolute'
                    transformOrigin='50% 50%'
                >
                    <Box
                        className="segment"
                        bgColor='black.40'
                        height='6px'
                        width='18px'
                    ></Box>
                </Box>
            ))}
        </Flex>
    );
}

// export default function Spinner(props: ISpinnerProps) {
//     return (
//         <Flex position='relative'>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//             <div className="sheath">
//                 <div className="segment"></div>
//             </div>
//         </Flex>
//     );
// }
