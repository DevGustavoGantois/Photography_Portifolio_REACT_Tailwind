import React, {useContext} from 'react';
//import icons
import {ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube} from 'react-icons/im';
//import cursor context
import { CursorContext } from '../context/Cursor';

const Socials = () => {
  
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)


  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li><a href="http://www.facebook.com" target='_blank'><ImFacebook/></a></li>
        <li><a href="http://www.twitter.com" target='_blank'><ImTwitter/></a></li>
        <li><a href="http://www.pinterest.com" target='_blank'><ImPinterest/></a></li>
        <li><a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target='_blank'><ImInstagram/></a></li>
        <li><a href="http://www.youtube.com" target='_blank'><ImYoutube/></a></li>
      </ul>
    </div>
  )
}

export default Socials
