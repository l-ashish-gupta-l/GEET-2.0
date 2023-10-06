import React from 'react'
import logo from "../../assest/Logo.jpg"
import avatar from "../../assest/profileavtar.png"
const Mainsidebar = () => {
  return (
    <div className='w-3/12 bg-white h-screen text-black'>
      <div className='logo w-full h-[15%] flex items-center justify-center'>
        <img src={logo} alt='logo' />
      </div>
      <hr />
      <div className="menu flex flex-col items-center justify-center w-full h-[40%] gap-[5%]  pr-[10%]">
        <div className="profile w-4/6 h-[30%] bg-white flex mt-  items-center gap-3" >
          <img src={avatar} alt="profilepic" />
          <div><h2 className='text-sm'>Hello !!</h2>
            <h1 className='font-bold'>ASHISH</h1></div>
        </div>
        <div className="mainmenu  w-4/6 h-[70%] bg-white">
          <h1 className='font-bold text-[#75B1FF]'>Menu</h1>
          <ul className='mx-5 my-3  '>
            <li className='my-5'><a href='' className='text-l'> <i class="ri-home-5-fill mr-3"></i>Home</a></li>
            <li className='my-5'><a href='' className='text-l'> <i class="ri-heart-fill mr-3"></i>Liked</a></li>
            <li className='my-5'><a href='' className='text-l'> <i class="ri-music-2-fill mr-3 whitespace-nowrap "></i>Create Playlist</a></li>
          </ul>
          <h1 className='font-bold text-[#75B1FF]'>My Library</h1>
          <ul className='mx-5 my-3  '>
            
            <li className='my-5'><a href='' className='text-l'> <i class="ri-play-list-add-fill font-bold mr-3"></i>Recent Playlist</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mainsidebar