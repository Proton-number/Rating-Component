import React from 'react'

function RatingTwo({isSubmitted, setIsSubmitted,rating, setRating}) {
 



  return (
    
      <div className="parent">
  
<div className= "container2"  >

<div align='center'>
<img src='/images/illustration-thank-you.svg' alt="" />
</div>


<div className='select' align='center'>
<p>You selected  {rating} out of 5 </p>
</div>

<div className='words2' align='center'>
 <h2>Thank you!</h2>
 <p>We appreciate you taking time to give a rating. If you ever need more support,don't hesitate to get in touch!!</p>
</div>
<div className="btn" align='center' >
<button onClick={() => setIsSubmitted(false)}  >Rate Again</button>
</div>
   
   </div>


      </div>


    
  
  )
}

export default RatingTwo
