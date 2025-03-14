import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div className='relative bg-[#222831] '> 
       <header className="flex justify-between h-[100px] items-center px-24 py-4">
        <h1 className='text-[#EEEEEE] font-bold'>GoodyWain-Design</h1>
        <div className="flex space-x-8">
          <h1 className='text-[#EEEEEE] text-sm font-normal'>Home</h1>
          <h1 className='text-[#EEEEEE] text-sm font-normal'>About me</h1>
          <h1 className='text-[#EEEEEE] text-sm font-normal'>Contact</h1>
        </div>
        </header>
        {/* HERO */}
        
        <div className="flex gap-8 h-screen items-center justify-center px-24">
        <img
            src="/arrow1.svg"
            className="   object-cover absolute left-10 top-"
            alt="arrowimage"
          />
          <div className='w[60%] -mt-32 flex flex-col items-start justify-center space-y-4'>
            <h1 className='text-7xl  text-white font-bold'>Creative Frontend <span className='text-pink-400'>developer</span>
              </h1>
              <div className="space-x-4 flex items-center pt-24">
            <Button title="Hire me"  green/>
            <Button title="Download cv"/>
          </div>
         
          </div>
          <div className="w-[60%] flex items-center justify-center relative ">
          <img
            src="/bgimage1.svg"
            className="   object-cover absolute -right-2"
            alt="heroimage"
          />
          <img
            src="/image1bottom.svg"
            className="   object-cover absolute top-[280px] right-40"
            alt="heroimage"
          />
          <img
            src="/image1.svg"
            className="pt-80  object-cover absolute right-24"
            alt="heroimage"
          />
           
        </div>
        <div className='mt-[550px]'>
          <img
            src="/arrowdown.svg"
            className=" w-[5%]  object-cover absolute left-[450px]"
            alt="arrowdown"
          />
          </div>
        </div>
       <div className="flex h-screen items-center justify-center px-24 mt-32 ">
        <div className="w-[50%]  flex flex-col items-start space-y-4 relative">
        <img
            src="/music2.svg"
            className="w-[7%]   object-cover absolute right-70 -top-10"
            alt="heroimage2"
          />
           <img
            src="/lightbulb.svg"
            className="w-[10%]   object-cover absolute right-48 top-0"
            alt="heroimage2"
          />
           <img
            src="/arrow2.svg"
            className="w-[20%]   object-cover absolute right-48 top-80"
            alt="heroimage2"
          />
        <h2 className='text-7xl  text-white font-bold'>About 
           <span className='text-pink-400'>me</span></h2>
        <p className='text-white text-md w-[75%]'>orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
           libero et velit interdum, ac aliquet odio mattis. Class aptent taciti 
           sociosqu ad litora torquent per conubia nostra, per inceptos 
          himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... 
          <b>Read more</b></p>
        </div>
        <div className="w-[50%] top-24 flex items-center justify-center relative">
        <img
            src="/bgimage2.svg"
            className="w-[100%]   object-cover absolute right-0"
            alt="heroimage2"
          />
          <img
            src="/image1bottom.svg"
            className="w-[60%]   object-cover absolute right-32 top-72"
            alt="heroimage"
          />
          <img
            src="/image2.svg"
            className="w-[60%]   object-cover absolute right-32 top-2"
            alt="heroimage"
          />
        </div>
        </div>   
        <div className="flex h-screen items-center justify-center px-24 ">
          </div>      
    </div>
  )
}

export default App