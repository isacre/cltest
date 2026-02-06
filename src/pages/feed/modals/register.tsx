import { useForm, type FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import ButtonComponent from "../../../components/button";
import FormField from "../../../components/formField";
import Modal from "../../../components/modal";

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 24px;
`;

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
export default function RegisterModal({ isOpen, onClose }: Props) {
  const { register, handleSubmit, watch} = useForm({mode: "onChange"});
  const username = watch("username");
  const isValid = username?.trim().length >= 4;

  function login(data: FieldValues) {
    toast.success("Welcome to CodeLeap network!");
    localStorage.setItem('username', data.username);
    onClose();
  }

  return (
    <Modal.Wrapper isOpen={isOpen}>
        <Modal.Header title="Welcome to CodeLeap network!"/>
        <Form onSubmit={handleSubmit(login)}>
        <FormField.Input label="Please enter your username" placeholder="John Doe" register={register} name="username" required />
        <Modal.Footer>
                <ButtonComponent disabled={!isValid} type="submit">ENTER</ButtonComponent>
        </Modal.Footer>
        </Form>
    </Modal.Wrapper>
  )
}
