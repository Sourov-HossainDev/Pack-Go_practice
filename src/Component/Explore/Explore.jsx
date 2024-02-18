import React from 'react'
import SliderOne from '../../assets/Image/SliderOne.png'
import SliderTwo from '../../assets/Image/SliderTwo.png'
import SliderThree from '../../assets/Image/SliderFive.png'
import { FaStar } from "react-icons/fa"
import { HiOutlineLocationMarker } from "react-icons/hi"


const Explore = () => {
    return (
        <>
            <div className='mt-[158px] font-poppins '>
                <div className='max-w-container mx-auto'>
                    <div className=''>
                        <h1 className='text-[40px] font-semibold text-primaryColor  '>Explore Top Destination</h1>
                        <p className='text-[16px] text-secondColor mt-[20px] w-[485px] '>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
                    </div>

                </div>
                <div className='mt-[30px] ml-[90px] '>
                    <p className='py-[10px] px-[25px] bg-[#007F5F] inline-block rounded-[17px] text-white font-semibold   '>Popular Destination</p>
                    <p className='py-[10px] px-[25px] bg-[#F3F3F3] inline-block rounded-[17px] text-secondColor cursor-pointer font-medium  ml-[30px] '>Destination For Art & Culture</p>
                    <p className='py-[10px] px-[25px] bg-[#F3F3F3] inline-block rounded-[17px] text-secondColor cursor-pointer font-medium  ml-[30px] '>Destination For Outdoor Adventer</p>
                    <p className='py-[10px] px-[25px] bg-[#F3F3F3] inline-block rounded-[17px] text-secondColor cursor-pointer font-medium  ml-[30px] '>Mountain</p>
                    <p className='py-[10px] px-[25px] bg-[#F3F3F3] inline-block rounded-[17px] text-secondColor cursor-pointer font-medium  ml-[30px] '>Beach Destination</p>
                </div>

                <div className='mt-[115px] max-w-container mx-auto  '>
                    <div className='flex justify-between'>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] relative '>
                            <img src={SliderOne} alt="" />
                            <div className='w-[30px] h-[30px] bg-white rounded-full absolute top-[30px] right-[35px]   '>
                                <svg className='mt-[8px] ml-[6px] ' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.14646 2.14646C1.78299 2.50993 1.49467 2.94144 1.29796 3.41633C1.10125 3.89123 1 4.40022 1 4.91425C1 5.42828 1.10125 5.93727 1.29796 6.41217C1.49467 6.88706 1.78299 7.31857 2.14646 7.68204L8.82847 14.364L15.5105 7.68204C16.2445 6.94797 16.6569 5.95237 16.6569 4.91425C16.6569 3.87613 16.2445 2.88053 15.5105 2.14646C14.7764 1.4124 13.7808 1.00001 12.7427 1.00001C11.7046 1.00001 10.709 1.4124 9.9749 2.14646L8.82847 3.2929L7.68204 2.14646C7.31857 1.78299 6.88706 1.49467 6.41217 1.29796C5.93727 1.10125 5.42828 1 4.91425 1C4.40022 1 3.89123 1.10125 3.41633 1.29796C2.94144 1.49467 2.50993 1.78299 2.14646 2.14646V2.14646Z" stroke="#FF5A5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />

                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 </p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Mount Agung, Bali</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='mt-[20px] flex   '>
                                <HiOutlineLocationMarker className='text-xl mt-[4px] text-secondColor ' />
                                <p className='font-medium text-[20px] text-secondColor ml-[14px] '>Indonesia</p>
                            </div>
                        </div>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] relative '>
                            <img src={SliderTwo} alt="" />
                            <div className='w-[30px] h-[30px] bg-white rounded-full absolute top-[30px] right-[35px]   '>
                                <svg className='mt-[8px] ml-[6px] ' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.14646 2.14646C1.78299 2.50993 1.49467 2.94144 1.29796 3.41633C1.10125 3.89123 1 4.40022 1 4.91425C1 5.42828 1.10125 5.93727 1.29796 6.41217C1.49467 6.88706 1.78299 7.31857 2.14646 7.68204L8.82847 14.364L15.5105 7.68204C16.2445 6.94797 16.6569 5.95237 16.6569 4.91425C16.6569 3.87613 16.2445 2.88053 15.5105 2.14646C14.7764 1.4124 13.7808 1.00001 12.7427 1.00001C11.7046 1.00001 10.709 1.4124 9.9749 2.14646L8.82847 3.2929L7.68204 2.14646C7.31857 1.78299 6.88706 1.49467 6.41217 1.29796C5.93727 1.10125 5.42828 1 4.91425 1C4.40022 1 3.89123 1.10125 3.41633 1.29796C2.94144 1.49467 2.50993 1.78299 2.14646 2.14646V2.14646Z" stroke="#FF5A5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />

                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 </p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Venice, Italy</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='mt-[20px] flex   '>
                                <HiOutlineLocationMarker className='text-xl mt-[4px] text-secondColor ' />
                                <p className='font-medium text-[20px] text-secondColor ml-[14px] '>Italy</p>
                            </div>

                        </div>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] relative '>
                            <img src={SliderThree} alt="" />
                            <div className='w-[30px] h-[30px] bg-white rounded-full absolute top-[30px] right-[35px]   '>
                                <svg className='mt-[8px] ml-[6px] ' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.14646 2.14646C1.78299 2.50993 1.49467 2.94144 1.29796 3.41633C1.10125 3.89123 1 4.40022 1 4.91425C1 5.42828 1.10125 5.93727 1.29796 6.41217C1.49467 6.88706 1.78299 7.31857 2.14646 7.68204L8.82847 14.364L15.5105 7.68204C16.2445 6.94797 16.6569 5.95237 16.6569 4.91425C16.6569 3.87613 16.2445 2.88053 15.5105 2.14646C14.7764 1.4124 13.7808 1.00001 12.7427 1.00001C11.7046 1.00001 10.709 1.4124 9.9749 2.14646L8.82847 3.2929L7.68204 2.14646C7.31857 1.78299 6.88706 1.49467 6.41217 1.29796C5.93727 1.10125 5.42828 1 4.91425 1C4.40022 1 3.89123 1.10125 3.41633 1.29796C2.94144 1.49467 2.50993 1.78299 2.14646 2.14646V2.14646Z" stroke="#FF5A5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />

                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 </p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Lake Thun, Switzerland</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='mt-[20px] flex   '>
                                <HiOutlineLocationMarker className='text-xl mt-[4px] text-secondColor ' />
                                <p className='font-medium text-[20px] text-secondColor ml-[14px] '>Switzerland</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-[50px] flex max-w-container m-auto relative  '>
                    <div className='absolute top-0 left-[520px] flex '>
                        <div className=' w-[15px] h-[15px] bg-[#D6D2D2] rounded-full ml-[10px]  '></div>
                        <div className=' w-[15px] h-[15px] bg-[#007F5F] rounded-full ml-[10px]  '></div>
                        <div className='w-[15px] h-[15px] bg-[#D6D2D2] rounded-full ml-[10px]  '></div>
                        <div className='w-[15px] h-[15px] bg-[#D6D2D2] rounded-full ml-[10px]  '></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore