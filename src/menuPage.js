export function loadMenuPage() {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = `
    <div id="menu-page">
        <h1>Explore Our Menu</h1>
        
        <div class="food-item">
            <h2>Nebula Nachos</h2>
            <p>Crispy tortilla chips topped with a cosmic blend of melted cheese, spicy alien peppers, and stardust salsa. Garnished with sour cream and guacamole from the far reaches of the galaxy.</p>
        </div>

        <div class="food-item">
            <h2>Meteorite Meatballs</h2>
            <p>Juicy meatballs seasoned with interstellar herbs and spices, served in a rich tomato sauce with a side of "asteroid" pasta. A dish that's out of this world!</p>
        </div>

        <div class="food-item">
            <h2>Galactic Burger</h2>
            <p>A juicy, star-studded burger with a succulent beef patty, cosmic cheese, space lettuce, and intergalactic sauce, all sandwiched in a brioche bun. Served with a side of nebula fries.</p>
        </div>

        <div class="food-item">
            <h2>Starlight Salad</h2>
            <p>A fresh mix of greens, glowing starfruit, meteor chunks of grilled chicken, and a zesty galactic vinaigrette. A light yet satisfying meal for space travelers.</p>
        </div>

        <div class="food-item">
            <h2>Cosmic Cocktail</h2>
            <p>A dazzling drink with a blend of exotic cosmic fruits and a splash of sparkling stardust. Garnished with a twist of moon citrus and a rim of celestial sugar.</p>
        </div>
    </div>
    `
}