import { useState } from 'react';
import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';
import './App.css';

function App() {
  const images = ["https://assets.codepen.io/6060109/form-stage-1.png", "https://assets.codepen.io/6060109/form-stage-2.png", "https://assets.codepen.io/6060109/form-stage-3.png", "https://assets.codepen.io/6060109/form-stage-4.png"];

  const [stage, setStage] = useState(1)

  const handleClick = () => {
    const currentStage = stage;
    let newStage = 0;
    if(currentStage === 3) {
      newStage = 0
    } else {
      newStage = currentStage + 1;
    }
    setStage(newStage);
    console.log(newStage);
  }

  return (
    <div className="App">
      <LeftContainer handleClick={handleClick} />
      <RightContainer stage={stage} 
      images={images}
      />
    </div>
  );
}

export default App;
