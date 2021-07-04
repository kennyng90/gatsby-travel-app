import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Button } from "../components/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <NotFoundContainer>
        <NotFoundBg />
        <NotFoundContent>
          <NotFoundItems>
            <Fade duration={1000} delay={500}>
              <NotFoundH1>404: Error Not Found</NotFoundH1>
            </Fade>
            <Fade duration={1000} delay={1000}>
              <Button primary="true" big="true" round="true" to="/">
                Go Back
              </Button>
            </Fade>
          </NotFoundItems>
        </NotFoundContent>
      </NotFoundContainer>
    </Layout>
  )
}

export default NotFoundPage

const NotFoundContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
`

const NotFoundBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const NotFoundContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const NotFoundItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const NotFoundH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 3rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
