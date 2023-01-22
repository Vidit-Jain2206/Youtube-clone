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

  // const NavElemnts = categories.map((Element,index) => {
  //   return <React.Fragment  key={index}>
  //     <LeftNavMenuItems
  //     text={Element.type === "home" ? "Home" : Element.name}
  //     icon={Element.icon}
  //     action={() => {
  //       handleOnClick(Element.name,Element.type);
  //       navigate("/");}}
  //     className={selectCategories === Element.name?"bg-white/[0.15]":""}
     
      
  //   />
  //     {Element.divider && (
  //       <hr className='my-5 bg-white/[0.2]' />
  //     )}
  //   </React.Fragment>
  // })



  return (
    <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-0" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItems
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    handleOnClick(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                  selectCategories === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: JS Dev Hindi
                </div>
            </div>
        </div>
  )
}

export default LeftNav