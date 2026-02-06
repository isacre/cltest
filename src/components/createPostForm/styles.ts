import styled from "styled-components";
import ButtonComponent from "../button";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
border: 1px solid #999999;
border-radius: 16px;
gap: 24px;
opacity: 0;
animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
animation-delay: 0.08s;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const Title = styled.h2`
font-weight: 700;
font-size: 22px;
line-height: 100%;
letter-spacing: 0%;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const CreatePostButton = styled(ButtonComponent)`
width: 120px;
align-self: flex-end;

@media (max-width: 768px) {
  width: 100%;
}
`;