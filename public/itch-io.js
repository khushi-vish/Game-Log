const size = document.querySelector(".size");
const rows = document.querySelectorAll(".table tbody tr");

size.addEventListener("change", (e) => {
  const selectedSize = parseInt(e.target.value); // Convert selected size to number

  rows.forEach((row) => {
    const sizeCell = row.children[3].textContent.trim();
    let sizeValue = parseFloat(sizeCell); // Extract number
    const isGB = sizeCell.includes("GB"); // Check if it's in GB

    if (isGB) {
      sizeValue *= 1024; // Convert GB to MB
    }

    if (!selectedSize) {
      row.style.display = ""; // Show all if empty
    } else if (e.target.value === "5120+") {
      row.style.display = sizeValue > 5120 ? "" : "none";
    } else {
      row.style.display = sizeValue <= selectedSize ? "" : "none";
    }
  });
});
