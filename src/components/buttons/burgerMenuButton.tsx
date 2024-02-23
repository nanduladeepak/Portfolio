import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const MenuButton = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 3px solid #333;

  ${props =>
        props.isOpen &&
        css`
      transform: translate(-50px);
      background: transparent;
      box-shadow: none;
    `}
`;

const MenuButtonBurger = styled.div`
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

  ${MenuButton}:hover & {
    background: red; /* Example of hover effect */
  }

  ${MenuButton}.isOpen & {
    transform: translate(-50px);
    background: transparent;
    box-shadow: none;
  }

  ${MenuButton}.isOpen &::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  ${MenuButton}.isOpen &::after {
    transform: rotate(-45deg) translate(35px, -35px);
  }
`;


interface BurgerMenuButtonProps {
    isOpen: boolean;
    onClickCallback: () => void;
}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({ isOpen, onClickCallback }) => {
    return (
        <MenuButton isOpen={isOpen} onClick={onClickCallback}><MenuButtonBurger /></MenuButton>
    )
}

export default BurgerMenuButton;