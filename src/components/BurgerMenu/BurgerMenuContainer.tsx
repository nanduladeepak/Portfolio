import React, { useState }  from 'react';
import styled, { css } from 'styled-components';
import BurgerMenuButton from '../buttons/burgerMenuButton';

// Styled components for the BurgerMenu component
const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'translateX(0)' : 'translateX(-250px)')};
`;

interface BurgerMenuContainerProps {
  // isOpen: boolean;
  // toggleDrawer: () => void;
  children?: React.ReactNode;
}

const BurgerMenuContainer: React.FC<BurgerMenuContainerProps> = ({ children }) => {

  const [isOpen,setIsOpen]= useState<boolean>(false);

  return (
    <>
      <MenuContainer isOpen={isOpen}>
        {children}
      </MenuContainer>
      <BurgerMenuButton isOpen={isOpen} onClickCallback={()=>setIsOpen(!isOpen)}/>
    </>
  );
};

export default BurgerMenuContainer;
