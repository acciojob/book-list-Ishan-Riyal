//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;

  // Append row to table
  bookList.appendChild(row);

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Event delegation for delete buttons
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});
