let balance = 0;

function addBalance() {
  let amount = parseFloat(
    window.prompt("Enter the amount of balance you want to add:")
  );

  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    window.alert(`Your new balance is: ${balance}`);
  } else {
    window.alert("The amount entered is invalid. Please try again.");
  }
}
