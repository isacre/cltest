import { type TextareaHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form';
import { FieldWrapper } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    placeholder: string;
    register: UseFormRegister<any>;
    name: string;
    required: boolean;
}
    
export default function TextArea({ label, placeholder, register, name, ...props }: Props) {
  return (
    <FieldWrapper>
       <label>{label}</label>
       <textarea {...register(name)} placeholder={placeholder} {...props} />
    </FieldWrapper>
  )
}
