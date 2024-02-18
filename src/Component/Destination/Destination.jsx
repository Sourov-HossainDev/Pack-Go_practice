import React from 'react'
import DestinationTop from '../../assets/Image/TopOne.png'
import DestinationTwo from '../../assets/Image/TopTwo.png'
import MidOne from '../../assets/Image/MiddleOne.png'
import MidTwo from '../../assets/Image/MiddleTwo.png'
import BottomOne from '../../assets/Image/BottomOne.png'
import BottomTwo from '../../assets/Image/BottomTwo.png'
import { RiArrowDropDownLine } from "react-icons/ri"


import Middle from '../../assets/Image/Middle.png'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6"

const Destination = () => {
    return (
        <>
            <div>
                <div className='max-w-container m-auto '>
                    <div className='(Top) flex'>
                        <div className='w-2/4'>
                            <div className='mt-[274px] mb-[193px] font-poppins '>
                                <h1 className=' font-semibold text-[40px] text-primaryColor '>We have more than 1000 selected Destination</h1>
                                <p className='mt-[20px] text-[16px] text-secondColor w-[516px] lending-[30px] '>You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man.</p>
                                <p className='bg-[#007F5F] py-[16px] px-[35px] rounded-[17px] inline-block text-white mt-[40px] cursor-pointer '>Search Destination</p>
                            </div>
                        </div>
                        <div className='w-2/4'>
                            <div className='relative'>
                                <img src={DestinationTop} alt="" className='mt-[151px] ' />
                                <img src={DestinationTwo} alt="" className='absolute top-[188px] left-[202px] ' />
                                <img src={Middle} alt=" " className='w-[139.80px] h-[165px] absolute top-[98px] left-[326px] ' />

                                <div className='  font-openSans text-secondColor font-[16px]  absolute bottom-[-218px] left-0 '>
                                    <div className='flex '>
                                        <FaMagnifyingGlass className='text-[#007F5F] text-[20px]   ' />
                                        <p className='ml-[12px]  '>Recommended Destination</p>
                                    </div>
                                    <p className=' pl-[30px] py-[12px]'>Venice, Italy</p>
                                    <p className=' pl-[30px] py-[12px] font-semibold'>Berlin, Germany</p>
                                    <div className='relative'>
                                        <p className=' pl-[30px] py-[12px]'>Andalucia, Spain</p>
                                        <FaCheck className='absolute top-[15px] right-0 text-[#36B37E] ' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='(Middle) flex'>
                        <div className='w-2/4'>
                            <div className='relative mt-[100px] '>
                                <img src={MidOne} alt="" />
                                <img src={MidTwo} alt="" className='absolute top-[188px] left-[202px] ' />
                                <img src={Middle} alt=" " className='w-[139.80px] h-[165px] absolute top-[317px] left-[110px] ' />

                            </div>
                        </div>
                        <div className='w-2/4'>
                            <div className='ml-[58px] font-poppins '>
                                <h1 className='mt-[201px] font-semibold text-[40px] text-primaryColor w-[489px] '>Always give you promo
                                    on every Month / Event</h1>
                                <p className='text-secondColor w-[431px] mt-[20px] '>We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.</p>
                                <div className='mt-[20px] flex '>
                                    <div >
                                        <div className='flex'>
                                            <FaCheck className='text-[#007F5F]  text-xl ' />
                                            <p className='text-[16px] text-secondColor ml-[10px] '>25% for New Members</p>
                                        </div>
                                        <div className='flex mt-[15px] '>
                                            <FaCheck className='text-[#007F5F]  text-xl ' />
                                            <p className='text-[16px] text-secondColor ml-[10px] '>Up 50% on your birthday</p>
                                        </div>
                                        <div className='flex  mt-[15px]'>
                                            <FaCheck className='text-[#007F5F]  text-xl ' />
                                            <p className='text-[16px] text-secondColor ml-[10px] '>Cashback 10% via OVO</p>
                                        </div>
                                    </div>
                                    <div className='ml-[14px] '>
                                        <div className='flex  '>
                                            <FaCheck className='text-[#007F5F]  text-xl ' />
                                            <p className='text-[16px] text-secondColor ml-[10px] '>Cancelled refund 100%</p>
                                        </div>
                                        <div className='flex  mt-[15px]'>
                                            <FaCheck className='text-[#007F5F]  text-xl ' />
                                            <p className='text-[16px] text-secondColor ml-[10px] '>Reward for 1000% Points</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='(Bottom)  mt-[277px] flex'>
                        <div className='w-2/4'>
                            <div>
                                <h1 className='font-semibold text-[40px] text-primaryColor w-[507px] leading-normal '>100% Money back Guarantee If you Cancel</h1>
                                <p className='text-[16px] text-secondColor w-[456px] mt-[20px] '>We Promises in this case. We still want to refund your money when you cancel order.</p>
                            </div>
                            <div className='  mt-[40px] '>
                                <div className='bg-[#007F5F1A]  rounded-[8px]  w-[420px]'>
                                    <div className='  pt-[20px] pl-[20px] pb-[20px] '>
                                        <div className='relative '>
                                            <div className='absolute top-[3px] left-0 w-[18px] h-[18px] rounded-full bg-[#007F5F] '></div>
                                            <p className='font-medium text-[18px] text-primaryColor font-poppins lending-[20px] ml-[30px] '>Friendly, Quick, Easy</p>

                                        </div>
                                        <p className='text-secondColor text-[16px] lending-[28px] w-[300px] mt-[11px] '>Business messaging that feels just like the messenger apps you and your customers
                                            use every day.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-[19px] pl-[20px] pb-[21px] flex '>
                                <div className='w-[18px] h-[18px] border  rounded-full border-primaryColor mt-[4px] '></div>
                                <p className='font-medium text-[18px] text-primaryColor ml-[11px] mr-[11px]  '>Fast Response Answer </p>
                                <RiArrowDropDownLine className='text-3xl ' />
                            </div>
                            <div className='pt-[19px] pl-[20px] pb-[21px] flex '>
                                <div className='w-[18px] h-[18px] border  rounded-full border-primaryColor mt-[4px] '></div>
                                <p className='font-medium text-[18px] text-primaryColor ml-[11px] mr-[11px]  '>Money Back Guarantee </p>
                                <RiArrowDropDownLine className='text-3xl ' />
                            </div>

                        </div>
                        <div className='w-2/4'>
                            <div className='relative'>
                                <img src={BottomOne} alt="" className=' ' />
                                <img src={BottomTwo} alt="" className='absolute top-[188px] left-[202px] ' />
                                <img src={Middle} alt=" " className='w-[139.80px] h-[165px] absolute top-[98px] left-[326px] ' />
                                <p className='text-[16px] text-secondColor absolute bottom-[-40px] left-[45px] bg-[#FFF] rounded-[8px] shadow-MassageShadow py-[12px] pl-[20px] pr-[25px] font-Roboto '>Hi, Can you help me? 😔</p>
                                <p className='text-[16px] text-secondColor absolute bottom-[-110px] left-[77px] bg-[#FFF] rounded-[8px] shadow-MassageShadow py-[12px] pl-[20px] pr-[25px] font-Roboto '>Can I get my money back?</p>
                                <p className='text-[16px] text-secondColor absolute bottom-[-178px] left-[59px] bg-[#FFF] rounded-[8px] shadow-MassageShadow py-[12px] pl-[20px] pr-[25px] font-Roboto '>Thanks for your help!! 😍😍😍😍</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination