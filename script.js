// Store each registered student as an object in this array.
const students = [];
 
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const courseInput = document.getElementById("course");
const message = document.getElementById("message");
const tableBody = document.getElementById("studentTableBody");
 
// Show a validation or success message to the learner.
function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
}
 
// Handle form submission without reloading the page.
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseInput.value;
 
  // Check required fields.
  if (!name || !email || !phone || !course) {
    showMessage("Please complete all fields.", "error");
    return;
  }
 
  // Basic email and 10-digit phone validation.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
 
  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }
 
  if (!phonePattern.test(phone)) {
    showMessage("Please enter a valid 10-digit phone number.", "error");
    return;
  }
 
  // Create a student object and store it in the array.
  const student = {
    name: name,
    email: email,
    phone: phone,
    course: course
  };
  students.push(student);
 
  // Remove the empty-table message after the first registration.
  const emptyRow = document.getElementById("emptyRow");
  if (emptyRow) {
    emptyRow.remove();
  }
 
  // Add the new student record to the visible table.
  const row = document.createElement("tr");
  [students.length, student.name, student.email, student.phone, student.course]
    .forEach(function (value) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
  tableBody.appendChild(row);
 
  showMessage("Student registered successfully.", "success");
  form.reset();
});
