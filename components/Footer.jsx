import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 KRK Wines All rights reserved</p>
      <p className='icons'>
        <Link href="https://www.instagram.com/jfadelli"><AiFillInstagram /></Link>
        <Link href="https://www.twitter.com"><AiOutlineTwitter /></Link>
      </p>
    </div>
  )
}

export default Footer