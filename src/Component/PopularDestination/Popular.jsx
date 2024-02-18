import React from 'react'
import SliderOne from '../../assets/Image/SliderOne.png'
import SliderTwo from '../../assets/Image/SliderTwo.png'
import SliderThree from '../../assets/Image/SliderThree.png'
import SliderFour from '../../assets/Image/SliderFour.png'
import SliderFive from '../../assets/Image/SliderFive.png'
import { FaStar } from "react-icons/fa"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"


const Popular = () => {
    return (
        <>
            <div className='mt-[150px] '>
                <div className='font-poppins relative' >
                    <h1 className='font-semibold text-[40px]  text-center text-[#1E1E1E]  ' >Popular Destination</h1>
                    <p className='text-[16px] lending-[30px] w-[692px] m-auto text-center mt-[20px] text-[#616161] '>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
                    <div className='mt-[71px] flex  '>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] '>
                            <img src={SliderOne} alt="" />
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 review</p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Mount Agung, Bali</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='flex mt-[20px] '>
                                <p className='font-semibold text-[20px] text-[#1E1E1E]  '>$150</p>
                                <p className='text-[#616161] text-[16px] mt-[4px] ml-[5px] '>/ Person</p>
                            </div>
                            <p className='border py-[10px] px-[35px] border-[#007F5F] text-[#007F5F] inline-block rounded-[17px] mt-[30px] font-semibold cursor-pointer'>Book Now</p>
                        </div>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] '>
                            <img src={SliderTwo} alt="" />
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 review</p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Venice, Italy</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='flex mt-[20px] '>
                                <p className='font-semibold text-[20px] text-[#1E1E1E]  '>$150</p>
                                <p className='text-[#616161] text-[16px] mt-[4px] ml-[5px] '>/ Person</p>
                            </div>
                            <p className='border py-[10px] px-[35px] border-[#007F5F] text-[#007F5F] inline-block rounded-[17px] mt-[30px] font-semibold cursor-pointer'>Book Now</p>
                        </div>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] '>
                            <img src={SliderThree} alt="" />
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 review</p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Paris, France</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='flex mt-[20px] '>
                                <p className='font-semibold text-[20px] text-[#1E1E1E]  '>$150</p>
                                <p className='text-[#616161] text-[16px] mt-[4px] ml-[5px] '>/ Person</p>
                            </div>
                            <p className='border py-[10px] px-[35px] border-[#007F5F] text-[#007F5F] inline-block rounded-[17px] mt-[30px] font-semibold cursor-pointer'>Book Now</p>
                        </div>
                        <div className=' py-[21px] px-[21px] bg-white shadow-banarRectangel w-[370px] '>
                            <img src={SliderFour} alt="" />
                            <div className='flex mt-[37px] '>
                                <FaStar className='text-[#FF8B00] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0] ' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <FaStar className='ml-[6px]  text-[#E0E0E0]' />
                                <p className='text-[#FF8B00] text-[16px] ml-[10px] mt-[-2px] '>5 review</p>
                            </div>
                            <p className='font-medium text-[25px] text-[#1E1E1E] mt-[17px] '>Santorini, Greece</p>
                            <p className='text-[#616161] text-[16px] mt-[20px] '>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
                            <div className='flex mt-[20px] '>
                                <p className='font-semibold text-[20px] text-[#1E1E1E]  '>$150</p>
                                <p className='text-[#616161] text-[16px] mt-[4px] ml-[5px] '>/ Person</p>
                            </div>
                            <p className='border py-[10px] px-[35px] border-[#007F5F] text-[#007F5F] inline-block rounded-[17px] mt-[30px] font-semibold cursor-pointer'>Book Now</p>
                        </div>

                    </div>
                    <div className='left bg-[#dcdde1] w-[50px] h-[50px] rounded-full absolute bottom-[210px] left-0   '>
                        <div className='relative'>
                            <MdArrowBackIosNew className='absolute top-[10px] left-[7px] text-3xl text-[#576574] cursor-pointer'/>

                        </div>
                    </div>
                    <div className='left bg-[#dcdde1] w-[50px] h-[50px] rounded-full absolute bottom-[210px] right-0   '>
                        <div className='relative'>
                            <MdArrowForwardIos className='absolute top-[10px] right-[7px] text-3xl text-[#576574] cursor-pointer'/>

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Popular