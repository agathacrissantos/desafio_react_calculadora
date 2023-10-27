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
 display: flex;
 align-items: center;
 justify-content: center;
 color: #FFFFFF;
 font-size: 20px;
`
const Entradas = styled.div`
width: 10vw;
height: 6vh;   
`

const PrimeiroBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
border: 1px solid #D1D1D1;
width: 8vw;
height: 8vh;
`
const SegundoBotao = styled.div`
backgroun-color: #f444444;
color: #000000;
border: 1px solid #D1D1D1;
width: 8vw;
height: 8vh;
`

const Tela = styled.div`
width: 10vw;
height: 7vh;
border: solid #F0;
border-radius; 10px;
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
            <Container>
                <Title>
                <h3>Calculadora Simples</h3>
                </Title>
                <Entradas>
                <input type="number" onChange={CapturarValor} />
                <input type="number" onChange={CapturarSegundoValor} />
                </Entradas>
                <Tela>
                <h1>{resultado}</h1>
                <button onClick={Clear}>AC</button>
                </Tela>
                <PrimeiroBotao>
                <button onClick={Soma}>+</button>
                <button onClick={Subtracao}>-</button>
                </PrimeiroBotao>
                <SegundoBotao>
                <button onClick={Divisao}>/</button>
                <button onClick={Multiplicacao}>*</button>
                </SegundoBotao>
            </Container>
        </>
    )
}