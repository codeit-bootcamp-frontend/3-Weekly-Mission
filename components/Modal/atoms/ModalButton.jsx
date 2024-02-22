import * as S from './ModalButton.style';

export default function ModalButton({
  buttonName,
  buttonAction,
  buttonType = "default"
}) {

  return (
      <S.Button onClick={buttonAction}
                $buttonType={buttonType}>{buttonName}</S.Button>
  );
}
