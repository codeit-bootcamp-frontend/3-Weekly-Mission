import { Form } from "@/components/Sign/Form";
import { Header } from "@/components/Sign/Shared/Header";
import { SnsLogin } from "@/components/Sign/Shared/SnsLogin";
import { SignInForm } from "@/components/Sign/SignIn/Form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Signin() {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push("/folder");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            <Header currentPath="signin" />
            <SignInForm />
            <SnsLogin />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
    margin-top: 238px;
`;
