import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

/**
 * TODO: create some context can receive theme as a props
 * the make the childern consumer display the theme text
 */
const someContextContext = createContext({
  theme: "",
});

someContextContext.displayName = " someContext context";
type ProviderProps = HTMLAttributes<HTMLDivElement> & {
  theme: string;
};
type ProviderComponents = FC<ProviderProps> & PropsWithChildren;
const Provider: ProviderComponents = ({ children, theme }) => {
  return (
    <someContextContext.Provider value={{ theme }}>
      {children}
    </someContextContext.Provider>
  );
};
type withWrapperComponent = (Component: FC) => FC<ProviderProps>;
const withWrapper: withWrapperComponent = (Component) => (props) => {
  return (
    <Provider {...props}>
      <Component />
    </Provider>
  );
};

export { Provider, withWrapper };
export default function usesomeContext() {
  const context = useContext(someContextContext);

  if (!context) throw Error("use hook inside  someContext provider");

  return context;
}

// consume the context ho wraper the withWrapper
