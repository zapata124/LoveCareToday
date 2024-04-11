import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { clientPY } from '../client';
import { useAuthenticatedUser } from '../providers/AuthenticatedUserProvider';
import { addBookmark, deleteBookmark } from '../query';

const useUpdateBookmarks = () => {
  const { cookie, setAuthenticatedUser } = useAuthenticatedUser();
  const [addUserBookmark, { loading, error, data }] = useMutation(addBookmark, {
    client: clientPY,
  });
  const [deleteUserBookmark, { data: deleteData }] = useMutation(deleteBookmark, {
    client: clientPY,
  });

  const handleAddBookmark = (name: string, slug: string) => {
    addUserBookmark({
      variables: {
        bookmark: name,
        slug: slug,
        email: cookie?.user?.email,
      },
    });
  };

  const handleDeleteBookmark = (name: string) => {
    deleteUserBookmark({
      variables: {
        bookmark: name,
        email: cookie?.user?.email,
      },
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setAuthenticatedUser(data?.add_bookmark);
    }
  }, [data]);

  useEffect(() => {
    if (deleteData) {
      setAuthenticatedUser(deleteData?.delete_bookmark);
    }
  }, [deleteData]);

  return {
    handleAddBookmark,
    handleDeleteBookmark,
  };
};

export default useUpdateBookmarks;
