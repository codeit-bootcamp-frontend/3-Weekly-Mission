import styled from 'styled-components';

const Button = () => {
  return <StButton>버튼 테스트</StButton>;
};

export default Button;

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28rem;
  padding: 1.6rem 2rem;

  background-color: ${({ theme }) => theme.testColor};
`;
