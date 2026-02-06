import { type InputHTMLAttributes } from 'react'
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { FieldWrapper } from './styles';


interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  required: boolean;
}
    
export default function Input<T extends FieldValues>({ label, placeholder, register, name, ...props }: Props<T>) {
  return (
    <FieldWrapper>
       <label>{label}</label>
       <input {...register(name)} placeholder={placeholder} {...props} />
    </FieldWrapper>
  )
}
