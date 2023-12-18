function calculateTotal() {
    const checkboxes = document.querySelectorAll(".product-checkbox");
    let total = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });
    document.getElementById("total").textContent = total.toFixed(2);
}

function addToTotal(price) {
    const totalElement = document.getElementById("total");
    let currentTotal = parseFloat(totalElement.textContent);
    currentTotal += price;
    totalElement.textContent = currentTotal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.landing-page .add-button');

    addButton.addEventListener('click', function() {
        addToTotal(40);
    });
});

