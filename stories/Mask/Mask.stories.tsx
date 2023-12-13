import React from 'react';
import { View } from 'react-native';
import { Mask } from '~/components';

const MaskMeta = {
  title: 'Mask',
  component: Mask,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MaskMeta;

export const Basic = {};

export const AnotherExample = {
  
};
