import React from 'react'

const about = () => {
  return (
    <div className='main-container w-full h-auto grid bg-slate-500'>
 <div className='about flex justify-between px-24 py-20'>     
<div className="picture ">
  <img src="/Image/hero-picture.jpg" alt="hero-picture" width={250} height={150} 
  className='rounded-full'
  />
</div>

 <div className="intro w-auto ">
 <h1 className='text-4xl text-center font-serif rounded-3xl outline-double outline-4 bg-black opacity-65 text-yellow-50 my-5 mb-16'> Our Introduction </h1>     
<p className='flex ml-7 font-serif  text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Delectus maiores, cumque ratione omnis aut odit, consequatur<br/> veritatis recusandae expedita architecto blanditiis. Ratione <br/>totam sunt reprehenderit qui nihil pariatur alias! Ullam?</p>
</div>
</div>
    </div>
  )
}

export default about
