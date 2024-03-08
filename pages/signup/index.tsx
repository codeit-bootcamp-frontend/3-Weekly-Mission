import { Header } from "@/components/Common/Sign/Header";
import { SnsLogin } from "@/components/Common/Sign/SnsLogin";
import { SignUpForm } from "@/components/SignUpPage/Form";
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
