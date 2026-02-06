import { type TextareaHTMLAttributes } from 'react'
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { FieldWrapper } from './styles';

interface Props<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    placeholder: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    required: boolean;
}
    
export default function TextArea<T extends FieldValues>({ label, placeholder, register, name, ...props }: Props<T>) {
  return (
    <FieldWrapper>
       <label>{label}</label>
       <textarea {...register(name)} placeholder={placeholder} {...props} />
    </FieldWrapper>
  )
}
