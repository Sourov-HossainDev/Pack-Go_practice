import React from 'react'
import BanarOne from '../../assets/Image/BanarLeft.png'
import Banartwo from '../../assets/Image/BanarRight.png'
import { CiLocationOn, CiCalendarDate } from "react-icons/ci"
import { GoPeople } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"

import { RiArrowDropDownLine } from "react-icons/ri"

const Banar = () => {
    return (
        <>
            <div className='bg-[#F8F8F8] w-full relative pb-[325px] '>
                <div className='max-w-container mx-auto  font-poppins '>
                    <div className='flex'>
                        <div>
                            <p className='font-semibold text-[65px] w-[573px] leading-[80px] pt-[135px] '>
                                Start Exploring to Find Inner Peace
                                by Traveling
                            </p>
                            <p className='w-[597px] text-[#616161] mt-[30px] '>
                                Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
                            </p>
                            <p className=' mt-[56px] font-[16px]  rounded-[17px] bg-[#007F5F] py-[16px] px-[35px] text-white font-semibold cursor-pointer inline-block  '>Discover Now</p>
                        </div>

                    </div>
                    <div className='relative'>
                        <div>
                            <img src={BanarOne} alt="" className='absolute top-[-180px] left-[325px]' />
                        </div>
                        <img src={Banartwo} alt="" className='absolute top-[-362px] left-[655px]' />

                    </div>


                    <div className='bg-[#FFF] shadow-banarRectangel h-[130px] w-[825px] absolute bottom-[60px] left-[75px] rounded-BanarRec flex justify-between '>
                        <div className='w-1/4'>
                            <div className='relative  '>
                                <CiLocationOn className='absolute top-[45px] left-[20px] text-[26px] h-[18.486px] text-[#007F5F] '/>
                                <p className='absolute top-[40px] left-[49px] font-Nunito font-bold text-[20px] text-[#292929] '>Location</p>
                                <RiArrowDropDownLine className='absolute top-[42px] left-[135px] text-[26px] '/>
                                <p className='absolute top-[75px] left-[49px] text-[#6A6A6A] text-[16px]  '>Enter your location</p>
                            </div>
                            
                        </div>
                        <div className='w-1/4'>
                        <div className='relative  '>
                                <CiCalendarDate className='absolute top-[45px] left-[20px] text-[26px] h-[18.486px] text-[#007F5F] '/>
                                <p className='absolute top-[40px] left-[49px] font-Nunito font-bold text-[20px] text-[#292929] '>Date</p>
                                <RiArrowDropDownLine className='absolute top-[42px] left-[95px] text-[26px] '/>
                                <p className='absolute top-[75px] left-[49px] text-[#6A6A6A] text-[16px]  '>When you start?</p>
                            </div>
                        </div>
                        <div className='w-1/4'>
                        <div className='relative  '>
                                <GoPeople className='absolute top-[45px] left-[20px] text-[26px] h-[18.486px] text-[#007F5F] '/>
                                <p className='absolute top-[40px] left-[49px] font-Nunito font-bold text-[20px] text-[#292929] '>People</p>
                                <RiArrowDropDownLine className='absolute top-[42px] left-[115px] text-[26px] '/>
                                <p className='absolute top-[75px] left-[49px] text-[#6A6A6A] text-[16px]  '>How many people</p>
                            </div>
                        </div>
                        <div className='w-1/4'>
                            <div className='bg-[#007F5F] w-[82px] h-[82px] rounded-[10px] ml-[87px] mt-[24px] relative '>
                                <IoIosSearch className='text-[42px] text-white absolute top-[20px] left-[20px] '/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banar