let selectedContainer = "container2";
const selectedContainerElement = document.getElementById(selectedContainer);
selectedContainerElement.classList.add("expanded");
// Function to expand the container when clicked on
let dropdown = document.getElementById("dropdowns2");
dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;

// Function to toggle the container
function toggleDropdowns(containerId, radioId) {
  const container = document.getElementById(containerId);
  const selectedContainerElement = document.getElementById(selectedContainer);
  const dropdowns = document.getElementById(
    `dropdowns${containerId.charAt(containerId.length - 1)}`
  );
  const selectedDropdowns = document.getElementById(
    `dropdowns${selectedContainer.charAt(selectedContainer.length - 1)}`
  );
  const radio = document.getElementById(radioId);
  // condition to toggle the container only if it is not already expanded
  if (!container.classList.contains("expanded")) {
    radio.checked = true;
    container.classList.add("expanded");
    dropdowns.style.maxHeight = `${dropdowns.scrollHeight}px`;

    selectedContainerElement.classList.remove("expanded");
    selectedDropdowns.style.maxHeight = "0";
    selectedContainer = containerId;
  } else if (
    container.classList.contains("expanded") &&
    containerId == selectedContainer
  ) {
    return;
  } else {
    container.classList.remove("expanded");
    dropdowns.style.maxHeight = "0";
  }
}
