import styled from "styled-components";

import { 
  Screen,
  Button
} from '../../Utils/globalstyles'

export const OnBoarding = styled(Screen)`
  
`

export const OnBoardingContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`

// -------------------------- SLIDER

export const OnBoardingSlider = styled.div`
  margin-bottom: 40px;
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

export const SlideImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    height: 200px;
  }
`

export const SliderParagraph = styled.div`
  text-align: center;
`

export const SliderTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`

export const SliderText = styled.div`
  font-size: 16px;
  font-weight: 300;
  padding: 0 10px;
  color: rgba(0, 0, 0, 0.8);
`

// -------------------------- CTAS 

export const OnBoardingCtas = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);

  button {
    margin-bottom: 10px;

    &:last-child {
      margin: 10px 0 0 0;
    }
  }
`

export const OnBoardingCta = styled(Button)`
  width: 100%;
`