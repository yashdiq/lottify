declare module "lottify" {
  import React from 'react';
  import LottieProps from './types';

  export const Lottie: (props: LottieProps) => React.SFC<LottieProps>
}
