import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/59b68869-45b5-49ea-b488-c41ba4e87485" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-9'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ' >Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - razairshad04@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button onClick className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-xl bg-green-400 border-none font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default Contact