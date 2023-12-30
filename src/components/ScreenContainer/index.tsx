import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenContainerProps} from './types';
import styles from './styles';

const ScreenContainer = ({children, ...rest}: ScreenContainerProps) => {
  return (
    <SafeAreaView style={styles.screenContainer} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
