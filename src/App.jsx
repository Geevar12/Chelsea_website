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
      {page === 'signin' && <SignIn />}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" style={{ fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
        alt="Chelsea FC Crest"
        width="60"
        style={{ verticalAlign: 'middle', marginRight: '12px' }}
      />
      <span style={{
        fontSize: '2rem',
        verticalAlign: 'middle',
        fontWeight: 800,
        letterSpacing: '2px',
        fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif"
      }}>
        Chelsea FC
      </span>
    </header>
  );
}

function Navbar({ setPage, page }) {
  return (
    <nav className="navbar">
      {['home', 'team', 'fixtures', 'news', 'tickets', 'merchandise', 'signin'].map((pg) => (
        <button
          key={pg}
          className={page === pg ? 'active' : ''}
          onClick={() => setPage(pg)}
        >
          {pg === 'signin' ? 'Sign-In' : pg.charAt(0).toUpperCase() + pg.slice(1)}
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
      <div className="about-card about-rect" style={{ marginTop: '2.5em' }}>
        <h2>About Chelsea FC</h2>
        <p>
          Chelsea FC, founded in 1905, is based at Stamford Bridge, London. The club has won 6 Premier League titles, 9 FA Cups, and 2 UEFA Champions League trophies. In 2025, Chelsea added another FA Cup to their collection.
        </p>
      </div>
    </main>
  );
}

function Team() {
  // Official Chelsea FC 2023/24 squad images from chelseafc.com
  const players = [
    {
      name: "Djordje Petrović",
      pos: "Goalkeeper",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Djordje_Petrovic_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Reece James",
      pos: "Right Back",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Reece_James_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Axel Disasi",
      pos: "Centre Back",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Axel_Disasi_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Levi Colwill",
      pos: "Centre Back",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Levi_Colwill_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Ben Chilwell",
      pos: "Left Back",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Ben_Chilwell_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Moisés Caicedo",
      pos: "Midfielder",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Moises_Caicedo_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Enzo Fernández",
      pos: "Midfielder",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Enzo_Fernandez_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Conor Gallagher",
      pos: "Midfielder",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Conor_Gallagher_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Cole Palmer",
      pos: "Right Wing",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Cole_Palmer_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Nicolas Jackson",
      pos: "Striker",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Nicolas_Jackson_profile_23-24_headshot-removebg.png"
    },
    {
      name: "Mykhailo Mudryk",
      pos: "Left Wing",
      img: "https://img.chelseafc.com/image/upload/f_auto,h_390,q_90/editorial/people/first-team/2023-24/Mykhailo_Mudryk_profile_23-24_headshot-removebg.png"
    }
  ];

  return (
    <section className="team better-team">
      <h2 className="team-title">First Team Squad</h2>
      <div className="team-grid">
        {players.map((player) => (
          <div
            className="player-card"
            key={player.name}
            style={{
              background: 'rgba(3,70,148,0.93)',
              color: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(3,70,148,0.15)',
              padding: 0,
              width: '100%',
              maxWidth: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid white',
              overflow: 'hidden',
              position: 'relative',
              minHeight: 260,
              justifyContent: 'flex-end'
            }}
          >
            <img
              src={player.img}
              alt={player.name}
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                display: 'block',
                borderRadius: '10px 10px 0 0',
                background: '#fff'
              }}
            />
            <div style={{
              width: '100%',
              padding: '0.7em 0.5em 0.7em 0.5em',
              background: 'rgba(20,36,61,0.75)',
              textAlign: 'center'
            }}>
              <div
                className="player-name"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.08em',
                  marginBottom: '0.2em',
                  color: '#e6c200',
                  textShadow: '1px 1px 4px #034694',
                  opacity: 0.85
                }}
              >
                {player.name}
              </div>
              <div
                className="player-pos"
                style={{
                  fontSize: '0.98em',
                  color: '#fff',
                  opacity: 0.55,
                  fontWeight: 500,
                  letterSpacing: 1
                }}
              >
                {player.pos}
              </div>
            </div>
          </div>
        ))}
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

function SignIn() {
  return (
    <section className="signin-page" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(3,70,148,0.85)'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 10,
        boxShadow: '0 2px 12px rgba(3,70,148,0.13)',
        padding: '2em 2.5em',
        minWidth: 300,
        maxWidth: 350,
        textAlign: 'center'
      }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
          alt="Chelsea FC Crest"
          width="60"
          style={{ marginBottom: '1em' }}
        />
        <h2 style={{
          color: '#034694',
          marginBottom: '1em',
          fontWeight: 700,
          fontSize: '1.7em'
        }}>Sign-In</h2>
        <form>
          <div style={{ marginBottom: '1em', textAlign: 'left' }}>
            <label htmlFor="email" style={{ color: '#034694', fontWeight: 600, fontSize: '1em' }}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.6em',
                marginTop: '0.3em',
                borderRadius: 5,
                border: '1px solid #b0b0b0',
                fontSize: '1em'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5em', textAlign: 'left' }}>
            <label htmlFor="password" style={{ color: '#034694', fontWeight: 600, fontSize: '1em' }}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.6em',
                marginTop: '0.3em',
                borderRadius: 5,
                border: '1px solid #b0b0b0',
                fontSize: '1em'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#034694',
              color: '#fff',
              fontWeight: 600,
              border: 'none',
              borderRadius: 5,
              padding: '0.7em 2em',
              fontSize: '1em',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
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