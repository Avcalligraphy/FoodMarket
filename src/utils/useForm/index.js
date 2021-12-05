import {useState} from 'react';

// eslint-disable-next-line prettier/prettier
const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
