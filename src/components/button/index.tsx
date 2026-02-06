import React, { type ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: var(--primary-color);
color: var(--secondary-color);
font-weight: 700;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
border-radius: 8px;
padding: 10px 20px;
border: none;
cursor: pointer;

&:disabled {
    background-color: #999999;
    color: #FFFFFF;
    cursor: not-allowed;
}
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export default function ButtonComponent({ children, ...props }: Props) {
  return (
    <Button {...props}>{children}</Button>
  )
}
