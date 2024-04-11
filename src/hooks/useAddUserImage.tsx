import { useMutation } from '@apollo/client';
import { clientPY } from '../client';
import { useAuthenticatedUser } from '../providers/AuthenticatedUserProvider';
import { addUserProfileImage } from '../query';
import { useEffect } from 'react';

const useAddUserImage = () => {
  const { cookie, setAuthenticatedUser } = useAuthenticatedUser();
  const [addUserImage, { data }] = useMutation(addUserProfileImage, {
    client: clientPY,
  });

  const handleAddUserImage = (imageUrl: string) => {
    addUserImage({
      variables: {
        avatar: imageUrl,
        email: cookie?.user?.email,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setAuthenticatedUser(data.add_user_profile_image);
    }
  }, [data]);

  return {
    handleAddUserImage,
  };
};

export default useAddUserImage;
