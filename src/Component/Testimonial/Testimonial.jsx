import React from 'react'
import imgOne from '../../assets/Image/Ellipse1.png'
import imgTwo from '../../assets/Image/Ellipse2.png'
import imgThree from '../../assets/Image/Ellipse3.png'
import imgFour from '../../assets/Image/Ellipse4.png'
import imgFive from '../../assets/Image/Ellipse5.png'

const Testimonial = () => {
    return (
        <>
            <div>
                <div className='max-w-container mx-auto flex '>
                    <div className='w-2/4'>
                        <div className='relative'>
                            <img src={imgOne} alt="" className='absolute top-[211px] left-[305.99px] ' />
                            <img src={imgTwo} alt="" className='absolute top-[415.63px] left-[163.93px] ' />
                            <img src={imgThree} alt="" className='absolute top-[439.72px] left-[-80px] ' />
                            <img src={imgFour} alt="" className='absolute top-[565.45px] left-[363.07px] ' />
                            <img src={imgFive} alt="" className='absolute top-[628.31px] left-[99.15px] ' />

                        </div>
                    </div>


                    <div className='w-2/4 mt-[264.49px] '>
                        <div className='font-poppins'>
                            <h1 className='text-[40px] text-primary font-semibold  '>Testimonial</h1>
                            <svg className='mt-[41px] ' xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none">
                                <path d="M4.28581 16.5749L11.4287 16.5749L11.4287 21.2817C11.4287 23.8778 8.86616 25.9886 5.71438 25.9886L5.00009 25.9886C3.81259 25.9886 2.85723 26.7755 2.85723 27.7536L2.85723 31.2838C2.85723 32.2619 3.81259 33.0488 5.00009 33.0488L5.71437 33.0488C13.6072 33.0488 20.0001 27.783 20.0001 21.2817L20.0001 3.63106C20.0001 1.68214 18.0804 0.100931 15.7144 0.100931L4.28581 0.10093C1.91974 0.10093 9.48818e-05 1.68214 9.4675e-05 3.63106L9.36759e-05 13.0447C9.3469e-05 14.9937 1.91974 16.5749 4.28581 16.5749ZM30.0001 16.5749L37.1429 16.5749L37.1429 21.2817C37.1429 23.8778 34.5804 25.9886 31.4286 25.9886L30.7144 25.9886C29.5269 25.9886 28.5715 26.7755 28.5715 27.7536L28.5715 31.2838C28.5715 32.2619 29.5269 33.0488 30.7144 33.0488L31.4286 33.0488C39.3215 33.0488 45.7144 27.783 45.7144 21.2817L45.7144 3.63107C45.7144 1.68214 43.7947 0.100933 41.4286 0.100933L30.0001 0.100932C27.634 0.100932 25.7144 1.68214 25.7144 3.63106L25.7144 13.0447C25.7144 14.9937 27.634 16.5749 30.0001 16.5749Z" fill="#007F5F" />
                            </svg>
                            <p className='text-[16px] text-secondColor mt-[24px] w-[538px] '>Since 2014, we’ve helped more than 500,000 people  of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation</p>
                            <p className='font-semibold text-[20px] text-primaryColor mt-[24px] '>Farah smith - Visitor</p>
                            <div className='mt-[16px] flex max-w-container  relative  '>
                                <div className=' flex '>
                                    <div className=' w-[15px] h-[15px] bg-[#D6D2D2] rounded-full  '></div>
                                    <div className=' w-[15px] h-[15px] bg-[#007F5F] rounded-full ml-[10px]  '></div>
                                    <div className=' w-[15px] h-[15px] bg-[#007F5F] rounded-full ml-[10px]  '></div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial