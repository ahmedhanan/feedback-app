import React from 'react';
import Score from './Score';

function Card() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='bg-white rounded-2xl p-8 text-center'>
      <h1 className='font-bold'>How would you rate your experience with us?</h1>
      <div className='flex justify-center mt-4 gap-1.5 flex-wrap'>
        {numbers.map((num, index) => (
          <Score key={index} number={num} isActive={false} />
        ))}
      </div>
      <div className='border border-grey mt-6 px-4 flex flex-col place-content-evenly rounded'>
        <textarea type='text' placeholder='Write a review' className='pt-4' />
        <button className='bg-grey px-4 text-white my-2 rounded-md my-4 hover:bg-green'>
          Send
        </button>
      </div>
    </div>
  );
}

export default Card;
