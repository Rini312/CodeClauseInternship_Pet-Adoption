// Sample data for pet listings (you can replace this with your own data)


// Function to display pet listings
function displayPets() {
    const petList = document.getElementById("pet-list");

    pets.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");

        const petImage = document.createElement("img");
        petImage.src = pet.image;

        const petInfo = document.createElement("div");
        petInfo.classList.add("pet-info");

        const name = document.createElement("h2");
        name.textContent = pet.name;

        const breed = document.createElement("p");
        breed.textContent = `Breed: ${pet.breed}`;

        const age = document.createElement("p");
        age.textContent = `Age: ${pet.age} years`;

        petInfo.appendChild(name);
        petInfo.appendChild(breed);
        petInfo.appendChild(age);

        petCard.appendChild(petImage);
        petCard.appendChild(petInfo);

        petList.appendChild(petCard);
    });
}

// Display the pet listings when the page loads
window.addEventListener("load", displayPets);
