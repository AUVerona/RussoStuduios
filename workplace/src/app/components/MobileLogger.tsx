"use client";
import { useEffect, useState } from 'react';

export default function MobileLogger() {
    const [hasLogged, setHasLogged] = useState(false);

    useEffect(() => {
        // Check if already logged in this session
        if (hasLogged || sessionStorage.getItem('mobileLogSent')) {
            return;
        }

        // Detect if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || window.innerWidth < 768;

        if (isMobile) {
            // Capture console logs
            const consoleLogs: Array<{ type: string, message: string, timestamp: string }> = [];

            // Override console methods to capture logs
            const originalError = console.error;
            const originalWarn = console.warn;

            console.error = (...args) => {
                consoleLogs.push({
                    type: 'error',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalError.apply(console, args);
            };

            console.warn = (...args) => {
                consoleLogs.push({
                    type: 'warning',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalWarn.apply(console, args);
            };

            // Wait a bit to capture initial logs, then send
            setTimeout(() => {
                // Send log to API
                fetch('/api/log-mobile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userAgent: navigator.userAgent,
                        timestamp: new Date().toISOString(),
                        screenWidth: window.screen.width,
                        screenHeight: window.screen.height,
                        consoleLogs: consoleLogs,
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            console.log('Mobile access logged successfully');
                            sessionStorage.setItem('mobileLogSent', 'true');
                            setHasLogged(true);
                        }
                    })
                    .catch(error => {
                        console.error('Error logging mobile access:', error);
                    });
            }, 3000); // Wait 3 seconds to capture initial page load errors
        }
    }, [hasLogged]);

    // This component doesn't render anything
    return null;
}
