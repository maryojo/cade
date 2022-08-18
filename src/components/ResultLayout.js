import React, { useState, useEffect }from 'react'
import { Reward } from './Reward'

const ResultLayout = ({career, id}) => {
  const [ feedback, setFeedback ] = useState(null);
  const [ info, setInfo ] = useState(<p>Hiii</p>);
  const [image, setImage ] = useState(<div></div>);
  const wikiURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${career}`;


  useEffect(() => {
    return () => {
      fetch(wikiURL)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setInfo(<p>{data.extract}</p>);
        setImage(<img src={data.thumbnail.source} alt={data.title}/>)
      })
      .catch(err => console.error(err));
    };
  }, []);


  const onClickYes = () =>{
    setFeedback(0.8);
  }

  const onClickNo = () =>{
    setFeedback(0.1);
  }

  // useEffect(() => {
  //   return () => {
  //     Reward(id).then((result) => {
  //       console.log(result)
  //         result = feedback;
  //       console.log(result)
  //       });
  //   }


  return (
    <section className='p-16 '>
        <div className='flex flex-col lg:flex-row space-y-10 lg:space-x-10'>
          <div>{image}</div>
          <div className='w-[70%]'>
          <p className='text-2xl font-medium mb-5'>The career pathway predicted is {career}</p>
          <p className=' text-gray-500 text-md md:text-md mb-10'>{info}</p>
          <div className='space-y-2'>
          <h3>Would you consider a career in this field?</h3>
          <div className='flex flex-row space-x-7'>
          <div>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
            Yes
          </div>
          <div>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" /></svg>
            No
          </div>
          </div>
          {/* <p>The event is {id}</p> */}
        </div>
          </div>
          
        </div>
        
    </section>
  )
}

export default ResultLayout