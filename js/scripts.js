// Initialize Supabase
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_KEY = 'your-public-api-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Fetch data from Supabase and populate the table
async function fetchAndDisplayData() {
    const { data, error } = await supabase
        .from('your-table-name')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    const tableBody = document.querySelector('#services-table tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.column1}</td>
            <td>${row.column2}</td>
            <td>${row.column3}</td>
            <td>${row.column4}</td>
            <td>${row.column5}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Call the function to fetch and display data
fetchAndDisplayData();