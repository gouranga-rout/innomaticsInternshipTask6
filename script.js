let count = 0;

function updateCount() {
  document.getElementById("count").innerText = count;
 }

document.getElementById("addBtn").addEventListener('click', function() {
  count++;
  updateCount();
 });

document.getElementById("removeBtn").addEventListener('click', function() {
  if (count > 0) {
  count--;
  updateCount();
 } else {
     alert("Your cart is empty, add something to your cart.");
    }
 });

 document.getElementById("clearBtn").addEventListener('click', function() {
  if (count > 0) {
  count = 0;
  updateCount();
 } else {
    alert("Your cart is already empty, add something to your cart.");
   }
 });
