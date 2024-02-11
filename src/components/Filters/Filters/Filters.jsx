import { FiltersStyled, customStyles, ModalStyled, InputRow, BtnClose, SublineRow } from './Filters.styled';
import { Icon } from 'components/common/Icon/Icon';
import { Input } from 'components/common/Input/Input';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { selectFilteredCards } from 'redux/dataSlice/selectors';
    
export const Filters = () => {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClick = evt => {
        console.log(evt.target.value);
        dispatch(selectFilteredCards(evt.target.value))
    }
  
    return (
        <>
            <FiltersStyled type="button" onClick={openModal} id='filterButton'>
                <Icon width={16} height={16} id={'icon-filter'}></Icon>
                Filters
            </FiltersStyled>
                
            <ModalStyled
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Filters Modal"
                ariaHideApp={false}
                parentSelector={() => document.querySelector('#filterButton')}
                >
                <BtnClose onClick={closeModal}><IoMdClose size={18}/></BtnClose>
                <h2>Filters</h2>
                <SublineRow>
                    <h3>Label color</h3>
                    <button type="button">Show  all</button>
                </SublineRow>

                <InputRow>
                    <Input type="radio" id="without" value="without" name="filter" onClick={handleClick}></Input>
                    <label htmlFor='without'>Without priority</label>
                </InputRow>
                <InputRow>
                    <Input type="radio" id="low" value="low" name="filter" onClick={handleClick}></Input>
                    <label htmlFor='low'>Low</label>
                </InputRow>
                <InputRow>
                    <Input type="radio" id="medium" value="medium" name="filter" onClick={handleClick}></Input>
                    <label htmlFor='medium'>Medium</label>
                </InputRow>
                <InputRow>
                    <Input type="radio" id="high" value="high" name="filter" onClick={handleClick}></Input>
                    <label htmlFor='high'>High</label>
                </InputRow>
            </ModalStyled>
        </>
    );
};