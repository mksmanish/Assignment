import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInputWithLable from '../components/InputTextLabel';
import {moderateScale} from 'react-native-size-matters';
import ButtonWithLoader from '../components/ButtonWithLoder';
import {useNavigation} from '@react-navigation/native';
import ApiCaller from '../components/ApiCaller';

const PostData = () => {
  const [studyType, setStudyType] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const Sumbit = async () => {
    if (studyType !== null) {
      console.log('adkjfhajf', studyType);
      try {
        // Example POST request with data and headers
        setLoading(true);
        const requestData = {
          studyType: studyType,
        };
        const requestHeaders = {
          Authorization: global.token,
        };

        const responseData = await ApiCaller(
          'POST',
          'https://dev-unipanel-api.azurewebsites.net/api/dummyuser/createStudyType',
          requestData,
          requestHeaders,
        );
        // Handle the response data here
        console.log(responseData);
        navigation.navigate('List');
        setLoading(false);
      } catch (error) {
        Alert.alert('Error', `${error}`, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('List')},
        ]);
        console.log('error getting', error);
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
            STUDY TYPE
          </Text>
        </View>
        <TextInputWithLable
          label={'Study Type'}
          placheHolder={'Study Type'}
          onChangeText={text => setStudyType(text)}
          clearButtonMode={'always'}
          type={'outlined'}
          returnKeyType="done"
        />
        <ButtonWithLoader
          text={'Sumbit'}
          onPress={Sumbit}
          isLoading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostData;
