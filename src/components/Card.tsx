const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        boxShadow: "0px 12px 24px -12px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#fff",
        padding: "15px",
      }}
    >
      {children}
    </section>
  );
};

export default Card;
