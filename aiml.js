 function showAIML() {
            document.getElementById('aiml-section').style.display = 'block';
            window.scrollTo(0, document.getElementById('aiml-section').offsetTop);
        }
        function showSemester(sem) {
            document.getElementById('semester1').style.display = 'none';
            document.getElementById('semester2').style.display = 'none';
            document.getElementById('semester'+sem).style.display = 'block';
        }
        function previewPaper(pdfPath) {
            window.open(pdfPath, '_blank');
        }

         // Create dark mode toggle button
        const darkModeBtn = document.createElement('button');
        darkModeBtn.textContent = '🌙 Dark Mode';
        darkModeBtn.style.position = 'fixed';
        darkModeBtn.style.bottom = '30px';
        darkModeBtn.style.right = '30px';
        darkModeBtn.style.zIndex = '1000';
        darkModeBtn.style.padding = '12px 22px';
        darkModeBtn.style.background = 'linear-gradient(90deg, #222 60%, #444 100%)';
        darkModeBtn.style.color = '#e6f0fa';
        darkModeBtn.style.border = 'none';
        darkModeBtn.style.borderRadius = '8px';
        darkModeBtn.style.fontSize = '1em';
        darkModeBtn.style.fontWeight = '600';
        darkModeBtn.style.cursor = 'pointer';
        darkModeBtn.style.boxShadow = '0 2px 8px #2228';
        darkModeBtn.style.transition = 'background 0.2s, color 0.2s';

        document.body.appendChild(darkModeBtn);

        // Add dark mode CSS
        const darkModeStyle = document.createElement('style');
        darkModeStyle.textContent = `
        body.dark-mode {
            background: #181d23 !important;
            color: #e6f0fa !important;
        }
        body.dark-mode header,
        body.dark-mode footer {
            background: linear-gradient(90deg, #232b39 60%, #3a4660 100%) !important;
            color: #e6f0fa !important;
            box-shadow: 0 2px 8px #0004;
        }
        body.dark-mode .container {
            background: #232b39 !important;
            box-shadow: 0 4px 24px #0006;
        }
        body.dark-mode .branch-btn {
            background: linear-gradient(90deg, #232b39 60%, #3a4660 100%) !important;
            color: #e6f0fa !important;
            box-shadow: 0 2px 8px #0004;
        }
        body.dark-mode .branch-btn:hover {
            background: linear-gradient(90deg, #3a4660 60%, #232b39 100%) !important;
            color: #fff !important;
        }
        body.dark-mode .semester-title {
            color: #7bb6ff !important;
            border-left: 5px solid #7bb6ff !important;
        }
        body.dark-mode table {
            background: #232b39 !important;
            color: #e6f0fa !important;
            box-shadow: 0 2px 8px #0004;
        }
        body.dark-mode th {
            background: #2e3950 !important;
            color: #7bb6ff !important;
        }
        body.dark-mode td {
            border-bottom: 1px solid #3a4660 !important;
        }
        body.dark-mode tr:hover td {
            background: #2e3950 !important;
        }
        body.dark-mode .actions a {
            color: #7bb6ff !important;
            border: 1px solid #7bb6ff !important;
            background: #232b39 !important;
        }
        body.dark-mode .actions a:hover {
            background: #7bb6ff !important;
            color: #232b39 !important;
        }
        body.dark-mode .container:before,
        body.dark-mode .container:after {
            background: linear-gradient(90deg, #232b39 60%, #3a4660 100%) !important;
        }
        `;
        document.head.appendChild(darkModeStyle);

        // Toggle dark mode
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            if(document.body.classList.contains('dark-mode')) {
                darkModeBtn.textContent = '☀️ Light Mode';
            } else {
                darkModeBtn.textContent = '🌙 Dark Mode';
            }
            // Save preference
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'on' : 'off');
        }
        darkModeBtn.onclick = toggleDarkMode;

        // Load preference
        if(localStorage.getItem('darkMode') === 'on') {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️ Light Mode';
        }
        // Add moving effect: floating bubbles animation
        function createBubble() {
            const bubble = document.createElement('div');
            const size = Math.random() * 24 + 16; // 16px to 40px
            bubble.style.position = 'fixed';
            bubble.style.left = Math.random() * 100 + 'vw';
            bubble.style.bottom = '-50px';
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.borderRadius = '50%';
            bubble.style.opacity = 0.18 + Math.random() * 0.22;
            bubble.style.background = document.body.classList.contains('dark-mode')
            ? 'linear-gradient(135deg, #7bb6ff 60%, #232b39 100%)'
            : 'linear-gradient(135deg, #4f8cff 60%, #a3c9f9 100%)';
            bubble.style.pointerEvents = 'none';
            bubble.style.zIndex = '0';
            bubble.style.transition = 'background 0.3s';

            document.body.appendChild(bubble);

            // Animate bubble
            const duration = 6000 + Math.random() * 4000;
            bubble.animate([
            { transform: `translateY(0)` },
            { transform: `translateY(-110vh)` }
            ], {
            duration: duration,
            easing: 'linear'
            });

            setTimeout(() => {
            bubble.remove();
            }, duration);
        }

        setInterval(createBubble, 900);

        // Update bubble color on dark mode toggle
        function updateBubbleColors() {
            document.querySelectorAll('body > div').forEach(bubble => {
            if (bubble.style && bubble.style.borderRadius === '50%') {
                bubble.style.background = document.body.classList.contains('dark-mode')
                ? 'linear-gradient(135deg, #7bb6ff 60%, #232b39 100%)'
                : 'linear-gradient(135deg, #4f8cff 60%, #a3c9f9 100%)';
            }
            });
        }
        darkModeBtn.addEventListener('click', updateBubbleColors);
        // --- Loading Spinner ---
        // Create spinner element
        const spinner = document.createElement('div');
        spinner.id = 'loading-spinner';
        spinner.style.position = 'fixed';
        spinner.style.top = '0';
        spinner.style.left = '0';
        spinner.style.width = '100vw';
        spinner.style.height = '100vh';
        spinner.style.background = 'rgba(79,140,255,0.10)';
        spinner.style.display = 'none';
        spinner.style.alignItems = 'center';
        spinner.style.justifyContent = 'center';
        spinner.style.zIndex = '2000';
        spinner.innerHTML = `
            <div style="
            border: 8px solid #eaf4ff;
            border-top: 8px solid #4f8cff;
            border-radius: 50%;
            width: 64px;
            height: 64px;
            animation: spin 1s linear infinite;
            margin-bottom: 18px;
            "></div>
            <style>
            @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
            }
            </style>
        `;
        document.body.appendChild(spinner);

        // Show/hide spinner helpers
        function showSpinner() {
            spinner.style.display = 'flex';
        }
        function hideSpinner() {
            spinner.style.display = 'none';
        }

        // --- Patch branch/semester buttons to show spinner ---
        function simulateLoading(callback) {
            showSpinner();
            setTimeout(() => {
            hideSpinner();
            if (callback) callback();
            }, 900 + Math.random() * 600); // 0.9-1.5s
        }

        // Patch showAIML
        const origShowAIML = window.showAIML;
        window.showAIML = function() {
            simulateLoading(() => {
            origShowAIML();
            });
        };

        // Patch showSemester
        const origShowSemester = window.showSemester;
        window.showSemester = function(sem) {
            simulateLoading(() => {
            origShowSemester(sem);
            });
        };

        // --- Footer: Show current date and time ---
        function updateFooterDateTime() {
            const footer = document.querySelector('footer');
            if (!footer) return;
            const now = new Date();
            const dateStr = now.toLocaleDateString();
            const timeStr = now.toLocaleTimeString();
            // Only keep the original text before date/time
            let baseText = footer.dataset.baseText;
            if (!baseText) {
            baseText = footer.textContent.split(' | ')[0];
            footer.dataset.baseText = baseText;
            }
            footer.textContent = `${baseText} | ${dateStr} ${timeStr}`;
        }
        setInterval(updateFooterDateTime, 1000);
        updateFooterDateTime();

        // --- Easter egg: Triple click header for fun message ---
        let headerClickCount = 0;
        let headerClickTimer = null;
        const header = document.querySelector('header');
        header.addEventListener('click', function() {
            headerClickCount++;
            if (headerClickCount === 3) {
            alert('🎉 You found the Easter Egg! Keep learning, keep growing! 🚀');
            headerClickCount = 0;
            clearTimeout(headerClickTimer);
            headerClickTimer = null;
            } else {
            if (headerClickTimer) clearTimeout(headerClickTimer);
            headerClickTimer = setTimeout(() => {
                headerClickCount = 0;
            }, 800);
            }
        });

        // --- Motivational quote rotator in header ---
        const quotes = [
            "“The expert in anything was once a beginner.”",
            "“Success is the sum of small efforts, repeated day in and day out.”",
            "“Don’t watch the clock; do what it does. Keep going.”",
            "“Dream big, work hard, stay focused.”",
            "“Every accomplishment starts with the decision to try.”",
            "“Push yourself, because no one else is going to do it for you.”",
            "“Great things never come from comfort zones.”",
            "“Believe you can and you’re halfway there.”"
        ];
        // Create quote element
        const quoteElem = document.createElement('div');
        quoteElem.id = 'motivational-quote';
        quoteElem.style.fontSize = '1.08em';
        quoteElem.style.marginTop = '10px';
        quoteElem.style.fontWeight = '500';
        quoteElem.style.letterSpacing = '1px';
        quoteElem.style.opacity = '0.93';
        quoteElem.style.transition = 'opacity 0.4s';
        header.appendChild(quoteElem);

        let quoteIdx = Math.floor(Math.random() * quotes.length);
        function showQuote() {
            quoteElem.style.opacity = '0';
            setTimeout(() => {
            quoteElem.textContent = quotes[quoteIdx];
            quoteElem.style.opacity = '0.93';
            }, 400);
            quoteIdx = (quoteIdx + 1) % quotes.length;
        }
        showQuote();
        setInterval(showQuote, 30000);