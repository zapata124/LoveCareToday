import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignInButton: React.FC = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/signin')}>Sign in</Button>;
};

export default SignInButton;
