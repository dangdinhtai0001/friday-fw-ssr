#! /bin/bash

COMPONENT_NAME='Portal'

echo "Change working dir"
cd "$(dirname "$0")"
pwd

echo "cp $COMPONENT_NAME"
cp -r components ../../packages/$COMPONENT_NAME

mv ../../packages/$COMPONENT_NAME/BaseComponent.tsx ../../packages/$COMPONENT_NAME/$COMPONENT_NAME.tsx

echo "replace"
sed 's/BaseComponent/'$COMPONENT_NAME'/g' ../../packages/$COMPONENT_NAME/$COMPONENT_NAME.tsx