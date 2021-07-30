import React from 'react'
import styled from 'styled-components'

export default function SectionRow(props) {

    const {index, title, description, timestamp} = props

    return (
    <Wrapper>
        <Index>{index}</Index>
        <TextWrapper>
            <Title>{title}</Title>
            <ProgressBar />
            <Description>
                {description}
            </Description>

        </TextWrapper>
        <Timestamp>{timestamp}</Timestamp>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 36px auto;
    gap: 20px;
    max-width: 360px;
    padding: 10px;
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    border-radius: 10px;

    &, *{
        transition: .7s cubic-bezier(0.075, 0.85, 0.165, 1);
    }

    :hover{
        background: rgba(68,66,170,.1);
        box-shadow: inset 0 0 0.5px rgba(68,66,170,.2);
    }
`

const Index = styled.div`
    display: grid;
    width: 36px;
    height: 36px;
    background: rgba(68,66,179,.1);
    border-radius: 50%;
    place-items: center;

    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    color: black;
`

const TextWrapper = styled.div`
    display: grid;
    gap: 8px;
    text-align: start;    
`

const Title = styled.p`
    max-width: 180px;
    font-style: normal;
    font-weight:500;
    font-size: 15px;
    line-height: 18px;
    color: #3913b8;
`
    
const ProgressBar = styled.div`
    width: 170px;
    height: 5px;
    background: rgba(68,66,179,.1);
    background-blend-mode: overlay;
    border-radius: 8px;

`

const Description = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #192150
`

const Timestamp = styled.div`
    position: absolute;
    display: grid;
    top: 10px;
    right: 10px;
    height: 20px;
    padding: 2px 6px;
    background: rgba(68,66,179,.1);
    background-blend-mode: overlay;
    border-radius: 5px;
    place-items: center;

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: black;
`