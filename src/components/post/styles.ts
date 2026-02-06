import styled from "styled-components";

export const Wrapper = styled.div<{ $index: number }>`
display: flex;
flex-direction: column;
border-radius: 16px;
opacity: 0;
animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
animation-delay: ${props => props.$index * 0.08}s;

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

export const Header = styled.div`
background-color: var(--primary-color);
color: var(--secondary-color);
padding: 24px;
border-radius: 16px 16px 0 0;
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;

.title {
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 120px);
}

.actions {
    display: flex;
    gap: 24px;

    img {
        cursor: pointer;
    }
}
`;

export const Content = styled.div`
padding: 24px;
display: flex;
flex-direction: column;
gap: 16px;
border: 1px solid #999999;
border-radius: 0 0 16px 16px;
font-size: 18px;
`;

export const UserDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-size: 18px;
color: #777777;

@media(max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}
`;


export const ActionBar = styled.div`
display: flex;
align-items: center;
gap: 24px;

svg {
  cursor: pointer;
}
`;
