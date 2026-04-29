const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;

export const flutterwave = {
  // 1. Get all banks (Microfinance + Commercial)
  getBanks: async () => {
    const res = await fetch("https://api.flutterwave.com/v3/banks/NG", {
      headers: { Authorization: `Bearer ${FLW_SECRET_KEY}` },
    });
    return res.json();
  },

  // 2. Verify account name before sending
  verifyAccount: async (accountNumber: string, bankCode: string) => {
    const res = await fetch("https://api.flutterwave.com/v3/accounts/resolve", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${FLW_SECRET_KEY}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ account_number: accountNumber, account_bank: bankCode }),
    });
    return res.json();
  },

  // 3. The Payout Logic
  initiateTransfer: async (details: any) => {
    const res = await fetch("https://api.flutterwave.com/v3/transfers", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${FLW_SECRET_KEY}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(details),
    });
    return res.json();
  }
};
