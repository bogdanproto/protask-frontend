import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(7)}
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(12)};

  outline: 2px solid blueviolet;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
`;

export const CardDescription = styled.p`
  color: red;
`;
