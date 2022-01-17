import base from './base';

export default {
  ...base,
  colors: {
    primaryLight: '#EB7573',
    primary: '#DD4F50',
    primaryDark: '',
    secondaryLight: '#4476C8',
    secondary: '#3861BA',
    secondaryDark: '',
    lowContrast: '#F7F5F5',
    zeroContrast: '#FFFFFF',
    black: '#141414',
    dark: '#20252A',
    error: '#EB7573',
    disabled: '#B9B8B8',
    placeholder: '#908F8F',
    buttonOutlineBorder: '#676666',
  },
} as const;
