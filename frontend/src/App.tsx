import icon from "./assets/icon.png";

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: '2rem',
      }}
    >
      <section
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '700px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1>Veronica Rine</h1>
        <h2>Computer Programming Major</h2>

        <p>
          I am a computer programming major and am particularly interested in connecting coding skills
          with art, through website design or game design. I have a creative writing minor and have experience in writing in many different
           genres and mediums.
        </p>

        <img
        src={icon}
        alt="Personal Icon"
          style={{
            marginTop: '2rem',
            height: '250px',
            border: '2px dashed #cccccc',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666666',
          }}
        />

      </section>
    </main>
  );
}

export default App;
