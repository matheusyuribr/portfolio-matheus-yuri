import styled from "styled-components";

const Tecno = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        color: var(--primary-color);
        text-align: center;
        font-size: 36px;
        font-weight: 400;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 30px;
    }

    @media screen and (max-width: 768px){
  
        h1 {
            color: var(--primary-color);
            text-align: center;
            font-size: 20px;
            font-weight: 400;
        }
      

        .technologies{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }


      }


`;

const Square = styled.div`
    background-color: #D9D9D9;
    width: 230px; /* Largura fixa */
    height: 78px; /* Altura fixa */
    border-radius: 20px;
    margin: 0px 30px;
    overflow: hidden; /* Adicionando overflow: hidden para cortar o texto extra */
    
    span {
        display: block;
        overflow: hidden;
        padding: 4px; /* Adiciona algum espaço interno para o texto */
        font-size: 16px;
        font-weight: 400;
        color: var(--secondary-color);
        text-align: center;
       
    }  
`;

export function Technologies() {
    return (
        <div className="technologiesContainer">
            <Tecno>
                <h1>Technologies</h1>
                <div className="technologies">
                    <Square><span>HTML, CSS</span></Square>
                    <Square><span>JavaScript</span></Square>
                    <Square><span>React</span></Square>
                </div>
                <div className="technologies">
                    <Square><span>Angular</span></Square>
                    <Square><span>Git</span></Square>
                    <Square><span>Python</span></Square>
                </div>

                <div className="technologies">
                    <Square><span>Java</span></Square>
                    <Square><span>Springboot</span></Square>
                    <Square><span>NextJS</span></Square>
                </div>
                <div className="technologies">
                    <Square><span>Postgresql</span></Square>
                    <Square><span>MongoDB</span></Square>
                    <Square><span>SQL Server</span></Square>
                </div>
            </Tecno> 
        </div>
    );
}
