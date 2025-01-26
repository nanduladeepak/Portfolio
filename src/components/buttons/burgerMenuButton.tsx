import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const MenuButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 3px solid #333;
  left: calc(100% - 80px);
  // &:hover {
  //   background: transparent;
  //   box-shadow: none;
  // }
`;

const MenuButtonBurger = styled.div<{ isOpen: boolean }>`
  width: 50px;
  height: 6px;
  background: #333;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    height: 6px;
    background: #333;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.3s ease-in-out;
  }

  &::before {
    transform: translateY(-16px);
  }

  &::after {
    transform: translateY(16px);
  }

  // ${MenuButton}:hover & {
  //   background: red; /* Example of hover effect */
  // }

  ${props =>
    props.isOpen &&
    css`
      transform: translate(-50px);
      background: transparent;
      box-shadow: none;

      &::before {
        transform: rotate(45deg) translate(35px, -35px);
        background: red;
      }
      
      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
        background: red;
      }
    ß`}
`;


interface BurgerMenuButtonProps {
    isOpen: boolean;
    onClickCallback: () => void;
}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({ isOpen, onClickCallback }) => {
    return (
        <MenuButton onClick={onClickCallback}><MenuButtonBurger isOpen={isOpen} /></MenuButton>
    )
}

export default BurgerMenuButton;