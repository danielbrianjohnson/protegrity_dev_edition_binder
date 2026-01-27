/**
 * Protegrity Jupyter Notebook Custom JavaScript
 * 
 * Sets browser tab title to include Protegrity branding.
 * Fails gracefully if notebook name cannot be determined.
 */

(function() {
    'use strict';
    
    /**
     * Set the browser tab title with Protegrity branding
     */
    function setBrandedTitle() {
        try {
            // Try to get the notebook name from various sources
            var notebookName = null;
            
            // Method 1: Check if Jupyter namespace is available
            if (typeof Jupyter !== 'undefined' && Jupyter.notebook) {
                notebookName = Jupyter.notebook.notebook_name;
            }
            
            // Method 2: Try to extract from the page title
            if (!notebookName && document.title) {
                // Default Jupyter title format is "notebook_name"
                var match = document.title.match(/^(.+?)(?:\s*-\s*Jupyter Notebook)?$/);
                if (match && match[1]) {
                    notebookName = match[1];
                }
            }
            
            // Method 3: Try to get from notebook name element
            if (!notebookName) {
                var nameElement = document.getElementById('notebook_name');
                if (nameElement && nameElement.textContent) {
                    notebookName = nameElement.textContent.trim();
                }
            }
            
            // Set the branded title
            if (notebookName && notebookName !== 'Jupyter Notebook') {
                document.title = 'Protegrity | ' + notebookName;
            } else {
                document.title = 'Protegrity | Notebook';
            }
            
        } catch (error) {
            // Fail gracefully - don't break anything if title setting fails
            console.log('Protegrity branding: Unable to set custom title', error);
        }
    }
    
    /**
     * Monitor for notebook name changes
     */
    function monitorNotebookName() {
        try {
            if (typeof Jupyter !== 'undefined' && Jupyter.notebook) {
                // Update title when notebook is renamed
                Jupyter.notebook.events.on('notebook_renamed.Notebook', function() {
                    setBrandedTitle();
                });
                
                // Update title when notebook is saved (in case name changed)
                Jupyter.notebook.events.on('notebook_saved.Notebook', function() {
                    setBrandedTitle();
                });
            }
        } catch (error) {
            // Fail gracefully
            console.log('Protegrity branding: Unable to monitor notebook events', error);
        }
    }
    
    /**
     * Initialize branding
     */
    function initializeBranding() {
        // Set initial title
        setBrandedTitle();
        
        // Monitor for changes
        monitorNotebookName();
        
        // Watch for DOM changes to notebook name (fallback)
        var nameElement = document.getElementById('notebook_name');
        if (nameElement && typeof MutationObserver !== 'undefined') {
            var observer = new MutationObserver(function() {
                setBrandedTitle();
            });
            observer.observe(nameElement, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
    }
    
    /**
     * Wait for Jupyter to be ready
     */
    function waitForJupyter() {
        if (typeof Jupyter !== 'undefined' && Jupyter.notebook && Jupyter.notebook.events) {
            // Jupyter is ready
            initializeBranding();
        } else if (document.readyState === 'complete') {
            // Page is loaded but Jupyter might not be ready yet
            setTimeout(function() {
                initializeBranding();
            }, 500);
        } else {
            // Wait for page load
            window.addEventListener('load', function() {
                setTimeout(function() {
                    initializeBranding();
                }, 500);
            });
        }
    }
    
    // Start the initialization
    waitForJupyter();
    
})();
