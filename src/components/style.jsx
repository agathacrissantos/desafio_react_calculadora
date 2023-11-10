import styled from "styled-components"

export const Container = styled.div`
background-color: lightgrey;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:500px) {
        background-color: aqua;
    }
`
export const Title = styled.div`
background-color: #000000;
width: 40vw;
height: 10vh;
color: #FFFFFF;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:500px){
    background-color: #FFFFFF;
    color: black;
    font-size: 12px;
}
`
export const Entradas = styled.div`
width: 15vw;
height: 10vh; 
@media (max-width:500px){
    width:20vw;
}  
`
export const CaixaUm = styled.input`
width: 15vw;
height: 5vh;
`

export const CaixaDois = styled.input`
width: 15vw;
height: 5vh;
`


export const Tela = styled.div`
width: 15vw;
height: 9vh;
border-radius; 10px;
display: flex;
align-items: center;
justify-content: space-evenly;
@media (max-width:500px){
    width:25vw;
}  
`

export const PrimeiroBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
width: 25vw;
height: 15vh;
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width:500px){
    width:30vw;
}  
`
export const SegundoBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
width: 25vw;
height: 15vh;
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width:500px){
    width:30vw;
}  
`

export const BotaoSoma = styled.button`
width: 8vw;
height: 10vh;
@media (max-width:500px){
    width:10vw;
    height:12vh;
}  
`
export const BotaoSubtracao = styled.button`
width: 8vw;
height: 10vh;
@media (max-width:500px){
    width:10vw;
    height:12vh;
}  
`

export const BotaoDivisao = styled.button`
width: 8vw;
height: 10vh;
@media (max-width:500px){
    width:10vw;
    height:12vh;
}  
`

export const BotaoMultiplicacao = styled.button`
width: 8vw;
height: 10vh;
@media (max-width:500px){
    width:10vw;
    height:12vh;
}  
`

export const BotaoClear = styled.button`
width: 6vw;
height: 6vh;
`

