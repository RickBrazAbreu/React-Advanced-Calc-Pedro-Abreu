import React, { useState } from 'react'

export default function Calculator() {
    // Declare state variables
    const [num, setNum] = useState(0);
    const [oldnum, setoldNum] = useState(0);
    const [operador, setOperador] = useState();

    function inputNum(e) {
        console.log(e.target.value);
        var input=e.target.value
        if(num === 0){
            setNum (input); // se tiver o num 0 .. substitui o valor para o num que clicou...
        }else{
            setNum (num + input); // se ja tiver algun numero que nao seje zero... troca o num e comeec a add outro num
        }
        
    }
    function clear(e){
        setNum(0)
    }
    function porcentage(){
        setNum(num / 100);
    }
    function changeplusminos(){
        if (num >0) {
            setNum(-num)
        }else{
            setNum(Math.abs(num));
        }
    }

        function operadorHand(e){
            var operadorInput= e.target.value
            setOperador(operadorInput);
            setoldNum(num);
            setNum(0);
        }


    function calculate(){
        if(operador === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num))
        }

        if(operador === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num))
        }
        if(operador === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num))
        }
        if(operador === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num))
        }


        console.log("calculou")
        console.log(oldnum)
        console.log(num)
        console.log(operador)

    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={changeplusminos}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={porcentage}>%</button>
                    <button className="calc-button calc-button-op" onClick={operadorHand} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={inputNum} value={7}>7</button>
                    <button className="calc-button"onClick={inputNum} value={8}>8</button>
                    <button className="calc-button"onClick={inputNum} value={9}>9</button>
                    <button className="calc-button calc-button-op" onClick={operadorHand} value="X">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={inputNum} value={4}>4</button>
                    <button className="calc-button"onClick={inputNum} value={5}>5</button>
                    <button className="calc-button"onClick={inputNum} value={6}>6</button>
                    <button className="calc-button calc-button-op" onClick={operadorHand} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={inputNum} value={1}>1</button>
                    <button className="calc-button"onClick={inputNum} value={2}>2</button>
                    <button className="calc-button"onClick={inputNum} value={3}>3</button>
                    <button className="calc-button calc-button-op" onClick={operadorHand} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={inputNum} value={0}>0</button>
                    <button className="calc-button"onClick={inputNum} value={"."}>.</button>
                    <button className="calc-button calc-button-op"onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )

}

//export default Calculator