import React from 'react'
import "./ResetPassword.css"
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Input from '../Input'

function ResetPassword() {
    return (
        <>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-24 forgot-container">
                    <div className="sm:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md items-center">
                        <div className="mb-2 flex justify-center mt-6">
                            <svg
                                width="95"
                                height="47"
                                viewBox="0 0 95 47"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.7909 21.3225L10.8297 47.0005H25.9C32.9458 47.0005 36.36 42.9112 37.1863 40.8666C39.7524 36.176 45.3151 25.977 47.0375 22.7056C48.7598 19.4342 52.0609 18.8168 53.4961 18.9171H79.2656C84.0672 18.9171 87.7902 15.8702 89.0515 14.3468L94.2706 4.78516H59.0415C56.7972 4.78516 55.5838 6.58924 55.2576 7.49127C54.8444 8.2129 53.5222 10.5943 51.539 14.3468C49.0599 19.0373 44.0365 18.9171 44.1669 18.9171C44.2974 18.9171 30.1405 18.8569 27.9224 18.9171C26.1479 18.9652 25.0953 20.5407 24.7909 21.3225Z"
                                    fill="#0085FB"
                                />
                                <path
                                    d="M5.02342 5.20662L0 14.1669L43.645 14.1669C45.8893 14.1669 47.1027 12.2826 47.4289 11.3405L53.4961 0.215356C42.4055 0.235401 19.0629 0.263464 14.4179 0.215356C9.77283 0.167247 6.21947 3.52282 5.02342 5.20662Z"
                                    fill="#0CE1FA"
                                />
                            </svg>
                        </div>
                        <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl font-['poppins'] text-white mt-4">
                            Reset password
                        </h2>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5 ">
                                <div className="mt-2 font-['Raleway']">
                                    <Input type="email" placeholder="Enter registered email" />
                                </div>
                                <div className="mt-2 font-['Raleway'] flex w-full border-solid border-[#6881a4] border-4 rounded-[16px] hover:bg-[rgba(210,215,228,0.3)]">
                                <Input type="text" placeholder="Enter otp" className="w-full px-3.5 py-2.5 outline-none bg-transparent"/>
                                    <Link to="" className="flex items-center">
                                        <button className="text-white bg-green-700 hover:bg-green-800 rounded-[12px] text-xs px-3 py-[3px] dark:bg-blue-600 dark:hover:bg-blue-700 border-[0 0 x x] dark:focus:ring-blue-800" style={{
                                            borderBottomLeftRadius:'0',
                                            borderTopLeftRadius:'0',
                                            marginRight:'1px'
                                        }}>Verify OTP</button>
                                    </Link>
                                </div>
                                <p className='sm:text-xs md:text-sm lg:text-tiny pl-4 pt-0.5'
                                    style={{
                                        color: '#8B94AD',
                                        fontFamily: 'Raleway',
                                        textAlign: 'left',
                                        fontWeight: '400',
                                    }}>
                                    otp has been sent to your registered email address
                                </p>
                                <div className="mt-2 font-['Raleway'] items-center flex">
                                    <Input type="password" placeholder="Enter new password" />
                                </div>
                                <div className="mt-2 font-['Raleway']">
                                    <Input type="password" placeholder="Confirm new password" />
                                </div>
                                <div>
                                    <Link to="/signin">
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-xl  px-3.5 py-2.5 leading-7 text-white font-['poppins']"
                                            style={{
                                                    background:
                                                    'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                                    }}
                                                >
                                                Signin  <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword