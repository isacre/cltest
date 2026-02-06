import styled from "styled-components"
import CreatePostForm, { type CreatePostFormProps } from "../components/createPostForm";
import usePosts from "../hooks/usePosts";
const Wrapper = styled.div`
height: 100%;
background-color: white;
display: flex;
flex-direction: column;
max-width: 800px;
width: 100%;
overflow-y: auto;
`;

const Header = styled.div`
background-color: var(--primary-color);
color: var(--secondary-color);
height: 80px;
display: flex;
align-items: center;
justify-content: left;
font-weight: 700;
font-size: 22px;
line-height: 100%;
letter-spacing: 0%;
padding-left: 37px;
border-bottom: 1px solid #999999;
`;

const Feed = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 24px;
`;
export default function FeedPage() {
  const { data, isLoading, error } = usePosts();

  console.log(data, isLoading, error);

  function handleCreatePost(data: CreatePostFormProps) {
    console.log(data);
  }

  return (
    <Wrapper>
        <Header>CodeLeap Network</Header>
        <Feed>
        <CreatePostForm submitFn={(data) => handleCreatePost(data)} />
        </Feed>
    </Wrapper>
  )
}
