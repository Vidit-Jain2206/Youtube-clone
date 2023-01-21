import React from 'react'
import moment from "moment"
function VideoLengthBadge(props) {
    const time=moment().startOf("day").seconds(props.time).format("h:mm:ss");
  return (
    <div className='absolute bottom-2 right-2 text-xs rounded-md bg-black text-white py-1 px-2' >{time}</div>
  )
}

export default VideoLengthBadge