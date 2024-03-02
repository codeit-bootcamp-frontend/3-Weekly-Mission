import styled from 'styled-components';

export const ModalContentInput = ({
  type = 'text',
  value,
  onChange,
  placeholder,
}) => {
  return (
    <ModalInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const ModalInput = styled.input`
  width: 100%;
  border: 0.1rem solid var(--gray20);
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--gray100);
  padding: 1.8rem 1.5rem;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: var(--gray60);
  }

  &:focus {
    border-color: var(--primary);
  }
`;
