       // 1. Block Right-Click & Long-Press Menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());


        // 2. Block Long-Press on Mobile (Image Download)
        document.addEventListener('touchstart', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                alert("Image download is disabled!");
            }
        }, { passive: false });

        // 3. Block Keyboard Shortcuts (Ctrl+S, etc.)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                alert("Saving is not allowed!");
            }
        });

        // 4. Disable Double-Tap Zoom (Extra Protection)
        let lastTap = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTap <= 300) e.preventDefault(); // Block fast double-tap
            lastTap = now;
        }, { passive: false });





// F12 + Ctrl+Shift+I block (not 100% effective)
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
        (e.ctrlKey && e.key === 'U') // Ctrl+U (View Source)
    ) {
        e.preventDefault();
        window.open("https://averiq.netlify.app", "_blank");
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        window.open("https://averiq.netlify.app", "_blank"); // F12 press par naya tab khulega
        alert("Developer tools are disabled!");
    }
});