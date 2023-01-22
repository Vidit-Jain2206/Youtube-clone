import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLengthBadge from '../shared/VideoLengthBadge';

const VideoCard = (props) => {
  return (
    <Link to={`/video/${props.video?.videoId}`}>
      <div className="flex flex-col mb-8 ">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden ">
          <img className="h-full w-full object-cover" src={props.video?.thumbnails[0]?.url} alt="Vidit" />
          {props.video?.lengthSeconds && <VideoLengthBadge time={props.video?.lengthSeconds}/>}
        </div>
        
        <div className="flex text-white mt-3">
          <div className="flex items-start rounded-full overflow-hidden h-[2.5rem] w-[2.5rem] ">
            <div className="h-full w-full">
                 <img src={props.video?.author?.avatar[0]?.url} alt="" />
            </div>
              
          </div>

          <div className="flex flex-col overflow-hidden ml-3">
            <span className="text-white text-[0.75rem] font-semibold line-clamp-2">
              {props.video?.title}
            </span>

            <span className='flex items-center text-[11px] text-white/[0.7] font-semibold mt-[0.65rem]'>
              {props.video?.author?.title}
              {props.video?.author?.badges[0]?.type ==="VERIFIED_CHANNEL" && <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>}
            </span>

            <div className='flex text-[11px] text-white/[0.7] truncate overflow-hidden font-semibold'>
              <span>{`${abbreviateNumber(props.video?.stats?.views,2)} views`} </span>
              <span className='font-bold text[24px] relative top-[-2px] text-white/[0.7] flex items-center justify-center mx-1'>.</span>
              <span className='truncate'> {props.video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard