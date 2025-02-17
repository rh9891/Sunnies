type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={"flex justify-center " + className}>
      <img src="/Sydney.png" alt="Sydney, Australia cityscape" />
    </footer>
  );
}
