import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInputWithLable from '../components/InputTextLabel';
import {moderateScale} from 'react-native-size-matters';
import ButtonWithLoader from '../components/ButtonWithLoder';
import {useNavigation} from '@react-navigation/native';
import ApiCaller from '../components/ApiCaller';

const ListResult = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const dummyData = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Bob Johnson',
    },
    {
      id: 4,
      name: 'John Doe',
    },
    {
      id: 5,
      name: 'Jane Smith',
    },
    {
      id: 6,
      name: 'Bob Johnson',
    },
    // Add more items as needed with properties
  ];

  useEffect(() => {
    (async () => {
      try {
        const requestHeaders = {
          Authorization: global.token,
        };
        // Example GET request
        const responseData = await ApiCaller(
          'GET',
          'https://dev-unipanel-api.azurewebsites.net/api/dummyuser/getStudyType',
          requestHeaders,
        );
        // Handle the response data here
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
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
            All Records
          </Text>
          <FlatList
            keyExtractor={item => item.id.toString()} // Ensure item.id is a string or use String(item.id)
            data={dummyData}
            renderItem={({item, index}) => (
              <Text style={{fontSize: 20, fontWeight: '500'}}>
                {item?.name}
              </Text>
            )}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListResult;
