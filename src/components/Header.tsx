const Header = ({ Logo }: { Logo: string }) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="" height="50" width="180" />
    </section>
  );
};

export default Header;
