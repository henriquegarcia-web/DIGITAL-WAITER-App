import styled, { keyframes } from "styled-components";

import { 
  Screen,
} from '../../Utils/globalstyles'

const bouncing = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Loading = styled(Screen)`
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.img`
  width: 80%;
  max-width: 300px;
  animation: ${bouncing} 2s infinite;
`
