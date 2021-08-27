import React from 'react';
import {Icon as IconBase, IconProps} from 'react-native-magnus';

const Icon: React.FC<IconProps> = props => {
  return <IconBase {...props} fontFamily="FontAwesome5" />;
};

export default Icon;
