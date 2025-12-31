

# 🧠 Companion Builder (Converso) – AI-Powered LMS SaaS

Built with **Next.js 14**, **Supabase**, **Clerk**, **Stripe**, **Vapi AI**, and **Tailwind**

> A modern, full-stack learning platform where users can create, customize, and interact with AI voice companions to level up their skills.

---

## 📖 Table of Contents

- 🚀 Overview  
- ⚙️ Tech Stack  
- 🔋 Core Features  
- ⚡ Quick Start  
- 📦 Environment Setup  
- 📎 Assets  
- 📚 More Resources  

---

## 🚀 Overview

This is a fully functional **AI-powered LMS SaaS platform** built from scratch, featuring:

- End-to-end authentication and subscription management  
- Real-time learning agents using **Vapi voice AI**  
- A modular, scalable Next.js 14 architecture  
- Clean UI/UX powered by **shadcn/ui** and **Tailwind CSS**  
- Instant PostgreSQL backend via **Supabase**

Whether you're building a startup or enhancing your AI dev chops — this project gives you the foundation to scale, customize, and deploy modern SaaS experiences.

---

## ⚙️ Tech Stack

| Tech           | Role                                            |
| -------------- | ----------------------------------------------- |
| **Next.js**    | Full-stack React framework, routing, SSR, API   |
| **Clerk**      | Authentication, user/session management         |
| **Stripe**     | Billing, subscriptions, secure payments         |
| **Supabase**   | Realtime DB, authentication, file storage       |
| **Vapi AI**    | Voice agent SDK (TTS + STT + conversational AI) |
| **Tailwind**   | Utility-first CSS for clean, responsive UI      |
| **shadcn/ui**  | Component system built on Radix UI              |
| **Zod**        | Schema validation (frontend + backend)          |
| **Sentry**     | Error logging and performance monitoring        |
| **TypeScript** | Type safety throughout                          |

---

## 🔋 Core Features

- 🎙️ **Voice AI Tutors** – Create AI companions trained in custom topics/subjects  
- 👤 **Auth & Sessions** – Secure sign-in/sign-up via Clerk + Google OAuth  
- 💳 **Subscription Plans** – Stripe-powered billing, plan upgrades, and gated access  
- 🧠 **Tutor Builder** – Choose voice, subject, tone, and teaching style  
- 📚 **Bookmarks & History** – Save sessions and return to previous chats  
- 🔎 **Search & Filter** – Fast lookup by topic, subject, or companion name  
- 📦 **Reusable Components** – Built using modern component-first architecture  
- 💡 **Realtime & Scalable** – Supabase for syncing content & storing user data  
- 📱 **Fully Responsive** – Seamless UX across mobile, tablet, and desktop  

---

## ⚡ Quick Start

### Prerequisites

Make sure you have the following installed:

- Node.js (18+)  
- npm  
- Git  

---

### ⬇️ Clone the Repo

```bash
git clone https://github.com/LaeeqtheDev/LLM-Saas.git
cd companion-builder
````

---

### 📦 Install Dependencies

```
npm install
```

---

### 🔐 Set Environment Variables

Create a `.env` file at the root and include:

```
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Replace the placeholder values with your actual credentials.

---

### ▶️ Run Locally

```
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the project.

---

## 📎 Assets

Assets like banners, illustrations, and UI kits used in the project can be found in the `/public` folder.

---

## 📚 More Resources

* [Supabase Docs](https://supabase.com/docs)
* [Clerk Docs](https://clerk.dev/docs)
* [Stripe Docs](https://stripe.com/docs)
* [Vapi AI](https://vapi.ai)
* [shadcn/ui](https://ui.shadcn.com)


---

## 🧑‍💻 Documentation

https://docs.google.com/document/d/1uUbBC-R60HU_6iEPwWnXLsbGd5jI8c0gMQkcNVlkopE/edit?usp=sharing
---


