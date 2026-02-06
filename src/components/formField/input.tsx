import { type InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form';
import { FieldWrapper } from './styles';


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    register: UseFormRegister<any>;
    name: string;
    required: boolean;
}
    
export default function Input({ label, placeholder, register, name, ...props }: Props) {
  return (
    <FieldWrapper>
       <label>{label}</label>
       <input {...register(name)} placeholder={placeholder} {...props} />
    </FieldWrapper>
  )
}
