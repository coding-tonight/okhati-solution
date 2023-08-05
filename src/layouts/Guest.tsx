const Guest = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="centerilze"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
      className="guest_layout"
    >
      {children}
    </section>
  );
};

export default Guest;
