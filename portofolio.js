const homeLink = document.querySelector('a[href="#Home"]');
        const aboutLink = document.querySelector('a[href="#About"]'); // Added About link
        const projectLink = document.querySelector('a[href="#Skills"]');
        const contactLink = document.querySelector('a[href="#Contact"]');

        homeLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            document.getElementById('Home').scrollIntoView({ behavior: 'smooth' }); 
        });

        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            document.getElementById('About').scrollIntoView({ behavior: 'smooth' }); 
        });

        projectLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' }); 
        });

        contactLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' }); 
        });