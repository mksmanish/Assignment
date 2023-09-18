import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(5),
    marginTop: moderateScale(10),
  },
  textView: {
    fontSize: moderateScale(16),
    fontWeight: 7,
    letterSpacing: moderateScale(0.2),
    color: 'green',
  },
  inputStyleOutlined: {
    height: moderateScale(50),
    color: 'green',
    fontWeight: '400',
    fontSize: moderateScale(16),
    letterSpacing: moderateScale(0.2),
    width: '100%',
    paddingLeft: moderateScale(16),
    bottom: moderateScale(10),
  },
  inputStyle: {
    minHeight: moderateScale(38.4),
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    color: 'black',
    fontWeight: '400',
    fontSize: moderateScale(14),
    letterSpacing: moderateScale(0.2),
    width: '100%',
    backgroundColor: 'white',
  },
  lotStyle: {
    // minHeight: moderateScale(38.4),
    borderWidth: 2,
    borderColor: 'gray',
    color: 'green',
    fontWeight: '400',
    fontSize: moderateScale(14),
    letterSpacing: moderateScale(0.2),
    width: '100%',
    height: moderateScale(65),
    borderRadius: moderateScale(8),
  },
  slInputStyle: {
    minHeight: moderateScale(38.4),
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    color: 'green',
    fontWeight: '400',
    fontSize: moderateScale(14),
    letterSpacing: moderateScale(0.2),
    width: '80%',
    backgroundColor: 'white',
  },
  errorMessage: {
    color: 'red',
    marginTop: moderateScale(5),
    marginLeft: moderateScale(5),
  },
  labelUnFocused: {
    marginLeft: moderateScale(16),
    position: 'absolute',
  },
  labelfocus: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(16),
  },
  labelFocusText: {
    color: '#84818A',
    fontWeight: '400',
    fontSize: 12,
  },
  labelUnFocusedText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#091F2C',
  },
  btnStyle: {
    margin: moderateScale(30),
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    height: moderateScale(45),
    marginHorizontal: moderateScale(20),
    fontWeight: '700',
    letterSpacing: moderateScale(0.2),
  },
});

export default styles;
