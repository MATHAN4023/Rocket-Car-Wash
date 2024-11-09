import React, { useState } from 'react';
import Promo from './Components/Promo';
import HorizontalScroll from './Components/HorizontalScroll';
import MoreService from './Components/MoreService';


function App() {
  // const [horizontalScrollCompleted, setHorizontalScrollCompleted] = useState(false);

  return (
    <>
      <Promo />
      {/* <HorizontalScroll setHorizontalScrollCompleted={setHorizontalScrollCompleted} />
      {horizontalScrollCompleted && <MoreService />} */}

      <HorizontalScroll />
      <MoreService />
    </>
  );
}

export default App;
