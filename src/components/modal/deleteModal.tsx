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
padding: 18px 15px;
justify-content: center;
align-items: center;
border-radius: 8px;
border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
background: var(--Linkbrary-white, #fff);
box-sizing: border-box;

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
background: var(--Linkbrary-red, #FF5B56);
border: none;

${Title} {
  color: var(--Grey-Light, #F5F5F5);
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
border: 1px solid var(--Linkbrary-gray20, #CCD5E3);
background: var(--Linkbrary-white, #FFF);
`;

export default function DeleteModal() {
  return (
    <Container>
      <Title>폴더 삭제</Title>
      <Input placeholder="폴더명" />
      <Button><Title>삭제하기</Title></Button>
    </Container>
  );
}
