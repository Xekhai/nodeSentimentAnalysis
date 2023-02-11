const express = require("express");

// Import the dotenv module for accessing environment variables
// and creating a magical portal to access the secret API key
require("dotenv").config();

// Import the body-parser module for parsing incoming request bodies
// Like a superhero, it helps to save the day and make sense of the chaos!
const bp = require("body-parser");

// Create a new Express app and unleash its awesomeness!
const app = express();

// Use the body-parser middleware to parse incoming request bodies as JSON
// It's like a trusty sidekick, always there to help out!
app.use(bp.json());

// Use the body-parser middleware to parse incoming request bodies as URL encoded data
// Because who wants to decipher a mystery on their own, right?
app.use(bp.urlencoded({ extended: true }));

// Import and set up the OpenAI API client
// This is like the wizard behind the curtain, making magic happen!
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define a sentiment analysis prompt
// Like a fearless detective, this sets the scene for the sentiment analysis!
const sentimentAnalysisPrompt = "Please classify the sentiment expressed in the following sentence as positive, neutral or negative. More information should be provided on the mood and tone: ";

// Define an endpoint to handle incoming requests
// The mighty hero, ready to face any challenge that comes its way!
app.post("/sentiment", (req, res) => {
  // Extract the text from the request body
  // Like a skilled thief, we steal the information we need!
  const text = req.body.text;
  
  // Call the OpenAI API to analyze the sentiment of the text
  // It's like a secret agent, gathering crucial information for us!
  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: sentimentAnalysisPrompt + text + ".",
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      // Parse the sentiment from the API response
      // Like a master detective, we unravel the mystery of the sentiment!
      const sentiment = response.data.choices[0]["text"];

      // Send the sentiment back to the client
      // The hero returns with the information, saving the day once again!
      res.send({ sentiment });
    });
});

// Start the Express app and listen on port 3000
// The hero stands tall, ready for action and to serve the people!
app.listen(3000, () => {
  console.log("Sentiment analysis AI listening on port 3000, ready to solve the case!");
});
