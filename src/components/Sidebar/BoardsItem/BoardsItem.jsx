import { Icon } from 'components/common/Icon/Icon'
import { BtnContainer } from './BoardsItem.styled';

export const BoardsItem = ({ project, active }) => {
  return (
      <>
        <Icon width={18} height={18} id={project.icon}></Icon>
        <h3>{project.name}</h3>
        {active === true &&
            <BtnContainer>
              <button type="button">
                  <Icon width={16} height={16} id={'icon-pencil'}></Icon>
              </button>
              <button type="button">
                  <Icon width={16} height={16} id={'icon-trash'}></Icon>
              </button>
          </BtnContainer>
        }
    </>
  );
};
