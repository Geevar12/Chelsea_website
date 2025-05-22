import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Team />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My Football Club</h1>
    </header>
  );
}

function Home() {
  return (
    <main className="home">
      <h2>Welcome!</h2>
      <p>This is the official website of our football club.</p>
      <p>Stay tuned for match updates and team news.</p>
    </main>
  );
}

function Team(){
  return(
    <section className="team">
        <h2>Our Team</h2>
         <div className="player">
          <p><strong>Name:</strong>Alex Johnson</p>
          <p><strong>Position:</strong>Forward</p>
         </div>
          <div className="player">
            <p><strong>Name:</strong>Brian Lee</p>
            <p><strong>Position:</strong>Goalkeeper</p>
         </div>
          <div className="player">
            <p><strong>Name:</strong>Chris Mendes</p>
            <p><strong>Position:</strong>Defender</p>
          </div>
      </section>
  );

}

function Footer() {
  return (
    <footer className="footer">
      <p> 2025 My Football Club</p>
    </footer>
  );
}

export default App;
