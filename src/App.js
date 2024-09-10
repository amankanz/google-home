import React from "react";
// import "./App.css";

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
      <div className="google-logo">
        {/* <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
      alt="Google Logo"
    /> */}
      </div>
      <div className="google-menu">
        <span>Gmail</span>
        <span>Images</span>
      </div>
    </header>
  );
}

function SearchBox() {
  return (
    <section className="google-body">
      <img
        className="google-logo-main"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        alt="Google Logo"
      />
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search Google or type a URL"
        />
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
