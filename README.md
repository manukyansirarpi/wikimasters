<div align="center">

# 🎯 WikiMasters

### A Modern, Full-Stack Wiki Platform Built with Next.js 16

*Showcasing advanced Next.js architecture, real-time collaboration, and cutting-edge web technologies*

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 🚀 Overview

WikiMasters is a production-ready, modern wiki platform that demonstrates advanced full-stack development patterns with Next.js 16. Built with the latest web technologies and best practices, it showcases expertise in server-side rendering, database architecture, authentication, and modern React patterns.

### ✨ Key Highlights

- **🏗️ Next.js 16 App Router** - Leveraging the latest App Router architecture with React Server Components
- **⚡ React 19** - Utilizing cutting-edge React features and optimizations
- **🎨 Modern UI/UX** - Beautiful, responsive design with Tailwind CSS 4 and Radix UI primitives
- **🔐 Secure Authentication** - Enterprise-grade auth with Stack Auth integration
- **💾 Advanced Database Layer** - Type-safe queries with Drizzle ORM and Neon serverless PostgreSQL
- **📝 Rich Text Editing** - Markdown-based editor with live preview
- **🖼️ File Management** - Seamless image uploads with Vercel Blob storage
- **🎯 Server Actions** - Modern data mutations without API routes
- **⚙️ Type Safety** - End-to-end TypeScript for bulletproof code
- **🎭 Component Architecture** - Modular, reusable component design

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.0.3 with App Router
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.0 with custom design system
- **Components:** Radix UI primitives + custom component library
- **Animations:** tw-animate-css for smooth transitions
- **Icons:** Lucide React
- **Markdown:** @uiw/react-md-editor with react-markdown

### Backend
- **Runtime:** Node.js with Edge Runtime support
- **Database:** Neon Serverless PostgreSQL
- **ORM:** Drizzle ORM with type-safe queries
- **Authentication:** Stack Auth (@stackframe/stack)
- **File Storage:** Vercel Blob
- **Server Actions:** Next.js native mutations

### Developer Experience
- **Language:** TypeScript 5
- **Linting:** ESLint with Next.js config
- **Database Tools:** Drizzle Kit for migrations
- **Build Tool:** Turbopack (Next.js)
- **Package Manager:** npm/yarn/pnpm compatible

---

## 🏛️ Architecture

### Directory Structure

```
wikimasters/
├── app/                      # Next.js App Router
│   ├── actions/             # Server Actions for data mutations
│   │   ├── articles.ts      # Article CRUD operations
│   │   └── upload.ts        # File upload handlers
│   ├── wiki/                # Wiki routes
│   │   ├── [id]/           # Dynamic article pages (SSR)
│   │   └── edit/           # Article editor pages
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage with article listing
│   └── globals.css         # Global styles & design tokens
├── components/              # Reusable React components
│   ├── ui/                 # Base UI components (shadcn/ui)
│   ├── nav-bar.tsx         # Navigation component
│   ├── wiki-card.tsx       # Article card component
│   ├── wiki-editor.tsx     # Markdown editor
│   └── wiki-article-viewer.tsx  # Article display
├── db/                     # Database layer
│   ├── schema.ts           # Drizzle schema definitions
│   ├── index.ts            # Database connection
│   ├── seed.ts             # Database seeding
│   └── authz.ts            # Authorization logic
├── lib/                    # Utility functions
│   ├── utils.ts            # Helper functions
│   └── data/               # Data access layer
│       └── articles.ts     # Article queries
└── drizzle/                # Database migrations
```

### Key Design Patterns

#### 🎯 Server Components First
```typescript
// app/page.tsx - Server Component with data fetching
export default async function Home() {
  const articles = await getArticles(); // Direct database query
  return <ArticleList articles={articles} />;
}
```

#### 🔄 Server Actions for Mutations
```typescript
// app/actions/articles.ts
'use server';
export async function createArticle(data: NewArticle) {
  return await db.insert(articles).values(data);
}
```

#### 🎨 Type-Safe Database Layer
```typescript
// db/schema.ts
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  authorId: text("author_id").references(() => usersSync.id),
});
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm
- PostgreSQL database (or Neon account)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/manukyansirarpi/wikimasters.git
cd wikimasters
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Configure your `.env.local`:
```env
# Database
DATABASE_URL=your_neon_database_url

# Authentication (Stack Auth)
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
STACK_SECRET_SERVER_KEY=your_secret_key

# Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=your_blob_token
```

4. **Set up the database**
```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed initial data (optional)
npm run db:seed
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🎯 Features Showcase

### 📝 Article Management
- **Create & Edit:** Rich markdown editor with live preview
- **Version Control:** Track article changes with timestamps
- **Authorization:** Role-based access control
- **SEO Optimized:** Dynamic metadata generation

### 🎨 Modern UI/UX
- **Responsive Design:** Mobile-first approach
- **Dark Mode:** System-aware theme switching
- **Animations:** Smooth transitions and micro-interactions
- **Accessibility:** WCAG 2.1 AA compliant

### ⚡ Performance
- **Server-Side Rendering:** Fast initial page loads
- **Static Generation:** Optimal performance for articles
- **Image Optimization:** Automatic image optimization via Next.js
- **Edge Runtime:** Reduced latency with edge deployment

### 🔐 Security
- **Authentication:** Secure user authentication with Stack
- **Authorization:** Fine-grained permission system
- **Input Validation:** Server-side validation for all mutations
- **SQL Injection Protection:** Type-safe queries via Drizzle ORM

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables
Ensure all environment variables are configured in your deployment platform:
- `DATABASE_URL`
- `NEXT_PUBLIC_STACK_PROJECT_ID`
- `STACK_SECRET_SERVER_KEY`
- `BLOB_READ_WRITE_TOKEN`

---

## 📚 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
```

---

## 🏗️ Technical Deep Dive

### Database Architecture
- **ORM:** Drizzle for type-safe queries and migrations
- **Database:** Neon serverless PostgreSQL for scalability
- **Schema:** Normalized structure with foreign key constraints
- **Migrations:** Version-controlled schema changes

### Component Architecture
- **Composition:** Atomic design principles
- **Reusability:** Shared UI components via shadcn/ui
- **Type Safety:** Full TypeScript coverage
- **Testing:** Component testing ready (Jest/RTL compatible)

### State Management
- **Server State:** React Server Components for data fetching
- **Client State:** React hooks for local UI state
- **Forms:** Controlled components with validation
- **Caching:** Next.js automatic caching strategies

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sirarpi Manukyan**

Full-Stack Developer | Next.js Specialist | TypeScript Enthusiast

- GitHub: [@manukyansirarpi](https://github.com/manukyansirarpi)
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment Platform
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Unstyled UI primitives

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Built with ❤️ using Next.js 16, React 19, and TypeScript

</div>
