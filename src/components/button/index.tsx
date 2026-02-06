import React, { type ButtonHTMLAttributes } from 'react'
import { Button } from './styles';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}
export default function ButtonComponent({ children, ...props }: Props) {
    const backgroundColor = props.backgroundColor || 'var(--primary-color)';
    const color = props.color || 'var(--secondary-color)';
    const border = props.borderColor ? `1px solid ${props.borderColor}` : 'none';
  return (
    <Button {...props} $backgroundColor={backgroundColor} $color={color} $border={border}>{children}</Button>
  )
}
