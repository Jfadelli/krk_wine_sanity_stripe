import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const AboutPage = ({ aboutPage}) => {
    return (
        <div className='about-page-wrapper'>
            <div className='about-page-header'>
                <h3>{aboutPage.aboutHeader && aboutPage.aboutHeader}</h3>
            </div>
            <div className="about-page-content">
                {aboutPage.about.map((e) => { return (<p>{e.children[0].text}</p>) })}
            </div>
            <Link href="/">
                <button type="button">{aboutPage.buttonText}</button>
            </Link>
            <hr className="h-line-1" />
            <div className='contact-card-container'>
                <img src={urlFor(aboutPage.contactCardImage)} className="contact-card-image" />
                <p>{aboutPage.contactCardIntro[0].children[0].text}</p>
                <h4>{aboutPage.contactCardName}</h4>
                <p className='phone'>{aboutPage.contactCardNumber}</p>
                <Link href="/">
                    <button type="button">{aboutPage.contactCardEmail}</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutPage
