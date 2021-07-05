import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { animateScroll as scroll } from "react-scroll";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
    <Nav scrollNav={scrollNav}>
      <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
      TRAVELY
      </NavLogo>
      <BurgerIcon onClick={handleClick} scrollNav={scrollNav}>
        {click ? (
          <AiOutlineClose onClick={toggle} />
        ) : (
          <FaBars onClick={toggle} />
        )}
      </BurgerIcon>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink scrollNav={scrollNav} to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/true">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 999;
  position: sticky;
  transition: 0.5s ease-in-out;
  top: 0;
`

const NavLogo = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  display: flex;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
`

const NavLink = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color:  ${({ scrollNav }) => (scrollNav ? "#f26a2e" : "#dcdcdc")};
    transition: 0.3s ease-out;
  }
`

const BurgerIcon = styled.div`
  display: none;
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
