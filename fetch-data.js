async function fetchUserData() {
    const apiUrl= 'https://jsonplaceholder.typicode.com/users';
    const dataContainer= document.getElementById('api-data');
    try {
        //Fetch data from url
        const response= await fetch(apiUrl);
        const users= await response.json();
        //clear existing container
        dataContainer.innerHTML= '';
        //Create and append user list
        const userlist= document.createElement('ul');
        users.forEach(user => {
            const userlist= document.createElement('li');
            listItem.textContent= user.name;
            userlist.appendChild(listItem);  
        });
        dataContainer.appendChild(userlist);
    } catch (error) {
        //Handle errors
        console.error('Failed to fetch user data', error);
        dataContainer.innrHTML= 'Failed to lead user data.';
    }
}