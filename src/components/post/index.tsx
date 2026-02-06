import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import type { FeedModalStates } from "../../pages/feed";
import type { PostType } from "../../types";
import { getPassedTime } from "../../utils";
import { ActionBar, Content, Header, UserDetails, Wrapper } from "./styles";


export default function Post({ post, setModalState, setPostId, index }: { index: number,post: PostType, setModalState: (modalState: FeedModalStates) => void, setPostId: (id: number) => void }) {
    const {title, content, created_datetime, username } = post;
    const isLiked = localStorage.getItem(`liked_${post.id}`) === 'true';
    const [Liked, setLiked] = useState(isLiked);
    const currentUser = localStorage.getItem('username');
    const isOwner = currentUser === post.username;
    const passedTime = getPassedTime(created_datetime);

    function handleOpeningEditModal() {
        setModalState('edit');
        setPostId(post.id);
    }

    function handleOpeningDeleteModal() {
        setModalState('delete');
        setPostId(post.id);
    }

    function handleLike() {
      if (isLiked) {
        localStorage.removeItem(`liked_${post.id}`);
        setLiked(false);
      } else {
        localStorage.setItem(`liked_${post.id}`, 'true');
        setLiked(true);
      }
    }

  return (
    <Wrapper $index={index}>
        <Header>
        <p className="title">{title}</p>
       {isOwner && <div className="actions">
       <img src={editIcon} alt="Edit" onClick={handleOpeningEditModal} />
       <img src={deleteIcon} alt="Delete" onClick={handleOpeningDeleteModal} />
       </div>}
        </Header>
        <Content>
        <UserDetails>
        <p>@{username}</p>
        <p>{passedTime}</p>
        </UserDetails>
        <p>{content}</p>
        <ActionBar>
       {Liked ? <AiFillLike color="var(--primary-color)" onClick={handleLike} /> : <AiOutlineLike color="var(--primary-color)" onClick={handleLike} />}
          </ActionBar>
        </Content>
    </Wrapper>
  )
}
