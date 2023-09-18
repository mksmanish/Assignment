//import liraries
import React, {memo, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {moderateScale} from 'react-native-size-matters';

const ButtonWithLoader = ({
  isLoading,
  text,
  onPress,
  isDisabled,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle,
        {
          bottom: moderateScale(12),
          backgroundColor: buttonColor ? buttonColor : 'green',
          opacity: isLoading || isDisabled ? 0.4 : 1,
        },
      ]}
      disabled={isDisabled}>
      {!!isLoading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text
          style={[
            {fontSize: 20, fontWeight: '700', color: '#091F2C'},
            {color: 'white'},
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;
