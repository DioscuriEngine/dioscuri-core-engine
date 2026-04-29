"use client";
import React, { useState } from 'react';

export default function AdminDashboard() {
  const [vaultBalance, setVaultBalance] = useState(80000000);
  const [isVerifying, setIsVerifying] = useState(false);
  const [recipientName, setRecipientName] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      {/* Header & Vault */}
      <div className="max-w-4xl mx-auto border border-[#D4AF37]/30 rounded-2xl p-8 bg-gradient-to-b from-zinc-900 to-black">
        <h1 className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-2">Relief Vault Balance</h1>
        <div className="text-5xl font-bold text-white mb-8">
          ₦{vaultBalance.toLocaleString()}
        </div>

        {/* The "Trigger a Smile" Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#50C878]">Trigger a Smile</h2>
            <input 
              type="text" 
              placeholder="Account Number" 
              className="w-full bg-black border border-zinc-700 p-3 rounded-lg focus:border-[#D4AF37] outline-none"
            />
            <select className="w-full bg-black border border-zinc-700 p-3 rounded-lg focus:border-[#D4AF37] outline-none">
              <option>Select Bank (Fetching Dynamic List...)</option>
              <option>Moniepoint</option>
              <option>OPay</option>
              <option>Palmpay</option>
            </select>
            
            <button 
              className="w-full py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition"
              onClick={() => { setIsVerifying(true); setTimeout(() => setRecipientName("Verified Recipient"), 1000); }}
            >
              {isVerifying ? "Verifying..." : "Verify Account"}
            </button>
          </div>

          <div className="flex flex-col justify-center items-center border-l border-zinc-800 pl-6">
            {recipientName && (
              <div className="text-center animate-pulse">
                <p className="text-zinc-400 text-sm">Account Name:</p>
                <p className="text-2xl font-bold text-[#50C878] uppercase">{recipientName}</p>
                <button className="mt-6 px-10 py-4 bg-[#D4AF37] text-black font-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition">
                  RELEASE SMILE ₦
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Real-time Ledger */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-zinc-500 uppercase tracking-widest text-xs mb-4">Live Relief Ledger</h3>
        <div className="bg-zinc-900/30 rounded-xl overflow-hidden border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800/50 text-zinc-400">
              <tr>
                <th className="p-4">Recipient</th>
                <th className="p-4">Bank</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="p-4 font-medium">A*** O***</td>
                <td className="p-4 text-zinc-400">Moniepoint</td>
                <td className="p-4 font-bold text-[#50C878]">₦15,000</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-[10px] font-bold">SUCCESS</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
