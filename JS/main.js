document.addEventListener("DOMContentLoaded", () => {
    const pyButton = document.getElementById("PY"); // Select the button with ID "PY"
    const psycheYearContent = document.querySelectorAll("#psyche-year p, #psyche-year img"); // Select all p and img inside #psyche-year
    const psycheYear = document.getElementById('psyche-year');

    pyButton.addEventListener("click", () => {
        psycheYearContent.forEach(element => {
            if (element.style.display === "none") {
                element.style.display = "block"; // Show the element
                psycheYear.style.height = "700px";
            } else {
                element.style.display = "none"; // Hide the element
            }
        });
    });
});
