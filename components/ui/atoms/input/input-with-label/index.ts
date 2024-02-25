import InputLabel from '../../label/input-label/InputLabel';
import InputWithErrorMsg from '../input-with-error-msg/InputWithErrorMsg';
import InputWithLabelProvider from './context/InputWithLabelProvider';
import InputBox from './InputBox';

const InputWithLabel = Object.assign(InputWithLabelProvider, {
  Box: InputBox,
  Label: InputLabel,
  InputWithErrorMsg,
});

export default InputWithLabel;
