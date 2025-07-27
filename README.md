# 🧮 TypeScript Calculator

A simple calculator built with TypeScript, HTML, and Bootstrap, supporting basic operations: **Add**, **Subtract**, **Multiply**, and **Divide**.

---

## 📁 Project Structure

├── build/ # Compiled JavaScript from TypeScript
│ └── script.js
├── src/ # TypeScript source
│ └── script.ts
├── styles/
│ └── style.css # Custom styles (optional)
├── index.html # Main HTML page
├── tsconfig.json # TypeScript compiler config
└── README.md # This file

---

## 🚀 Features

- Input two numbers
- Choose operation: ➕ ➖ ✖️ ➗
- Result displayed in a clean interface
- Reset button clears inputs and result
- TypeScript type safety
- Bootstrap styling

---

## 🛠️ How to Run

1. **Clone this repo** (or copy files into a folder)
2. **Install TypeScript** (if not already installed):
   ```bash
   npm install -g typescript
   ```

Compile the TypeScript:
tsc
This uses tsconfig.json to compile src/script.ts into build/script.js.

Open index.html in your browser

📦 TypeScript Config (tsconfig.json)
{
"compilerOptions": {
// Language and Environment
"target": "es2016",

    // Modules
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true

}
}

✏️ Example Usage
Enter 20 and 5, then:

Click Add → Result: 25

Click Divide → Result: 4.00 (2 decimal places)

Click Reset → clears inputs and result

🧑‍💻 Author
I Abdulmumuni Ajoge Built this basic project with 💙 for TypeScript.

---
