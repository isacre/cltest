import { useForm } from "react-hook-form";
import { Wrapper, Title, Form, CreatePostButton } from "./styles";

export interface CreatePostFormProps {
  title: string;
  content: string;
}

type Props = {
    submitFn: (data: CreatePostFormProps) => void;
}
export default function CreatePostForm({ submitFn }: Props) {
  const { register, handleSubmit, watch} = useForm<CreatePostFormProps>({mode: "onChange"});
  const title = watch("title");
  const content = watch("content");
  const isValid = title && content;

  function onSubmit(data: CreatePostFormProps) {
    submitFn(data);
  };

  return (
   <Wrapper>
    <Title>What's on your mind?</Title>
     <Form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-field-wrapper">
       <label>Title</label>
       <input required {...register("title")} placeholder="Title" />
       </div>
       <div className="form-field-wrapper">
       <label>Content</label>
       <textarea required {...register("content")} placeholder="Content" /></div>
       <CreatePostButton disabled={!isValid} type="submit">Create</CreatePostButton>
    </Form>
   </Wrapper>
  )
}
