import Stripe from 'stripe'

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        apiVersion: '2023-08-16',
        appInfo: {
            name: 'Spotify Like Music Player',
            version: '0.1.0'
        }
    }
)