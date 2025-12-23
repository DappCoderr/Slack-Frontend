export default combineContext = (...providers) => {
  return ({ children }) => {
    providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
};
