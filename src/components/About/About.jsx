import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center  h-screen bg-white text-gray-900 p-14 font-serif'>
      <h2 className='text-center text-2xl font-semibold mb-4'>About us</h2>
      <p className='text-center max-w-2xl mb-3'>Welcome to BusyBee – your efficient and engaging companion in the digital world! BusyBee was designed with a focus on delivering seamless user experiences and intelligent solutions, ensuring you stay productive and well-informed. Our project is dedicated to creating innovative tools that anticipate user needs, provide personalized insights, and make information easily accessible through a sleek, intuitive interface.</p>
     <hr className='w-56 h-1 mx-auto my-4 bg-gray-200 border-0'/>
      <h3 className='text-center text-2xl font-semibold m-4'>Our Vision</h3>
        <p className='text-center max-w-2xl mb-4'>BusyBee is more than just a project; it’s a commitment to empowering users with tools that make their online experience smooth and enjoyable. As we continue to evolve, our goal is to integrate cutting-edge features, intuitive design, and robust functionality tailored to meet your needs. We aim to create a digital space that is informative, user-centered, and built for your success.</p>
        <hr className='w-56 h-1 mx-auto my-4 bg-gray-200 border-0'/>
    </div>
    
    
  )
}

export default About
