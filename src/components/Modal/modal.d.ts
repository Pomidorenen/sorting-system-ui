namespace Modal {
    interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
      children?: React.ReactNode;
      title?: string
  }
}