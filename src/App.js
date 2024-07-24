import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeClick = async () => {
    setIsAnalyzing(true);
    const results = await analyzeImage(imageUrl);
    setAnalysisResults(results);
    setIsAnalyzing(false);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const displayResults = () => {
    if (!analysisResults) return null;

    return (
      <div>
        <h2>Analysis Results</h2>
        <p>Image URL: {imageUrl}</p>
        <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
      </div>
    );
  };

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
            value={imageUrl}
            onChange={handleImageUrlChange}
            className="input-field"
          />
          <div className="button-group">
            <button id="analyze-button" className="button" onClick={handleAnalyzeClick}>
              <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Image'}</span>
              <i className="fas fa-search"></i>
            </button>
            <button id="generate-button" className="button">
              <span>Generate Image</span>
              <i className="fas fa-paint-brush"></i>
            </button>
          </div>
          {displayResults()}
        </section>
      </main>
    </div>
  );
}

export default App;