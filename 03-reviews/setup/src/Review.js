import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const prevPerson = () =>{
    if(index === 0){
      setIndex(3)
    } else{
      setIndex(index-1)
    }
      
  }
  const nextPerson = () =>{
    if(index === 3){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }
  //obecný zápis by byl tenhle 
  // const checkNumber = (number) =>{
  //   if(number > people.length -1){
  //     return 0
  //   }
  //   if(number < 0){
  //     return people.length - 1
  //   }
  //   return number
  // }
  //
  // const nextPerson = () =>{
  //   setIndex((index)=>{
  //     let newIndex = index +1
  //     return checkNumber(newIndex)
  //   })
  // }
  
  
  const randomPerson = () =>{
    return Math.floor(Math.random() * people.length) 
    
  }

  return (
  <>
  <article className="review">
    <div className="img-container">
    <img src={image} alt={name} className="person-img" />
    <span className='quote-icon'><FaQuoteRight/></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
    <button className='next-btn' onClick={prevPerson}>
    <FaChevronLeft/>
    </button>
    <button className='prev-btn' onClick={nextPerson}>
    <FaChevronRight/>
    </button>
    <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </div>
  </article>
  </>
  )
};

export default Review;
