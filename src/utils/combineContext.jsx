const combineContext = (...providers) => {
  return ({ children }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
};

export default combineContext;
