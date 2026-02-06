import { useForm, type FieldValues } from "react-hook-form";
import styled from "styled-components";
import ButtonComponent from "../../../components/button";
import FormField from "../../../components/formField";
import Modal from "../../../components/modal";
import usePosts from "../../../hooks/usePosts";
import type { PostType } from "../../../types";

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
export default function EditModal({ isOpen, onClose, postId }: Props) {
  const {data, editPost, isEditingPostPending} = usePosts();
  const post = data?.results?.find((post: PostType) => post.id === postId);
  const { register, handleSubmit, watch} = useForm({mode: "onChange"});
  const title = watch("title");
  const content = watch("content");
  const isValid = title?.trim() && content?.trim();

  function edit(data: FieldValues) {
    if (!postId || isEditingPostPending) return;
    editPost({id: postId, title: data.title, content: data.content});
    onClose();
  }
  
  return (
    <Modal.Wrapper isOpen={isOpen}>
        <Modal.Header title="Edit item"/>
        <Form onSubmit={handleSubmit(edit)}>
        <FormField.Input label="Title" placeholder="Title" register={register} name="title" required defaultValue={post?.title} />
        <FormField.Textarea label="Content" placeholder="Content" register={register} name="content" required defaultValue={post?.content} />
        <Modal.Footer>
                <ButtonComponent disabled={isEditingPostPending} backgroundColor="transparent" color="black" borderColor="black" type="button" onClick={onClose}>Cancel</ButtonComponent>
                <ButtonComponent backgroundColor="var(--color-confirm)" color="var(--secondary-color)" borderColor="var(--color-confirm)" disabled={!isValid || isEditingPostPending} type="submit">Save</ButtonComponent>
        </Modal.Footer>
        </Form>
    </Modal.Wrapper>
  )
}
