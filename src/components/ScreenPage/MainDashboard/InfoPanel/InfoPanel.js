import { BellIcon } from 'components/common/IconsLibrary';
import {
  InfoContainer,
  Box,
  InfoBox,
  DeadlineSignal,
  InfoTitle,
  InfoText,
  PriorityWrapper,
  PriorityIcon,
} from './InfoPanel.styled';
import { Tooltip } from '@mui/material';
import { getDeadlineMsg } from 'helpers';

export const InfoPanel = ({ priority, deadline }) => {
  const { msg, isToday, daysRest } = getDeadlineMsg(deadline);

  return (
    <InfoContainer>
      <Box>
        <InfoBox>
          <InfoTitle>Priority</InfoTitle>
          <PriorityWrapper>
            <PriorityIcon priority={priority} />
            <InfoText>{priority}</InfoText>
          </PriorityWrapper>
        </InfoBox>
        <InfoBox>
          <InfoTitle>Deadline</InfoTitle>
          <InfoText>{deadline}</InfoText>
        </InfoBox>
      </Box>
      <Box>
        <Tooltip title={msg} placement="top">
          {isToday ? (
            <DeadlineSignal $isPast={daysRest < 0}>
              <BellIcon size={16} />
            </DeadlineSignal>
          ) : (
            <></>
          )}
        </Tooltip>
      </Box>
    </InfoContainer>
  );
};
