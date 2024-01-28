// BurgerMenu.tsx
import React from 'react';
import styled from 'styled-components';

interface BurgerMenuProps {
  onClick: () => void;
}

const StyledBurger = styled.div`
  /* Your burger menu styling */
`;

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <StyledBurger onClick={onClick}>
      {/* Your burger menu icon */}
    </StyledBurger>
  );
};

export default BurgerMenu;
