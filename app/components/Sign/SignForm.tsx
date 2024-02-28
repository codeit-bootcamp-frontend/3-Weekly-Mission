import styled from 'styled-components';
import Input from '../../components/input/Input';
import { useForm } from 'react-hook-form';

interface Props {
  type: string;
}

export default function SignForm({ type }: Props) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <Container>
        <InputBox>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            placeholder="이메일을 입력해 주세요"
            register={register}
            errors={errors}
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            placeholder={
              type === 'signup'
                ? '영문, 숫자를 조합해 8자 이상 입력해 주세요'
                : '비밀번호를 입력해 주세요'
            }
            register={register}
            errors={errors}
          />
        </InputBox>
        {type === 'signup' ? (
          <InputBox>
            <Label htmlFor="verifyPassword">비밀번호 확인</Label>
            <Input
              type="verifyPassword"
              id="verifyPassword"
              placeholder="비밀번호와 일치하는 값을 입력해 주세요"
              register={register}
              errors={errors}
            />
          </InputBox>
        ) : null}
      </Container>
      <SignButton disabled={isSubmitting}>회원가입</SignButton>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label = styled.label`
  color: var(--linkbrary-black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
`;
const SignButton = styled.button`
  margin-top: 30px;
  display: flex;
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border: 0;
  color: #f5f5f5;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
