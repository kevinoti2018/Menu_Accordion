import {useState} from 'react'
import questions from './data';
import Questions from './components/Questions';
const App = () => {
  const [quizes,setQuizes]= useState(questions)
  console.log(quizes);
  return( 
    <main>
      <Questions quizes={quizes}/>
    </main>
    
    )
};
export default App;
