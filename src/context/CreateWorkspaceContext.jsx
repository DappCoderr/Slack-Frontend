import { createContext } from 'react';
import { useState } from 'react';

const CreateWorkspaceContext = createContext();

export const CreateWorkspaceContextProvider = ({ children }) => {
  const [openCreateWorkspaceModel, setOpenCreateWorkspaceModel] =
    useState(false);
  return (
    <CreateWorkspaceContext.Provider
      value={{ openCreateWorkspaceModel, setOpenCreateWorkspaceModel }}
    >
      {children}
    </CreateWorkspaceContext.Provider>
  );
};

export default CreateWorkspaceContext;
