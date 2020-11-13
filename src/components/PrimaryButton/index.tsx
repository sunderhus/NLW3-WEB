import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
