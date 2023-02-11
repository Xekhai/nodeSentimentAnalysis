# Sentiment Analysis AI
A simple Express app that analyzes the sentiment of a given text using the OpenAI API.

## Requirements
1. Node.js
2. Express
3. dotenv
4. body-parser
5. OpenAI API client

## Usage
1. Clone this repository to your local machine.
```bash
git clone https://github.com/Xekhai/nodeSentimentAnalysis.git
```
2. Navigate to the cloned repository and install the required packages.
```bash
cd nodeSentimentAnalysis
npm install
```
3. Create a new file in the root directory of the project named .env and paste the following line of code:
```css
OPENAI_API_KEY=[Your OpenAI API Key]
```
4. Replace [Your OpenAI API Key] with your actual OpenAI API Key. You can get your API Key by creating an account on the OpenAI website.

5. Start the app by running the following command:
```sql
npm start
```
6. You can now make a POST request to the /sentiment endpoint with a text field in the request body to get the sentiment analysis. For example, you can use Postman or cURL to make a request like this:
```bash
curl -X POST http://localhost:3000/sentiment -H 'Content-Type: application/json' -d '{"text": "This is an amazing day!"}'
```
The API will return the sentiment analysis of the text in the response body, like this:
```json
{"sentiment": "positive"}
```
## Contributing
This project is open source and contributions are welcome! Feel free to open an issue or make a pull request if you have any suggestions or improvements.

## License
This project is licensed under the MIT License. See LICENSE for more details.