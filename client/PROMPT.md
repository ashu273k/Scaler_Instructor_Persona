You are a senior frontend engineer and product designer (with Google-level design taste). Build a production-grade web application for a **Three-Persona AI Chat System** with a delightful and modern UX.

## 🎯 Core Concept

The app allows users to interact with **three different AI personas**, each with a unique personality. The experience should feel premium, playful, and smooth — similar to how **Netflix profile selection** works combined with a modern AI chat interface like Claude or ChatGPT.

---

## 🧠 Key Requirements

### 1. Persona Selection Screen (Netflix-style)

* Create a **full-screen persona selection UI**
* Each persona is represented as a **card/avatar**
* Include:

  * Avatar (animated or stylized)
  * Name
  * Short personality tagline
* Add smooth **hover animations, scaling, glow effects**
* Clicking a persona transitions into chat (use animations like fade/zoom)
* UX inspiration: Netflix profile selection + Google product polish

---

### 2. Chat Interface (Claude-like UX)

* Clean, minimal, distraction-free layout
* Features:

  * Chat bubbles (distinct for user vs AI)
  * Smooth scrolling
  * Typing indicator animation
  * Input box fixed at bottom
  * Support multi-line input
  * Send button + keyboard shortcut (Enter)
* Each persona should influence:

  * Tone of responses
  * Avatar in chat
  * Color accents/theme subtly

---

### 3. UI/UX Design Standards

* Follow **Google Material Design principles**
* Use:

  * Proper spacing system (8px grid)
  * Consistent typography scale
  * Subtle shadows and depth
* Animations:

  * Use **Framer Motion** for transitions
  * Micro-interactions (hover, click feedback)
* Theme:

  * Modern, elegant, slightly playful
  * Not overly flashy

---

### 4. Tech Stack (STRICT)

* React (with functional components + hooks)
* Tailwind CSS (no plain CSS unless necessary)
* Framer Motion (for animations)
* Zustand or Context API (for state management)
* TypeScript preferred

---

### 5. Code Architecture (VERY IMPORTANT)

Follow **industry-level structure and principles**:

* Use **Single Responsibility Principle (SRP)**

* Modular folder structure:

  * /components
  * /features/chat
  * /features/persona
  * /hooks
  * /store
  * /utils

* Separate:

  * UI components
  * Business logic
  * State management

* Use reusable components:

  * ChatBubble
  * PersonaCard
  * ChatInput
  * Layout

---

### 6. Design Patterns

* Use appropriate patterns:

  * Component composition
  * Custom hooks (for chat logic)
  * State container pattern (Zustand)
* Avoid monolithic code

---

### 7. Fonts & Styling

* Use a **clean, modern font similar to Claude UI**

  * (e.g., Inter / system UI stack)
* Maintain high readability
* Dark mode default (optional toggle)

---

### 8. Extra Polish (IMPORTANT)

* Add:

  * Loading states
  * Empty chat state
  * Smooth page transitions
* Make it feel like a **real product, not a demo**

---

## 🚀 Output Expectations

* Provide:

  1. Folder structure
  2. Setup instructions
  3. Full code (split across files properly)
  4. Explanation of architecture decisions

---

## ⚠️ Constraints

* DO NOT put everything in one file
* DO NOT skip animations
* DO NOT create a basic UI
* PRIORITIZE design quality and developer experience

---

## 🎨 Personas Example (You can improve)

1. Logical Thinker (calm, analytical)
2. Creative Artist (fun, expressive)
3. Strict Mentor (direct, disciplined)

---

Build this as if it will be shipped to real users.
