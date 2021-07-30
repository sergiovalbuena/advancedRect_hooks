import React from 'react'
import styled from 'styled-components'

import SectionRow from '../rows/SectionRow'
import { sections } from '../../data/sectionData'

export default function GridSection() {
    return(
        <Wrapper>
            <Title>Title Name</Title>
            <Description>Description pharagraph</Description>
            <Grid>
                {sections.map((section, index)=>(
                    <SectionRow 
                        key={index}
                        index={index + 1}
                        title={section.title}
                        description={section.description}
                        timestamp={section.duration}
                    
                    />
                ))}
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    max-width: 1234px;
    margin:0 auto;
    text-align: center;
    gap: 12px;
    padding: 0 20px;
`

const Title = styled.p`
    font-style: normal;
    font-size: 15px;
    line-height: 130%;
    text-transform: uppercase;
    color: #fff;
`
const Description = styled.p`
    max-width: 460px;
    font-size: 13px;
    line-height: 130%;
    color: rgba(255,255,255,.7);
    margin: 0 auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 8px;
    width: 100%;
    padding: 20px;
    background: rgba(255,255,255,.5);
    border: 0.5px solid rgba(255,255,255,.6);
    box-sizing: border-box;
    box-shadow: 0 50px 100px rgba(34,79,169,.3);
    backdrop-filter: blur(40px);
    border-radius: 20px;
`