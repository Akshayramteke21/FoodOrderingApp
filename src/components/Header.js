export const Title = (
  <a href="/">
    <img
      className="logo"
      src="https://as2.ftcdn.net/v2/jpg/02/75/70/03/1000_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
      alt="logo"
    />
  </a>
);

const Header = function () {
  return (
    <>
      <div className="header " style={{ backgroundColor: "burlywood" }}>
        {Title}
        <div
          className="nav-items"
          style={{
            fontweight: "bold",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>

            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
