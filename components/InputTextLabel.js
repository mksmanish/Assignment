import React, {Component, memo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput as TextInputReact,
  TextInput,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
const TextInputWithLable = ({
  label,
  value,
  placheHolder,
  isSecure,
  onChangeText,
  error,
  clearButtonMode,
  secureTextEntry,
  fontSize,
  fontWeight,
  defaultValue,
  textAlign,
  isEditable,
  onClickText,
  returnKeyType,
  onBlurText,
  type,
  data,
  widthStyle,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={styles.container}>
      {type == 'outlined' ? (
        <View
          style={{
            height: 50,
            borderColor: '#E1E1E1',
            borderWidth: 1,
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <View
            style={[
              isFocused || data || defaultValue
                ? styles.labelfocus
                : styles.labelUnFocused,
            ]}>
            <Text
              style={[
                isFocused || data || defaultValue
                  ? styles.labelFocusText
                  : styles.labelUnFocusedText,
              ]}>
              {label}
            </Text>
          </View>
          <TextInput
            style={[
              styles.inputStyleOutlined,
              {fontSize: fontSize, fontWeight: fontWeight},
            ]}
            onBlur={onBlurHandler}
            value={value}
            editable={isEditable}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            textAlign={textAlign}
            clearButtonMode={clearButtonMode}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            onTouchStart={onClickText}
            onFocus={handleFocus}
            {...props}
          />
        </View>
      ) : (
        <TextInputReact
          editable={isEditable}
          value={value}
          defaultValue={defaultValue}
          placeholder={placheHolder}
          onChangeText={onChangeText}
          textAlign={textAlign}
          style={[
            widthStyle
              ? styles.slInputStyle
              : style
              ? styles.lotStyle
              : styles.inputStyle,
            {fontSize: fontSize, fontWeight: fontWeight},
          ]}
          placeholderTextColor={'black'}
          {...props}
          clearButtonMode={clearButtonMode}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          onTouchStart={onClickText}
          returnKeyType={returnKeyType}
          onBlur={onBlurText}
        />
      )}

      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};
//make this component available to the app
const areEqual = (prevProps, nextProps) => {
  let setTrue = false;
  if (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.isEditable === nextProps.isEditable &&
    prevProps.defaultValue === nextProps.defaultValue
  )
    setTrue = true;
  return setTrue;
};

export default React.memo(TextInputWithLable, areEqual);
