/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, InputText } from '../../components';
import { signInAction } from '../../redux/action';
import { useForm } from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form,setForm] = useForm({
    email : '',
    password: '',
  });

  const dispatch = useDispatch();


  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
    // console.log('nama email :', email);
    // console.log('nama password :', password);
  };
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <InputText label={'Email Address'} placeholder={'Your email'}
         value= {form.email}
         onChangeText={(value) => setForm( 'email',value) } />
        <Gap height={16} />
        <InputText label={'Password'} placeholder={'Your password'}
        value={form.password}
        onChangeText={(value) => setForm('password' ,value) } secureTextEntry />
        <Gap height={24} />
        <Button text={'Sign In'} onPress={onSubmit} />
        <Gap height={12} />
        <Button text={'Create New Account'} colors="#8D92A3" textColor="white"onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
