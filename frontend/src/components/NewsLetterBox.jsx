import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus odit nesciunt nam odio facere suscipit nostrum quidem reprehenderit harum quaerat cupiditate omnis eum magnam id atque officiis ex, expedita ut!
            </p>
            <form onSubmit={onSubmitHandler}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type='email' placeholder='Enter your email' required
                    className='w-full sm:flex-1 outline-none' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer hover:scale-105 transition ease-in-out'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
