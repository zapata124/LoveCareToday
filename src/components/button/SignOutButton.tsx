import React from 'react';
import { Button } from '@mui/material';
import { useAuthenticatedUser } from '../../providers/AuthenticatedUserProvider';
import { terminateUserAuthentication } from '../../query';
import { useMutation } from '@apollo/client';
import { clientPY } from '../../client';

const SingOutButton: React.FC = () => {
  const { cookie, clearUserCookie } = useAuthenticatedUser();
  const [terminateAuthentication, { data, error }] = useMutation(terminateUserAuthentication, {
    client: clientPY,
  });

  const handleTerminateAuthentication = () => {
    try {
      terminateAuthentication({
        variables: { email: cookie.user.email },
      });
      clearUserCookie();
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return <Button onClick={handleTerminateAuthentication}>Sign Out</Button>;
};

export default SingOutButton;
