export function loadHomePage() {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = `
    <div id="home-page">
        <h1>Welcome To Galactic Grub</h1>
        <p id="home-desc">Galactic Grub is a cosmic-themed restaurant where diners embark on an interstellar culinary adventure. Set in a futuristic universe, the restaurant offers a unique dining experience with dishes inspired by distant planets and galaxies. Whether you're feasting on "Nebula Nachos" or sipping a "Cosmic Cocktail," every meal feels like a journey through the stars. With a vibrant, space-age atmosphere and a menu that's out of this world, Galactic Grub is the ultimate destination for foodies and space enthusiasts alike.</p>
    </div>    
    `;
}