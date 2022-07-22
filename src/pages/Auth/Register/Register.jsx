import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Title } from '../Auth.style';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import axiosInstance from '../../../core/axios/axiosInstance';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoadingState } from '../../../core/store/loading.slice';
import socket from '../../../core/socket/socket.client';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genderOptions = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ];
  const [countries, setCountries] = useState([]);
  const defaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    DOB: '',
    gender: '',
    country: '',
    phone: '',
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const getCountries = async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    const data = res.data.map((country) => {
      return {
        name: country.name.common,
        value: country.name.common,
        flag: country.flags.png,
      };
    });
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onSubmit = async (data) => {
    dispatch(setLoadingState(true));
    try {
      const res = await axiosInstance.post('auth/register', data);
      localStorage.setItem('token', res.data.token.accessToken);
      localStorage.setItem('refreshToken', res.data.token.refreshToken);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      socket.emit('new-user');
      socket.disconnect();
      navigate('/');
    } catch (err) {
      dispatch(setLoadingState(false));
    }
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>;
  };

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex gap-3">
          <img
            className="w-2rem"
            alt={option.name}
            src={option.flag}
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex gap-3 w-5rem ">
        <img
          className="w-2rem"
          alt={option.name}
          src={option.flag}
          onError={(e) =>
            (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
        />
        <div className="text-color-secondary">{option.name}</div>
      </div>
    );
  };

  return (
    <>
      <Title>Register</Title>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: '600px', minWidth: '100%' }}
        className="p-fluid formgrid grid"
      >
        {/* name */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-user" />
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Name is required.',
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label htmlFor="name" className={classNames({ 'p-error': !!errors.name })}>
              Name*
            </label>
          </span>
          {getFormErrorMessage('name')}
        </div>

        {/* email */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-envelope" />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address. E.g. example@email.com',
                },
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>
              Email*
            </label>
          </span>
          {getFormErrorMessage('email')}
        </div>

        {/* password */}
        <div className="field col-6">
          <span className="p-float-label">
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required.' }}
              render={({ field, fieldState }) => (
                <Password
                  id={field.name}
                  {...field}
                  toggleMask
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>
              Password*
            </label>
          </span>
          {getFormErrorMessage('password')}
        </div>

        {/* confirm password */}
        <div className="field col-6">
          <span className="p-float-label">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Password
                  id={field.name}
                  {...field}
                  toggleMask
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label
              htmlFor="confirmPassword"
              className={classNames({ 'p-error': errors.confirmPassword })}
            >
              Password*
            </label>
          </span>
          {getFormErrorMessage('confirmPassword')}
        </div>

        {/* DOB */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            {/* <i className='pi pi-calendar' /> */}
            <Controller
              name="DOB"
              control={control}
              rules={{
                required: 'DOB is required.',
              }}
              render={({ field, fieldState }) => (
                <Calendar
                  id={field.name}
                  value={field.value}
                  onChange={(e) => field.onChange(e.value)}
                  showIcon
                />
              )}
            />
            <label htmlFor="DOB" className={classNames({ 'p-error': !!errors.DOB })}>
              Date Of Birth*
            </label>
          </span>
          {getFormErrorMessage('DOB')}
        </div>

        {/* gender */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            {/* <i className='pi pi-envelope' /> */}
            <Controller
              name="gender"
              control={control}
              rules={{
                required: 'Gender is required.',
              }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value}
                  onChange={(e) => field.onChange(e.value)}
                  options={genderOptions}
                  optionLabel="name"
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label htmlFor="gender" className={classNames({ 'p-error': !!errors.gender })}>
              Gender*
            </label>
          </span>
          {getFormErrorMessage('gender')}
        </div>

        {/* country */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            {/* <i className='pi pi-envelope' /> */}
            <Controller
              name="country"
              control={control}
              rules={{
                required: 'Country is required.',
              }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value}
                  onChange={(e) => field.onChange(e.value)}
                  options={countries}
                  placeholder="select country*"
                  filter
                  showClear={field.value}
                  filterBy="name"
                  optionLabel="name"
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            {/* <label
              htmlFor='country'
              className={classNames({'p-error': !!errors.country})}>
              Country*
            </label> */}
          </span>
          {getFormErrorMessage('country')}
        </div>

        {/* phone */}
        <div className="field col-6">
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-phone" />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Phone is required.',
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <label htmlFor="phone" className={classNames({ 'p-error': !!errors.phone })}>
              Phone*
            </label>
          </span>
          {getFormErrorMessage('phone')}
        </div>

        <div className="flex gap-3 col-12">
          <Button label="Submit" />
          <Button
            label="go to login"
            className="p-button-secondary"
            type="button"
            onClick={() => navigate('/auth')}
          />
        </div>
      </Form>
    </>
  );
};

export default Register;
