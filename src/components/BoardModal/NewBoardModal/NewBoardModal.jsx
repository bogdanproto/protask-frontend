import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { axiosPrivateJson } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import sprite from '../../../data/svg/sprite.svg';
import data from '../../../data/backgroundIcon/data';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Icon,NewBoardTitle, Input, IconTitle, IconWrap, ErrorMessage, BgIcon, FormBtn, BackgroundItem, BackgroundTitle, BackgroundImage } from './NewBoardModal.styled';


const TitleSchema = yup
    .object({
        title: yup.string().required('Title is required'),
    })
    .required();

const NewBoardModal = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(TitleSchema),
        mode: 'onChange',
    });
    const [selectedIcon, setSelectedIcon] = useState('');
    const [selectedBackgroundId, setSelectedBackgroundId] = useState('');
    const dispatch = useDispatch();

    const handleTitleCgange = event => {
        setValue('title', event.target.value.toString());
    };

    const handelIconSelect = icon => {
        setSelectedIcon(icon);
        setValue('icon', icon);
    };

    const handleBackgroundSelect = backgroundId => {
        setSelectedBackgroundId(backgroundId);
        setValue('background', backgroundId.toString());
    };

    const handleCreateBoard = data => {
        dispatch(addNewBoard(data)).then(() => {
            setValue('title', '');
            setValue('icon', '');
            setValue('backgound', '');
            onClose();
        });
    };

     const addNewBoard = createAsyncThunk(
  'boards/add',
  async (board, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.post('/api/boards', board);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

    const renderIcons = () => {
        const icons = [
            'icon-project',
            'icon-star',
            'icon-loading',
            'icon-puzzle',
            'icon-container',
            'icon-lightning',
            'icon-colors',
            'icon-hexagon',
        ];

        return icons.map(icon => (
            <Icon
                key={icon}
                selected={selectedIcon === icon}
                onClick={() => handelIconSelect(icon)}
            >
                <use href={`${sprite}#${icon}`} />

            </Icon>
        ));
    };

    const renderBackgrounds = () => {
    return data.map(item => (
      <BackgroundItem
        key={item.id}
        isActive={selectedBackgroundId === item.id}
        onClick={() => handleBackgroundSelect(item.id)}
      >
        <BackgroundImage src={item.image} alt="Background" />
      </BackgroundItem>
    ));
  };

    return (
        <div>
            <NewBoardTitle>New Board </NewBoardTitle>
            <form onSubmit={handleSubmit(handleCreateBoard)}>
                <Input
                    id="newBoardInput"
                    type="text"
                    placeholder="Title"
                    {...register('title')}
                    onChange={handleTitleCgange} />
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                
                <IconTitle>Icons</IconTitle>
                <IconWrap>{renderIcons()}</IconWrap>

                <BackgroundTitle>Background</BackgroundTitle>
                <BgIcon>{renderBackgrounds()}</BgIcon>
                <FormBtn
                    type="submit" />
            </form>
        </div>
    );
};

export default NewBoardModal;