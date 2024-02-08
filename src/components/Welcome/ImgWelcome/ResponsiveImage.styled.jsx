import styled from 'styled-components';

export const ResponsiveImage = styled.img`
  margin-bottom: 14px;
  max-width: 124px;
  height: auto;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 162px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 162px;
  }
`;
