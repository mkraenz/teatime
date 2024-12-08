import { LoadingSpinner } from '@teatime/rnp-components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LoadingSpinner animating />
    </View>
  );
};

export default LoadingScreen;
