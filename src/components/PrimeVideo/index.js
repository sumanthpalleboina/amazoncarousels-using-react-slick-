import MoviesSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  PrimeImageContainer,
  PrimeImage,
  PrimeContainer,
  SliderHeading,
  SliderContainer,
  ImgBottomContainer,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  console.log(comedyMoviesList)
  return (
    <PrimeContainer>
      <PrimeImageContainer>
        <PrimeImage
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </PrimeImageContainer>
      <ImgBottomContainer>
        <SliderContainer>
          <SliderHeading>Action Movies</SliderHeading>
          <MoviesSlider moviesList={ActionMoviesList} />
        </SliderContainer>
        <SliderContainer>
          <SliderHeading>Comedy Movies</SliderHeading>
          <MoviesSlider moviesList={comedyMoviesList} />
        </SliderContainer>
      </ImgBottomContainer>
    </PrimeContainer>
  )
}

export default PrimeVideo
