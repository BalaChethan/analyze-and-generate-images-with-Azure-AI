import axios from 'axios';

const apiKey = '1d7aafb22d7b42fa90a8fdf661f5f9a4';
const endpoint = 'https://web-app.cognitiveservices.azure.com/';

async function analyzeImage(imageUrl) {
  const headers = {
    'Ocp-Apim-Subscription-Key': apiKey,
    'Content-Type': 'application/json',
  };

  const params = {
    'visualFeatures': 'Categories,Tags,Description,Faces,Objects',
    'details': 'Celebrities,Landmarks',
  };

  const response = await axios.post(endpoint, { url: imageUrl }, { headers, params });

  return response.data;
}

export default analyzeImage;