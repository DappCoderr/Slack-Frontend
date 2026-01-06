import { createContext, useState } from 'react';

const WorkspacePrefrenceModalContext = createContext();

export const WorkspacePrefrencesModalContextProvider = ({ children }) => {
  const [openPrefrenceModel, setOpenPrefrenceModel] = useState(false);
  const [initialValue, setInitialValue] = useState(null);
  const [workspace, setWorkspace] = useState(null);

  // prettier-ignore
  return (
    <WorkspacePrefrenceModalContext.Provider value={{ openPrefrenceModel, setOpenPrefrenceModel, initialValue, setInitialValue, workspace, setWorkspace}}>
      {children}
    </WorkspacePrefrenceModalContext.Provider>
  );
};

export default WorkspacePrefrenceModalContext;
