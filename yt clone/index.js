window.addEventListener('scroll', function() {   
        if (window.scrollY > 100) { 
            alert('Please Sign in to continue');
            window.removeEventListener('scroll', arguments.callee);
        }
    });
    const button = document.getElementById('signup');
    window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { 
                button.style.backgroundColor = '#666';
            } else {
                button.style.backgroundColor = '#222'; 
            }
        });
