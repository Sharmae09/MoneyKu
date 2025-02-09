// src/stores/useTransactionsStore.ts
import { defineStore } from 'pinia';

export const useTransactionsStore = defineStore('transactions', {
  state: () => ({
    transactions: [] as Array<{ title: string, amount: number, date: string }>
  }),
  actions: {
    addTransaction(transaction: { title: string, amount: number, date: string }) {
      this.transactions.push(transaction);
    }
  }
});
