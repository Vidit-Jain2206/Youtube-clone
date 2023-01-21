import React from 'react'

const LeftNavMenuItems = (props) => {
  const {text,icon,action,className} = props;
  return (
    <div 
      className={"flex items-center text-white text-sm cursor-pointer mb-[1px] h-10 px-3 rounded-lg hover:bg-white/[0.15] " + className }
      onClick={action}>
      <span className='text-l mr-5'>{icon}</span>
      {text}

    </div>
  )
}

export default LeftNavMenuItems