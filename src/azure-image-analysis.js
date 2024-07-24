import axios from 'axios';

// Replace these with your actual endpoint and API key from the Azure Portal
const apiKey = process.env.REACT_APP_API_KEY;
const endpoint = process.env.REACT_APP_ENDPOINT;

async function analyzeImage(imageUrl) {
  const headers = {
    'Ocp-Apim-Subscription-Key': apiKey,
    'Content-Type': 'application/json',
  };
  const params = {
    visualFeatures: 'Categories,Tags,Description,Faces,Objects',
    details: 'Celebrities,Landmarks',
  };

  try {
    const response = await axios.post(
      `${endpoint}?${new URLSearchParams(params).toString()}`, 
      { url: imageUrl }, 
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default analyzeImage;
