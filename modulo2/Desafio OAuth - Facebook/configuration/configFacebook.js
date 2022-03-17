require('dotenv').config()
module.exports={
    "api_key": process.env.FB_CLIENT_ID,
    "api_secret": process.env.FB_API_KEY,
    "callback_url": "http://localhost:3000/auth/facebook/callback"
}
