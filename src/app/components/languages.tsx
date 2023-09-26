import { styled } from "styled-components"

const Lang = styled.div`
    h3{
        color: var(--primary-color);
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 20px;
            }

    span{
        color: #E64A19;
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 0 0 0;
    }


    @media screen and (max-width: 768px){
  
        div{
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
      
      }


`
export function Languages(){
    return(
        <div className="languagesContainer">
            <Lang>
                <div>
                <h3>Languages</h3>
                <span>English-Fluent</span>
                <span>Portuguese-Native</span>
                </div>
                
            </Lang>
        </div>
    )
}