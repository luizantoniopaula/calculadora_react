import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import { Button, Buttoneq} from "./components/Button";
import { useState } from "react";


const App = () => {
  const [currentNumber,setCurrentNumber] = useState('0');
  const [firstNumber,setFirstNumber] = useState('0');
  const [operation,setOperation] = useState('');
  const [visor,setVisor] = useState('0');

    
  const handleAddNumber = (num) => {
      if (num === '.') {
        if (!currentNumber.includes('.')) {
          setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
          setVisor(prev => `${prev === '0' ? '' : prev}${num}`);
        }
      } else {
          setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
          setVisor(prev => `${prev === '0' ? '' : prev}${num}`);
        }
  }

  const handleOnClear = () => {
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation('');
      setVisor('0');
  }

  const handleSumNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+');
        setVisor('+');
      } else {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum));
        setVisor(String(sum));
        setOperation('');
      }
      
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      setVisor('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setVisor(String(sum));
      setOperation('');
    }
  }

    const handleMulNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('*');
        setVisor('*');
      } else {
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum));
        setVisor(String(sum));
        setOperation('');
      }
    }
    const handleDivNumbers = () => {
      console.log("Current: " + currentNumber + " First: " + firstNumber);
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('/');
        setVisor('/');
      } else {
          console.log("Else Current: " + currentNumber + " First: " + firstNumber);
          try {
              const sum = Number(firstNumber) / Number(currentNumber);
              setCurrentNumber(String(sum));
              setVisor(String(sum));
              setOperation('');
          } catch (e) {
                setVisor('Erro! Divisão por zero');
                setOperation('');
                console.log("Erro divisão... " + e);
            }
        }
      }

      const handleSqrtNumbers = () => {
        if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0');
          setOperation('Sqrt');
          setVisor('Sqrt('+currentNumber+')');
        } else {
          const root = Math.sqrt(Number(firstNumber));
          setCurrentNumber(String(root));
          setVisor(String(root));
          setOperation('');
        }
      }

      const handlePotNumbers = () => {
        if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0');
          setOperation('Pot');
          setVisor('Pot('+currentNumber+')');
        } else {
          const pot = Math.pow(Number(firstNumber),Number(currentNumber));
          setCurrentNumber(String(pot));
          setVisor(String(pot));
          setOperation('');
        }
      }

      const handleLnNumbers = () => {
        if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0');
          setOperation('Ln');
          setVisor('Ln('+currentNumber+')');
        } else {
          const ln = Math.log(Number(firstNumber));
          setCurrentNumber(String(ln));
          setVisor(String(ln));
          setOperation('');
        }
      }

  const handleEquals = () => {
    if(firstNumber !== '0'&& operation !== ''){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'Sqrt':
          handleSqrtNumbers();
          break;
        case 'Pot':
          handlePotNumbers();
          break;
        case 'Ln':
          handleLnNumbers();
          break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <h1>Calculadora React</h1>
        <Input value={visor} />
        <Row>
          <Button label="7"  onClick={() => handleAddNumber('7')}/>
          <Button label="8"  onClick={() => handleAddNumber('8')}/>
          <Button label="9"  onClick={() => handleAddNumber('9')}/>
          <Button label="+"  onClick={() => handleSumNumbers()}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleSubNumbers()}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="*" onClick={() => handleMulNumbers()}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="Sqrt" onClick={() => handleSqrtNumbers()}/>
          <Button label="/" onClick={() => handleDivNumbers()}/>
        </Row>
        <Row>
          <Button label="Ln" onClick={() => handleLnNumbers()} />
          <Button label="Pot" onClick={() => handlePotNumbers()} />
          <Button label="Limpa" onClick={() => handleOnClear()}/>
          <Buttoneq label="="   onClick={() => handleEquals()} />
        </Row>

      </Content>
      
    </Container>
  );
}

export default App;
