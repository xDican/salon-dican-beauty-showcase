const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Salon Dican · Tegucigalpa, Honduras
      </div>
    </footer>
  );
};

export default Footer;
