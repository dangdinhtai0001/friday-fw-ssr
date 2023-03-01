interface Theme {
  colors: {
    primary: string,
    secondary: string,
    success: string,
    warning: string,
    danger: string,
    background: string,
  };
}

export const light: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    danger: '#FF3B30',
    background: '#FFFFFF',
  },
};

export const dark: Theme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#8E8E93',
    success: '#30D158',
    warning: '#FF9F0A',
    danger: '#FF453A',
    background: '#1C1C1E',
  },
};
