import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Form, Title} from '../Auth.style';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {classNames} from 'primereact/utils';
import {Button} from 'primereact/button';
import axiosInstance from '../../../core/axios/axiosInstance';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setLoadingState} from '../../../core/store/loading.slice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({defaultValues});

  const onSubmit = async (data) => {
    dispatch(setLoadingState(true));
    try {
      const res = await axiosInstance.post('auth/login', data);
      localStorage.setItem('token', res.data.token.accessToken);
      localStorage.setItem('refreshToken', res.data.token.refreshToken);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (error) {
      dispatch(setLoadingState(false));
    }
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className='p-error'>{errors[name].message}</small>
    );
  };

  return (
    <>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)} className='p-fluid w-25rem'>
        <div className='field'>
          <span className='p-float-label p-input-icon-right'>
            <i className='pi pi-envelope' />
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address. E.g. example@email.com',
                },
              }}
              render={({field, fieldState}) => (
                <InputText
                  id={field.name}
                  {...field}
                  className={classNames({'p-invalid': fieldState.error})}
                />
              )}
            />
            <label
              htmlFor='email'
              className={classNames({'p-error': !!errors.email})}>
              Email*
            </label>
          </span>
          {getFormErrorMessage('email')}
        </div>

        <div className='field'>
          <span className='p-float-label'>
            <Controller
              name='password'
              control={control}
              rules={{required: 'Password is required.'}}
              render={({field, fieldState}) => (
                <Password
                  id={field.name}
                  {...field}
                  feedback={false}
                  toggleMask
                  className={classNames({'p-invalid': fieldState.error})}
                />
              )}
            />
            <label
              htmlFor='password'
              className={classNames({'p-error': errors.password})}>
              Password*
            </label>
          </span>
          {getFormErrorMessage('password')}
        </div>
        <div className='flex gap-3'>
          <Button label='Login' />
          <Button
            label='create account'
            className='p-button-secondary'
            type='button'
            onClick={() => navigate('register')}
          />
        </div>
      </Form>
    </>
  );
};

export default Login;
