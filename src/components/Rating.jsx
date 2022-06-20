import React, { useState } from 'react'
import RatingTwo from './RatingTwo'







function Rating () {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [rating, setRating] = useState('')
 const Button = ({number}) =>{
  return <button onClick={() => setRating(number)}> {number} </button>
 }




  return (
    <>
    {!isSubmitted && (
 <div className='parent'>
  
 <div className='container'>
    <div className='star'>
     <svg>
     <image href="/images/icon-star.svg"  alt="" />
     </svg>
    
    </div>

    <div className='words'>

    <h3>How did we do?</h3>
      <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
     </div>

        <div className='numbers'> 
           <ul align='center' >

           <li className='one'>
           <Button number={1} />
          </li>
      
     <li className='two' > 
     <Button number={2} />
     </li>

      <li className='three'>
      <Button number={3} />
      </li>

      <li className='four'>
      <Button number={4} />
      </li>

       <li className='five'>
       <Button number={5} />
       </li>

         </ul>
      </div>


    <div className='btn' align='center'>
    <button onClick={() => setIsSubmitted(true)}  >SUBMIT</button>
     </div>

 </div>

</div>



    )}
     

{isSubmitted && <RatingTwo 

isSubmitted={isSubmitted}
 setIsSubmitted={setIsSubmitted}

 rating={rating}
 setRating={setRating}

  />}
 
</>


   

  )

  
}

export default Rating
