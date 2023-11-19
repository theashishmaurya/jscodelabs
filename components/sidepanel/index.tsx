// Let's create a new component called SidePanel, super modular and reusable

import React from "react";
import { SidePanelItems, SidePanelProps } from "./interfaces";

const sidePanelItem = (item: SidePanelItems) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-row">
          {item.icon}
          <div>{item.name}</div>
        </div>
        <div>{item?.component}</div>
      </div>
      <div>{item.items?.map((item) => sidePanelItem(item))}</div>
    </div>
  );
};
const SidePanel: React.FC<SidePanelProps> = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => sidePanelItem(item))}
    </div>
  );
};

export default SidePanel;
