import React from 'react'
import * as S from './style'

import {
  FiChevronLeft,
} from 'react-icons/fi'

const Header = ({ goBack, title }) => {
  return (
    <S.Header>
      {goBack && (
        <S.HeaderGoBack>
          <FiChevronLeft />
        </S.HeaderGoBack>
      )}
      {title && (
        <S.HeaderTitle>
          {title}
        </S.HeaderTitle>
      )}
    </S.Header>
  )
}

export default Header