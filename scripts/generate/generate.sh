#! /bin/bash

cd "$(dirname "$0")"
cat ../banner/script-banner.txt
echo 
echo 
# -----------------------------
echo "Enter the component name"
read COMPONENT_NAME

echo "Choose package"
echo "1- gryffindor"
echo "2- slytherin"
echo "3- ravenclaw"
echo "4- hufflepuff"

read PACKAGE_CODE

PACKAGE_NAME=''
case $PACKAGE_CODE in
    1)
        cat ../banner/gryffindor.txt
        PACKAGE_NAME='gryffindor'
        ;;  
    2)
        cat ../banner/slytherin.txt
        PACKAGE_NAME='slytherin'
        ;; 
    3)
        cat ../banner/ravenclaw.txt
        PACKAGE_NAME='ravenclaw'
        ;;  
    4)
        cat ../banner/hufflepuff.txt
        PACKAGE_NAME='hufflepuff'
        ;;

    *)
    ;;
esac

COMPONENT_DIR='../../packages/'$PACKAGE_NAME/$COMPONENT_NAME

echo
echo "Start generate component $COMPONENT_NAME in $COMPONENT_DIR"



mkdir $COMPONENT_DIR

sed 's/BaseComponent/'$COMPONENT_NAME'/g' components/BaseComponent.tsx > $COMPONENT_DIR/$COMPONENT_NAME.tsx
sed 's/BaseComponent/'$COMPONENT_NAME'/g' components/index.ts > $COMPONENT_DIR/index.ts
sed 's/BaseComponent/'$COMPONENT_NAME'/g' components/interfaces.ts > $COMPONENT_DIR/interfaces.tsx

echo "Done!!!"