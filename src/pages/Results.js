import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import {UserResult} from '../components/UserResult'
import { Personalizer } from '../components/Personalizer'
import ResultLayout from '../components/ResultLayout'


const Results = () => {
  const [display, setDisplay] = useState(<Loading/>)

  const data = JSON.parse(localStorage.getItem('cade-test'));

  let rankList = UserResult(data);

  useEffect(() => {
    return () => {
      Personalizer(rankList).then((result) => {

        console.log(result)
    
          // reset state/form
          // setProcessing(false);
        setDisplay(<ResultLayout career={result.rewardActionId} id={result.eventId}/>)
          // setAnalysis(result);
        });
    }
  }, [])

  return (
    <div className='h-screen flex items-center justify-center'>
     {display}
    </div>
      )
    };
    

export default Results