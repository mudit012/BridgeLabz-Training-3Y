"use strict";

const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];

class NullEntryError extends Error { constructor(msg) { super(msg); this.name = "NullEntryError"; } }
class MissingFieldError extends Error { constructor(msg) { super(msg); this.name = "MissingFieldError"; } }
class NegativeAmountError extends Error { constructor(msg) { super(msg); this.name = "NegativeAmountError"; } }

function validateTransaction(txn) {
  if (txn === null) throw new NullEntryError("Transaction is null");
  if (txn.id === undefined || txn.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount in ${JSON.stringify(txn)}`);
  }
  if (txn.amount < 0) throw new NegativeAmountError(`Negative amount (${txn.amount}) for id ${txn.id}`);
  return true;
}

const valid = [];
const invalid = [];
const errorCategories = { NullEntryError: [], MissingFieldError: [], NegativeAmountError: [] };

for (let index = 0; index < transactions.length; index++) {
  const txn = transactions[index];

  debugger;
  try {
    validateTransaction(txn);
    valid.push(txn);
  } catch (error) {
    invalid.push({ index, reason: error.message });
    errorCategories[error.name].push(error.message);
  }
}

console.log("===== FINAL REPORT =====");
console.log(`Successful: ${valid.length}`);
console.log(`Failed    : ${invalid.length}`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Errors by category:", errorCategories);
