import styled from "styled-components";
import noImageSource from "../../../../assets/images/no_image_source.svg";
import star from "../../../../assets/images/star.svg";
import { CardInterface } from "../../../../interfaces";

interface CardImgProps {
    link: CardInterface;
}

const CardImg = ({ link }: CardImgProps) => {
    return (
        <Wrapper>
            {link.imageSource ? (
                <CardMainImg src={link.imageSource} alt="카드 이미지" />
            ) : (
                <CardMainImg src={noImageSource} alt="이미지가 없음" />
            )}
            <StarButton type="button">
                <img src={star} alt="즐겨찾기 별 이미지" />
            </StarButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 205px;
    overflow: hidden;
    position: relative;
`;

export const CardMainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.1s;
`;

const StarButton = styled.button`
    width: 34px;
    height: 34px;
    position: absolute;
    top: 15px;
    right: 15px;

    &img {
        width: 100%;
        height: 100%;
    }
`;

export default CardImg;
