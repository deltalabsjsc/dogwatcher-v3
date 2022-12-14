import React from 'react'
import { Flex, Text, useModal } from '@thaihuuluong/dogwatcher-uikit'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import LoginModal from './LoginModal'


const GlobalSettings = () => {
  const [onPresentLoginModal] = useModal(<LoginModal />)
  const { theme } = useTheme()
  // const token = Decrypts();
  const tokenAuth = localStorage.getItem("tokenAuth")

  const handleSignout = ()=>{
    localStorage.removeItem('tokenAuth');
    // window.location.reload();  userAddress
  }
  
  return (
    <Flex alignItems="center">
      { 
       tokenAuth ? 
      <CustomButtonSignOut onClick={handleSignout}>
        <CsText
          textAlign="center"
          fontSize="14px"
          bold
          width="48px"
          color={theme.isDark ? 'textSubtle' : '#101133'}
        >
          Sign Out
        </CsText>
      </CustomButtonSignOut>
      : 
      <CustomButton
        onClick={onPresentLoginModal}
       >
        <CsText
          textAlign="center"
          fontSize="14px"
          bold
          width="48px"
          color={theme.isDark ? 'textSubtle' : '#101133'}
        >
          Sign in
        </CsText>
      </CustomButton>
    }
    </Flex>
  )
}

export default GlobalSettings

const CustomButton = styled.button`
    border: 2px solid #E6E8EC;
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    margin-right:10px;
    white-space:nowrap;
    margin:0;

    @media screen and (max-width: 320px) {
      width: 80px;
      padding: 12px 0px;
    }
`
const CustomButtonSignOut = styled(CustomButton)`
width:120px;
`

const CsText = styled(Text)`
   @media screen and (max-width: 320px) {
    font-size: 12px;
   }
`