# AI Agent in Next.js

This project demonstrates the integration of AI-powered functionalities within a Next.js application, providing a foundation for building interactive AI agents.

## Demo Video & Deployment

- **Demo Video:** [Watch here](https://youtu.be/Irod0TixyeM)
- **Live Deployment:** [View here](https://ai-agent-in-next-js.vercel.app/)


## Features

- **Next.js Framework**: Utilizes Next.js for server-side rendering and static site generation.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Tailwind CSS Integration**: Enables rapid UI development with utility-first CSS.
- **AI Agent Interaction**: Implements a basic AI agent capable of user interactions using OpenAI's API.

## Prerequisites

Before setting up the project, ensure you have:

- **Node.js** (version 14 or later)
- **npm** or **yarn** installed globally
- **OpenAI API Key** (Required for AI functionalities)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shaikr786/AiAgent-In-NextJs.git
cd AiAgent-In-NextJs
```

### 2. Set up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 4. Run the Development Server

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`src/`**: Contains the main application source code.
  - **`pages/`**: Next.js pages for routing.
  - **`components/`**: Reusable React components.
  - **`styles/`**: Global and component-specific styles.
- **`public/`**: Static assets like images and fonts.
- **`tailwind.config.ts`**: Tailwind CSS configuration file.
- **`next.config.ts`**: Next.js configuration file.
- **`tsconfig.json`**: TypeScript configuration file.

## Deployment

The project is configured for deployment on platforms like Vercel. To deploy:

### 1. Build the Application

```bash
npm run build
npm run start
```

Or using yarn:

```bash
yarn build
yarn start
```

### 2. Deploy to Vercel

Install the Vercel CLI and run:

```bash
vercel
```

Follow the prompts to complete the deployment.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Description of changes"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request detailing your changes.
