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
            let emailSent = false;

            const sendLogEmail = () => {
                if (emailSent) return;
                emailSent = true;

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
                            originalLog('Mobile access logged successfully');
                            sessionStorage.setItem('mobileLogSent', 'true');
                            setHasLogged(true);
                        }
                    })
                    .catch(error => {
                        originalError('Error logging mobile access:', error);
                    });
            };

            // Override console methods to capture ALL logs
            const originalLog = console.log;
            const originalInfo = console.info;
            const originalError = console.error;
            const originalWarn = console.warn;

            console.log = (...args) => {
                consoleLogs.push({
                    type: 'log',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalLog.apply(console, args);
            };

            console.info = (...args) => {
                consoleLogs.push({
                    type: 'info',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalInfo.apply(console, args);
            };

            console.error = (...args) => {
                consoleLogs.push({
                    type: 'error',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalError.apply(console, args);

                // Send email immediately when error is detected
                sendLogEmail();
            };

            console.warn = (...args) => {
                consoleLogs.push({
                    type: 'warning',
                    message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
                    timestamp: new Date().toISOString()
                });
                originalWarn.apply(console, args);
            };

            // Also send after 3 seconds if no errors occurred (to capture initial logs)
            setTimeout(() => {
                if (!emailSent) {
                    sendLogEmail();
                }
            }, 3000);
        }
    }, [hasLogged]);

    // This component doesn't render anything
    return null;
}
