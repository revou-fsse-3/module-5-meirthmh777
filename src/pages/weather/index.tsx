import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";
import WeatherForm from "@components/WeatherForm";
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps> & PropsWithChildren;
const App: AppComponents = () => {
  return (
    <Fragment>
      <WeatherForm />
    </Fragment>
  );
};

export default App;
