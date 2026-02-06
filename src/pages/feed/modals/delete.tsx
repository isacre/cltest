import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import ButtonComponent from "../../../components/button";
import Modal from "../../../components/modal";
import usePosts from "../../../hooks/usePosts";

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 24px;
`;

interface Props {
    isOpen: boolean;
    onClose: () => void;
    postId: number | null;
}
export default function DeleteModal({ isOpen, onClose, postId }: Props) {
  const { deletePost, isDeletingPostPending } = usePosts();
  const { handleSubmit } = useForm({mode: "onChange"});

  function handleDelete() {
    if (!postId || isDeletingPostPending) return;
    deletePost(postId);
    onClose();
  }
  
  return (
    <Modal.Wrapper isOpen={isOpen}>
        <Modal.Header title="Are you sure you want to delete this item?"/>
        <Form onSubmit={handleSubmit(handleDelete)}>
        <Modal.Footer>
                <ButtonComponent disabled={isDeletingPostPending} backgroundColor="transparent" color="black" borderColor="black" type="button" onClick={onClose}>Cancel</ButtonComponent>
                <ButtonComponent disabled={isDeletingPostPending} backgroundColor="var(--color-cancel)" color="var(--secondary-color)" borderColor="var(--color-cancel)" type="submit">Delete</ButtonComponent>
        </Modal.Footer>
        </Form>
    </Modal.Wrapper>
  )
}
