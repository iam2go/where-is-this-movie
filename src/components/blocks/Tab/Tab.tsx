import React, { useContext, useState } from "react";
import useTab from "./hooks/useTab";
import styled from "styled-components";
import cn from "classnames";

type Props = {
  defaultTabId: string;
  id: string;
  children: React.ReactNode;
};

type ContextProps = {
  selected: string;
  setSelected: (id: string) => void;
};

export const TabContext = React.createContext<ContextProps | null>(null);

function Tabs({ defaultTabId, children }: Omit<Props, "id">) {
  const [selected, setSelected] = useState(defaultTabId);
  return (
    <TabContext.Provider value={{ selected, setSelected }}>
      {children}
    </TabContext.Provider>
  );
}

function Tab({ id, children }: Omit<Props, "defaultTabId">) {
  const { selected, setSelected } = useTab();
  return (
    <TabStyle
      className={cn({ selected: selected === id })}
      onClick={() => setSelected(id)}
    >
      {children}
    </TabStyle>
  );
}

function TabPanel({ id, children }: Omit<Props, "defaultTabId">) {
  const { selected } = useTab();
  console.log(selected, id);
  return selected === id ? <div>{children}</div> : null;
}

const TabStyle = styled.div`
  display: inline-block;
`;

export default Tabs;
export { Tab, TabPanel };
