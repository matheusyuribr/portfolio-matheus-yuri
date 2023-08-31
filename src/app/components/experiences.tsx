import { styled } from "styled-components"

const Infos = styled.div`

    h3{
        color: var(--primary-color);
        font-size: 20px;
        font-weight: 400;
    }

    span{
        color: var(--secondary-color);
        font-size: 16px;
        font-weight: 400;
    }
    p{
        color: var(--secondary-color);
        font-size: 16px;
        font-weight: 400;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

`

export function Experiences(){
    return(
        <div className="experiencesContainer">
            <Infos>
            <div>

            <h3>Experiences</h3>
            <p>Plena Alimentos - Full-stack developer</p>
            <span>Two years</span>
            <p>Freelancer - Full-stack developer</p>
            <span>Three years</span>
            </div>
            

            </Infos>
            
        </div>
    )
}