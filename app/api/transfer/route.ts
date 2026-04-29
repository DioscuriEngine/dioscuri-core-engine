import { NextResponse } from 'next/server';
import { flutterwave } from '@/lib/flutterwave';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accountNumber, bankCode, amount, recipientName } = body;

    // This calls the engine we built in lib/flutterwave.ts
    const transfer = await flutterwave.initiateTransfer({
      account_bank: bankCode,
      account_number: accountNumber,
      amount: amount,
      currency: "NGN",
      reference: `RS-${Date.now()}`, // Unique Ref for the Ledger
      debit_currency: "NGN"
    });

    return NextResponse.json(transfer);
  } catch (error) {
    return NextResponse.json({ error: 'Transfer failed' }, { status: 500 });
  }
}
