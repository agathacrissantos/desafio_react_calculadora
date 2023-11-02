import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
width: 40vw;
height: 60vh;
background-color: lightgrey;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid;
`
const Title = styled.div`
background-color: #000000;
width: 40vw;
height: 10vh;
color: #FFFFFF;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;

`
const Entradas = styled.div`
width: 15vw;
height: 10vh;   
`

const CaixaUm = styled.input`
width: 15vw;
height: 5vh;
`

const CaixaDois = styled.input`
width: 15vw;
height: 5vh;
`


const Tela = styled.div`
width: 15vw;
height: 9vh;
border: solid #F0;
border-radius; 10px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const PrimeiroBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
border: 1px solid #D1D1D1;
width: 25vw;
height: 15vh;
display: flex;
align-items: center;
justify-content: space-around;
`
const SegundoBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
border: 1px solid #D1D1D1;
width: 25vw;
height: 15vh;
display: flex;
align-items: center;
justify-content: space-around;
`

const BotaoSoma = styled.button`
width: 8vw;
height: 10vh;
`
const BotaoSubtracao = styled.button`
width: 8vw;
height: 10vh;
`

const BotaoDivisao = styled.button`
width: 8vw;
height: 10vh;
`

const BotaoMultiplicacao = styled.button`
width: 8vw;
height: 10vh;
`

const BotaoClear = styled.button`
width: 6vw;
height: 6vh;
`


export default function Index() {

    const [primeiroValor, setPrimeiroValor] = useState(0)

    const [segundoValor, setSegundoValor] = useState(0)

    const [resultado, setResultado] = useState('')

    const CapturarValor = (item) => {
        setPrimeiroValor(Number(item.target.value))
    }
    const CapturarSegundoValor = (item) => {
        setSegundoValor(Number(item.target.value))
    }

    const Soma = () => {
        setResultado(primeiroValor + segundoValor)
    }

    const Subtracao = () => {
        setResultado(primeiroValor - segundoValor)
    }

    const Divisao = () => {
        setResultado(primeiroValor / segundoValor)
    }

    const Multiplicacao = () => {
        setResultado(primeiroValor * segundoValor)
    }

    const Clear = () => {
        setPrimeiroValor('0')
        setSegundoValor('0')
        setResultado('')
    }

    return (
        <>
            <Container className="Principal">
                <Title className="Titulo">
                    <h3>Calculadora Simples</h3>
                </Title>
                <Entradas>
                    <CaixaUm type="number" onChange={CapturarValor} />
                    <CaixaDois type="number" onChange={CapturarSegundoValor} />
                </Entradas>
                <Tela>
                    <h1>{resultado}</h1>
                    <BotaoClear onClick={Clear}>AC</BotaoClear>
                </Tela>
                <PrimeiroBotao>
                    <BotaoSoma onClick={Soma}>+</BotaoSoma>
                    <BotaoSubtracao onClick={Subtracao}>-</BotaoSubtracao>
                </PrimeiroBotao>
                <SegundoBotao>
                    <BotaoDivisao onClick={Divisao}>/</BotaoDivisao>
                    <BotaoMultiplicacao onClick={Multiplicacao}>*</BotaoMultiplicacao>
                </SegundoBotao>
            </Container>
        </>
    )
}