import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../images/picture.jpg";

export const Container = styled.div`
    background-image: url(${img});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
    margin-bottom: 13px;
    font-weight: bold;
`;
export const FormContent = styled.div`
    height: 70vh;
    width: 22vw;
    place-self: center;
    place-content: center;
    padding: 1em;
    border: 1px solid grey;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: white;
`;
export const Form = styled.form`
    display: inline-block;
    height: 60vh;
    padding: 2em;
    text-align: center;
`;
export const FormH1 = styled.h1`
    padding-bottom: 15px;
    font-size: 1.5rem;
    display: flex;
`;

export const FormInputWrapper = styled.div`
    height: 40vh;
    border-radius: 5px;
`;

export const FormInputContainer = styled.div`
    margin-top: 1em;
    align-items: center;
    justify-content: center;
`;

export const FormLabel = styled.label`
    margin: 1em;
    padding: 1em;
`;
export const FormInput = styled.input`
    margin: 1em;
`;
export const FormButton = styled.button`
    margin: 1em;
    padding: 0.2em;
`;
export const Text = styled.p`
    margin: 1em;
`;
