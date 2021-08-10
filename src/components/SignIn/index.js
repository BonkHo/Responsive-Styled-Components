import React from "react";
import {
    Container,
    IconWrapper,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInputWrapper,
    FormInputContainer,
    FormLabel,
    FormInput,
    FormButton,
    Text,
} from "./SignInElements";

const SignIn = () => {
    return (
        <>
            <Container>
                <IconWrapper>
                    <Icon to="/">planted</Icon>
                </IconWrapper>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account.</FormH1>
                        <FormInputWrapper>
                            <FormInputContainer>
                                <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput type="email" required />
                                <FormLabel type="for">Password</FormLabel>
                                <FormInput type="password" required />
                                <FormButton type="submit">Continue</FormButton>
                                <Text>Forgot Password?</Text>
                            </FormInputContainer>
                        </FormInputWrapper>
                    </Form>
                </FormContent>
            </Container>
        </>
    );
};

export default SignIn;
