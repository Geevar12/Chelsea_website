import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="container">
      <Header />
      <Navbar setPage={setPage} page={page} />
      {page === 'home' && <Home />}
      {page === 'team' && <Team />}
      {page === 'fixtures' && <Fixtures />}
      {page === 'news' && <News />}
      {page === 'tickets' && <Tickets />}
      {page === 'about' && <About />}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
        alt="Chelsea FC Crest"
        width="60"
        style={{ verticalAlign: 'middle', marginRight: '12px' }}
      />
      <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>Chelsea FC</span>
    </header>
  );
}

function Navbar({ setPage, page }) {
  return (
    <nav className="navbar">
      {['home', 'team', 'fixtures', 'news', 'tickets', 'about'].map((pg) => (
        <button
          key={pg}
          className={page === pg ? 'active' : ''}
          onClick={() => setPage(pg)}
        >
          {pg.charAt(0).toUpperCase() + pg.slice(1)}
        </button>
      ))}
    </nav>
  );
}

function Home() {
  return (
    <main className="home simple-home">
      <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #034694', paddingBottom: '0.5em' }}>
        Welcome to Chelsea FC!
      </h2>
      <p>This is the official website of Chelsea Football Club.</p>
      <ul style={{ listStyle: 'square', color: '#034694', maxWidth: 350, margin: '1em auto', textAlign: 'left' }}>
        <li>Next match: Chelsea vs. Arsenal, Sunday 4pm</li>
        <li>New signing: Welcome to the Bridge!</li>
        <li>Latest: Training gallery now online</li>
      </ul>
    </main>
  );
}

function Team() {
  return (
    <section className="team better-team">
      <h2 className="team-title">First Team Squad</h2>
      <div className="team-grid">
        <div className="player-card"><div className="player-name">Robert Sánchez</div><div className="player-pos">Goalkeeper</div></div>
        <div className="player-card"><div className="player-name">Reece James</div><div className="player-pos">Right Back</div></div>
        <div className="player-card"><div className="player-name">Thiago Silva</div><div className="player-pos">Centre Back</div></div>
        <div className="player-card"><div className="player-name">Levi Colwill</div><div className="player-pos">Centre Back</div></div>
        <div className="player-card"><div className="player-name">Ben Chilwell</div><div className="player-pos">Left Back</div></div>
        <div className="player-card"><div className="player-name">Moisés Caicedo</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Enzo Fernández</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Conor Gallagher</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Raheem Sterling</div><div className="player-pos">Right Wing</div></div>
        <div className="player-card"><div className="player-name">Nicolas Jackson</div><div className="player-pos">Striker</div></div>
        <div className="player-card"><div className="player-name">Mykhailo Mudryk</div><div className="player-pos">Left Wing</div></div>
        {/* Additional 8 players */}
        <div className="player-card"><div className="player-name">Djordje Petrović</div><div className="player-pos">Goalkeeper</div></div>
        <div className="player-card"><div className="player-name">Axel Disasi</div><div className="player-pos">Defender</div></div>
        <div className="player-card"><div className="player-name">Marc Cucurella</div><div className="player-pos">Defender</div></div>
        <div className="player-card"><div className="player-name">Malo Gusto</div><div className="player-pos">Defender</div></div>
        <div className="player-card"><div className="player-name">Carney Chukwuemeka</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Cole Palmer</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Christopher Nkunku</div><div className="player-pos">Forward</div></div>
        <div className="player-card"><div className="player-name">Armando Broja</div><div className="player-pos">Forward</div></div>
      </div>
    </section>
  );
}

function Fixtures() {
  return (
    <section className="fixtures-page">
      <h2>Upcoming Fixtures</h2>
      <ul style={{ maxWidth: 350, margin: '1em auto', textAlign: 'left', color: '#fff' }}>
        <li><strong>Chelsea vs. Arsenal</strong><br />Sunday, 4pm, Stamford Bridge</li>
        <li style={{ marginTop: '1em' }}><strong>Man United vs. Chelsea</strong><br />Next Saturday, 5:30pm</li>
      </ul>
    </section>
  );
}

function News() {
  return (
    <section className="news-page">
      <h2>Latest News</h2>
      <ul style={{ maxWidth: 350, margin: '1em auto', textAlign: 'left', color: '#fff' }}>
        <li>New player signing announced</li>
        <li>Training session highlights available now</li>
      </ul>
    </section>
  );
}

function Tickets() {
  return (
    <section className="tickets-page">
      <h2>Buy Tickets</h2>
      <p>Get your matchday tickets for all home and away games.</p>
    </section>
  );
}

function About() {
  return (
    <section className="about-page">
      <h2>About Chelsea FC</h2>
      <p>
        Chelsea Football Club is an English professional football club based in London. Founded in 1905, they play at Stamford Bridge.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Chelsea FC</p>
    </footer>
  );
}

export default App;
