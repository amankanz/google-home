import React from "react";
import { useState } from "react";

function App() {
  return (
    <main className="google-homepage">
      {/* Header */}
      <Header />

      {/* Search box */}
      <SearchBox />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;

function Header() {
  return (
    <header className="google-header">
      <div className="google-logo"></div>
      <div className="google-menu">
        <span>
          <a href="https://mail.google.com/mail/&ogbl">Gmail</a>
        </span>
        <span>
          <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
        </span>
        <span title="Search Labs">
          <i className="fa-solid fa-flask"></i>
        </span>
        <span title="Google Apps">
          <i className="fa-solid fa-grip"></i>
        </span>
        <span title="Google Account">
          <i className="fa-solid fa-circle-user"></i>
        </span>
      </div>
    </header>
  );
}

function SearchBox() {
  const [input, setInput] = useState("");

  function handleInput(value) {
    setInput(value);
  }

  function handleClearInput() {
    setInput("");
  }

  return (
    <section className="google-body">
      <img
        className="google-logo-main"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        alt="Google Logo"
      />

      <div className="search-box">
        <div className="Input-container">
          <span className="searchIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="search-input"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
          />
          {input && (
            <span
              className="extra-icons clear-icon"
              title="Clear"
              onClick={handleClearInput}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          )}
          <span className="extra-icons" title="Search by voice">
            <i className="fa-solid fa-microphone"></i>
          </span>
          <span className="extra-icons" title="Search by image">
            <i className="fa-solid fa-camera"></i>
          </span>
        </div>

        <div className="search-buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </div>
      <div className="language-options">
        Google offered in: <a href="/">Luganda</a> <a href="/">Kiswahili</a>{" "}
        <a href="/">Ikinyarwanda</a> <a href="/">Luo</a>{" "}
        <a href="/">Runyakitara</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="google-footer">
      <div className="footer-left">Uganda</div>
      <div className="footer-right">
        <a href="/">About</a>
        <a href="/">Advertising</a>
        <a href="/">Business</a>
        <a href="/">How Search works</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Settings</a>
      </div>
    </footer>
  );
}
