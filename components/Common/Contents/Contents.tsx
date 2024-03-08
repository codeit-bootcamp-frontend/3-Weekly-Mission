import styled from "styled-components";

interface ContentsProps {
    // children의 경우 React.ReactNode으로 타입을 정의해준다.
    children: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
    return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.div`
    padding: 40px 32px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        padding: 20px 32px;
        margin-bottom: 40px;
    }
`;

export default Contents;
