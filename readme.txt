# Sunstone Inclusivity Network

A community platform built with Svelte 5 and SvelteKit designed to foster inclusive communities through connection and support.

## 🌟 Features

- Modern Svelte 5 with runes for reactive state management
- SvelteKit for robust routing and server-side rendering
- Supabase integration for authentication and database management
- Responsive design for all devices
- Authentication system with social login options
- Community resources library
- User profiles and customization
- Deployed to Fly.io for global availability

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Supabase](https://supabase.com/) account for backend services
- [Fly.io](https://fly.io/) account for deployment

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Sunstone-Svelte.git
cd Sunstone-Svelte
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set up Supabase

1. Create a new project on [Supabase](https://supabase.com/)
2. In your Supabase project, set up the following tables:

#### Profiles Table
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  website TEXT,
  updated_at TIMESTAMP WITH TIME ZONE
);

-- Create a secure RLS policy for the profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all profiles" 
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "New users can create their profile" 
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
```

#### Resources Table
```sql
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  title TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  category TEXT,
  tags TEXT[] DEFAULT '{}'::TEXT[]
);

-- Create RLS policy for resources
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read resources" 
  ON resources FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create resources" 
  ON resources FOR INSERT USING (auth.role() = 'authenticated');

CREATE POLICY "Resource creators can update their resources" 
  ON resources FOR UPDATE USING (
    auth.uid() IN (
      SELECT user_id FROM resource_creators WHERE resource_id = id
    )
  );
```

#### Events Table
```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  title TEXT NOT NULL,
  description TEXT,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  is_virtual BOOLEAN DEFAULT FALSE,
  meeting_url TEXT
);

-- Create RLS policy for events
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read events" 
  ON events FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create events" 
  ON events FOR INSERT USING (auth.role() = 'authenticated');
```

3. Set up authentication providers in your Supabase project:
   - Email/Password
   - Google (optional)
   - GitHub (optional)

4. Get your Supabase URL and anon key from the API settings

### 4. Configure environment variables

Create a `.env` file in the root of your project:

```
PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 5. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173` to see your application.

## 🏗️ Project Structure

```
Sunstone-Svelte/
├── src/
│   ├── app.html          # The HTML template for the app
│   ├── routes/           # SvelteKit routes
│   │   ├── +layout.svelte        # Main layout component
│   │   ├── +layout.server.ts     # Server-side layout handling
│   │   ├── +page.svelte          # Home page
│   │   ├── about/                # About page
│   │   ├── login/                # Authentication
│   │   ├── profile/              # User profile
│   │   └── resources/            # Resources library
│   ├── lib/              # Shared components and utilities
│   │   └── supabase.ts   # Supabase client and helpers
│   └── assets/           # Static assets like images
├── static/               # Static files served as-is
│   └── favicon.png       # Favicon
├── .env                  # Environment variables (git-ignored)
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
├── svelte.config.js      # Svelte configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.js        # Vite configuration
├── fly.toml              # Fly.io configuration
└── Dockerfile            # Docker configuration for deployment
```

## 🚢 Deployment to Fly.io

1. Install the Fly.io CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Log in to your Fly.io account:
   ```bash
   fly auth login
   ```

3. Create a new app on Fly.io:
   ```bash
   fly apps create sunstone-svelte
   ```

4. Set up your Supabase environment variables:
   ```bash
   fly secrets set PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   fly secrets set PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

5. Deploy your app:
   ```bash
   fly deploy
   ```

6. Configure your custom domain:
   ```bash
   fly certs create sunstoneinclusivity.network
   ```

7. Update your DNS settings to point to your Fly.io app.

## 🔒 Setting Up Your Custom Domain

1. In your DNS provider, add the following records:
   - `A` record: Point `sunstoneinclusivity.network` to the IPv4 address provided by Fly.io
   - `AAAA` record: Point `sunstoneinclusivity.network` to the IPv6 address provided by Fly.io

2. Verify the certificate is provisioning correctly:
   ```bash
   fly certs check sunstoneinclusivity.network
   ```

## 🧪 Testing

To run the tests (once you've set them up):

```bash
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact info@sunstoneinclusivity.network