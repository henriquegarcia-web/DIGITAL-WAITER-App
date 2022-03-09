import styled from "styled-components";

import { 
  Screen,
  Button,
} from '../../Utils/globalstyles'

export const Register = styled(Screen)`
  
`

export const RegisterContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 30px;
`

export const RegisterHeader = styled.div`
  font-size: 20px;
  margin-bottom: 30px;

  b {
    font-weight: 800;
  }
`

export const RegisterForm = styled.div`
  
`

export const RegisterFormInput = styled(Button)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    font-size: 18px;
    margin-right: 10px;
  }
`