// This file exports utility functions that can be used across different K6 scripts to avoid code duplication and improve maintainability.

export function generateRandomUserId() {
    return Math.floor(Math.random() * 10000);
}

export function formatResponseTime(responseTime) {
    return `${responseTime} ms`;
}

export function logError(message) {
    console.error(`Error: ${message}`);
}