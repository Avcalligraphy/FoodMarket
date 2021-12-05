/* eslint-disable handle-callback-err */
import Axios from 'axios';
import {API_HOST} from '../../config';
import {setLoading} from '../../redux/action';
import {showMessage, storeData} from '../../utils';

// const API_HOST = {
//   url: 'http://foodmarket-backend.buildwithangga.id/api',
//   // url: 'http://10.0.2.2:8000/api',
// };

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        console.log('data successs  :', res.data);
        //  Data User
        const profile = res.data.data.user;
        // Data Token
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        storeData('token', {
          value: token,
        });
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});

              // console.log('success upload :', resUpload);
            })
            .catch(err => {
              showMessage('Upload photo tidak berhasil');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('Sign up error :', err.response.data.data.message);
        showMessage(err?.response?.data?.data?.message);
      });
  };

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      // profile.profile_photo_url = `http://10.0.2.2:8000/storage/${res.data.data[0]}`;

      dispatch(setLoading(false));
      storeData('token', {
        value: token,
      });
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(error => {
      dispatch(setLoading(false));
      console.log('Sign in error :', error);
      showMessage(error?.response?.data?.data?.message);
    });
};
