import { Form } from "@/components/Sign/Form";
import { Header } from "@/components/Sign/Header";
import { SnsLogin } from "@/components/Sign/SnsLogin";
import useGetPathname from "@/hooks/useGetPathname";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Signin() {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push("/folder");
        }
        // eslint-disable-next-line
    }, []);

    const { pathname } = useGetPathname();
    const [currentPath, setCurrentPath] = useState(() => {
        if (pathname.includes("signin")) {
            return "signin";
        } else {
            return "signup";
        }
    });

    return (
        <Wrapper>
            <Header currentPath={currentPath} />
            <Form currentPath={currentPath} />
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
