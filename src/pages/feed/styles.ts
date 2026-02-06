import styled from "styled-components";

export const Wrapper = styled.div`
height: 100%;
background-color: white;
display: flex;
flex-direction: column;
max-width: 800px;
width: 100%;
overflow-y: auto;
`;

export const Header = styled.div`
background-color: var(--primary-color);
color: var(--secondary-color);
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #999999;


.title {
    font-weight: 700;
font-size: 22px;
line-height: 100%;
letter-spacing: 0%;
padding-left: 37px;
}

.logout {

}
`;

export const Feed = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 24px;
overflow-y: auto;
height: calc(100% - 80px);
`;