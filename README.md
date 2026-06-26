# 🏠 DevQUIZ

**DevQUIZ** is an interactive, browser-based quiz game designed to test your core web development skills across **HTML, CSS, and JavaScript**. It provides a fun, lightweight way to challenge your coding foundational knowledge and see your score instantly.

---

## 🎮 What It Is About

* **The 30-Question Challenge:** The quiz takes you through a structured pool of 30 technical development questions (10 HTML questions, 10 CSS questions, and 10 JavaScript questions).
* **Real-Time Grading & Explanations:** It grades your button selections in real-time. If you get a question wrong, it instantly highlights the correct option in green and displays a clear technical explanation breaking down *why* that concept works.
* **Interactive Code Rendering:** Built with a safe character-escaping engine. This means code snippets (like `<h1>`, `<br>`, or `//`) show up beautifully as text inside your explanation box instead of accidentally messing up or hiding elements on your browser page.
* **Seamless Home Navigation:** Features a clickable **🏠 DevQUIZ** header logo button. No matter where you are in the application (even on the final scoreboard screen), clicking it cleanly drops all quiz states and routes you right back to the start landing screen.

---

## 🛠️ Behind the Scenes (How It Works)

* **`index.html`:** Manages the visual interface structure and responsive layout styles. It contains two standalone screens (the *Landing Home View* and the *Active Quiz Area*) and uses clean CSS toggles to instantly transition between views without needing complex frameworks or slow server-side page reloads.
* **`script.js`:** Functions as the operational brain of the application. It holds the entire structural question array, tracks user scoring performance metrics, dynamically creates interactive buttons, and manages system state transitions.

---

## 🚀 How to Run It in VS Code

1. Open your project folder containing `index.html` and `script.js` in VS Code.
2. If you have the **Live Server** extension installed, simply right-click your `index.html` file and select **Open with Live Server**.
3. Alternatively, you can right-click `index.html`, select **Copy Path**, and paste that file path directly into the URL bar of any web browser!