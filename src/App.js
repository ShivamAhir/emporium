

import Home from './Components/Home';
import SkeletonBox from './Components/SkeletonBox/SkeletonBox';
import { useState ,useEffect} from 'react';
function App() {
  const [mainFlag,setMainFlag]=useState(true);
  useEffect(()=>{
    setTimeout(()=>(setMainFlag(false)),800)
  },[])
  return (
    <div>
      {
      mainFlag?<SkeletonBox/>: <Home/>
      }
    </div>
    
   
  );
}

export default App;
