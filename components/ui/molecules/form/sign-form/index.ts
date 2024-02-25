import SignFormProvider from './context/SignFormProvider';
import Form from './Form';
import FormContainer from './FormContainer';
import InputGap from './InputGap';
import SocialMediaLogin from './SocialMediaLogin';

const SignForm = Object.assign(SignFormProvider, {
  FormContainer,
  Form,
  SocialMediaLogin,
  InputGap,
});

export default SignForm;
