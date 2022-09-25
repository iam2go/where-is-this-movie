import React, { useState } from "react";
import useTab from "./hooks/useTab";
import styled from "styled-components";

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

function Tab({ id, children, ...delegated }: Omit<Props, "defaultTabId">) {
  const { selected, setSelected } = useTab();
  return (
    <TabStyle
      {...delegated}
      isActive={selected === id}
      onClick={() => setSelected(id)}
    >
      {children}
    </TabStyle>
  );
}

function TabPanel({ id, children, ...delegated }: Omit<Props, "defaultTabId">) {
  const { selected } = useTab();
  return selected === id ? <div {...delegated}>{children}</div> : null;
}

type StyledProps = {
  isActive?: boolean;
};

const TabStyle = styled.div.attrs<StyledProps>((props) => ({
  className: props.isActive ? "selected" : "",
}))<StyledProps>`
  display: inline-block;
  cursor: pointer;
`;

export default Tabs;
export { Tab, TabPanel };
