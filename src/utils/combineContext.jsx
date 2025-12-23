const combineContext = (...providers) => {
  return ({ children }) => {
    providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
};

export default combineContext
