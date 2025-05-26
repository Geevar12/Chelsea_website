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
      {page === 'merchandise' && <Merchandise />}
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
      {['home', 'team', 'fixtures', 'news', 'tickets', 'about', 'merchandise'].map((pg) => (
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
      <p>This is the official website of Chelsea Football Club, providing the latest news, fixtures, squad details, and ticket information for the 2025 season.</p>
      <ul style={{ listStyle: 'square', color: '#034694', maxWidth: 350, margin: '1em auto', textAlign: 'left' }}>
        <li>Next match: Chelsea vs. Manchester City, Sunday June 1, 2025, 4pm</li>
        <li>New signing: João Neves joins Chelsea for 2025/26 season!</li>
        <li>Latest: Chelsea crowned FA Cup winners 2025</li>
        <li>Follow us for live match updates, exclusive interviews, and behind-the-scenes content.</li>
      </ul>
    </main>
  );
}

function Team() {
  return (
    <section className="team better-team">
      <h2 className="team-title">First Team Squad</h2>
      <div className="team-grid">
        <div className="player-card"><div className="player-name">Djordje Petrović</div><div className="player-pos">Goalkeeper</div></div>
        <div className="player-card"><div className="player-name">Reece James</div><div className="player-pos">Right Back</div></div>
        <div className="player-card"><div className="player-name">Axel Disasi</div><div className="player-pos">Centre Back</div></div>
        <div className="player-card"><div className="player-name">Levi Colwill</div><div className="player-pos">Centre Back</div></div>
        <div className="player-card"><div className="player-name">Ben Chilwell</div><div className="player-pos">Left Back</div></div>
        <div className="player-card"><div className="player-name">Moisés Caicedo</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Enzo Fernández</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Conor Gallagher</div><div className="player-pos">Midfielder</div></div>
        <div className="player-card"><div className="player-name">Cole Palmer</div><div className="player-pos">Right Wing</div></div>
        <div className="player-card"><div className="player-name">Nicolas Jackson</div><div className="player-pos">Striker</div></div>
        <div className="player-card"><div className="player-name">Mykhailo Mudryk</div><div className="player-pos">Left Wing</div></div>
      </div>
    </section>
  );
}

function Fixtures() {
  return (
    <section className="fixtures-page">
      <h2>Upcoming Fixtures 2025</h2>
      <ul style={{ maxWidth: 350, margin: '1em auto', textAlign: 'left', color: '#fff' }}>
        <li><strong>Chelsea vs. Manchester City</strong><br />Sunday, June 1, 2025, 4pm, Stamford Bridge</li>
        <li style={{ marginTop: '1em' }}><strong>Liverpool vs. Chelsea</strong><br />Saturday, June 7, 2025, 5:30pm, Anfield</li>
        <li style={{ marginTop: '1em' }}><strong>Chelsea vs. Tottenham</strong><br />Saturday, June 14, 2025, 3pm, Stamford Bridge</li>
      </ul>
      <p>Check back regularly for fixture updates, results, and match reports. All times are local UK time.</p>
    </section>
  );
}

function News() {
  return (
    <section className="news-page">
      <h2>Latest News 2025</h2>
      <ul style={{ maxWidth: 350, margin: '1em auto', textAlign: 'left', color: '#fff' }}>
        <li>Chelsea win the 2025 FA Cup Final!</li>
        <li>João Neves signs for Chelsea</li>
        <li>Pre-season tour announced: USA, July 2025</li>
        <li>Academy update: U21s reach Premier League 2 final</li>
        <li>Injury report: Squad fitness and return dates</li>
      </ul>
      <p>Stay tuned for breaking news, transfer updates, and exclusive interviews with players and staff.</p>
    </section>
  );
}

function Tickets() {
  return (
    <section className="tickets-page">
      <h2>Buy Tickets 2025/26</h2>
      <p>Get your matchday tickets for all 2025/26 home and away games. Season tickets now available! Secure your seat at Stamford Bridge and be part of the action.</p>
      <ul>
        <li>Season tickets: On sale now for the 2025/26 campaign</li>
        <li>Single match tickets: Available for all Premier League and cup games</li>
        <li>Family and group packages: Discounts available</li>
        <li>Accessible seating: Dedicated options for fans with disabilities</li>
      </ul>
      <button className="buy-tickets-btn" onClick={() => window.open('https://www.chelseafc.com/en/tickets', '_blank')}>Purchase Tickets</button>
    </section>
  );
}

function About() {
  return (
    <section className="about-page">
      <div className="about-card about-rect">
        <h2>About Chelsea FC</h2>
        <p>
          Chelsea FC, founded in 1905, is based at Stamford Bridge, London. The club has won 6 Premier League titles, 9 FA Cups, and 2 UEFA Champions League trophies. In 2025, Chelsea added another FA Cup to their collection.
        </p>
      </div>
    </section>
  );
}

function Merchandise() {
  return (
    <section className="merchandise-page">
      <h2>Chelsea FC Merchandise</h2>
      <p>Shop the latest official Chelsea FC kits, training wear, and fan merchandise for the 2025/26 season. Show your support in style!</p>
      <ul>
        <li><b>2025/26 Home Kit:</b> Classic blue design, available in all sizes</li>
        <li><b>Away & Third Kits:</b> Modern styles for the new season</li>
        <li><b>Training Wear:</b> Tracksuits, jackets, and more for all ages</li>
        <li><b>Fan Accessories:</b> Scarves, hats, mugs, flags, and more</li>
        <li><b>Personalisation:</b> Add your name and number to shirts</li>
        <li><b>Kids & Baby Range:</b> Kits and gifts for young Blues fans</li>
        <li><b>Exclusive 2025 FA Cup Winners Collection</b></li>
      </ul>
      <p>Order online for worldwide shipping or visit the official Chelsea Megastore at Stamford Bridge.</p>
      <button className="buy-tickets-btn" onClick={() => window.open('https://www.chelseamegastore.com/', '_blank')}>Shop Now</button>
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
