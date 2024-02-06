import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivateJson } from 'services/axios';
import { useSelector } from 'react-redux';

import sprite from '../../../src/data/svg/sprite.svg';
import data from '../../../src/data/backgroundIcon/data';

import { Icon,NewBoardTitle, Input, IconTitle, IconWrap, BgIcon, FormBtn, BackgroundItem, BackgroundTitle, BackgroundImage } from './EditBoardModal.styled';

  const useBoardData = () => useSelector(selectBoardData);
  const selectBoardData = state => state.board.info;

const EditBoardModal = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const board = useBoardData();

  useEffect(() => {
    setValue('title', board.title);
    setSelectedIcon(board.icon);
    setSelectedBackgroundId(board.background);
  }, [board.background, board.icon, board.title, setValue]);


    const handleTitleChange = icon => {
        setSelectedIcon(icon);
        setValue('selectedIcon', icon);
    };

    const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('selectedIcon', icon);
    };
    
     const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('selectedBackgroundId', backgroundId);
  };

      const handleEditBoardForm = data => {
    const boardData = {
      boardId: board._id,
      body: {
        title: data.title,
        icon: data.selectedIcon,
        background: data.selectedBackgroundId,
      },
          };
          
           dispatch(editBoardById(boardData))
      .unwrap()
      .then(response => {
        setValue('title', data.title);
        setValue('selectedIcon', data.selectedIcon);
        setValue('selectedBackgroundId', data.selectedBackgroundId);
        onClose();
      })
      .catch(error => {
        console.error('Error:', error);
      });

    navigate(`${data.title.toLowerCase()}`);
    };

  const editBoardById = createAsyncThunk(
  'boards/edit',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.put(
        `/api/boards/${boardData.boardId}`,
        boardData.body
      );
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
        onClick={() => handleIconSelect(icon)}
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
      <NewBoardTitle>Edit Board</NewBoardTitle>
      <form onSubmit={handleSubmit(handleEditBoardForm)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title')}
          onChange={handleTitleChange}
        />

        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>

        <BackgroundTitle>Background</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>

        <FormBtn
          type="submit"
        />
      </form>
    </div>
  );
};

export default EditBoardModal;

