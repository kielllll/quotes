# Quotes Generator

This is a simple project that utilizes **AWS Lambda** that pulls a random quote from **Zenquotes API** then publishes it to **Discord** via webhook.

# Local Setup

- Run `npm` to install required packages
- Create `.env` and copy the required properties from `.env-sample`
- Put your discord webhook url to `DISCORD_WEBHOOK_URL`

# Local Invocation/Test

- Make the handler to a invokable function (replace keyword `exports` to `const`)
- Add `handler()` at the last line of `index.js`
- Run `node index.js`

# Deployment to AWS Lambda

- I have used this for a scheduled trigger however you may want to customize how this will be invoked.
- Compress the files inside.
- Create a Lambda Function.
- Upload the compressed file.
