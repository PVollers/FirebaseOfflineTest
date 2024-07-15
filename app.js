// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZv-TP1cDvXWetoWykkIrXHsVCZMIoOvU",
  authDomain: "fir-analyticstest-9f65c.firebaseapp.com",
  projectId: "fir-analyticstest-9f65c",
  storageBucket: "fir-analyticstest-9f65c.appspot.com",
  messagingSenderId: "1037753774182",
  appId: "1:1037753774182:web:46f2b4b8b52f0a90223da7",
  measurementId: "G-000Z0T3JYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to get online status
function getOnlineStatus() {
    console.log(`navigator.onLine: ${navigator.onLine}`);
    return navigator.onLine ? 'online' : 'offline';
}

// Event listener for button click to show the message
document.getElementById('clickButton').addEventListener('click', function() {
    logEvent(analytics, 'button_click', {
        button_name: 'clickButton',
        status: getOnlineStatus()
    });

    // Display the message and the hide button
    document.getElementById('message').style.display = 'block';
    document.getElementById('hideButton').style.display = 'block';
    // Hide the click button
    document.getElementById('clickButton').style.display = 'none';
});

// Event listener for button click to hide the message
document.getElementById('hideButton').addEventListener('click', function() {
    // Hide the message and the hide button
    document.getElementById('message').style.display = 'none';
    document.getElementById('hideButton').style.display = 'none';
    // Show the click button
    document.getElementById('clickButton').style.display = 'block';
});
