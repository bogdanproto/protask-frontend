import { SupportBox, HelpButton } from './Support.styled';
import SupportLogoDesktop from "data/img/img_help_desktop.png";
import SupportLogoTablet from "data/img/img_help_tablet.png";
import SupportLogoMobile from "data/img/img_help_mobile.png";
import { supportText } from 'data';
import { Icon } from 'components/common/Icon/Icon'

export const Support = () => { 
    return (
        <>
            <SupportBox>
                <picture>
                    <source media="(min-width:1440px)" srcSet={SupportLogoDesktop}/>
                    <source media="(min-width:768px)" srcSet={SupportLogoTablet}/>
                    <img src={SupportLogoMobile} alt="Support Icon" />
                </picture>
                <p>{supportText}</p>
                <HelpButton type="button">
                    <Icon width={20} height={20} id={'icon-help_circle'}></Icon>
                    <span>Need help?</span>
                </HelpButton>
            </SupportBox>
        </>
    )
}