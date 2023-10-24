import { Snowflake } from '@theinternetfolks/snowflake';

import { useApplicationStore } from '@package/michael/stores/application';
import { NestedMenu } from '@package/uriel/molecules/nested-menu';
import { INestedMenuProps } from '@package/uriel/molecules/nested-menu/_types';
import { Box } from '@chakra-ui/react';
import { categoryDefs, getCategory } from '@package/michael/config';
function Categories() {
    // const categories = useApplicationStore(state => state.categories);
    const savedCategories = useApplicationStore(state => state.savedCategories);

    return (
        <Box overflowY='auto' pb='measurement.12' alignItems='flex-start' alignSelf='stretch' borderRadius='measurement.0'>
            {/*saved categories */}
            {savedCategories && <NestedMenu items={createSavedCategories(savedCategories) as unknown as INestedMenuProps['items']} />}
            {/* categories */}
            <NestedMenu items={categoryDefs as INestedMenuProps['items']} />
        </Box>
    );
};

function createSavedCategories(categories: string[]) {
    return [
        {
            label: 'Favorites', key: Snowflake.generate(), url: null, type: 'group', items: [
                ...categories.map(category => (getCategory(category)))
            ]
        }
    ]
};

export default Categories;