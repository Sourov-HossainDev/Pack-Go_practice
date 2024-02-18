import React from 'react'
import NavberLogo from '../../assets/Image/NavberLogo.png'
const Navber = () => {
  return (
    <>
      <div className=' '>
        <div className=' max-w-container mx-auto font-poppins  '>
          <div className='flex'>
            <div className='pt-[41px] pb-[40.85px] '>
              <img src={NavberLogo} alt="" className='w-[214.4px] h-[68.145px] ' />
            </div>
            <div className='w-[564px] flex items-center justify-between  text-[16px] ml-[120.6px]  '>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold  ' >Home</p>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold' >Tours</p>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold' >Booking</p>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold' >Pages</p>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold' >Features</p>
              <p className='cursor-pointer hover:text-[#007F5F] hover:font-bold' >Blog</p>
            </div>
           <div className='relative'>
            <p className='absolute top-[44px] left-[121px] font-[16px] w-[150px] rounded-[17px] bg-[#007F5F] py-[16px] px-[35px] text-white font-semibold cursor-pointer  '>Book Now</p>
           </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navber
