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
            <Icon>
            <GmailIcon/>
            </Icon>
            <Icon>
            <InstaIcon/>
            </Icon>
            <Icon>
            <LinkedinIcon/>
            </Icon>
        </div>
    )
}