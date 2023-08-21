import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-container">
      <span className="letter-404">404</span>
      <p className="message-404">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="message-404">
        Cliquez sur le logo ou les liens pour accéder à une autre page.
      </p>
      <Link to="/" className="link-back-to-home">
        <p className="return__link">Retournez sur la page d’accueil</p>
      </Link>
    </section>
  );
}

export default ErrorPage;
