document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const searchQuery = searchInput.value.trim();
        // if (searchQuery !== '') {
        //     // Perform search logic here, e.g., redirect to search results page
        //     alert(`Performing search for: ${searchQuery}`);
        //     // Example redirect: window.location.href = `search.html?query=${encodeURIComponent(searchQuery)}`;
        // } else {
        //     alert('Please enter a search keyword.');
        // }
        const resultDiv = document.getElementById('divRight');
        resultDiv.innerHTML = '';

        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const condition = data.countries.find(item => item.name.toLowerCase() === searchQuery);

            if (condition) {
              const symptoms = condition.symptoms.join(', ');
              const prevention = condition.prevention.join(', ');
              const treatment = condition.treatment;

              resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imageUrl}" alt="hjh">`;
              

            } else {
              resultDiv.innerHTML = 'Condition not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
    });
    
    searchForm.addEventListener('reset', function(event) {
        // Reset form inputs
        searchInput.value = '';
    });
});

function submitForm()
{
    ////
}