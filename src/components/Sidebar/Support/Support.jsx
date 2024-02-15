import { SupportBox, HelpButton } from './Support.styled';
import SupportLogoDesktop from 'data/img/img_help_desktop.png';
import SupportLogoTablet from 'data/img/img_help_tablet.png';
import SupportLogoMobile from 'data/img/img_help_mobile.png';
import { supportText } from 'data';
import { useModal } from '../../../hooks/useModal';
import { NeedHelpForm } from './NeedHelpForm';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { HelpIcon } from 'components/common/IconsLibrary/index';
import { IconWrapper } from 'components/BoardForm/BoardForm_temp.styled';

export const Support = () => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <SupportBox>
        <picture>
          <source media="(min-width:1440px)" srcSet={SupportLogoDesktop} />
          <source media="(min-width:768px)" srcSet={SupportLogoTablet} />
          <img src={SupportLogoMobile} alt="Support Icon" />
        </picture>
        <p>{supportText}</p>
        <HelpButton onClick={open} type="button">
          <IconWrapper>
            <HelpIcon size={20} />
          </IconWrapper>
          Need help?
        </HelpButton>
        <UniversalModal isOpen={isOpen} onClose={close}>
          <NeedHelpForm closeModal={close} />
        </UniversalModal>
      </SupportBox>
    </>
  );
};
