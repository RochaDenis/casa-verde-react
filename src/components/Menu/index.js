import "./Menu.css";

const Menu = () => {
  return (
    <>
      <header className="menu">
        <div>
          <img src="./img/logo.png" alt="Logo" />
          <div className="menu-descricao">
            <p>Como fazer / Oferta / Depoimentos / Videos / </p>
            <button> Menu carrinho</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
