import styled from "styled-components";

export const Button = styled.button<{ $backgroundColor: string; $color: string, $border: string }>`
background-color: ${props => props.$backgroundColor};
color: ${props => props.$color};
border: ${props => props.$border};
font-weight: 700;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
border-radius: 8px;
padding: 10px 20px;
cursor: pointer;

&:disabled {
    background-color: #999999;
    color: #FFFFFF;
    cursor: not-allowed;
    border: 1px solid #999999;
}

&:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
}
`;
