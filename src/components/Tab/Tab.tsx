import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerMenuContainer from '../BurgerMenu/BurgerMenuContainer'; // Import the BurgerMenuContainer component

// Define the tab item type
interface TabItem {
    id: number;
    label: string;
    content: React.ReactNode;
}

// Props for the Tab component
interface TabProps {
    tabs: TabItem[];
    isMobile: boolean;
}

// Styled components for the Tab component
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px; /* Adjust as needed */
`;

const TabHeader = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};

  @media (max-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  border: none;
  padding: 10px;
  background-color: ${({ active }) => (active ? '#ccc' : 'transparent')};
  cursor: pointer;
`;

const TabContent = styled.div`
  margin-top: 10px;
`;

const Tab: React.FC<TabProps> = ({ tabs, isMobile }) => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
    };

    return (
        <TabContainer>

            {
                isMobile ? (
                    <BurgerMenuContainer>
                        {tabs.map((tab) => (
                            <div key={tab.id}>
                                <div
                                    style={{ backgroundColor: activeTab === tab.id ? '#ccc' : 'transparent' }}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            </div>
                        ))}
                    </BurgerMenuContainer>
                ):(
                    <TabHeader isMobile={isMobile}>
                        {tabs.map((tab) => (
                            <TabButton
                                key={tab.id}
                                active={activeTab === tab.id}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.label}
                            </TabButton>
                        ))}
                    </TabHeader>
                )
            }
            <TabContent>
                {tabs.map((tab) =>
                    activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
                )}
            </TabContent>
        </TabContainer>
    );
};

export default Tab;
