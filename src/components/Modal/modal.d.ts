namespace Modal {
    interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
      isOpen: boolean;
      onClose: () => void;
      title: string;
      children: React.ReactNode;
  }
}