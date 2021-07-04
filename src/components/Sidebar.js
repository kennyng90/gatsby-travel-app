import React from "react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Link } from "gatsby"
import { Button } from "./Button"

const Sidebar = ({ isOpen }) => {
    const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <SidebarView>
        <SidebarContainer scrollNav={scrollNav} isOpen={isOpen}>
          <SidebarWrapper>
            <SidebarMenu>
              {menuData.map((item, index) => (
                <SidebarLinks
                scrollNav={scrollNav}
                  to={item.link}
                  key={index}
                >
                  {item.title}
                </SidebarLinks>
              ))}
              <SidebarBtn>
                <Button
                  primary="true"
                  round="true"
                  to="/true"
                  css={`
                    min-width: 10px;
                    width: 10px;
                  `}
                >
                  Book a Flight
                </Button>
              </SidebarBtn>
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarContainer>
      </SidebarView>
    </>
  )
}

export default Sidebar

export const SidebarView = styled.div`
  display: none;
  position: relative;
  overflow: hidden;
  top: 0;
  z-index: 998;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  transition: 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`

export const SidebarWrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SidebarMenu = styled.ul`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const SidebarLinks = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};;
  display: inline-block;
  font-size: 1.5rem;
  padding-bottom: 30px;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ scrollNav }) => (scrollNav ? "#f26a2e" : "dcdcdc")};
    transition: 0.3s ease-out;
  }
`

const SidebarBtn = styled.div`
  margin-top: 20px;
`
