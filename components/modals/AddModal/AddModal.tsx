import * as S from "./AddModal.style";

export default function AddModal() {
  return (
    <S.Content>
      <S.Title>폴더 추가</S.Title>
      <S.Input placeholder="내용 입력" />
      <S.Button>추가하기</S.Button>
    </S.Content>
  );
}
