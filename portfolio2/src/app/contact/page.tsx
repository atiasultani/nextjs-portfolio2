import React from "react";
import { Button } from "@/Components/ui/button";
const contact = () => {
  return (
    <div className="main w-screen h-100vh py-5 px-5 flex justify-between
         bg-gray-400
         md:py-10 md:px-8      
         ">
        
        <div className="c1 w-auto text-2xl 
        lg:px-10 ">
        <h2 className="font-bold font-serif py-4">Get in Touch</h2>
        <p className=" px-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form className=" px-4 space-y-11">
           <p className=" font-bold px-1">Enter Your Name : 
            <input className="input mt-4 " type="text" placeholder="Name" size={15}/>
        </p>
            <p className=" font-bold px-1">Enter Your E-Mail:
            <input className="input mt-4" type="email" placeholder="Email" size={15}/>
        </p>
            
        <textarea className="input px-5  md:px-24 py-24" placeholder="Message"></textarea>
        <br/> 
        <Button className="px-6 py-3 text-2xl">Send</Button>
        </form>
    </div>

<div className="c2 w-auto grid space-y-10 space-x-10 md:flex justify-evenly">
    
    <div className="grid grid-flow-col-1 items-center ml-9 md:pt-[9.5em]">
    <img src="Image/call dp.png" alt="call" width={70} height={70}
     className="rounded-full"
    />
<p className=" text-xl md:-mt-[17em]"><b>Phone No:</b> 123456789 <br/> 
<b>Mobile No: </b>0321-123456789</p>
</div>
<div className="grid grid-flow-col-2 items-center md:pt-[6.5em]">
        <img src="Image/email.jpg" alt="email" width={80} height={80}
         className="rounded-full "
        />
        <p className="text-xl md:-mt-[17em]"><b>Email Us:</b> <br/> MyPortfolio@abc.com</p>
</div>

<div className="grid grid-flow-col-3 items-center text-xl md:pt-[5em]">
    <img src="Image/location.jpg" alt="location" 
    width={70} height={70}
    className="rounded-full"
    />
<p className=" text-xl md:-mt-[16em]"><b>Address : </b>Lorem ipsum dolor sitempora <br/>dignissimos !</p>
</div>
</div>
</div>
  )
}

export default contact
