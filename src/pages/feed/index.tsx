import { useState } from "react";
import CreatePostForm, { type CreatePostFormProps } from "../../components/createPostForm";
import usePosts from "../../hooks/usePosts";
import DeleteModal from "./modals/delete";
import EditModal from "./modals/edit";
import RegisterModal from "./modals/register";
import { Wrapper, Header, Feed } from "./styles";
import useUserAuth from "../../hooks/useUserAuth";
import ButtonComponent from "../../components/button";
import type { PostType } from "../../types";
import Post from "../../components/post";
import PostSkeleton from "../../components/skeleton";
import NoPostsComponent from "../../components/noPostsComponent";

export type FeedModalStates = 'register' | 'edit' | 'delete' | null;
export default function FeedPage() {
  const [ModalState, setModalState] = useState<FeedModalStates>(null)
  const [PostId, setPostId] = useState<number | null>(null);
  const { data, isLoading, createPost, isCreatingPostPending } = usePosts();
  const { username } = useUserAuth({setModalState});

  function handleCreatePost(postData: CreatePostFormProps) {
    if (isCreatingPostPending) return;
    createPost(postData);
  }

  function handleClosingModal() {
    setModalState(null);
  }

  function handleLogout() {
    localStorage.removeItem('username');
    setModalState('register');
  }

  return (
    <Wrapper>
        <RegisterModal isOpen={ModalState === 'register'} onClose={handleClosingModal} />
        <EditModal postId={PostId} isOpen={ModalState === 'edit'} onClose={handleClosingModal} />
        <DeleteModal postId={PostId} isOpen={ModalState === 'delete'} onClose={handleClosingModal} />
        <Header>
          <h1 className="title">CodeLeap Network</h1>
        {username && <ButtonComponent className="logout" onClick={handleLogout}>Logout</ButtonComponent>}
        </Header>
        <Feed>
        <CreatePostForm submitFn={(data) => handleCreatePost(data)} />
        {!isLoading && <NoPostsComponent postsLength={data?.results?.length} />}
        {isLoading && <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>}
        {data?.results?.map((post: PostType, index: number) => (
          <Post key={post.id} index={index} post={post} setModalState={setModalState} setPostId={setPostId} />
        ))}
        </Feed>
    </Wrapper>
  )
}
