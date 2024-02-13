import { useFormik } from 'formik';
import {
  AddButton,
  Input,
  InputBoxErr,
  RadioBtn,
  RadioBtnImgWrapper,
  RadioBtnSvgWrapper,
} from 'components/common';
import { BoardFormStyled } from './BoardForm.styled';
import { boardCreateSchema } from 'const';
import { useDispatch, useSelector } from 'react-redux';
import { selectWallPapers } from 'redux/uiSlice/selectors';
import { listBoardIcon } from 'components/common/IconsLibrary';
import { useEffect } from 'react';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { addBoard, updateBoard } from 'redux/dataSlice/operations';

export const BoardForm = ({
  boardId,
  title,
  icon,
  backgroundImg,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const wallpapers = useSelector(selectWallPapers);
  const isSuccessDispatch = useSelector(succesMsgSelectorData);

  const formik = useFormik({
    initialValues: {
      title: title ? title : '',
      icon: icon ? icon : listBoardIcon[0]?.id,
      backgroundImg: backgroundImg ? backgroundImg : wallpapers[0]?._id,
    },
    validationSchema: boardCreateSchema,

    onSubmit: values => {
      if (boardId) {
        dispatch(updateBoard({ ...values, _id: boardId }));
        return;
      }
      dispatch(addBoard({ ...values }));
    },
  });

  useEffect(() => {
    if (isSuccessDispatch) {
      closeModal();
    }
  }, [closeModal, isSuccessDispatch]);

  return (
    <>
      <BoardFormStyled onSubmit={formik.handleSubmit}>
        <h1> {boardId ? 'Edit board' : 'Add board'}</h1>

        <InputBoxErr>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder="Title"
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </InputBoxErr>

        <h2>Icons</h2>
        <RadioBtnSvgWrapper>
          {listBoardIcon?.map(({ id, component }) => (
            <div key={id}>
              <RadioBtn
                name={'icon'}
                value={id}
                id={id}
                onChange={formik.handleChange}
                checked={formik.values.icon === id}
                content={component}
              />
            </div>
          ))}
        </RadioBtnSvgWrapper>

        <h2>Background</h2>
        <RadioBtnImgWrapper>
          {wallpapers?.map(({ _id, iconCloudURL }) => (
            <div key={_id}>
              <RadioBtn
                name={'backgroundImg'}
                value={_id}
                id={_id}
                onChange={formik.handleChange}
                checked={formik.values.backgroundImg === _id}
                content={<img src={iconCloudURL} alt="backgroundImg" />}
              />
            </div>
          ))}
        </RadioBtnImgWrapper>

        <AddButton type="submit" disabled={!formik.dirty}>
          {boardId ? 'Edit' : 'Add'}
        </AddButton>
      </BoardFormStyled>
    </>
  );
};
