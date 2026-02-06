import styled from "styled-components";

export const FieldWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;

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
}`;