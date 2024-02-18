import InputText from '../../components/inputText/InputText';
import InputPassword from '../../components/inputPassword/InputPassword';
import Header from '../../components/header/Header';

const Inputs = () => {
  return (
    <div>
      <Header notFixed />
      <h1>텍스트 input</h1>
      <InputText />
      <br />
      <br />
      <h1>패스워드 input</h1>
      <InputPassword />
    </div>
  );
};

export default Inputs;
