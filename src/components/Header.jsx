const logo = require("../images/morse-hut-logo-large.png");

const Header = () => {
  return (
    <section className="header-section">
      <img src={logo} alt="morse hut logo" />
    </section>
  );
};

export default Header;
