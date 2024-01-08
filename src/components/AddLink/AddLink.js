import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--Linkbrary-bg, #f0f6ff);
  padding: 60px 320px 90px 320px;
`;

const Container = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const Button = styled.button`
  border: 0px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  padding: 10px 16px;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Input = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border: none;
`;
function AddLink() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Icon src="/assets/link-icon.svg" alt="link" />
          <Input type="text" placeholder="링크를 추가해 보세요"></Input>
        </div>
        <Button>추가하기</Button>
      </Container>
    </Wrapper>
  );
}

export default AddLink;
