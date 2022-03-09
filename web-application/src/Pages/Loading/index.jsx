import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

import Logo from '../../Assets/logo.png'

const Loading = () => {

  const navigate = useNavigate()

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/onboarding')
    }, 3000);
  })

  return (
    <S.Loading>
      <S.LogoContainer>
        <S.LogoImage src={Logo} alt='' />
      </S.LogoContainer>
    </S.Loading>
  )
}

export default Loading