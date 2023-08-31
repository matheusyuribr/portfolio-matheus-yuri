"use client";
import { styled } from "styled-components";
import { GmailIcon } from "./icons/gmailIcon";
import { InstaIcon } from "./icons/instaIcon";
import { LinkedinIcon } from "./icons/linkdinIcon";

const Icon = styled.div`

    width: 70px;
    height: 68px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    margin: 0px 20px;

`

export function Social(){
    return(
        <div className="socialContainer">
            <a href=""><Icon>
            <GmailIcon/>
            </Icon></a>
            <a href="https://instagram.com/theusoyuri?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank"><Icon>
            <InstaIcon/>
            </Icon></a>
            <a href="https://www.linkedin.com/in/matheus-yuri-732b14209/" target="_blank"><Icon>
            <LinkedinIcon/>
            </Icon></a>
            
        </div>
    )
}