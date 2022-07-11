import React, {useState, useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';
import axios from 'axios';
import {Button} from 'primereact/button';

const ProfileFormEdit = ({control}) => {
  const genderOptions = [
    {name: 'Male', value: 'male'},
    {name: 'Female', value: 'female'},
  ];
  const [countries, setCountries] = useState([]);
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

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className='flex gap-3'>
          <img
            className='w-2rem'
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
      <div className='flex gap-3 w-5rem '>
        <img
          className='w-2rem'
          alt={option.name}
          src={option.flag}
          onError={(e) =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
        />
        <div className='text-color-secondary'>{option.name}</div>
      </div>
    );
  };

  return (
    <>
      {/* name */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          <i className='pi pi-user' />
          <Controller
            name='name'
            control={control}
            render={({field, fieldState}) => (
              <InputText id={field.name} {...field} />
            )}
          />
          <label htmlFor='name'>Name</label>
        </span>
      </div>

      {/* email */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          <i className='pi pi-envelope' />
          <Controller
            name='email'
            control={control}
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address. E.g. example@email.com',
              },
            }}
            render={({field, fieldState}) => (
              <InputText id={field.name} {...field} />
            )}
          />
          <label htmlFor='email'>Email</label>
        </span>
      </div>

      {/* old password */}
      <div className='field'>
        <span className='p-float-label'>
          <Controller
            name='oldPassword'
            control={control}
            render={({field, fieldState}) => (
              <Password id={field.name} {...field} toggleMask />
            )}
          />
          <label htmlFor='oldPassword'>Old Password</label>
        </span>
      </div>

      {/* new password */}
      <div className='field'>
        <span className='p-float-label'>
          <Controller
            name='newPassword'
            control={control}
            render={({field, fieldState}) => (
              <Password id={field.name} {...field} toggleMask />
            )}
          />
          <label htmlFor='newPassword'>New Password</label>
        </span>
      </div>

      {/* DOB */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          {/* <i className='pi pi-calendar' /> */}
          <Controller
            name='DOB'
            control={control}
            render={({field, fieldState}) => (
              <Calendar
                id={field.name}
                value={field.value}
                onChange={(e) => field.onChange(e.value)}
                showIcon
              />
            )}
          />
          <label htmlFor='DOB'>Date Of Birth</label>
        </span>
      </div>

      {/* gender */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          {/* <i className='pi pi-envelope' /> */}
          <Controller
            name='gender'
            control={control}
            render={({field, fieldState}) => (
              <Dropdown
                id={field.name}
                value={field.value}
                onChange={(e) => field.onChange(e.value)}
                options={genderOptions}
                optionLabel='name'
              />
            )}
          />
          <label htmlFor='gender'>Gender</label>
        </span>
      </div>

      {/* country */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          {/* <i className='pi pi-envelope' /> */}
          <Controller
            name='country'
            control={control}
            render={({field, fieldState}) => (
              <Dropdown
                id={field.name}
                value={field.value}
                onChange={(e) => field.onChange(e.value)}
                options={countries}
                placeholder='select country*'
                filter
                showClear={field.value}
                filterBy='name'
                optionLabel='name'
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
              />
            )}
          />
        </span>
      </div>

      {/* phone */}
      <div className='field'>
        <span className='p-float-label p-input-icon-right'>
          <i className='pi pi-phone' />
          <Controller
            name='phone'
            control={control}
            render={({field, fieldState}) => (
              <InputText id={field.name} {...field} />
            )}
          />
          <label htmlFor='phone'>Phone</label>
        </span>
      </div>

      <Button label='Submit' className='profile__form__submit' />
    </>
  );
};

export default ProfileFormEdit;
