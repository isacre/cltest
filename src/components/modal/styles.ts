import styled from "styled-components";
export const Footer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 16px;
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h2`
font-weight: 700;
font-size: 22px;
line-height: 100%;
letter-spacing: 0%;
`;

export const Wrapper = styled.div` 
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1000;
`;

export const Content = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFFFFF;
padding: 24px;
border-radius: 16px;
min-width: 50%;
gap: 24px;
display: flex;
flex-direction: column;
`;