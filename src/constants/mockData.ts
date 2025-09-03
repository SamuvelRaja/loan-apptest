export type LoanType = { key: string; name: string; desc: string };
export type LoanApp = { id: string; name: string };
export type Bank = { id: string; name: string; rate: number; info: string };

export const loanTypes: LoanType[] = [
  { key: 'personal', name: 'Personal Loan', desc: 'Unsecured loan for personal needs and emergencies.' },
  { key: 'business', name: 'Business Loan', desc: 'Working capital and growth financing for SMEs.' },
  { key: 'home', name: 'Home Loan', desc: 'Long-tenure loan for property purchase.' },
  { key: 'auto', name: 'Auto Loan', desc: 'Loan for new or used vehicle purchase.' },
];

export const loanApps: LoanApp[] = [
  { id: 'creditbee', name: 'Credit Bee' },
  { id: 'moneytap', name: 'MoneyTap' },
  { id: 'cashe', name: 'CASHe' },
];

export const banks: Bank[] = [
  { id: 'alpha', name: 'Alpha Bank', rate: 10.5, info: 'Fast disbursal, minimal docs.' },
  { id: 'beta', name: 'Beta Finance', rate: 12.3, info: 'Flexible EMIs and balance transfer.' },
  { id: 'delta', name: 'Delta Housing', rate: 9.1, info: 'Competitive rates for home loans.' },
];

// Optional offers placeholder (kept for future expansions)
export type LoanOffer = {
  id: string;
  name: string;
  bank: string;
  interestRate: number;
  maxAmount: number;
  tenureMonths: number;
  category: 'Personal' | 'Business' | 'Home' | 'Auto';
  description: string;
};

export const OFFERS: LoanOffer[] = [];
