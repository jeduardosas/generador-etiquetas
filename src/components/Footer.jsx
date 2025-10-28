import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="brand">José Eduardo</span>
        <span className="dot">•</span>
        <span className="brand-sub">Diseño & Código</span>
      </div>

      <div className="divider"></div>

      <p className="footer-text">
        © {year} José Eduardo Sánchez — Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
