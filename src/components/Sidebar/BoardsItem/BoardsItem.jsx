import { Icon } from 'components/common/Icon/Icon'
import { BtnContainer } from './BoardsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'redux/dataSlice/operations/board/deleteBoard';

export const BoardsItem = ({ project, active }) => {
  const dispatch = useDispatch();
  const handleDelete = evt => {
    dispatch(deleteBoard(evt.target?.closest('button').dataset.id))
  };

  return (
      <>
      <Icon width={18} height={18} id={`icon-project_${project.icon}`}></Icon>
        <h3>{project.title}</h3>
        {active === true &&
            <BtnContainer>
              <button type="button">
                  <Icon width={16} height={16} id={'icon-pencil'}></Icon>
              </button>
              <button type="button" data-id={project._id}>
                  <Icon width={16} height={16} id={'icon-trash'} onClick={handleDelete}></Icon>
              </button>
          </BtnContainer>
        }
    </>
  );
};
