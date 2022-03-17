require('dotenv').config()
module.exports={
    "api_key": process.env.GOOGLE_CLIENT_ID,
    "api_secret": process.env.GOOGLE_API_KEY,
    "callback_url": "http://localhost:3000/auth/google/callback"
}
