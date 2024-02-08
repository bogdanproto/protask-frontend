import { ResponsiveImage } from './ResponsiveImage.styled';
import welcomeImage from 'data/img/img_welcom_desktop.png';

export const ImgWelcome = ({ ...props }) => {
  return (
    <>
      <ResponsiveImage src={welcomeImage} alt="Img Auth User" {...props} />
    </>
  );
};
