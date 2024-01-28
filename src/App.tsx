// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.tsx
import React, { useState, useEffect } from 'react';
import Tab from './components/Tab/Tab';
// import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { isMobileDevice } from './utils';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const tabs = [
    { id: 1, label: 'Home', content: <div>Home content</div> },
    { id: 2, label: 'About', content: <div>About content</div> },
    { id: 3, label: 'Contact', content: <div>Contact content</div> },
  ];

  return (
    <div>
      <Tab tabs={tabs} isMobile={isMobile} />
    </div>
  );
};

export default App;
