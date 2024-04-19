import logo from "./logo.svg";
import "./App.css";

function MapComponent() {
  return (
    <div>
      <iframe
        title="UniqueTitleForAccessibility"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.144278421954!2d-117.94929022351488!3d33.83438967323972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2a49040668af%3A0xc9071643a04f22d2!2sACD%20Vending%20Machine%20Moving!5e0!3m2!1sen!2sus!4v1713550040821!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ACD Vending</h1>
        <div className="App-body">
          <div className="App-tabs">
            <h3 class="tab-contact">Contact</h3>
            <h3 class="tab-hours">Hours</h3>
            <h3 class="tab-about-us">About Us</h3>
          </div>
          <MapComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
