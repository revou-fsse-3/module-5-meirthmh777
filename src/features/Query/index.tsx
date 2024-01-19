import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const queryClient = new QueryClient();
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default index;
