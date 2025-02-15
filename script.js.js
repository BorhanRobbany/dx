function addData() {
  // Get input values
  const category = document.getElementById('category').value;
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;

  // Validate inputs
  if (!category || !year || !month || !day) {
    alert("Please fill all fields!");
    return;
  }

  // Add data to the table
  const table = document.getElementById('dataTable');
  const newRow = table.insertRow(-1); // -1 adds to the end

  newRow.innerHTML = `
    <td>${category}</td>
    <td>${year}</td>
    <td>${month}</td>
    <td>${day}</td>
  `;

  // Clear input fields
  document.getElementById('category').value = '';
  document.getElementById('year').value = '';
  document.getElementById('month').value = '';
  document.getElementById('day').value = '';
}