import { Snowflake } from '@theinternetfolks/snowflake';

import { useApplicationStore } from '@package/michael/stores/application';
import { NestedMenu } from '@package/uriel/molecules/nested-menu';
import { INestedMenuProps } from '@package/uriel/molecules/nested-menu/_types';
import { ICategoryDef } from '@/package/raphael/types/application.types';
import { Box } from '@chakra-ui/react';
function Categories() {
    const categories = useApplicationStore(state => state.categories);
    const savedCategories = useApplicationStore(state => state.savedCategories);

    return (
        <Box overflowY='auto' pb='measurement.12' alignItems='flex-start' alignSelf='stretch' borderRadius='measurement.0'>
            {/*saved categories */}
            {savedCategories && <NestedMenu items={createSavedCategories(savedCategories) as INestedMenuProps['items']} />}
            {/* categories */}
            {categories && <NestedMenu items={categories as INestedMenuProps['items']} />}
        </Box>
    );
};

function createSavedCategories(categories: ICategoryDef[]) {
    return [{
        label: 'Favorites', key: Snowflake.generate(), icon: null, type: 'group', items: [
            ...categories
        ],
    }]
}

export default Categories;