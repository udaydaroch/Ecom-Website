const contentContainer = document.getElementById('content');
const paginationContainer = document.getElementById('pagination');

const itemsPerPage = 10;
let currentPage = 1;

async function fetchData(page) {
    try {
        // Make an API request to get data for the specified page
        const response = await fetch(`/api/data?page=${page}&itemsPerPage=${itemsPerPage}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        // Update the content area with the new data
        displayData(data);

        // Update the pagination controls
        updatePagination(data.totalPages);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Display an error message to the user or handle the error appropriately
        contentContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
}

function displayData(data) {
    // Clear existing content
    contentContainer.innerHTML = '';

    // Display the data on the page
    data.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item.name; // Adjust based on your data structure
        contentContainer.appendChild(itemElement);
    });
}

function updatePagination(totalPages) {
    paginationContainer.innerHTML = '';

    // Create and append pagination links
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', () => onPageClick(i));
        paginationContainer.appendChild(pageLink);
    }
}

function onPageClick(page) {
    currentPage = page;
    fetchData(currentPage);
}

// Initial data fetch
fetchData(currentPage);
  
  
