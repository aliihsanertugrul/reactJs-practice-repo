import React from 'react'
import Header from './components/header'
import SocialMenu from './components/header/social-menu'
import Logo from './components/header/logo'
import MainMenu from './components/header/main-menu'
import Footer from './components/footer'
import Copyright from './components/footer/copyright'
import FooterMenu from './components/footer/footer-menu'
import Main from './components/main'
import Banner from './components/main/banner'
import About from './components/main/about'
import WhatToDo from './components/main/what-to-do'
import Resume from './components/main/resume'
import Portfolio from './components/main/portfolio'
import Client from './components/main/client'
import Contact from './components/main/contact'

const App = () => {
  return (
    <>
      <Header>
        <Logo/>
        <SocialMenu/>
        <MainMenu/>
      </Header>

      <Main>
        <Banner/>
        <About/>
        <WhatToDo/>
        <Resume/>
        <Portfolio/>
        <Client/>
        <Contact/>
      </Main>

      <Footer>
        <Copyright/>
        <FooterMenu/>
      </Footer>
    
    </>
  )
}

export default App