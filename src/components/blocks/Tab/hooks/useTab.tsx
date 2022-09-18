import React from "react";
import { TabContext } from "../Tab";

function useTab() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error("이 컴포넌트는 <Tabs> 컴포넌트 하위에 포함되어야 합니다.");
  }
  return context;
}

export default useTab;
