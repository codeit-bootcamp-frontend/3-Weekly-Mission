import styled from "styled-components";

export const ExampleModal = () => {
    return (
        <Wrapper>
            <div>모달창</div>
            <button>close 버튼</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
`;
