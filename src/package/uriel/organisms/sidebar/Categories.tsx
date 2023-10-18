import { Snowflake } from '@theinternetfolks/snowflake';

import { useApplicationStore } from '@package/michael/stores/application';
import { NestedMenu } from '@package/uriel/molecules/nested-menu';
import { INestedMenuItemProps, INestedMenuProps } from '@package/uriel/molecules/nested-menu/_types';
import { ICategoryDef } from '@/package/raphael/types/application.types';
import { Box } from '@chakra-ui/react';
import { Figma, ColorPalette, TextStyle1212, Measurement } from '@package/uriel/atoms/icons'
function Categories() {
    const categories = useApplicationStore(state => state.categories);
    const savedCategories = useApplicationStore(state => state.savedCategories);

    return (
        <Box overflowY='auto' pb='measurement.12' alignItems='flex-start' alignSelf='stretch' borderRadius='measurement.0'>
            {/*saved categories */}
            {savedCategories && <NestedMenu items={createSavedCategories(savedCategories) as INestedMenuProps['items']} />}
            {/* categories */}
            {categories && <NestedMenu items={updateCategoriesWithIcons(categories) as INestedMenuProps['items']} />}
        </Box>
    );
};

function createSavedCategories(categories: ICategoryDef[]) {
    return updateCategoriesWithIcons([
        {
            label: 'Favorites', key: Snowflake.generate(), url: null, type: 'group', items: [
                ...categories
            ]
        }
    ])
};

const categoriesIconMap: Record<string, React.ReactNode> = {
    "design-system": <Figma />,
    "design-system/color": <ColorPalette />,
    "design-system/text-styles": <TextStyle1212 />,
    "design-system/measurement": <Measurement />,
};

const updateCategoriesWithIcons = (categories: ICategoryDef[]) => {
    return categories.map((category) => {
        // Copy the category object
        const updatedCategory: ICategoryDef = { ...category };

        // If the category has an "url" property, update the "icon" property
        if (updatedCategory.url && categoriesIconMap[updatedCategory.url]) {
            updatedCategory.icon = categoriesIconMap[updatedCategory.url];
        }

        // If the category has "items," recursively update them
        if (updatedCategory.items) {
            updatedCategory.items = updateCategoriesWithIcons(updatedCategory.items);
        }

        return updatedCategory;
    });
};

export default Categories;