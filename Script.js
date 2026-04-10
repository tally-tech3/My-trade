let total = 0;

function addSale() {
  let product = document.getElementById("product").value;
  let amount = document.getElementById("amount").value;

  if (product === "" || amount === "") {
    alert("Jaza taarifa zote");
    return;
  }

  amount = parseInt(amount);
  total += amount;

  let li = document.createElement("li");
  li.textContent = product + " - " + amount + " TZS";
  document.getElementById("list").appendChild(li);

  document.getElementById("total").textContent = total;

  document.getElementById("product").value = "";
  document.getElementById("amount").value = "";
}