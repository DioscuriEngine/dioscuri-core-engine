const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/release-smile', async (req, res) => {
    const { amount, account_number, bank_code } = req.body;

    try {
        const response = await axios.post('https://api.flutterwave.com/v3/transfers', {
            account_bank: bank_code,
            account_number: account_number,
            amount: amount,
            currency: "NGN",
            reference: "dioscuri_" + Date.now(),
            callback_url: "https://webhook.site/dioscuri",
            debit_currency: "NGN"
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.FLW_SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        
        res.status(200).json(response.data);
        
    } catch (error) {
        console.error("Flutterwave API Error:", error.response?.data || error.message);
        res.status(400).json({ 
            status: "Error", 
            message: error.response?.data?.message || "Transfer request failed",
            details: error.response?.data || error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Engine active on port ${PORT}`));

// This single line is critical for Vercel Serverless functionality
module.exports = app;
