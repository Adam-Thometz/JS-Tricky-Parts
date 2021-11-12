function createAccount(pin, amount = 0) {
  return {
    checkBalance(enteredPin) {
      if (enteredPin !== pin) return "Invalid PIN."
      return `$${amount}`
    },
    deposit(enteredPin, depositAmount) {
      if (enteredPin !== pin) return "Invalid PIN."
      amount += depositAmount
      return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`
    },
    withdraw(enteredPin, withdrawalAmount) {
      if (enteredPin !== pin) return "Invalid PIN."
      if (amount < withdrawalAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
      amount -= withdrawalAmount
      return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN."
      pin = newPin
      return "PIN successfully changed!"
    }
  }
}

module.exports = { createAccount };
