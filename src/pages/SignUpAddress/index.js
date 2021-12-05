/* eslint-disable handle-callback-err */
/* eslint-disable no-const-assign */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, InputText, Select} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Banten',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('form :', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register', data);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));

    // Axios.post('http://10.0.2.2:8000/api/register', data)
    //   .then(res => {
    //     console.log('data successs  :', res.data);
    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer);
    //       Axios.post('http://10.0.2.2:8000/api/user/photo', photoForUpload, {
    //         headers: {
    //           // eslint-disable-next-line prettier/prettier
    //           'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       })
    //         .then(resUpload => {
    //           console.log('success upload :', resUpload);
    //         })
    //         .catch(err => {
    //           showMessage('Upload photo tidak berhasil');
    //         });
    //     }
    //     dispatch(setLoading(false));
    //     showMessage('Register Success', 'success');
    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch(err => {
    //     dispatch(setLoading(false));
    //     console.log('Sign up error :', err.response.data.data.message);
    //     showMessage(err?.response?.data?.data?.message);
    //   });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title={'Address'}
          subTitle={"Make sure it's valid"}
          onBack
          onPress={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <InputText
            label={'Phone No.'}
            placeholder={'Type your phone number'}
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={24} />
          <InputText
            label={'Address'}
            placeholder={'Type your address'}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <InputText
            label={'House No.'}
            placeholder={'Type your house number'}
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label={'City'}
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text={'Sign Up Now'} onPress={onSubmit} />
          <Gap height={12} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
