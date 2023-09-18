import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import TextInputWithLable from '../components/InputTextLabel';
import {moderateScale} from 'react-native-size-matters';
import ButtonWithLoader from '../components/ButtonWithLoder';
import ApiCaller from '../components/ApiCaller';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [panelGuid, setPanelGuid] = useState(
    '75a22a9e-d0e4-4547-af6b-6156bb0760eb',
  );
  const [email, setEmail] = useState('cat23@email.com');
  const [password, setPassword] = useState('Test@123');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOnChange = () => {};

  const Login = async () => {
    if (email !== null && panelGuid !== null && password !== null) {
      try {
        // Example POST request with data and headers
        setLoading(true);
        const requestData = {
          email: email,
          panelGuid: panelGuid,
          password: password,
        };
        const requestHeaders = {};

        const responseData = await ApiCaller(
          'POST',
          'https://dev-unipanel-api.azurewebsites.net/api/user/loginPanelist',
          requestData,
          requestHeaders,
        );
        // Handle the response data here
        console.log(responseData);
        setData(responseData);
        global.token = responseData?.token?.access?.token;
        setLoading(false);
        navigation.navigate('Post');
      } catch (error) {
        setLoading(false);
      }
    } else {
      console.error('Missing required data for login');
    }
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 32,
              color: 'black',
              paddingVertical: moderateScale(10),
              paddingHorizontal: moderateScale(20),
              lineHeight: moderateScale(51),
              letterSpacing: moderateScale(0.2),
            }}>
            LOGIN
          </Text>
        </View>
        <TextInputWithLable
          label={'Panel Guid'}
          placheHolder={'Panel Guild'}
          onChangeText={text => setPanelGuid(text)}
          clearButtonMode={'always'}
          keyboardType="email-address"
          type={'outlined'}
          defaultValue={panelGuid}
          returnKeyType="done"
        />
        <TextInputWithLable
          label={'Email'}
          placheHolder={'Email'}
          onChangeText={text => setEmail(text)}
          clearButtonMode={'always'}
          type={'outlined'}
          defaultValue={email}
          returnKeyType="done"
        />
        <TextInputWithLable
          label={'Password'}
          placheHolder={'Password'}
          onChangeText={text => setPassword(text)}
          clearButtonMode={'always'}
          secureTextEntry={true}
          type={'outlined'}
          defaultValue={password}
          returnKeyType="done"
        />
        <ButtonWithLoader text={'Login'} onPress={Login} isLoading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
