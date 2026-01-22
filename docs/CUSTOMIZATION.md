# Customization Guide

## Table of Contents
1. [Getting Started with Customization](#getting-started-with-customization)
2. [Design System Customization](#design-system-customization)
3. [Content Customization](#content-customization)
4. [Component Customization](#component-customization)
5. [Layout Customization](#layout-customization)
6. [Styling Customization](#styling-customization)
7. [Feature Customization](#feature-customization)
8. [Adding New Pages](#adding-new-pages)
9. [Third-Party Integrations](#third-party-integrations)
10. [Advanced Customizations](#advanced-customizations)

## Getting Started with Customization

### Before You Begin
1. **Backup your work**: Always create a git branch before major changes
2. **Understand the structure**: Review the architecture documentation
3. **Test locally**: Use `npm start` to test changes during development
4. **Follow conventions**: Maintain existing code patterns and naming

### Customization Workflow
```bash
# 1. Create a feature branch
git checkout -b customize/your-feature

# 2. Make your changes
# Edit files as needed

# 3. Test locally
npm start

# 4. Build and test production
npm run build
npm run preview

# 5. Commit and push
git add .
git commit -m "feat: add custom feature"
git push origin customize/your-feature
```

## Design System Customization

### Color Palette

#### Location: `tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#2563EB',    // Blue-600
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',        // Default primary
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        
        // Secondary colors
        secondary: {
          DEFAULT: '#64748B',    // Slate-500
          // Add more shades as needed
        },
        
        // Accent colors
        accent: {
          DEFAULT: '#F59E0B',    // Amber-500
          // Add more shades
        },
        
        // Custom brand colors
        brand: {
          purple: '#8B5CF6',
          green: '#10B981',
          orange: '#F97316',
        }
      }
    }
  }
}
```

#### CSS Variables: `src/styles/tailwind.css`
```css
@layer base {
  :root {
    /* Modern color palette - Updated v2.0 */
    --color-primary: #667eea;          /* Modern purple-blue */
    --color-primary-foreground: #FFFFFF;
    --color-secondary: #64748B;        /* Slate-500 */
    --color-accent: #f093fb;           /* Modern pink */
    --color-accent-foreground: #1E293B;

    /* Core colors */
    --color-background: #FAFAFA;       /* Gray-50 */
    --color-foreground: #1E293B;       /* Slate-800 */
    --color-card: #FFFFFF;
    --color-card-foreground: #1E293B;
    --color-muted: #F1F5F9;           /* Slate-100 */
    --color-muted-foreground: #64748B; /* Slate-500 */
    --color-border: #E2E8F0;          /* Slate-200 */

    /* Status colors */
    --color-success: #10B981;          /* Emerald-500 */
    --color-warning: #F59E0B;          /* Amber-500 */
    --color-error: #EF4444;            /* Red-500 */

    /* Custom properties */
    --color-brand-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    --border-radius-brand: 12px;
    --shadow-brand: 0 4px 6px -1px rgba(102, 126, 234, 0.1);
  }
}
```

### Typography

#### Font Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Primary font family
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Secondary font (for headings)
        heading: ['Poppins', 'Inter', 'sans-serif'],
        // Monospace font
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Custom font sizes
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['2rem', { lineHeight: '1.3' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4' }],
      }
    }
  }
}
```

#### Loading Custom Fonts
```css
/* src/styles/tailwind.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Or use font files */
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Spacing and Sizing
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Custom spacing values
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        // Custom max-width values
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        // Custom animations
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    }
  }
}
```

## Content Customization

### Personal Information

#### Update Personal Details: `src/pages/about-bio-section/components/PersonalInfo.jsx`
```javascript
const personalData = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  bio: `Your professional bio here. 
        Multiple paragraphs separated by \\n\\n.
        
        Second paragraph about your expertise and experience.`,
  profileImage: "assets/images/your-profile.jpg",
  resumeUrl: "/assets/resume/Your_Resume.pdf"
};
```

#### Social Links: `src/pages/home-landing-page/components/HeroSection.jsx`
```javascript
const socialLinks = [
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'GitHub', icon: 'Github', url: 'https://github.com/yourusername' },
  { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/yourusername' },
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/yourusername' },
  { name: 'Website', icon: 'Globe', url: 'https://yourwebsite.com' }
];
```

### Experience Timeline

#### Update Experience: `src/pages/experience-timeline/index.jsx`
```javascript
const experienceData = [
  {
    id: 1,
    role: "Your Current Role",
    company: "Company Name",
    location: "City, Country",
    duration: "Start Date - Present",
    type: "Full-time", // Full-time, Part-time, Contract, Freelance
    industry: "Technology", // Technology, Finance, Healthcare, etc.
    roleType: "development", // development, design, management, etc.
    year: "2024",
    companyLogo: "https://company-logo-url.com/logo.png",
    summary: "Brief description of your role and responsibilities.",
    technologies: ["Tech1", "Tech2", "Tech3"],
    achievements: [
      "Achievement 1 with specific metrics",
      "Achievement 2 showing impact",
      "Achievement 3 demonstrating growth"
    ],
    projectsCount: 5
  },
  // Add more experience entries
];
```

### Skills Section

#### Update Skills: `src/pages/about-bio-section/components/SkillsSection.jsx`
```javascript
const skillCategories = {
  technical: {
    title: "Technical Skills",
    icon: "Code",
    skills: [
      { name: "Your Primary Skill", level: 95, category: "Framework" },
      { name: "Your Secondary Skill", level: 90, category: "Language" },
      { name: "Database Technology", level: 85, category: "Database" },
      // Add more skills
    ]
  },
  design: {
    title: "Design Skills",
    icon: "Palette",
    skills: [
      { name: "UI/UX Design", level: 90, category: "Design" },
      { name: "Design Tool", level: 85, category: "Tool" },
      // Add more design skills
    ]
  },
  soft: {
    title: "Soft Skills", 
    icon: "Users",
    skills: [
      { name: "Leadership", level: 85, category: "Management" },
      { name: "Communication", level: 95, category: "Interpersonal" },
      // Add more soft skills
    ]
  }
};
```

### Projects Portfolio

#### Update Projects: `src/pages/portfolio-gallery/index.jsx`
```javascript
const allProjects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Detailed description of your project, what it does, and the problem it solves.",
    featuredImage: "https://your-project-image.com/featured.jpg",
    images: [
      "https://your-project-image.com/screenshot1.jpg",
      "https://your-project-image.com/screenshot2.jpg",
      "https://your-project-image.com/screenshot3.jpg"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "web", // web, mobile, design, data
    status: "completed", // completed, in-progress, upcoming
    featured: true,
    client: "Client Name or Personal Project",
    duration: "3 months",
    role: "Your Role",
    completedDate: "2024-01-15",
    liveUrl: "https://your-project-live-url.com",
    githubUrl: "https://github.com/yourusername/project-repo",
    challenges: "Describe the main challenges faced and how you solved them.",
    results: "Quantify the results and impact of your project.",
    features: [
      "Key feature 1",
      "Key feature 2", 
      "Key feature 3"
    ]
  },
  // Add more projects
];
```

## Component Customization

### Button Variants

#### Add Custom Button Styles: `src/components/ui/Button.jsx`
```javascript
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Custom variants
        gradient: "bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90",
        brand: "bg-brand-purple text-white hover:bg-brand-purple/90",
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xs: "h-8 rounded-md px-2 text-xs",
        xl: "h-12 rounded-md px-10 text-base",
        
        // Custom sizes
        hero: "h-14 rounded-lg px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### Card Layouts

#### Create Custom Card Component: `src/components/ui/Card.jsx`
```javascript
const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-card text-card-foreground",
    outline: "border border-border bg-transparent",
    elevated: "bg-card text-card-foreground shadow-lg",
    gradient: "bg-gradient-to-br from-primary/5 via-background to-accent/5",
    glass: "bg-card/80 backdrop-blur-sm border border-border/50",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border shadow-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

export { Card, CardHeader, CardTitle, CardContent };
```

### Navigation Customization

#### Update Navigation Items: `src/components/ui/Header.jsx`
```javascript
const navigationItems = [
  { label: 'Home', path: '/home-landing-page', icon: 'Home' },
  { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Briefcase' },
  { label: 'About', path: '/about-bio-section', icon: 'User' },
  { label: 'Experience', path: '/experience-timeline', icon: 'Clock' },
  { label: 'Blog', path: '/blog', icon: 'FileText' }, // New page
  { label: 'Contact', path: '/contact-form-page', icon: 'Mail' },
];
```

## Layout Customization

### Hero Section Layouts

#### Alternative Hero Layout: `src/pages/home-landing-page/components/HeroSection.jsx`
```javascript
// Centered layout
const CenteredHeroSection = () => (
  <section className="min-h-screen flex items-center justify-center text-center">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          Creative <span className="text-primary">Designer</span> & Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I create beautiful, functional, and user-centered digital experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">View My Work</Button>
          <Button variant="outline" size="lg">Get In Touch</Button>
        </div>
      </div>
    </div>
  </section>
);

// Split screen layout
const SplitScreenHero = () => (
  <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className="flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-6">
          Hello, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your professional description here.
        </p>
        <Button size="lg">Explore My Work</Button>
      </div>
    </div>
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
      <img src="/hero-image.jpg" alt="Hero" className="max-w-full h-auto" />
    </div>
  </section>
);
```

### Grid Layouts

#### Custom Grid Systems
```javascript
// Masonry-style grid
const MasonryGrid = ({ items }) => (
  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
    {items.map((item, index) => (
      <div key={index} className="break-inside-avoid bg-card rounded-lg p-6 shadow-sm">
        {item.content}
      </div>
    ))}
  </div>
);

// Responsive card grid
const ResponsiveGrid = ({ items, minCardWidth = 300 }) => (
  <div 
    className="grid gap-6"
    style={{
      gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`
    }}
  >
    {items.map((item, index) => (
      <Card key={index} className="h-fit">
        {item.content}
      </Card>
    ))}
  </div>
);

// Bento box layout
const BentoGrid = ({ items }) => (
  <div className="grid grid-cols-12 gap-4 auto-rows-min">
    <div className="col-span-12 md:col-span-8 row-span-2">
      <Card className="h-full p-8">
        <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
        {/* Featured content */}
      </Card>
    </div>
    <div className="col-span-12 md:col-span-4">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
        {/* Stats content */}
      </Card>
    </div>
    <div className="col-span-12 md:col-span-4">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Recent Work</h3>
        {/* Recent work content */}
      </Card>
    </div>
    <div className="col-span-12 md:col-span-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        {/* Skills content */}
      </Card>
    </div>
    <div className="col-span-12 md:col-span-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        {/* Experience content */}
      </Card>
    </div>
  </div>
);
```

## Styling Customization

### Custom CSS Classes

#### Create Utility Classes: `src/styles/tailwind.css`

**Modern Utilities (v2.0 Update)**:

```css
@layer utilities {
  /* Modern Gradient Background with Shine Effects */
  .gradient-hero {
    background: linear-gradient(135deg,
      #667eea 0%,
      #764ba2 25%,
      #f093fb 50%,
      #4facfe 75%,
      #667eea 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    position: relative;
    overflow: hidden;
  }

  /* Gradient Animation */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Shine Overlay Effect */
  .gradient-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: shine 8s linear infinite;
    pointer-events: none;
  }

  @keyframes shine {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Floating Dots Effect */
  .gradient-hero::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.3), transparent),
      radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.2), transparent),
      radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.2), transparent),
      radial-gradient(2px 2px at 90% 80%, rgba(255,255,255,0.25), transparent),
      radial-gradient(1px 1px at 30% 90%, rgba(255,255,255,0.2), transparent);
    background-size: 200% 200%;
    animation: float 20s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px);
      opacity: 0.8;
    }
  }

  /* Modern Button Glow Effect */
  .btn-glow {
    position: relative;
    overflow: hidden;
  }

  .btn-glow::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }

  .btn-glow:hover::before {
    left: 100%;
  }

  /* Glassmorphism Effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Modern Card Hover Effect */
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
  }

  /* Gradient Text Effect */
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Animated Gradient Border */
  .gradient-border {
    position: relative;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    padding: 2px;
    border-radius: 12px;
  }

  .gradient-border > * {
    background: var(--color-background);
    border-radius: 10px;
  }

  /* Pulse Glow Animation */
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
    50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
  }

  .pulse-glow {
    animation: pulseGlow 3s ease-in-out infinite;
  }

  /* Custom scrollbar with gradient */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-muted);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #f093fb);
  }
}

@layer components {
  /* Custom button styles */
  .btn-cta {
    @apply bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200;
  }

  /* Input focus styles */
  .input-focus {
    @apply focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200;
  }
}
```

**Usage Examples**:

```jsx
// Gradient hero section
<section className="gradient-hero min-h-screen">
  <h1 className="gradient-text">Your Name</h1>
</section>

// Glassmorphism button
<button className="glass-effect hover:bg-white/20">
  Click Me
</button>

// Button with glow effect
<Button className="btn-glow bg-white text-primary">
  View My Work
</Button>

// Card with hover effect
<div className="card-hover bg-card p-6 rounded-lg">
  Card Content
</div>

// Image with pulse glow
<div className="pulse-glow rounded-2xl">
  <img src="profile.jpg" alt="Profile" />
</div>
```

### Animation Customization

#### Custom Animations: `tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        // Entrance animations
        'slide-in-up': 'slide-in-up 0.6s ease-out',
        'slide-in-down': 'slide-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        
        // Continuous animations
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        
        // Loading animations
        'shimmer': 'shimmer 2s linear infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'skeleton': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.4' },
        },
      }
    }
  }
}
```

## Feature Customization

### Contact Form Customization

#### Add New Form Fields: `src/pages/contact-form-page/components/ContactForm.jsx`
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  // New fields
  phone: '',
  website: '',
  projectGoals: '',
  referralSource: '',
  urgency: 'normal'
});

// Add new form sections
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Input
    label="Phone Number"
    type="tel"
    placeholder="+1 (555) 123-4567"
    value={formData.phone}
    onChange={(e) => handleInputChange('phone', e.target.value)}
  />

  <Input
    label="Website (Optional)"
    type="url"
    placeholder="https://yourwebsite.com"
    value={formData.website}
    onChange={(e) => handleInputChange('website', e.target.value)}
  />
</div>

<Select
  label="How did you hear about me?"
  options={[
    { value: 'google', label: 'Google Search' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'other', label: 'Other' }
  ]}
  value={formData.referralSource}
  onChange={(value) => handleInputChange('referralSource', value)}
/>
```

### Skills Section Customization

#### Add Skill Categories: `src/pages/about-bio-section/components/SkillsSection.jsx`
```javascript
const skillCategories = {
  // Existing categories...
  
  // New categories
  tools: {
    title: "Tools & Platforms",
    icon: "Settings",
    skills: [
      { name: "VS Code", level: 95, category: "Editor" },
      { name: "Docker", level: 80, category: "DevOps" },
      { name: "AWS", level: 75, category: "Cloud" },
      { name: "Figma", level: 85, category: "Design" },
    ]
  },
  languages: {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript", level: 95, category: "Web" },
      { name: "TypeScript", level: 90, category: "Web" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "Go", level: 70, category: "Backend" },
    ]
  },
  certifications: {
    title: "Certifications",
    icon: "Award", 
    skills: [
      { name: "AWS Certified Developer", level: 100, category: "Cloud" },
      { name: "Google Analytics Certified", level: 100, category: "Analytics" },
    ]
  }
};
```

### Project Gallery Customization

#### Add New Project Categories
```javascript
// Update categories in portfolio gallery
const categories = [
  { id: 'all', name: 'All Projects', count: allProjects.length },
  { id: 'web', name: 'Web Development', count: 0 },
  { id: 'mobile', name: 'Mobile Apps', count: 0 },
  { id: 'design', name: 'UI/UX Design', count: 0 },
  { id: 'data', name: 'Data Science', count: 0 },
  { id: 'api', name: 'API Development', count: 0 },
  { id: 'devops', name: 'DevOps', count: 0 },
];

// Add new filter options
const filterOptions = {
  technology: ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java'],
  complexity: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  duration: ['< 1 month', '1-3 months', '3-6 months', '6+ months'],
  team_size: ['Solo', '2-5 people', '5-10 people', '10+ people']
};
```

## Adding New Pages

### Create a New Page

#### 1. Create Page Directory
```bash
mkdir src/pages/blog
mkdir src/pages/blog/components
```

#### 2. Create Page Component: `src/pages/blog/index.jsx`
```javascript
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BlogHero from './components/BlogHero';
import BlogList from './components/BlogList';
import BlogFilters from './components/BlogFilters';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load blog posts (from API or static data)
    const loadPosts = async () => {
      // Mock data for now
      const mockPosts = [
        {
          id: 1,
          title: "Building Scalable React Applications",
          excerpt: "Learn best practices for building large-scale React applications...",
          content: "Full blog post content here...",
          category: "development",
          tags: ["React", "JavaScript", "Performance"],
          publishedDate: "2024-01-15",
          readTime: "5 min read",
          featuredImage: "/blog/react-scalability.jpg",
          author: {
            name: "Your Name",
            avatar: "/profile.jpg"
          }
        },
        // More posts...
      ];
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
    };

    loadPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Your Name | Thoughts on Development</title>
        <meta name="description" content="Read my thoughts on web development, design, and technology trends." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <BlogHero />
        <BlogFilters 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <BlogList posts={filteredPosts} />
      </div>
    </>
  );
};

export default BlogPage;
```

#### 3. Create Blog Components

**BlogHero.jsx**:
```javascript
const BlogHero = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        My Blog
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Thoughts, insights, and tutorials on web development, design, and technology.
      </p>
    </div>
  </section>
);
```

**BlogList.jsx**:
```javascript
const BlogList = ({ posts }) => (
  <section className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>{post.publishedDate}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
```

#### 4. Add Route: `src/Routes.jsx`
```javascript
import BlogPage from './pages/blog';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Existing routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          {/* Other routes */}
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
```

## Third-Party Integrations

### Analytics Integration

#### Google Analytics 4
```javascript
// src/utils/analytics.js
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

export const trackPageView = (path) => {
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_path: path,
  });
};

export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Usage in components
import { trackEvent } from '../utils/analytics';

const handleDownload = () => {
  trackEvent('download', 'resume', 'header_button');
  // Download logic
};
```

#### Form Analytics
```javascript
// Track form interactions
const ContactForm = () => {
  const trackFormStart = () => {
    trackEvent('form_start', 'contact', 'contact_form');
  };

  const trackFormSubmit = () => {
    trackEvent('form_submit', 'contact', 'contact_form');
  };

  const trackFormError = (field) => {
    trackEvent('form_error', 'contact', field);
  };

  return (
    <form onFocus={trackFormStart} onSubmit={trackFormSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

### Email Integration

#### EmailJS Setup
```bash
npm install emailjs-com
```

```javascript
// src/utils/email.js
import emailjs from 'emailjs-com';

const EMAIL_SERVICE_ID = 'your_service_id';
const EMAIL_TEMPLATE_ID = 'your_template_id';
const EMAIL_USER_ID = 'your_user_id';

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      formData,
      EMAIL_USER_ID
    );
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Usage in contact form
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const result = await sendEmail(formData);
  
  if (result.success) {
    setIsSubmitted(true);
    trackEvent('form_submit_success', 'contact', 'contact_form');
  } else {
    setError(result.error);
    trackEvent('form_submit_error', 'contact', 'contact_form');
  }
  
  setIsSubmitting(false);
};
```

### CMS Integration

#### Headless CMS (Strapi, Contentful)
```javascript
// src/utils/cms.js
const CMS_API_URL = 'https://your-cms-api.com';
const CMS_API_KEY = 'your-api-key';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${CMS_API_URL}/projects`, {
      headers: {
        'Authorization': `Bearer ${CMS_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchBlogPosts = async () => {
  try {
    const response = await fetch(`${CMS_API_URL}/blog-posts`, {
      headers: {
        'Authorization': `Bearer ${CMS_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
```

## Advanced Customizations

### Theme System

#### Dark Mode Implementation
```javascript
// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

// Theme toggle component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={20} />
    </Button>
  );
};
```

#### Dark Mode Styles: `src/styles/tailwind.css`
```css
@layer base {
  .dark {
    --color-background: #0F172A;
    --color-foreground: #F1F5F9;
    --color-card: #1E293B;
    --color-card-foreground: #F1F5F9;
    --color-primary: #3B82F6;
    --color-muted: #334155;
    --color-muted-foreground: #94A3B8;
    --color-border: #334155;
  }
}
```

### Internationalization (i18n)

#### Setup i18n
```bash
npm install react-i18next i18next
```

```javascript
// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

```json
// src/i18n/locales/en.json
{
  "nav": {
    "home": "Home",
    "portfolio": "Portfolio", 
    "about": "About",
    "experience": "Experience",
    "contact": "Contact"
  },
  "hero": {
    "title": "Hi, I'm {{name}}",
    "subtitle": "Senior Data Engineer",
    "description": "Building scalable data solutions..."
  },
  "buttons": {
    "viewWork": "View My Work",
    "downloadResume": "Download Resume",
    "getInTouch": "Get In Touch"
  }
}
```

#### Usage in Components
```javascript
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('hero.title', { name: 'Your Name' })}</h1>
      <h2>{t('hero.subtitle')}</h2>
      <p>{t('hero.description')}</p>
      <Button>{t('buttons.viewWork')}</Button>
    </section>
  );
};
```

### Performance Optimizations

#### Code Splitting
```javascript
// Lazy load components
const LazyPortfolio = lazy(() => import('../pages/portfolio-gallery'));
const LazyAbout = lazy(() => import('../pages/about-bio-section'));

// Route-based splitting
const Routes = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <RouterRoutes>
      <Route path="/portfolio" element={<LazyPortfolio />} />
      <Route path="/about" element={<LazyAbout />} />
    </RouterRoutes>
  </Suspense>
);
```

#### Image Optimization
```javascript
// Progressive image loading
const ProgressiveImage = ({ src, placeholder, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};
```

This comprehensive customization guide provides detailed instructions for personalizing every aspect of the portfolio application, from design and content to advanced features and integrations.