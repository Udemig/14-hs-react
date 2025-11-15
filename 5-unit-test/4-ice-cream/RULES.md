# User Rules

When creating a new project, always start with a detailed PRD.md to establish clear requirements and specifications. Break implementation into manageable phases in the PRD. Implement the codebase incrementally, phase by phase, rather than attempting everything at once. Keep files modular and separated, in appropriate folders, with a maximum of 500 lines of code per file. Never make changes that aren't documented in the PRD.md. If user requests conflict with the current PRD, update the document first to reflect these changes before implementing them, ensuring the PRD remains the single source of truth for project direction.

---

# Project Rules

---

## alwaysApply: true

## **Code Implementation Guidelines**

### **Structure & Readability**

- Use **early returns** wherever they improve clarity.
- Use **const** for all functions (e.g., `const toggle = () => {}`).
- Use **descriptive variable and function names**.
- Event handlers must start with **handle** (e.g., `handleClick`, `handleKeyDown`).

### **Styling Rules**

- **Use TailwindCSS classes for all styling**.
- No CSS files, no inline styles (unless absolutely required), no other styling systems.

### **Class Handling**

- Use `class:` syntax instead of ternary operators when conditionally applying classes.

### **Accessibility**

Interactive elements must include:

- `tabIndex="0"`
- `aria-label`
- `onClick`
- `onKeyDown`
- Any additional needed accessibility attributes

---

---

## alwaysApply: true

## **2️⃣ JavaScript Usage Rules**

- Use **modern ES6+** features only (destructuring, async/await, arrow functions).
- Use **const** for everything except variables that change — then use `let`.
- Never use `var`.
- Use **named functions** or arrow functions with descriptive names.
- No unnecessary libraries — stick to native JavaScript utilities where possible.

---

## **3️⃣ Axios Usage Rules**

- Create a **centralized Axios instance** (`api.js`) with:

  - Base URL
  - Interceptors
  - Default headers

- Never call `axios.get()` directly inside components — always use the configured instance.
- Use **try/catch** or **then/catch** for all Axios requests.
- Show errors using **React Toastify** instead of console logs.
- For repeated API calls, create **service functions** (e.g., `userService.js`).

---

## **4️⃣ Redux or Context API Usage Rules**

Choose **one**, but follow these rules:

### **If using Redux:**

- Use **Redux Toolkit** only — no legacy Redux patterns.
- Store must be split into **slices**.
- Async requests must use **Thunk**.
- Avoid spreading logic into components; keep logic inside slices.

### **If using Context API:**

- Create **separate contexts** per domain (e.g., AuthContext, UIContext).
- Wrap context logic in **custom hooks** (`useAuth()`, `useUI()`).
- Memoize provider values using `useMemo` to prevent unnecessary rerenders.

---

## **5️⃣ Lucide-React Icon Usage Rules**

- Import only the icons you need, not the entire library.
- Every icon must:

  - Include `aria-hidden="true"` unless interactive
  - Use TailwindCSS classes for sizing & color

- Use consistent icon sizes across the UI (e.g., `size={20}`).

---

## **6️⃣ TailwindCSS Usage Rules**

- Use **only TailwindCSS** for styling.
- Use **utility-first styling** — avoid long custom class strings by extracting components.
- Use **Tailwind config** for:

  - Custom colors
  - Spacing
  - Fonts

- Use `class:` conditions instead of ternary operations when applicable.
- No inline style attributes except dynamic values (e.g., height in px from state).

---

## **7️⃣ React-Toastify Usage Rules**

- Wrap the app in `<ToastContainer />` only once.
- Use toast notifications for:

  - API success
  - API errors
  - Form submission feedback

- Use consistent toast variants (e.g., success, error, info).
- Do not use `alert()` or console logs for user-facing messages.

---

## **8️⃣ General Architecture Rules**

- Keep all API logic in `/services`.
- Keep global state in `/store` or `/contexts`.
- Reusable components go into `/components`.
- Complex UI features must live inside `/features/<featureName>`.
- Assets live in `/assets`.
