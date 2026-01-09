import { useState } from 'react';

import { createContext } from 'react-router-dom';

const CreateChannelContext = createContext();

export const CreateChannelContextProvider = ({ children }) => {
  const [openCreateChannelModal, setOpenCreateChannelModal] = useState(second);

  // prettier-ignore
  return (
    <CreateChannelContext.Provider value={{ openCreateChannelModal, setOpenCreateChannelModal }}>
        {children}
    </CreateChannelContext.Provider>
  )
};

export default CreateChannelContext;
