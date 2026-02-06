import React, { type ButtonHTMLAttributes } from 'react'
import { Button } from './styles';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}
export default function ButtonComponent({ children, backgroundColor, color, borderColor, ...htmlProps }: Props) {
    const bgColor = backgroundColor || 'var(--primary-color)';
    const textColor = color || 'var(--secondary-color)';
    const border = borderColor ? `1px solid ${borderColor}` : 'none';
  return (
    <Button {...htmlProps} $backgroundColor={bgColor} $color={textColor} $border={border}>{children}</Button>
  )
}
