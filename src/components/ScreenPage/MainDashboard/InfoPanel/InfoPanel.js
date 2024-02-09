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

export const InfoPanel = ({ priority, deadline }) => {
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
        <DeadlineSignal />
      </Box>
    </InfoContainer>
  );
};
