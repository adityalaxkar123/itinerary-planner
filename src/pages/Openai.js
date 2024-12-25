import { OpenAIApi, Configuration } from 'openai';
// import conf from './Conf/Conf'; // Assuming the API key is stored here

// Initialize OpenAI configuration
const configuration = new Configuration({
  apiKey: "enter",})

const openai = new OpenAIApi(configuration);

// Function to send a message to OpenAI
export async function sendMsgToOpenAI(message) {
  try {
    // Use createCompletion method with text-davinci-003 model
    const res = await openai.createCompletion({
      model: 'text-davinci-003', // Using text-davinci-003 model
      prompt: message, // Message you are sending to OpenAI
      temperature: 0.7, // Controls randomness (higher = more creative responses)
      max_tokens: 256, // Maximum number of tokens for the response
      top_p: 1, // Controls diversity of the output
      frequency_penalty: 0, // Penalizes repeated tokens
      presence_penalty: 0, // Penalizes for new topics
    });

    // Return the response text
    return res.data.choices[0].text.trim(); // Remove extra spaces or newlines
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    return null; // Return null in case of error
  }
}
