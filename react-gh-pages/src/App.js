import './App.css';

function App() {
  const data = [
    {
      name: "Bettina Benitez",
      email: "bbenitez22@cmc.edu",
      phone: "(415) 549-6560",
    },
    {
      name: "Natasha Wong",
      email: "nwong22@cmc.edu",
      phone: "(909) 675 6412",
    },
  ]
  return (
    <>
      <div>
        <h1>People</h1>
      </div>

      {data.map((obj) =>
        <div className="container">
          <p><b>{obj.name}</b></p>
          <p className="email">{obj.email}</p>
          <p>{obj.phone}</p>
        </div>
      )}

    </>
  );
}

export default App;
