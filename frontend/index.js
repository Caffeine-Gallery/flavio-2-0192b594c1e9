import { backend } from 'declarations/backend';

async function loadGreeting() {
    try {
        const greeting = await backend.greet();
        document.getElementById('greeting').textContent = greeting;
    } catch (error) {
        console.error('Error fetching greeting:', error);
        document.getElementById('greeting').textContent = 'Error loading greeting';
    }
}

document.addEventListener('DOMContentLoaded', loadGreeting);
