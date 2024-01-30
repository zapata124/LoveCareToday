import React, { useState, createContext, useContext, ReactNode, useRef } from 'react';

interface PageProviderContext {
  page: number;
  totalPages: number;
  handleUpdatePage: (pageNumber: number) => void;
  handleTotalPages: (totalPages: number) => void;
}
interface PageProviderProp {
  children: ReactNode;
}
const PageProvicerContext = createContext<PageProviderContext>({
  page: 1,
  totalPages: 1,
  handleUpdatePage: (pageNumber: number) => undefined,
  handleTotalPages: (totalPages: number) => undefined,
});

const PageProvider: React.FC<PageProviderProp> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleUpdatePage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const handleTotalPages = (totalPages: number) => {
    setTotalPages(totalPages);
  };
  return (
    <PageProvicerContext.Provider value={{ page, totalPages, handleUpdatePage, handleTotalPages }}>
      {children}
    </PageProvicerContext.Provider>
  );
};

export const useUpdatePage = () => {
  const updatePage = useContext(PageProvicerContext);
  return updatePage;
};

export default PageProvider;
