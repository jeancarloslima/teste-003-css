import styled from "styled-components"

const Container = styled.div`
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`;

const Titulo = styled.h1`
    color: ${props => props.cor || '#333'};
    font-size: 2rem;
`;

export default function Tela05() {
    return (
        <Container>
            <Titulo cor="#ff5722">Olá, Styled Components!</Titulo>
        </Container>
    )
}