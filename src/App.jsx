// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}

        <PopExit />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <MainContent />
      </div>

      {/* <script src="js/script.js"></script> */}
    </>
  );
}

export default App;
