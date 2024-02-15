import { MoveIcon } from 'components/common/IconsLibrary';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCardsColumn } from 'redux/dataSlice/operations';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { IconButton } from '@mui/material';
import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
import { ColumnTitle, TargetColumnButton } from './MoveTooltip.styled';

export const MoveTooltip = ({ cardId, columns }) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const moveCard = ({ _id, columnId }) => {
    dispatch(changeCardsColumn({ _id, columnId }));
  };

  return (
    <Tooltip title="Move" placement="top">
      <>
        <IconButton
          color="red"
          size="small"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ padding: 0 }}
        >
          <ActionButton style={{ width: 24, height: 24 }}>
            <MoveIcon size={16} />
          </ActionButton>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {columns.map(column => (
            <MenuItem
              style={{ display: 'flex', justifyContent: 'space-between' }}
              key={column._id}
              onClick={() => moveCard({ _id: cardId, columnId: column._id })}
            >
              <TargetColumnButton>
                <ColumnTitle>{column.title}</ColumnTitle>

                <MoveIcon size={16} />
              </TargetColumnButton>
            </MenuItem>
          ))}
        </Menu>
      </>
    </Tooltip>
  );
};
