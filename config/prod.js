// prod.js - production key



module.exports={
    googleClientID:process.env.GOOGLE_CLIENT_ID ,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET ,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY,
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:process.env.STRIPE_SECRET_KEY,



};


//mongodb+srv://goku:DFjkYyCpDS2WEPVj@cluster0-zikd0.mongodb.net/test?retryWrites=true&w=majority