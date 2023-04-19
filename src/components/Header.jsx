import React, {useState} from 'react'
import {Links} from "./siteData"
import Open from "/images/icon-hamburger.svg"
import Close from "/images/icon-close.svg"


function Header() {

    const [isActive, setIsActive] = useState(false);
    const [isClicked, setIsClicked] = useState(1);

    const handleClick = () =>{
        setIsActive(!isActive);
    }
    const handleClickedLink =(id) =>{
        setIsClicked(id);
    }

  return (
    <div className="sticky top-0 pt-3 pb-3 z-20 h-16 bg-white flex flex-col justify-center ">
        <div className="">
            <img onClick={()=>handleClick()} className={`${isActive ? "hidden" : ""} absolute lg:hidden cursor-pointer right-3 top-7`} src={Open} alt="open" />
            <img onClick={()=>handleClick()} className={`${isActive ? "" : "hidden"} absolute lg:hidden cursor-pointer right-3 top-7`} src={Close} alt="open" />
        </div>
        <div className="flex justify-between items-center">
            <div className="lg:w-3/5    flex items-center">
                <div className="logo pl-3"><img src="/images/logo.svg"/></div>
                <nav
                 className={`${isActive ? "lg:flex" : "hidden lg:flex"} lg:shadow-none lg:drop-shadow-none lg:w-auto lg:h-auto lg:static absolute right-2/4 translate-x-2/4 top-14 text-center bg-white shadow-2xl shadow-slate-600 drop-shadow-2xl rounded-xl z-20 w-11/12 h-auto`}
                >
                    <ul className="  lg:flex-row   flex flex-col gap-4 pt-4 pb-4">
                        {Links.map(item =>{
                            return (
                                <div>

                                    <li onClick={()=>handleClickedLink(item.id)} className={` ${isClicked == item.id ? "lg:font-bold" : ""} lg:hover:font-bold lg:text-xl lg:hover:text-black hover:text-green-400 lg:w-auto `} key={item.id}><a href={item.url}>{item.text}</a></li>
                                    <div className={`${isClicked == item.id ? "" : "hidden"} lg:w-12 mt-4 lg:h-1  lg:absolute bg-green-500`}></div>
                                </div>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="lg:flex lg:mr-32 items-center hidden bg-gradient-to-r from-green-600 to-teal-500 pl-3 pr-3 h-10 text-lg rounded-3xl text-white hover:brightness-90 cursor-pointer w-52 justify-center"><span className=''>Request invite</span></div>
        </div>
    </div>
  )
}

export default Header