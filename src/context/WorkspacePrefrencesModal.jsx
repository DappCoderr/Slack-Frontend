import { useState, createContext } from 'react';

const WorkspacePrefrenceModalContext = createContext();

export const WorkspacePrefrencesModalProvider = ({ children }) => {
  const [openPrefrenceModel, setOpenPrefrenceModel] = useState(false);
  const [initialValue, setInitialValue] = useState(null);
  return (
    <WorkspacePrefrenceModalContext.Provider
      value={{
        openPrefrenceModel,
        setOpenPrefrenceModel,
        initialValue,
        setInitialValue,
      }}
    >
      {children}
    </WorkspacePrefrenceModalContext.Provider>
  );
};

export default WorkspacePrefrenceModalContext;
