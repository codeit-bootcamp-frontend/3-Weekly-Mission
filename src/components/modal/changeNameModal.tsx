import styled from "styled-components";

const Title = styled.div`
  color: var(--Linkbrary-gray100, #373740);
  font-family: "Pretendard-regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 0 18px 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  box-sizing: border-box;
  text-indent: 1rem;

  &::placeholder {
    width: 80%;
  }
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border: none;

  ${Title} {
    color: var(--Grey-Light, #f5f5f5);
    font-size: 16px;
    font-weight: 600;
  }
`;

const Container = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;

export default function ChangeNameModal() {
  return (
    <Container>
      <Title>폴더 이름 변경</Title>
      <Input placeholder="유용한 팁" />
      <Button>
        <Title>변경하기</Title>
      </Button>
    </Container>
  );
}
