import { useForm } from "react-hook-form";
import { Wrapper, Title, Form, CreatePostButton } from "./styles";
import FormField from "../formField";
import toast from "react-hot-toast";

export interface CreatePostFormProps {
    title: string;
    content: string;
    username: string;
    created_datetime: string;
    author_ip: string;
}

type Props = {
    submitFn: (data: CreatePostFormProps) => void;
    text?: string;
}
export default function CreatePostForm({ submitFn, text = "What's on your mind?" }: Props) {
  const { register, handleSubmit, watch, reset} = useForm<CreatePostFormProps>({mode: "onChange"});
  const title = watch("title");
  const content = watch("content");
  const isValid = title?.trim() && content?.trim();

  function onSubmit(data: CreatePostFormProps) {
    submitFn(data);
    reset();
  };

  return (
   <Wrapper>
    <Title>{text}</Title>
     <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField.Input label="Title" placeholder="Title" register={register} name="title" required />
        <FormField.Textarea label="Content" placeholder="Content" register={register} name="content" required />
        <CreatePostButton disabled={!isValid} type="submit">Create</CreatePostButton>
    </Form>
   </Wrapper>
  )
}
