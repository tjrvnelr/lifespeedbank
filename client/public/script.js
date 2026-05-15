        // Use your design colors for dynamic interaction
        const flipCards = document.querySelectorAll('.flip-card-inner');
        
        flipCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Example of a small script interaction using your palette
                console.log('User is viewing a service card.');
            });
        });