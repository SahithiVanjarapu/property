// JavaScript logic for fetching properties
function fetchProperties() {
    // Use fetch API to call the backend endpoint (api/list-properties)
    fetch('/api/list-properties')
        .then(response => response.json())
        .then(properties => {
            // Display properties on the page
            displayProperties(properties);
        });
}

// JavaScript logic for displaying properties
function displayProperties(properties) {
    const propertyListDiv = document.getElementById('propertyList');
    // Clear previous results
    propertyListDiv.innerHTML = '';

    // Display each property
    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.innerHTML = `
            <h3>${property.name}</h3>
            <p>${property.location}, ${property.price}</p>
            <!-- Add more property details as needed -->
        `;
        propertyListDiv.appendChild(propertyDiv);
    });
}

// JavaScript logic for updating price range output
const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');
priceOutput.innerHTML = priceRange.value; // Display initial value

priceRange.addEventListener('input', () => {
    priceOutput.innerHTML = priceRange.value; // Update displayed value
});
