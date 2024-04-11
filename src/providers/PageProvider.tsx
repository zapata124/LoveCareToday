import React, { useState, createContext, useContext, ReactNode } from 'react';

interface PageProviderContext {
  page: number;
  totalPages: number;
  show: boolean;
  handleUpdatePage: (pageNumber: number) => void;
  handleTotalPages: (totalPages: number) => void;
  handleShow: () => void;
}
interface PageProviderProp {
  children: ReactNode;
}
const PageProviderContext = createContext<PageProviderContext>({
  page: 1,
  totalPages: 1,
  show: true,
  handleUpdatePage: (pageNumber: number) => undefined,
  handleTotalPages: (totalPages: number) => undefined,
  handleShow: () => undefined,
});

const PageProvider: React.FC<PageProviderProp> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow(!show);
  };
  const handleUpdatePage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const handleTotalPages = (totalPages: number) => {
    setTotalPages(totalPages);
    setShow(true);
  };
  return (
    <PageProviderContext.Provider
      value={{ page, totalPages, show, handleShow, handleUpdatePage, handleTotalPages }}
    >
      {children}
    </PageProviderContext.Provider>
  );
};

export const useUpdatePage = () => {
  const updatePage = useContext(PageProviderContext);
  return updatePage;
};

export default PageProvider;
