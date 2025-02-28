function getDaysUntilNextSeason() {
    const today = new Date();
    const year = today.getFullYear();
    
    // Define season start dates
    const seasons = [
        new Date(year, 2, 20),  // Spring - March 20
        new Date(year, 5, 21),  // Summer - June 21
        new Date(year, 8, 23),  // Fall - September 23
        new Date(year, 11, 21)  // Winter - December 21
    ];

    let nextSeason;
    for (let season of seasons) {
        if (today < season) {
            nextSeason = season;
            break;
        }
    }
    
    // If no future season is found in this year, use next year's Spring
    if (!nextSeason) {
        nextSeason = new Date(year + 1, 2, 20);
    }
    
    const diffTime = nextSeason - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.querySelector(".daysUntilNextSeason").textContent = diffDays;
}

// Run function on page load
document.addEventListener("DOMContentLoaded", getDaysUntilNextSeason);