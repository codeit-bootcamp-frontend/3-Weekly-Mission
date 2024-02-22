import styled from "styled-components";
import { SubmitButton } from "./SubmitButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import { useId, useState } from "react";
import { signFormDataInterface } from "@/interfaces";

// Think: 제어컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const Form = ({ currentPath }: { currentPath: string }) => {
    const id = useId();
    const [FormData, setFormData] = useState<signFormDataInterface>(() => {
        return {
            email: "",
            password: "",
            confirmPassword: "",
        };
    });

    const handleInputChange = (data: signFormDataInterface) => {
        setFormData({ ...FormData, ...data });
    };

    return (
        <FormWrapper>
            <div>
                <Label htmlFor={`${id}-email`}>이메일</Label>
                <EmailInput
                    name={`${id}-email`}
                    type="email"
                    FormData={FormData}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <Label htmlFor={`${id}-password`}>비밀번호</Label>
                <PasswordInput
                    name={`${id}-password`}
                    type="password"
                    FormData={FormData}
                    onChange={handleInputChange}
                    currentPath={currentPath}
                />
            </div>
            {currentPath === "signin" ? null : (
                <div>
                    <Label htmlFor={`${id}-confirm-password`}>
                        비밀번호 확인
                    </Label>
                    <PasswordInput
                        name={`${id}-confirm-password`}
                        type="password"
                        FormData={FormData}
                        onChange={handleInputChange}
                        isConfirmPassword={true}
                        currentPath={currentPath}
                    />
                </div>
            )}
            {currentPath === "signin" ? (
                <SubmitButton>로그인</SubmitButton>
            ) : (
                <SubmitButton>회원가입</SubmitButton>
            )}
        </FormWrapper>
    );
};

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;

const Label = styled.label`
    color: var(--black, #000);

    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
