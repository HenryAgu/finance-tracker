# Finance Tracker

A modern personal finance tracker built with Next.js, Tailwind CSS, and Zustand. This application allows you to seamlessly track your income, expenses, and manage your overall budget all from your browser.

---

## 🏗️ What I Built & Why

I built a client-heavy, extremely responsive personal finance tracker that persists data locally. The primary goal was to create a frictionless experience for adding transactions and immediately seeing how they affect the available budget.

### Technical Choices:
- **Next.js (React 19, App Router):** Chose Next.js to provide a solid foundation for the application. Even though it's currently a client-heavy app, Next.js provides excellent developer experience, simple routing, and the foundation to easily add a backend API in the future.
- **Zustand (with `persist` middleware):** Instead of heavier state management libraries like Redux or relying solely on React Context, I opted for Zustand. It has minimal boilerplate, exceptional TypeScript support, and its out-of-the-box `persist` middleware made saving the user's financial data to `localStorage` incredibly straightforward.
- **React Hook Form + Zod:** For data entry (adding income and expenses), robust validation is critical. React Hook Form minimizes re-renders, while Zod ensures the shape of the data strictly matches our TypeScript endpoints (`components/schemas/form.ts`).
- **Tailwind CSS v4 & shadcn/ui:** Allowed for rapid, beautiful, and accessible UI development. Using shadcn/ui components (like dialog modals, tables, inputs) kept the design consistent and premium without writing everything from scratch.

---

## 🔮 What I'd Improve With More Time

Given more time, I would expand this application in the following ways:
1. **Cloud Database & Authentication:** Move away from purely local storage and integrate something like Supabase/PostgreSQL with Clerk or NextAuth. This would allow users to access their data securely across multiple devices.
2. **Advanced Data Visualization:** Integrate a charting library (like Recharts) to display income vs. expense trends over time, or pie charts breaking down expenses by category.
3. **Transaction Table Enhancements:** Add pagination, multi-column sorting (by date, amount, category), and search/filtering capabilities to the transaction table.
4. **CSV Export:** Allow users to easily download their financial data in CSV format for use in spreadsheet software.
5. **Recurring Transactions:** Implementlogic to handle monthly subscriptions or regular paychecks automatically.

---

## 🧗 Challenges Faced

- **Server vs. Client Components Setup:** Encountered Next.js specific challenges around mixing React Hook Form inside components without explicitly marking them with `"use client"`. Fixing these boundaries was essential to ensuring hooks didn't crash on the server.
- **Modal Lifecycle Management:** When submitting an income or expense form inside a dialog, I had to ensure the form accurately validated, updated the Zustand store, and then programmatically closed the dialog modal automatically to create a smooth user experience.
- **Handling Two Transaction Types Smoothly:** Finding an elegant way to blend both `expense` and `income` states within the single Zustand store, while providing dedicated derived helpers (`totalSpent()`, `totalIncome()`, `available()`) for real-time dashboard statistics.

---

## ⏱️ Time Spent

**Approximate time spent:** ~4 - 6 hours.
*(The focus was on laying down a solid foundation, robust form validation, and integrating reliable client-side state management quickly).*

---

## � Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.
