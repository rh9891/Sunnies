type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <img src="/Sydney.png" alt="Sydney, Australia cityscape" />
    </footer>
  );
}
