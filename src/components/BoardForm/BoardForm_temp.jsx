import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Btn } from 'components/common/Btn/Btn';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Section,
  TitleInput,
  SectionTitle,
  ErrorSection,
  ModalForm,
  ErrorText,
} from './BoardForm_temp.styled';
import { addBoard, updateBoard } from 'redux/dataSlice/operations';
import sprite from 'data/svg/sprite.svg';
import { selectWallPapers } from 'redux/uiSlice/selectors';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { useTheme } from 'styled-components';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
});

const icons = [
  'icon-project_colors',
  'icon-project_container',
  'icon-project_hexagon',
  'icon-project_lightning',
  'icon-project_loading',
  'icon-project_puzzle',
  'icon-project_star',
  'icon-project_project',
];

export const BoardFormTemp = ({ closeModal, id = null, title = null }) => {
  const mode = id
    ? { title: 'Edit board', button: 'Edit' }
    : { title: 'New board', button: 'Create' };

  const theme = useTheme();
  const dispatch = useDispatch();

  const wallpapers = useSelector(selectWallPapers);
  const isSuccessDispatch = useSelector(succesMsgSelectorData);

  const [selectedWallpaper, setSelectedWallpaper] = useState('');
  const [selectIcon, setSelectIcon] = useState(null);
  const [errorIcon, setErrorIcon] = useState(false);
  const [errorBI, setErrorBI] = useState(false);

  const initialValues = {
    title: title ? title : '',
    icon: selectIcon,
    backgroundImg: selectedWallpaper,
  };

  useEffect(() => {
    if (isSuccessDispatch) {
      closeModal();
    }
  }, [closeModal, isSuccessDispatch]);

  const handleSelectIcon = el => {
    setSelectIcon(el);
  };

  const handleSubmit = values => {
    setErrorIcon(false);
    setErrorBI(false);
    const { title } = values;

    if (!selectIcon || !selectedWallpaper) {
      setErrorIcon(true);
      setErrorBI(true);
      return;
    }
    const dashboard = {
      title: title,
      backgroundImg: selectedWallpaper,
      icon: selectIcon.substring('icon-project_'.length).toLowerCase(),
    };

    if (id && id !== '') {
      dispatch(updateBoard({ ...dashboard, _id: id }));
      return;
    }

    dispatch(addBoard(dashboard));
  };

  return (
    <Section>
      <SectionTitle>{mode.title}</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              autoComplete="off"
            />
            <ErrorSection
              name="title"
              component="div"
              style={{
                fontSize: '13px',
                paddingLeft: '2px',
                paddingTop: '4px',
              }}
            />
          </FormWrapper>
          <FormWrapper>
            <FormTitle>Icons </FormTitle>
            <RadioBtnWrapper>
              {icons.map((el, idx) => (
                <div key={idx}>
                  <svg
                    className={selectIcon === el ? 'active' : ''}
                    style={{ cursor: 'pointer' }}
                    width={18}
                    height={18}
                    stroke={
                      el === selectIcon
                        ? theme.colors.iconActiveColor
                        : theme.colors.iconMainColor
                    }
                    fill={el === selectIcon ? 'none' : 'none'}
                    onClick={() => handleSelectIcon(el)}
                  >
                    <use href={sprite + '#' + el} />
                  </svg>
                </div>
              ))}
            </RadioBtnWrapper>
            {errorIcon && <ErrorText>{'Icons is required'}</ErrorText>}
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Backgrounds</FormTitle>
            <RadioBtnWrapper>
              {wallpapers?.length &&
                wallpapers.map(items => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '30px',
                        height: '30px',
                        overflow: 'hidden',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        border:
                          selectedWallpaper === items._id ? '1px solid' : '',
                      }}
                      key={items._id}
                      onClick={() => setSelectedWallpaper(items._id)}
                    >
                      <img
                        alt="wallpaper"
                        src={items.iconCloudURL}
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  );
                })}
            </RadioBtnWrapper>
            {errorBI && <ErrorText>{'Background is required'}</ErrorText>}
          </FormWrapper>

          <Btn text={mode.button} variant={'primaryWithIcon'} type="Submit" />
        </ModalForm>
      </Formik>
    </Section>
  );
};
