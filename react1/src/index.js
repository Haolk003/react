import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Data from './data';
import { FaQuoteRight,FaChevronRight,FaChevronLeft } from 'react-icons/fa';
const App = ()=>{
    const [index,setIndex]=useState(0);
   const {name ,id,job,image,text}=Data[index];
   const NextReview =()=>{
       setIndex((index)=>{
           let newIndex =index+1;
           return NumberSort(newIndex);
       });
   }
   const PrevReview=()=>{
       setIndex((index)=>{
           let newIndex = index -1;
           return NumberSort(newIndex);
       })
   }
   const NumberSort=(number)=>{
    if(number<0){
       return Data.length-1;
    }
    if(number>Data.length-1){
        return 0;
    }
    return number;
   }
   const RandomNumber =()=>{
       let newIndex =Math.floor(Math.random()*(Data.length));
       if (newIndex == index){
           newIndex++;
       }
      NumberSort(newIndex);
      setIndex(newIndex);
   }
    return(<div className='review'>
        <h2>Our Reviews</h2>
        <div className='content'>
        <div className='image'>
        <img src={image} alt="" />
         <div className='quote'>
        <FaQuoteRight />
        </div>
         </div>
        <h4>{`${name.charAt(0).toUpperCase()+ name.slice(1)}`}</h4>
        <div className='job'>{job.toUpperCase()}</div>
        <p className='text'>{text}</p>
        <div>
        <button className='btn-prev' onClick={PrevReview}>
            <FaChevronLeft />
        </button> 
        <button className='btn-next' onClick={NextReview}>
            <FaChevronRight />
        </button>
        </div>
        <button  className='btn-random' onClick={RandomNumber}>Suprise Me</button>
        </div>
    </div>)
}
ReactDOM.render(<App />,document.getElementById('root'));