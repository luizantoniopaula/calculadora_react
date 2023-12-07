import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #a0b0c2;
    display: flex;
    align-items: center;
    justify-content: center;
`
//presta atenção nesse apóstrofo, talvez seja melhor usar outra coisa...

export const Content = styled.div`
    background-color: #fffffa;
    width: 20%;
    min-height: 348px;
    border: 5;
    h1 {
        text-align: center;
    }

`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`