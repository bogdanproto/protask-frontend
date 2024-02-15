import { useSelector } from 'react-redux';
import { selectActiveBoard } from 'redux/dataSlice/selectors';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';
import { ScreenPage } from './Board.styled';
import { selectWallPapers } from 'redux/uiSlice/selectors';

// ========================

export const Board = () => {
  const activeBoard = useSelector(selectActiveBoard);
  const wallpapers = useSelector(selectWallPapers);
  const activeWallpaper = (wallppers, id) => {
    if (!wallpapers?.length) {
      return;
    }
    return wallppers.find(item => item._id === id);
  };

  return (
    <ScreenPage
      wallpaper={activeWallpaper(wallpapers, activeBoard?.backgroundImg)}
    >
      <HeaderDashboard boardTitle={activeBoard?.title} />
      <MainDashboard boardId={activeBoard?._id} />
    </ScreenPage>
  );
};
