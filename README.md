# Prashaint Mishra - Portfolio Website

> A modern, responsive portfolio website showcasing the professional journey of Prashaint Kumar Mishra, Senior Data Engineer with 14+ years of experience in ML-driven data pipelines and scalable data solutions.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://prashaintmishra.in)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT%20with%20Restrictions-red?style=for-the-badge)](./LICENSE)

## 🚀 Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Animations**: Smooth transitions and hover effects with modern gradient backgrounds
- **Glassmorphism Effects**: Modern glass-effect UI elements with backdrop blur
- **Gradient Hero Section**: Animated gradient backgrounds with shine and floating dot effects
- **Modern UI**: Clean, professional design with attention to detail and contemporary styling

### 💼 Professional Showcase
- **Experience Timeline**: Interactive career progression visualization
- **Project Gallery**: Filterable portfolio with detailed case studies
- **Skills Matrix**: Comprehensive technical and soft skills breakdown
- **Certifications**: Professional credentials and education display

### 🛠 Technical Excellence
- **Performance Optimized**: Fast loading with modern web technologies
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Error Handling**: Comprehensive error boundaries and fallbacks

### 📱 User Experience
- **Contact System**: Professional contact form with validation
- **Navigation**: Smooth client-side routing with active states
- **Search & Filter**: Advanced filtering for projects and experience
- **Progressive Enhancement**: Works without JavaScript enabled

## 🏗 Architecture

### Frontend Stack
```
React 18 + Vite + Tailwind CSS
├── Component Library (Custom UI Components)
├── Routing (React Router v6)
├── State Management (React Hooks)
├── Styling (Tailwind + Custom CSS)
└── Icons (Lucide React)
```

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Core design system components
│   └── common/          # Shared application components
├── pages/               # Route-based page components
│   ├── home-landing-page/
│   ├── about-bio-section/
│   ├── portfolio-gallery/
│   ├── experience-timeline/
│   └── contact-form-page/
├── styles/              # Global styles and Tailwind config
├── utils/               # Utility functions and helpers
└── assets/              # Static assets and media
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prashaint/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run start
   # or
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Environment Setup

Create a `.env` file in the root directory:
```env
# Application Configuration
VITE_APP_TITLE="Prashaint Mishra Portfolio"
VITE_APP_DESCRIPTION="Senior Data Engineer Portfolio"

# External Integrations (Optional)
VITE_ANALYTICS_ID=your-analytics-id
VITE_CONTACT_EMAIL=your-email@example.com
```

## 📦 Available Scripts

### Development
```bash
npm start              # Start development server
npm run dev            # Alternative development command
```

### Production
```bash
npm run build          # Create production build
npm run preview        # Preview production build locally
npm run serve          # Serve production build
```

### Code Quality
```bash
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run format         # Format code with Prettier
```

### Deployment
```bash
npm run deploy         # Deploy to Netlify
npm run build:docker   # Build Docker image
```

## 🐳 Docker Support

### Development with Docker
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Access application at http://localhost:5173
```

### Production with Docker
```bash
# Build and run production container
docker-compose -f docker-compose.prod.yml up

# Access application at http://localhost:80
```

### Docker Commands
```bash
# Build custom image
docker build -t portfolio-app .

# Run container
docker run -p 3000:3000 portfolio-app

# Development with volume mounting
docker run -p 3000:3000 -v $(pwd):/app portfolio-app
```

## 🎨 Customization

### Design System
The application uses a comprehensive design system built with Tailwind CSS featuring modern gradient colors:

```css
/* Modern Color Palette */
--color-primary: #667eea;        /* Modern purple-blue */
--color-primary-foreground: #FFFFFF;
--color-accent: #f093fb;         /* Modern pink */
--color-success: #10B981;        /* Emerald-500 */
--color-background: #FAFAFA;     /* Gray-50 */

/* Gradient Backgrounds */
- Animated gradient hero with purple-blue-pink transitions
- Glassmorphism effects with backdrop blur
- Modern button glow effects
- Pulse animations and gradient borders
```

### Component Customization
All components are built with flexibility in mind:

```javascript
// Button variants
<Button variant="primary" size="lg" icon="Download">
  Download Resume
</Button>

// Card layouts
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Content Management
Update personal information in the respective page components:

- **Personal Info**: `src/pages/about-bio-section/components/PersonalInfo.jsx`
- **Experience**: `src/pages/experience-timeline/index.jsx`
- **Projects**: `src/pages/portfolio-gallery/index.jsx`
- **Skills**: `src/pages/about-bio-section/components/SkillsSection.jsx`

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the application
npm run build

# Upload dist/ folder to your hosting provider
```

### Environment Variables
Set the following environment variables in your deployment platform:
```
NODE_ENV=production
VITE_APP_URL=https://yourdomain.com
```

## 🔧 Configuration

### Tailwind Configuration
Customize the design system in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      },
      fontFamily: {
        sans: ['Your-Font', 'sans-serif'],
      },
    },
  },
}
```

### Vite Configuration
Optimize build settings in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
```

## 🧪 Testing

### Running Tests
```bash
npm run test           # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

### Testing Stack
- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing
- **MSW**: API mocking for tests

## 📊 Performance

### Optimization Features
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching Strategy**: Service worker implementation
- **CDN Integration**: Static asset optimization

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

### Security Features
- **Content Security Policy**: XSS protection
- **HTTPS Enforced**: Secure data transmission
- **Input Validation**: Form sanitization
- **Error Boundaries**: Graceful error handling
- **Dependency Scanning**: Automated vulnerability checks

### Security Headers
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Safari**: iOS 12+
- **Chrome Mobile**: Android 8+

### Progressive Enhancement
- **Base Experience**: Works without JavaScript
- **Enhanced Experience**: Full interactivity with JavaScript
- **Offline Support**: Service worker caching (future enhancement)

## 📱 Responsive Design

### Breakpoint System
```css
/* Mobile First Approach */
sm: 640px    /* Small tablets and large phones */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops and desktops */
xl: 1280px   /* Large desktops */
2xl: 1536px  /* Extra large screens */
```

### Mobile Optimization
- **Touch-Friendly**: 44px minimum touch targets
- **Fast Loading**: Optimized images and assets
- **Readable Text**: Appropriate font sizes and contrast
- **Easy Navigation**: Thumb-friendly menu placement

## 🎯 SEO Optimization

### Technical SEO
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Dynamic titles and descriptions
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Content SEO
- **Keyword Optimization**: Technical skill keywords
- **Internal Linking**: Related content connections
- **Image Alt Tags**: Descriptive alternative text
- **Page Speed**: Optimized Core Web Vitals

## 🔍 Analytics & Monitoring

### Analytics Integration
```javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});

// Custom event tracking
gtag('event', 'contact_form_submit', {
  event_category: 'engagement',
  event_label: 'footer_form'
});
```

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Error Tracking**: JavaScript error monitoring
- **User Journey**: Navigation flow analysis
- **Conversion Tracking**: Contact form submissions

## 🤝 Contributing

### Contribution Guidelines
This is a personal portfolio project. While the code is available for educational purposes, direct contributions are not accepted. However, you can:

1. **Report Issues**: Create issues for bugs or suggestions
2. **Educational Use**: Use as a learning resource
3. **Inspiration**: Draw inspiration for your own projects
4. **Feedback**: Provide constructive feedback

### Code Standards
- **ESLint**: Follow established linting rules
- **Prettier**: Consistent code formatting
- **Semantic Commits**: Use conventional commit messages
- **Component Structure**: Follow established patterns

## 📄 License

This project is licensed under the **MIT License with Additional Restrictions**.

### Key Points:
- ✅ **Educational Use**: View and study for learning purposes
- ✅ **Reference**: Use as inspiration for your own projects
- ❌ **Commercial Use**: No commercial use without permission
- ❌ **Personal Content**: Cannot use personal information or content
- ❌ **Resale**: Cannot sell or redistribute the codebase

See the [LICENSE](./LICENSE) file for complete terms and conditions.

## 📞 Contact

### Professional Contact
- **Email**: [prashaint.kumar.mishra@gmail.com](mailto:prashaint.kumar.mishra@gmail.com)
- **LinkedIn**: [linkedin.com/in/prashaint](https://www.linkedin.com/in/prashaint)
- **Location**: Pune, Maharashtra, India
- **Phone**: +91 8484093319

### Project Links
- **Live Website**: [prashaintmishra.in](https://prashaintmishra.in)
- **Repository**: [GitHub Repository](https://github.com/prashaint/portfolio)
- **Documentation**: [Project Documentation](./docs/README.md)

## 🙏 Acknowledgments

### Technologies Used
- **React Team**: For the amazing React framework
- **Vite Team**: For the lightning-fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide**: For the beautiful icon library
- **Netlify**: For seamless hosting and deployment

### Inspiration
- **Design System**: Inspired by modern design principles
- **Performance**: Following web performance best practices
- **Accessibility**: WCAG guidelines and inclusive design
- **SEO**: Technical SEO best practices

### Open Source Community
Special thanks to the open source community for providing the tools and libraries that make projects like this possible.

---

## 📚 Additional Resources

### Documentation
- [Component Documentation](./docs/components.md)
- [Deployment Guide](./docs/deployment.md)
- [Customization Guide](./docs/customization.md)
- [Performance Guide](./docs/performance.md)

### External Resources
- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)

---

**Built with ❤️ by Prashaint Kumar Mishra**

*Last Updated: January 2025*

---

## 🎨 Recent Design Updates (v2.0)

### Modern Gradient System
- **Animated Hero Background**: Multi-color gradient animation (purple-blue-pink) with 15s infinite loop
- **Shine Effect**: Radial gradient overlay with rotating animation for dynamic visual appeal
- **Floating Dots**: Subtle particle effects that create depth and movement
- **Glassmorphism**: Modern glass-effect UI elements with `backdrop-blur` and semi-transparent backgrounds

### New Styling Utilities
```css
.gradient-hero        /* Animated multi-color gradient background */
.glass-effect         /* Glassmorphism with backdrop blur */
.btn-glow            /* Button hover glow animation */
.card-hover          /* Smooth card elevation on hover */
.gradient-text       /* Gradient text effect */
.pulse-glow          /* Pulsing glow animation */
```

### Typography Updates
- **Font Weights**: Extended Inter font family (300-900 weights)
- **Letter Spacing**: Optimized negative letter-spacing for modern headings
- **Improved Readability**: Better line-height and text contrast on gradient backgrounds

### Image Assets
- **Local Logo Images**: Added local copies of AWS, Databricks, Barclays, and BIT Mesra logos
- **Profile Images**: Updated with modern styling and gradient overlays
- **Resume**: Latest resume (Prashaint_Kumar_Mishra_Mar25.pdf)