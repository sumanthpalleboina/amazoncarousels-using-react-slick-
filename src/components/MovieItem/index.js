import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

import {
  Container,
  PopupThumbNailImgContainer,
  ThumbNail,
  ModalContainer,
  CloseButton,
  MoviePlayerContainer,
} from './styledComponents'

const MovieItem = props => {
  const {Movie} = props
  const {thumbnailUrl, videoUrl} = Movie
  return (
    <Container>
      <Popup
        className="popup-content"
        modal
        trigger={
          <PopupThumbNailImgContainer>
            <ThumbNail src={thumbnailUrl} alt="thumbnail" />
          </PopupThumbNailImgContainer>
        }
      >
        {close => (
          <ModalContainer>
            <CloseButton type="button" data-testid="closeButton">
              <IoMdClose size="28" color="#231f20" onClick={() => close()} />
            </CloseButton>
            <MoviePlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </MoviePlayerContainer>
          </ModalContainer>
        )}
      </Popup>
    </Container>
  )
}
export default MovieItem

/**  */
