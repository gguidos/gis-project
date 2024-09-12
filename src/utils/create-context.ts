export default function createContext({ React }: { React:any }) {
    return Object.freeze({ context })
    function context<T>({ initialValue }:{ initialValue: T | undefined }) {
        const context = React.createContext(initialValue);

        const useContextConsumer = () => {
          const c = React.useContext(context);
          if (!c) {
            throw new Error('Component must be wrapped with <Container.Provider>');
          }
          return c;
        };
      
        return [useContextConsumer, context.Provider] as const;
    }
}