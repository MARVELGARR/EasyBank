import React from 'react'
import Logo from "/images/logo.svg"
import { socials, footerLinks, section1 } from './siteData'

function Footer() {
  return (
    <div className="lg:pl-20 lg:pr-20  pb-5 bg-slate-700 mt-10" id="footer">
      <div className="  lg:flex lg:justify-between">

        <div className="lg:flex-row lg:gap-20 lg:items-center  flex flex-col gap-5 justify-center items-center">
          <div className="lg:gap-8  flex flex-col gap-6">
            <img className=" mt-10" src={Logo} alt="log" />
            <div className="lg:gap-5 flex gap-3">
              {socials.map(item=>{
                return(
                  <img className=" hover:bg-green-700" src={item.url} alt={item.name} key={item.name}/>
                )
              })}
            </div> 
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:text-md text-white font-bold text-center flex flex-col gap-2">
            {footerLinks.map(item=>{
              return(
                <div className="lg:ml-10 hover:text-green-500 " key={item.id}><a href="/" className="" >{item.name}</a></div>
              )
            })}
          </div>   
        </div>


        <div className=" flex flex-col items-center gap-3">
          {section1.map(item =>{
            return( 
              <div className=" cursor-pointer w-44 mt-5 flex justify-center items-center bg-gradient-to-r from-green-600 to-teal-500 pl-3 pr-3 h-10 text-lg rounded-xl text-white hover:brightness-90" key={item.action}>{item.action}</div>
            )
          })}
          <div className="text-white">© Easybank. All Rights Reserved</div>
        </div>
      </div>
        <div className="lg:mt-5 pl-5 pr-5 text-center flexe flex-col text-white">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a className=" text-green-700 font-bold" href="https://www.frontendmentor.io/profile/MARVELGARR">Marvellous Obatale</a>.
        </div>
    </div>
  )
}

export default Footer