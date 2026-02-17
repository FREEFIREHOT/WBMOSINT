// JavaScript for tab switching, API calls and result rendering

// Function to handle tab switching
function switchTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
}

// Function to make an API call and render results
async function fetchResults(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Render results
        renderResults(data);
    } catch (error) {
        console.error('Error fetching results:', error);
    }
}

// Function to display fetched data
function renderResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Loop through results and create HTML
    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerText = item.name; // Adjust based on your data structure
        resultsContainer.appendChild(resultItem);
    });
}

// Event listener for tab buttons
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
        fetchResults('https://api.example.com/data'); // Replace with your actual API endpoint
    });
});

// Initialize by switching to the first tab
switchTab('tab1'); // Adjust based on your default tab
fetchResults('https://api.example.com/data'); // Initial fetch
