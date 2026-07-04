namespace Modal {
    interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
      isOpen: boolean;
      onClose: () => void;
      iconTitle?: React.ReactElement;
      title: string;
      children: React.ReactNode;
  }

  interface IModaInfoProps extends Omit<IModalProps,"children">{
    body: React.ReactElement;
    sidebar: React.ReactElement;
    action: React.ReactElement;
  }
}