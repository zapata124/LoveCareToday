import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpButton: React.FC = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/signup')}>Sign up</Button>;
};

export default SignUpButton;
