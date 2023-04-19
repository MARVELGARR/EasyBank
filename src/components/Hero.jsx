import React from 'react'
import {section1, section2, section3} from "./siteData"
import Mockup from "/images/image-mockups.png"
import Desktop from "/images/bg-intro-desktop.svg"
import Mobile from "/images/bg-intro-mobile.svg"
import "../App.css"

function Hero() {
  return (
    <div className='' id="about">

        <section className="section1 lg:h-full lg:pl-12 lg lg:relative  lg:flex-row lg:mt-4  flex flex-col-reverse bg-slate-100">
            <div className="mb-16 lg:mt-36 lg:w-2/4 lg:flexlg:items-start">

                {section1.map(item =>{
                    return(
                        <div className="lg:items-start    flex gap-4 flex-col pl-8 pr-8  text-center justify-center items-center" key={item.id}>
                            <h1 className="lg:text-4xl lg:text-left    font-bold text-3xl">{item.heading}</h1>
                            <p className="lg:text-2xl     text-xl text-justify">{item.p}</p>
                            <span className="lg:text-2xl lg:p-4  flex justify-center items-center bg-gradient-to-r from-green-600 to-teal-500 pl-3 pr-3 h-10 text-lg rounded-xl text-white hover:brightness-90 cursor-pointer">{item.action}</span>
                        </div>
                    )
                })}
            </div>
            <div className="lg:w-2/4">
                <div className=" lg:flex relative h-96 hidden flex">
                    <img className="web    lg:z-10 lg:-right-20    w-full -top-32 pl-5 pr-5 absolute right-0" src={Mockup} alt="mockup" />
                    <img className="web     lg:-right-10   w-full  -top-10  lg:absolute right-0" src={Desktop} alt="Desktop"/>
                </div>
                <div className="flex lg:hidden relative h-72">
                    <img className="w-full pl-5 pr-5 h-full absolute z-10" src={Mockup} alt="mockup" />
                    <img className="w-full h-full absolute " src={Mobile} alt="mobile"/>
                </div>
            </div>

        </section>
        <section className="lg:pl-12 lg:pt-10 lg:pb-40 bg-slate-200 pl-8 pr-8">
            <div className="lg:w-2/4 lg:items-start lg:mb-20    flex flex-col gap-2">
                <span className=" lg:text-4xl font-bold flex justify-center text-xl">{section2.Qh.Question}</span>
                <span className="lg:text-2xl lg:mt-7 lg:text-left   block text-center text-lg">{section2.Qh.answer}</span>
            </div>
            <div className="lg:flex lg:gap-5">
                {section2.services.map(item =>{
                    return(
                        <div className="lg:items-start   flex gap-8 flex-col justify-center items-center" key={item.id}>
                            <img className="lg:text-left lg:w-20 lg:h-20  object-cover w-12 h-12 mt-4" src={item.url} alt="service" />
                            <h3 className="lg:text-left lg:text-3xl font-bold text-xl">{item.heading}</h3>
                            <p className="lg:text-left lg:text-2xl  text-center text-lg">{item.p}</p>
                        </div>
                    )
                })}
            </div>
        </section>
        <section className="lg:pl-12    lg:mt-18   pl-4 pr-4 mt-16">
            <h2 className="lg:text-5xl font-bold text-center text-3xl">Latest Ariticle</h2>
            <div className="lg:flex-row lg:flex">
                {section3.map(item=>{
                    return(
                        <div className="lg:mb-20    flex flex-col gap-3" key={item.id}>

                            <img className="lg:w-52 lg:h-52 lg:rounded-none   mt-3 rounded-t-xl" src={item.url} alt="blogs"/>
                            <div className="pl-5 pr-5 flex flex-col gap-3">
                                <span className="lg:text-2xl text-xl text-gray-500">{item.athour}</span>
                                <h3 className="lg:text-2xl hover:text-green-500  cursor-pointer font-bold text-xl">{item.title}</h3>
                                <p className="lg:text-xl  text-lg tracking-tight">{item.p}</p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    </div>
  )
}

export default Hero