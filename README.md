# Wireframe2Code 🎨➡️💻

An AI-powered web application that transforms wireframes into production-ready code instantly. Built with Next.js, OpenAI, and Firebase.

![Wireframe2Code](public/Wireframetocode.png)

## 🌟 Features

- **AI-Powered Conversion**: Upload wireframe images and get production-ready code
- **Real-time Code Preview**: View generated code with syntax highlighting
- **Multiple Frameworks**: Support for React, HTML/CSS, and more
- **Firebase Authentication**: Secure Google Sign-in
- **Modern UI**: Built with Radix UI and Tailwind CSS
- **Code Sandbox Integration**: Interactive code preview and editing
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Authentication**: Firebase Auth
- **Database**: Neon (PostgreSQL), Drizzle ORM
- **AI**: OpenAI API
- **Code Preview**: Sandpack

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Firebase account
- OpenAI API key
- Neon database (optional)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wireframe-to-code.git
   cd wireframe-to-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key

   # Database Configuration (Optional)
   DATABASE_URL=your_neon_database_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Enable **Authentication** > **Google Sign-in method**
4. Add your app and copy the configuration
5. Paste the config values into your `.env.local` file

## 🤖 OpenAI Setup

1. Sign up at [OpenAI Platform](https://platform.openai.com)
2. Generate an API key
3. Add the key to your `.env.local` file

## 📁 Project Structure

```
wireframe-to-code/
├── app/
│   ├── _components/        # Reusable components
│   ├── (routes)/           # Route groups
│   │   ├── dashboard/      # Dashboard page
│   │   ├── credits/        # Credits/Home page
│   │   └── wireframe-to-code/  # Main conversion page
│   ├── api/                # API routes
│   ├── provider.tsx        # Context providers
│   └── layout.tsx          # Root layout
├── components/
│   └── ui/                 # UI components (shadcn)
├── configs/
│   └── firebaseConfig.ts   # Firebase configuration
├── public/                 # Static assets
└── package.json
```

## 🎯 Usage

1. **Sign In**: Click "Get Started" and sign in with Google
2. **Upload Wireframe**: Navigate to the dashboard and upload your wireframe image
3. **Generate Code**: AI will analyze the wireframe and generate code
4. **Preview & Edit**: View the generated code in the interactive sandbox
5. **Export**: Copy the code and use it in your project

## 🌈 Features in Development

- [ ] Support for more frameworks (Vue, Angular)
- [ ] Code optimization suggestions
- [ ] Export to GitHub directly
- [ ] Collaborative editing
- [ ] Version history

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Manik Sangra**
- Email: maniksangra2006@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- OpenAI for the powerful AI capabilities
- Vercel for Next.js framework
- Firebase for authentication services
- The open-source community

## 📸 Screenshots

### Home Page
![Home Page](docs/screenshots/home.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Code Generation
![Code Generation](docs/screenshots/generation.png)

---

⭐ Star this repo if you find it helpful!

Made with ❤️ by Manik Sangra
