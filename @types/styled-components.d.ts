import { CSSProp } from 'styled-components';

import { TPalette } from '@style/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends TPalette {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
