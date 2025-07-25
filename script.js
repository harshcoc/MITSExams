// Example: Show a welcome alert on first visit
    document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem("visited")) {
            alert("Welcome to the Student Portal! Explore the dashboard to get started.");
            localStorage.setItem("visited", "true");
        }

        
        

        // Add dark mode toggle button
        const darkBtn = document.createElement('button');
        darkBtn.textContent = "🌙 Dark Mode";
        darkBtn.style.marginTop = "12px";
        darkBtn.style.background = "#e0eafc";
        darkBtn.style.border = "none";
        darkBtn.style.borderRadius = "8px";
        darkBtn.style.padding = "8px 16px";
        darkBtn.style.cursor = "pointer";
        darkBtn.style.fontWeight = "500";
        darkBtn.style.boxShadow = "0 2px 8px #e0eafc";
        darkBtn.style.transition = "background 0.2s";
        darkBtn.onmouseover = () => darkBtn.style.background = "#b2e0f7";
        darkBtn.onmouseout = () => darkBtn.style.background = "#e0eafc";
        document.querySelector('header').appendChild(darkBtn);

        darkBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                darkBtn.textContent = "☀️ Light Mode";
                localStorage.setItem('theme', 'dark');
            } else {
                darkBtn.textContent = "🌙 Dark Mode";
                localStorage.setItem('theme', 'light');
            }
        });

        // Apply saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            darkBtn.textContent = "☀️ Light Mode";
        }

        // Keyboard navigation: Press 1/2/3/4 to open dashboard cards
        document.addEventListener('keydown', function(e) {
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
            const idx = parseInt(e.key, 10);
            if (idx >= 1 && idx <= 4) {
                const card = document.querySelectorAll('.card')[idx - 1];
                if (card) {
                    const link = card.querySelector('a');
                    if (link) window.location = link.href;
                }
            }
        });
    });

    // Example: Card click effect (navigate to link)
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Prevent double navigation if clicking the link directly
            if (e.target.tagName.toLowerCase() === 'a') return;
            const link = card.querySelector('a');
            if (link) {
                window.location = link.href;
            }
        });
    });

    // Example: Card click effect (navigate to link)
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Prevent double navigation if clicking the link directly
            if (e.target.tagName.toLowerCase() === 'a') return;
            const link = card.querySelector('a');
            if (link) {
                window.location = link.href;
            }
        });
    });

    // Example: Card click effect (navigate to link)
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Prevent double navigation if clicking the link directly
            if (e.target.tagName.toLowerCase() === 'a') return;
            const link = card.querySelector('a');
            if (link) {
                window.location = link.href;
            }
        });
    });
// Spinner helpers
    function showSpinner() {
        document.getElementById('spinner').style.display = 'flex';
    }
    function hideSpinner() {
        document.getElementById('spinner').style.display = 'none';
    }

    // Footer date/time updater
    function updateFooterDateTime() {
        const dt = new Date();
        document.getElementById('footer-datetime').textContent =
            "Current Date & Time: " +
            dt.toLocaleString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
    }
    updateFooterDateTime();
    setInterval(updateFooterDateTime, 1000);