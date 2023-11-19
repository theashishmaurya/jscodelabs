export interface SidePanelItems {
  name: string;
  icon: string | React.ReactNode;
  component?: React.ReactNode;
  onClick?: () => void;
  items?: SidePanelItems[]; // For nested items
}

export interface SidePanelProps {
  items: SidePanelItems[];
}
