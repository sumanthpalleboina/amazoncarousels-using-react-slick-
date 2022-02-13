import styled from 'styled-components/macro'

export const Container = styled.div`
  margin: 10px;
`
export const PopupThumbNailImgContainer = styled.div`
  width: 100%;
  border-radius: 12px;
`
export const ThumbNail = styled.img`
  width: 100%;
  height: 100%;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  cursor: pointer;
  background: transparent;
  outline: none;
  align-self: flex-end;
`
export const MoviePlayerContainer = styled.div`
  margin-top: 12px;
  margin-left: 48px;
  margin-bottom: 48px;
  margin-right: 48px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 60%;
  }
`
