import React from 'react'

const Header = () => {
  return (
    <div className='w-full text-white'>
      <div className="header flex justify-between px-[3%] items-center w-full h-[10vh] ">
        {/* <button className=' bg-white h-[50%] flex w-10 items-center rounded-3xl '></button> */}
        <button className=' bg-white h-[50%] text-black font-light text-gray-400 justify-center text-3xl flex w-10 items-center rounded-3xl    '><i class="ri-arrow-left-s-line"></i> </button>
        <button className=' bg-white h-[50%] text-black font-light justify-center text-3xl flex w-10 items-center rounded-3xl   -ml-7 '><i class="ri-arrow-right-s-line"></i> </button>
        <div className="search w-[55%] bg-white h-[50%] flex  items-center rounded-3xl px-5"><i class="ri-search-2-line text-black  text-3xl text-gray-400 "></i>
          <input type='text' placeholder='Search Songs' className='px-3 text-black  w-full'/>
        </div>
        <button className=' bg-white h-[50%] flex justify-center w-10 items-center rounded-3xl '><i class="ri-notification-3-fill text-black text-2xl"></i></button>
        <button className=' bg-white h-[50%] gap-5 flex w-fill text-black text-xl items-center rounded-3xl px-10'><i class="ri-vip-crown-fill  "></i> Upgrade to premium</button>
      </div>
    </div>
  )
}

export default Header