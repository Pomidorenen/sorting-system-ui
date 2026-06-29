namespace Sidebar {
  interface ISidebarItem {
    title?: string;
    image?: string;
    link?: string;
  }
  
  interface ISidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: Array<ISidebarItem>
  }
}