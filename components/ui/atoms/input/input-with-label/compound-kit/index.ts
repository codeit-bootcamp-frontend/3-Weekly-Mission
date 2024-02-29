import InputLabel from '@components/ui/atoms/label/input-label/InputLabel';

import InputWithErrorMsg from '../../input-with-error-msg/InputWithErrorMsg';
import InputWithLabelProvider from './context/InputWithLabelProvider';
import InputBox from './InputBox';

const InputWithLabelKit = Object.assign(InputWithLabelProvider, {
  Box: InputBox,
  Label: InputLabel,
  InputWithErrorMsg,
});

export default InputWithLabelKit;
