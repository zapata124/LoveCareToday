import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowBackIcon fontSize='large' />
    </Button>
  );
};

export default BackButton;
