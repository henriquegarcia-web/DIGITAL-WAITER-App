import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/';

import { 
  FaGoogle,
  FaFacebook,
  FaFacebookF
} from "react-icons/fa";
import Header from '../../Components/Header';

const Register = () => {
  return (
    <S.Register>
      <Header goBack={true} title='Cadastro' />

      <S.RegisterContents>
        <S.RegisterHeader>
          Venha fazer parte do <b>Buck's Burgers</b> 
        </S.RegisterHeader>
        <S.RegisterForm>
          <S.RegisterFormInput>
            <FaFacebook />
            Continuar com Facebook
          </S.RegisterFormInput>
          <S.RegisterFormInput>
            <FaGoogle />
            Continuar com Google
          </S.RegisterFormInput>
        </S.RegisterForm>
      </S.RegisterContents>
    </S.Register>
  )
}

export default Register