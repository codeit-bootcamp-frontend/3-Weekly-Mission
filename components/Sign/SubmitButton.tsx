import { ReactNode } from "react";
import styled from "styled-components";

export const SubmitButton = ({ children }: { children: ReactNode }) => {
    return <Button type="submit">{children}</Button>;
};

const Button = styled.button`
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 18px;

    border-radius: 8px;
    width: 400px;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
`;
