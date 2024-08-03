document.addEventListener("DOMContentLoaded", () => {
  const dataList = document.getElementById("data-list");
  const dataForm = document.getElementById("data-form");
  const nameInput = document.getElementById("name-input");
  const statusMessage = document.getElementById("status-message");
  const redirectBtn = document.getElementById("redirect-btn");
  const clientErrorBtn = document.getElementById("client-error-btn");
  const serverErrorBtn = document.getElementById("server-error-btn");

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data");
      const data = await response.json();
      dataList.innerHTML = "";
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
        dataList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to add data to the backend
  const addData = async (name) => {
    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Date.now(), name }),
      });
      const newData = await response.json();
      const listItem = document.createElement("li");
      listItem.textContent = newData.name;
      dataList.appendChild(listItem);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  // Function to handle status code responses
  const handleStatusCode = async (url) => {
    try {
      const response = await fetch(url);
      statusMessage.textContent = `Status: ${response.status} - ${response.statusText}`;
    } catch (error) {
      statusMessage.textContent = `Error: ${error.message}`;
    }
  };

  // Fetch data when the page loads
  fetchData();

  // Handle form submission
  dataForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
      addData(name);
      nameInput.value = "";
    }
  });

  // Handle status code buttons
  redirectBtn.addEventListener("click", () =>
    handleStatusCode("http://localhost:5000/api/redirect")
  );
  clientErrorBtn.addEventListener("click", () =>
    handleStatusCode("http://localhost:5000/api/client-error")
  );
  serverErrorBtn.addEventListener("click", () =>
    handleStatusCode("http://localhost:5000/api/server-error")
  );
});
