import styled from "styled-components"

const SeloEstilizado = styled.span`
    padding: 4px 8px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    background-color: ${props => props.$ativo ? "green" : "gray"}
`;

export default function Tela06({ ativo }) {
    return (
        <SeloEstilizado $ativo={ativo}>
            {ativo ? "Online" : "Offline"}
        </SeloEstilizado>
    )
}