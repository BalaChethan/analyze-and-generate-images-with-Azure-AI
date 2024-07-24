import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Image Insights</h1>
        <p>Unlock the power of AI-driven image analysis and generation</p>
      </header>
      <main className="main">
        <section className="input-section">
          <input
            type="text"
            id="url-input"
            placeholder="Enter URL or prompt"
            className="input-field"
          />
          <div className="button-group">
            <button id="analyze-button" className="button">
              <span>Analyze Image</span>
              <i className="fas fa-search"></i>
            </button>
            <button id="generate-button" className="button">
              <span>Generate Image</span>
              <i className="fas fa-paint-brush"></i>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;