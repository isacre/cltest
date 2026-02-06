import styled from 'styled-components'
import { SlDrawer } from "react-icons/sl";

const Wrapper = styled.div`
padding-top: 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;
text-align: center;
border: 1px solid #999999;
border-radius: 16px;
padding: 24px;

img {
    height: 100px;
}
`;


interface Props {
    postsLength: number | undefined;
}
export default function NoPostsComponent({postsLength}: Props) {
    if (postsLength && postsLength > 0) return null;
  return (
    <Wrapper>
        <SlDrawer size={100} />
        <b>No posts found</b>
        <p>Create a new post to get started</p>
    </Wrapper>
  )
}
