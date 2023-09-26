"use client";
import Image from "next/image";
import { styled } from "styled-components";


const Top = styled.div`

    .header{
        display: flex;
        align-items: center;
        padding: 30px 30px;
    }
    img {
        border-radius: 50%;
        
    }

    h1{
        color: var(--primary-color);
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        padding-bottom: 20px;
        
    }

    h2{
        color: var(--secondary-color);
        font-size: 20px;

        font-weight: 400;
    }

    .apresetation{
        padding-top: 30px;
        padding-left: 30px;
    }

    @media screen and (max-width: 768px){

        .header{
            display: flex;
            flex-direction: column;
            padding: 30px 30px;
            align-items: center;
            
        }

        h1{
            color: var(--primary-color);
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            padding-bottom: 20px;
            
        }
    
        h2{
            color: var(--secondary-color);
            font-size: 16px;
    
            font-weight: 400;
        }

        img{
            border-radius: 30px;
        }
    }

`;

export function Header() {
    return (
        <div className="headerContainer">
        <Top>
            <div className="header">
            <Image src="/picture.png" alt="matheus-yuri" width={274} height={274} />
            <div className="apresetation">
                <h1>Hi, my name is Matheus!</h1>
                <h2>I am a full-stack developer with a focus on backend and automation. I create agile and efficient solutions for your business needs!</h2>
            </div>
            </div>
        </Top>
        </div>
    );
}
