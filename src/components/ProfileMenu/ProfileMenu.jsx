import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileState, setProfileInfo } from '../../core/store/profile.slice';
import { DialogueWarper, Warper } from './ProfileMenu.style';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useRef } from 'react';
import { useState } from 'react';
import axiosInstance from '../../core/axios/axiosInstance';
import { FaUserCog, FaUserAltSlash } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { closeDialogue, openDialogue } from '../../core/store/dialogue.slice';
import { setLoadingState } from '../../core/store/loading.slice';
import ProfileFormEdit from '../ProfileFormEdit/ProfileFormEdit';
import { useEffect } from 'react';

const ProfileMenu = ({ parent }) => {
  const changeProfileImage = useRef(null);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const profile = useSelector(getProfileState);
  const navigate = useNavigate();

  const defaultValues = {
    name: profile.name,
    email: profile.email,
    oldPassword: '',
    newPassword: '',
    DOB: profile.DOB,
    gender: profile.gender,
    country: profile.country,
    phone: profile.phone,
  };

  const { control, handleSubmit, setValue, reset } = useForm({ defaultValues });

  useEffect(() => {
    for (const key in defaultValues) {
      if (profile[key]) {
        setValue(key, profile[key]);
        key === 'DOB' && setValue(key, new Date(profile[key]));
      }
    }
  }, [profile]);

  const logout = () => {
    parent.current.hide();
    dispatch(
      openDialogue({
        show: true,
        type: 'confirm',
        title: 'Logout',
        content: 'Are You Sure You Want To Logout',
        onAccept: () => {
          localStorage.clear();
          navigate('/auth');
          dispatch(closeDialogue());
        },
        onReject: () => {
          dispatch(closeDialogue());
        },
      }),
    );
  };

  const deactivate = () => {
    parent.current.hide();
    dispatch(
      openDialogue({
        show: true,
        type: 'confirm',
        title: 'Deactivate THe Account',
        content: 'Are You Sure You Want To Deactivate This Account',
        onAccept: async () => {
          dispatch(setLoadingState(true));
          try {
            await axiosInstance.delete('users/me');
            localStorage.clear();
            navigate('/auth');
            dispatch(closeDialogue());
          } catch (error) {
            dispatch(closeDialogue());
          }
          dispatch(setLoadingState(false));
        },
        onReject: () => {
          dispatch(closeDialogue());
        },
      }),
    );
  };

  const onImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    const formDate = new FormData();
    formDate.append('image', e.target.files[0]);
    const profileRes = await axiosInstance.patch('users/changeProfileImage', formDate);
    dispatch(setProfileInfo({ ...profile, image: profileRes.data.image }));
    parent.current.hide();
  };

  const openProfileDialogue = () => {
    parent.current.hide();
    dispatch(
      openDialogue({
        show: true,
        type: 'dialogue',
        title: 'Change Profile Info',
        content: renderDialogueBody(),
        width: '80vw',
        // height: '80vh',
        onAccept: async () => {
          dispatch(setLoadingState(true));
          try {
            await axiosInstance.patch('users/me', {});
            dispatch(closeDialogue());
            dispatch(setLoadingState(false));
          } catch (err) {
            dispatch(setLoadingState(false));
          }
        },
        onReject: () => {
          dispatch(closeDialogue());
        },
      }),
    );
  };

  const onSubmit = async (data) => {
    const payload = { ...data };
    for (const key in payload) {
      const element = payload[key];
      if (!element) delete payload[key];
    }

    dispatch(setLoadingState(true));
    try {
      await axiosInstance.patch('users/me', payload);
      dispatch(closeDialogue());
    } catch (err) {
      console.log(err);
    }
    reset();
    dispatch(setLoadingState(false));
  };

  const renderDialogueBody = () => {
    return (
      <DialogueWarper onSubmit={handleSubmit(onSubmit)}>
        <ProfileFormEdit control={control} />
      </DialogueWarper>
    );
  };

  return (
    <Warper>
      {/* <ReactTooltip /> */}
      <img
        crossOrigin="anonymous"
        src={image || profile.image}
        alt=""
        data-tip="change profile image"
        onClick={() => {
          changeProfileImage.current.click();
        }}
      />
      <input type="file" ref={changeProfileImage} hidden onChange={onImageUpload} />
      <section className="profile__info">
        <span className="profile__info__name">{profile.name}</span>
        <span className="profile__info__email">{profile.email}</span>
      </section>
      <div onClick={openProfileDialogue}>
        <FaUserCog /> <span>Change profile info</span>
      </div>
      <div onClick={logout}>
        <IoLogOut /> <span>Logout</span>
      </div>
      <div onClick={deactivate}>
        <FaUserAltSlash /> <span>Deactivate the Account</span>
      </div>
    </Warper>
  );
};

export default ProfileMenu;
