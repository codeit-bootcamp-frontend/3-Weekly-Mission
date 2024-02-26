import SignFormProvider from './compound-kit/context/SignFormProvider';
import Form from './compound-kit/Form';
import FormContainer from './compound-kit/FormContainer';
import InputGap from './compound-kit/InputGap';
import SocialMediaLogin from './compound-kit/SocialMediaLogin';

const SignForm = Object.assign(SignFormProvider, {
  FormContainer,
  Form,
  SocialMediaLogin,
  InputGap,
});

export default SignForm;
