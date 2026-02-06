import styled from "styled-components";
import ButtonComponent from "../button";
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
border: 1px solid #999999;
border-radius: 16px;
gap: 24px;
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

.form-field-wrapper {
display: flex;
flex-direction: column;
gap: 8px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

textarea {
    resize: none;
    height: 74px;
}
`;

export const CreatePostButton = styled(ButtonComponent)`
width: 120px;
align-self: flex-end;
`;