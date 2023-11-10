import { useState } from "react"
import * as S from "./style.jsx"

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
            <S.Container>
                <S.Title>
                    <h3>Calculadora Simples</h3>
                </S.Title>
                <S.Entradas>
                    <S.CaixaUm type="number" onChange={CapturarValor} />
                    <S.CaixaDois type="number" onChange={CapturarSegundoValor} />
                </S.Entradas>
                <S.Tela>
                    <h1>{resultado}</h1>
                    <S.BotaoClear onClick={Clear}>AC</S.BotaoClear>
                </S.Tela>
                <S.PrimeiroBotao>
                    <S.BotaoSoma onClick={Soma}>+</S.BotaoSoma>
                    <S.BotaoSubtracao onClick={Subtracao}>-</S.BotaoSubtracao>
                </S.PrimeiroBotao>
                <S.SegundoBotao>
                    <S.BotaoDivisao onClick={Divisao}>/</S.BotaoDivisao>
                    <S.BotaoMultiplicacao onClick={Multiplicacao}>*</S.BotaoMultiplicacao>
                </S.SegundoBotao>
            </S.Container>
        </>
    )
}