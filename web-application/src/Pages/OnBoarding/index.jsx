import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { onboardingdata } from '../../MockData/onboarding';

const OnBoarding = () => {

  const [onBoardingCtas, setOnBoardingCtas] = React.useState(false);

  return (
    <S.OnBoarding>
      <S.OnBoardingContent>

        <S.OnBoardingSlider>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            onReachEnd={() => setOnBoardingCtas(true)}
          >
            {onboardingdata.map((slide) => (
              <SwiperSlide key={slide.id} >
                <Slide data={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.OnBoardingSlider>

        {onBoardingCtas && (
          <S.OnBoardingCtas>
            <Link to='/cadastro'>
              <S.OnBoardingCta>
                Cadastro
              </S.OnBoardingCta>
            </Link>
            <Link to='/entrar'>
              <S.OnBoardingCta>
                Entrar
              </S.OnBoardingCta>
            </Link>
            <Link to='/home'>
              <S.OnBoardingCta>
                Entrar sem usuário
              </S.OnBoardingCta>
            </Link>
          </S.OnBoardingCtas>
        )}

      </S.OnBoardingContent>
    </S.OnBoarding>
  )
}

export default OnBoarding

// --------------------------- ONBOARDING SLIDES

export const Slide = (props) => {
  return (
    <S.Slide>
      <S.SlideImage>
        <img src={props.data.image} alt='' />
      </S.SlideImage>
      <S.SliderParagraph>
        <S.SliderTitle>
          {props.data.title}
        </S.SliderTitle>
        <S.SliderText>
          {props.data.text}
        </S.SliderText>
      </S.SliderParagraph>
    </S.Slide>
  )
}
