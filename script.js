// Script File
var hamburgerBtn = document.querySelector('.hamburger-btn');
var sideBar = document.querySelector('.side-bar');

hamburgerBtn.addEventListener('click', sidebarToggle);
function sidebarToggle(){
	sideBar.classList.toggle('active');
}

// Code For Light/Dark Mode Toggle
var modeSwitcher = document.querySelector('.mode-switch i');
var body = document.querySelector('body');
modeSwitcher.addEventListener('click', modeSwitch);
function modeSwitch(){
	body.classList.toggle('active');
}
//table

// Get elements from DOM
const entryForm = document.getElementById('entry-form');
const productNameInput = document.getElementById('product-name');
const salesInput = document.getElementById('sales');
const dateInput = document.getElementById('date');
const tableBody = document.querySelector('#data-table tbody');
const errorMessageDiv = document.getElementById('error-message');

// Event listener for form submission
entryForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing page

  // Clear any previous error messages
  errorMessageDiv.innerHTML = '';

  // Get form input values
  const productName = productNameInput.value.trim();
  const sales = salesInput.value.trim();
  const date = dateInput.value.trim();

  // Basic Validation
  if (!productName || !sales || !date) {
    errorMessageDiv.innerHTML = 'All fields are required.';
    return;
  }

  if (isNaN(sales) || sales <= 0) {
    errorMessageDiv.innerHTML = 'Sales must be a valid positive number.';
    return;
  }

  // Add new row to table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${productName}</td>
    <td>$${parseFloat(sales).toFixed(2)}</td>
    <td>${new Date(date).toLocaleDateString()}</td>
  `;

  // Append the new row to the table
  tableBody.appendChild(newRow);

  // Clear the form inputs
  entryForm.reset();
});
