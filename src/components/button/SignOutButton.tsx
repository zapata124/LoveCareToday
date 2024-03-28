import React from 'react';
import { Button } from '@mui/material';
import { useAuthenticatedUser } from '../../providers/AuthenticatedUserProvider';

const SingOutButton: React.FC = () => {
  const { clearUserCookie } = useAuthenticatedUser();

  return <Button onClick={() => clearUserCookie()}>Sign Out</Button>;
};

export default SingOutButton;
