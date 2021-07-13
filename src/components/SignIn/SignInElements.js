import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: #101522;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
`;

export const IconWrapper = styled.div`
    max-width: auto;
    height: auto;
    place-self: center;
`;

export const Icon = styled(Link)`
    color: #fff;
    cursor: pointer;
    justify-content: center;
    text-decoration: none;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    padding: 1em;
    margin-bottom: 16px;
    font-weight: bold;
`;
export const FormContent = styled.div`
    height: 70vh;
    width: 22vw;
    place-self: center;
    place-content: center;
    padding: 1.5em;
    background: lightgreen;
    border-radius: 5px;
    text-align: center;
    border: 10px solid green;
`;
export const Form = styled.form`
    display: inline-block;
    height: 60vh;
    padding: 2em;
    text-align: center;
`;
export const FormH1 = styled.h1`
    padding-bottom: 20px;
    font-size: 1.5rem;
    display: flex;
`;

export const FormInputWrapper = styled.div`
    background: lightgrey;
    border: 5px solid darkgray;
    height: 40vh;
    border-radius: 5px;
`;

export const FormInputContainer = styled.div`
    padding-top: 3em;
    align-items: center;
    justify-content: center;
`;

export const FormLabel = styled.label`
    margin: 1em;
    padding: 1em;
`;
export const FormInput = styled.input``;
export const FormButton = styled.button``;
export const Text = styled.p``;
