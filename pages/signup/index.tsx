import { Form } from "@/components/Sign/Form";
import { Header } from "@/components/Sign/Shared/Header";
import { SnsLogin } from "@/components/Sign/Shared/SnsLogin";
import { SignUpForm } from "@/components/Sign/SignUp/Form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Signup() {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push("/folder");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            <Header currentPath="signup" />
            <SignUpForm />
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
