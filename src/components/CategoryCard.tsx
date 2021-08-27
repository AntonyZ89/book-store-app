import React from 'react';
import {Button, Div, Header, Image} from 'react-native-magnus';
import images from '../assets/images';

// TODO create Item Type
const CategoryCard: React.FC<{item: {name: string}}> = ({item: {name}}) => {
  return (
    <Div w={130} m={'xs'}>
      <Image h={100} source={images.books} roundedTop={'md'} />
      <Button
        w={'100%'}
        py={'xs'}
        roundedTop={0}
        roundedBottom={'md'}
        fontWeight={'bold'}>
        {name}
      </Button>
    </Div>
  );
};

export default CategoryCard;
