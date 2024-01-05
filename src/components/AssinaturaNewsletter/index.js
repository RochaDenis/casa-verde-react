import "./AssinaturaNews.css";

const AssinaturaNewsletter = () => {
  return (
    <>
      <div className="newsletter">
        <h2>Sua casa com as</h2>
        <h1>Melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.{" "}
        </p>
        <div className="form">
          <form action="/enviar-email" method="post">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Insira seu e-mail"
              required
            />
            <input id="btn" type="submit" value="Assinar newsletter" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AssinaturaNewsletter;
