import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UniversalModal from '../UniversalModal/UniversalModal';
import { addBoard } from '../../../redux/dataSlice/operations/board/addBoard';

import { getAllWallpapersAPI } from '../../../api/index.js';
import { Btn } from 'components/common/Btn/Btn';
import sprite from '../../../data/svg/sprite.svg';
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
  Close,
} from './NewBoard.styled';

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
];

export const ModalTask = ({ closeModal, edit = true }) => {
  const mode = edit
    ? { title: 'New board', button: 'Create' }
    : { title: 'Edit board', button: 'Edit' };
  const dispatch = useDispatch();

  const [selectedWallpaper, setSelectedWallpaper] = useState('');
  const [wallpaper, setWallpaper] = useState([]);
  const [selectIcon, setSelectIcon] = useState(null);

  console.log('wallpaper', wallpaper);

  const handleSelectIcon = el => {
    setSelectIcon(el);
  };

  const initialValues = {
    title: '',
    icon: selectIcon,
    backgroundImg: selectedWallpaper,
  };

  const handleSubmit = values => {
    const { title } = values;
    const dashboard = {
      title: title.toLowerCase(),
      backgroundURL: selectedWallpaper,
      icon: selectIcon.substring('icon-project_'.length),
    };

    console.log('dashboard', dashboard);

    if (dashboard.title) {
      dispatch(addBoard(dashboard));
      return `${dashboard.title} is already added to contact list`;
    } else {
      console.log('Added title please');
    }
    // resetForm();
    closeModal();
  };

  useEffect(() => {
    const getWALLPAPERS = async () => {
      try {
        const responsive = await getAllWallpapersAPI();
        setWallpaper(responsive.data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    getWALLPAPERS();
  }, []);

  return (
    <UniversalModal isOpen={true}>
      <Section>
        <SectionTitle>{mode.title}</SectionTitle>
        <Close>X</Close>

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
                      fill={el === selectIcon ? '' : '#898989'}
                      onClick={() => handleSelectIcon(el)}
                    >
                      <use href={sprite + '#' + el} />
                    </svg>
                  </div>
                ))}
              </RadioBtnWrapper>
            </FormWrapper>

            <FormWrapper>
              <FormTitle>Backgrounds </FormTitle>
              <RadioBtnWrapper>
                {wallpaper.map(items => {
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
                        src={items.desktopCloudURL}
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
            </FormWrapper>

            <Btn text={mode.button} variant={'primaryWithIcon'} type="Submit" />
          </ModalForm>
        </Formik>
      </Section>
    </UniversalModal>
  );
};
