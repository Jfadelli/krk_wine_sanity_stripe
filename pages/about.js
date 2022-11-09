import React, { useRef } from 'react';
import { AboutPage } from '../components';
import { client } from '../lib/client'

const About = ({ aboutDataSet }) => {
    return (
        <>
            <AboutPage aboutPage={aboutDataSet.length && aboutDataSet[0]}/>
        </> 
    )
}

export const getStaticProps = async () => {
    const aboutQuery = '*[_type == "about"]'
    const aboutDataSet = await client.fetch(aboutQuery)

    return {
        props: {aboutDataSet}
    }
}


export default About