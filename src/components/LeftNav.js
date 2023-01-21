import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import LeftNavMenuItems from "./LeftNavMenuItems"
import { categories } from "../utils/constant"

import { Context } from "../context/contextApi"

const LeftNav = () => {
  const { mobileMenu, selectCategories, setSelectCategories } = useContext(Context);
  const navigate = useNavigate();

  const handleOnClick=(name,type)=>{
    if(type==="menu"){
      setSelectCategories(false);
    }
    else{
      setSelectCategories(name);
    }
    
  }

  const NavElemnts = categories.map((Element) => {
    return <React.Fragment  key={Element.icon}>
      <LeftNavMenuItems
      text={Element.type == "home" ? "Home" : Element.name}
      icon={Element.icon}
      action={() => {
        handleOnClick(Element.name,Element.type);
        navigate("/");}}
      className={selectCategories === Element.name?"bg-white/[0.15]":""}
     
      
    />
      {Element.divider && (
        <hr className='my-5 bg-white/[0.2]' />
      )}
    </React.Fragment>
  })



  return (
    <div className='md:block w-[240px] overflow-y-auto h-full bg-black absolute py-4 md:relative z-100 translate-x-[240px] md:translate-x-0 transition-all'>
      <div className='flex px-5 flex-col'>
        {NavElemnts}
        <hr className='my-5 bg-white/[0.2]' />
        <div className="text-white">
          Clone By : Vidit  
        </div>
      </div>

    </div>
  )
}

export default LeftNav