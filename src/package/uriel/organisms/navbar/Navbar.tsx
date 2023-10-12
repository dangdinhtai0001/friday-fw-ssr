import { Text } from '@chakra-ui/react';

import { INavbarProps } from './_types';

function Navbar(props: INavbarProps) {
    return (
        <div>
            <Text color='text' textStyle='64.regular'>
                will be #1C1C1C in light mode and #FFF in dark mode
            </Text>
        </div>
    );
}

export default Navbar;
