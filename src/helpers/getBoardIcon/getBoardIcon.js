import {
  ProjectIcon,
  StarIcon,
  LoadingIcon,
  PuzzleIcon,
  ContainerIcon,
  LightningIcon,
  ColorsIcon,
  HexagonIcon,
} from 'components/common/IconsLibrary/index';

export const getBoardIcon = icon => {
  switch (icon) {
    case 'project':
      return <ProjectIcon size={18} />;
    case 'star':
      return <StarIcon size={18} />;
    case 'loading':
      return <LoadingIcon size={18} />;
    case 'puzzle':
      return <PuzzleIcon size={18} />;
    case 'container':
      return <ContainerIcon size={18} />;
    case 'lightning':
      return <LightningIcon size={18} />;
    case 'colors':
      return <ColorsIcon size={18} />;
    case 'hexagon':
      return <HexagonIcon size={18} />;
    default:
      return <ProjectIcon size={18} />;
  }
};
