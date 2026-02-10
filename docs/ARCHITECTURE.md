# Architecture Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Application Architecture](#application-architecture)
4. [Component Architecture](#component-architecture)
5. [Data Flow](#data-flow)
6. [Routing Architecture](#routing-architecture)
7. [State Management](#state-management)
8. [Build Architecture](#build-architecture)
9. [Deployment Architecture](#deployment-architecture)
10. [Performance Architecture](#performance-architecture)

## System Overview

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User Browser  │───▶│  React Client   │───▶│  Static Assets  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       ▼                       │
         │              ┌─────────────────┐              │
         │              │   Vite Server   │              │
         │              └─────────────────┘              │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    CDN/Cache    │    │  Build Process  │    │   Hosting/CDN   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Architecture Principles
- **Component-Based**: Modular, reusable UI components
- **Unidirectional Data Flow**: Predictable state management
- **Separation of Concerns**: Clear boundaries between UI, logic, and data
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Performance First**: Optimized for speed and user experience
- **Accessibility First**: WCAG compliant and inclusive design

## Technology Stack

### Frontend Layer
```javascript
React 18.2.0           // UI Library
├── React Hooks        // State & lifecycle management
├── React Router v6    // Client-side routing
├── Context API        // State sharing (when needed)
└── Error Boundaries   // Error handling
```

### Styling Layer
```css
Tailwind CSS 3.4.6    // Utility-first CSS framework
├── Custom Components  // Design system components
├── Responsive Design  // Mobile-first approach
├── CSS Variables      // Dynamic theming
├── Modern Gradients   // Animated gradient backgrounds
├── Glassmorphism     // Backdrop blur effects
└── PostCSS           // CSS processing
```

**Modern Design Features (v2.0)**:
- Animated multi-color gradient backgrounds (`gradient-hero`)
- Glassmorphism effects with backdrop blur (`glass-effect`)
- Button glow animations (`btn-glow`)
- Pulse glow effects (`pulse-glow`)
- Gradient text effects (`gradient-text`)
- Custom gradient scrollbars
- Floating dot animations
- Shine overlay effects

### Build Layer
```javascript
Vite 5.0.0            // Build tool & dev server
├── Rollup            // Module bundling
├── Babel             // JavaScript transpilation
├── PostCSS           // CSS processing
└── ESLint            // Code quality
```

### Development Layer
```javascript
Node.js 18+           // Runtime environment
├── npm/yarn          // Package management
├── Git               // Version control
├── VS Code           // Development environment
└── Chrome DevTools   // Debugging & profiling
```

## Application Architecture

### Layer Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │    Pages    │ │ Components  │ │   Assets    │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                      Business Layer                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Hooks     │ │   Utils     │ │  Validation │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                       Data Layer                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │ Local State │ │ Mock Data   │ │   Context   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                    Infrastructure Layer                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Routing   │ │ Error Handling │ │   Build   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure Mapping
```
src/
├── components/          # Presentation Layer
│   ├── ui/             # Core component library
│   └── common/         # Shared components
├── pages/              # Presentation Layer
│   └── [page-name]/    # Page-specific components
├── hooks/              # Business Layer (custom hooks)
├── utils/              # Business Layer (utilities)
├── styles/             # Presentation Layer (styling)
├── data/               # Data Layer (mock data)
└── routes/             # Infrastructure Layer
```

## Component Architecture

### Component Hierarchy
```
App
├── Router
│   ├── Header (Global Navigation)
│   ├── Pages
│   │   ├── HomeLandingPage
│   │   │   ├── HeroSection
│   │   │   ├── FeaturedProjects
│   │   │   ├── SkillsOverview
│   │   │   ├── AboutPreview
│   │   │   └── ContactCTA
│   │   ├── AboutBioSection
│   │   │   ├── PersonalInfo
│   │   │   ├── SkillsSection
│   │   │   ├── CertificationsSection
│   │   │   └── PersonalInterests
│   │   ├── PortfolioGallery
│   │   │   ├── FilterBar
│   │   │   ├── ProjectGrid
│   │   │   │   └── ProjectCard[]
│   │   │   └── StatsSection
│   │   ├── ExperienceTimeline
│   │   │   ├── FilterBar
│   │   │   ├── ExperienceStats
│   │   │   └── TimelineContainer
│   │   │       └── TimelineEntry[]
│   │   └── ContactFormPage
│   │       ├── ContactHeader
│   │       ├── ContactForm
│   │       └── ContactInfo
│   └── Footer (Global)
└── ErrorBoundary
```

### Component Design Patterns

#### 1. Container/Presentational Pattern
```javascript
// Container Component (Smart)
const PortfolioGallery = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({});
  
  // Business logic here
  
  return <ProjectGrid projects={filteredProjects} onProjectClick={handleClick} />;
};

// Presentational Component (Dumb)
const ProjectGrid = ({ projects, onProjectClick }) => {
  return (
    <div className="grid">
      {projects.map(project => 
        <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
      )}
    </div>
  );
};
```

#### 2. Compound Component Pattern
```javascript
// Modal compound component
<Modal>
  <Modal.Header>
    <Modal.Title>Project Details</Modal.Title>
    <Modal.CloseButton />
  </Modal.Header>
  <Modal.Body>
    <ProjectInfo project={project} />
  </Modal.Body>
  <Modal.Footer>
    <Modal.Actions />
  </Modal.Footer>
</Modal>
```

#### 3. Render Props Pattern
```javascript
// Custom hook pattern (modern render props)
const useProjectFilter = (projects) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter logic
  
  return { filteredProjects, activeFilter, setActiveFilter };
};
```

## Data Flow

### Unidirectional Data Flow
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    User     │───▶│   Action    │───▶│    State    │
│ Interaction │    │  (Event)    │    │   Update    │
└─────────────┘    └─────────────┘    └─────────────┘
       ▲                                      │
       │            ┌─────────────┐           │
       └────────────│  Re-render  │◀──────────┘
                    │ (UI Update) │
                    └─────────────┘
```

### State Management Flow
```javascript
// Local State Example
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// Action
const loadProjects = async () => {
  setLoading(true);
  try {
    const data = await fetchProjects();
    setProjects(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// Effect
useEffect(() => {
  loadProjects();
}, []);
```

### Event Flow
```
User Click → Event Handler → State Update → Component Re-render → UI Update
     │              │             │              │              │
     ▼              ▼             ▼              ▼              ▼
onProjectClick → handleClick → setSelectedProject → Modal Opens → New UI
```

## Routing Architecture

### Route Structure
```javascript
const routeConfig = {
  '/': 'AboutBioSection',           // Default/Home
  '/home-landing-page': 'HomeLandingPage',
  '/portfolio-gallery': 'PortfolioGallery',
  '/about-bio-section': 'AboutBioSection',
  '/experience-timeline': 'ExperienceTimeline',
  '/contact-form-page': 'ContactFormPage',
  '/project-detail-modal': 'ProjectDetailModal',
  '*': 'NotFound'                   // Catch-all
};
```

### Routing Flow
```
URL Change → Router Match → Component Load → Data Fetch → Render
     │            │             │             │           │
     ▼            ▼             ▼             ▼           ▼
/portfolio → PortfolioGallery → useEffect → loadProjects → ProjectGrid
```

### Navigation State Management
```javascript
// Active route detection
const useActiveRoute = () => {
  const location = useLocation();
  return location.pathname;
};

// Programmatic navigation
const navigate = useNavigate();
const handleProjectView = (projectId) => {
  navigate(`/project-detail-modal?id=${projectId}`);
};
```

## State Management

### State Architecture Layers
```
┌─────────────────────────────────────────────────────────────┐
│                      Global State                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Router    │ │    Theme    │ │    User     │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                      Page State                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Projects  │ │ Experience  │ │   Contact   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                    Component State                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │  UI State   │ │ Form State  │ │ Modal State │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### State Management Patterns
```javascript
// 1. Local State (Component Level)
const [isOpen, setIsOpen] = useState(false);

// 2. Shared State (Custom Hooks)
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};

// 3. Context State (Global)
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

// 4. URL State (Navigation)
const [searchParams, setSearchParams] = useSearchParams();
const projectId = searchParams.get('id');
```

## Build Architecture

### Build Pipeline
```
Source Code → Transpilation → Bundling → Optimization → Output
     │              │           │           │            │
     ▼              ▼           ▼           ▼            ▼
   React         Babel        Vite      Minification   dist/
TypeScript       SWC        Rollup      Tree Shaking  build/
  SCSS         PostCSS       ESM         Compression  static/
```

### Optimization Layers
```javascript
// Code Splitting
const LazyComponent = lazy(() => import('./Component'));

// Bundle Splitting
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});

// Asset Optimization
export default defineConfig({
  build: {
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    sourcemap: true
  }
});
```

## Deployment Architecture

### Deployment Pipeline
```
Git Push → CI/CD → Build → Test → Deploy → CDN → User
    │        │       │      │      │       │      │
    ▼        ▼       ▼      ▼      ▼       ▼      ▼
  GitHub   Netlify  Vite   Jest  Static   CDN   Browser
  GitLab   Vercel   Build  Tests  Files   Edge  Request
```

### Infrastructure Layers
```
┌─────────────────────────────────────────────────────────────┐
│                         CDN Layer                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │  Cloudflare │ │   AWS CF    │ │   Netlify   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                      Hosting Layer                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Netlify   │ │   Vercel    │ │    AWS S3   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                       Build Layer                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Vite      │ │   Docker    │ │   Node.js   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

## Performance Architecture

### Performance Optimization Strategy
```javascript
// 1. Code Splitting
const routes = [
  {
    path: '/portfolio',
    component: lazy(() => import('./PortfolioGallery'))
  }
];

// 2. Memoization
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);
  return <div>{processedData}</div>;
});

// 3. Virtualization (for large lists)
const VirtualizedList = ({ items }) => {
  return (
    <FixedSizeList height={400} itemCount={items.length} itemSize={50}>
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
};

// 4. Image Optimization
const OptimizedImage = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    onError={(e) => e.target.src = '/fallback.jpg'}
  />
);
```

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Bundle Size**: < 500kb (gzipped)

### Monitoring Architecture
```javascript
// Performance monitoring
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
  });
});

observer.observe({ entryTypes: ['largest-contentful-paint'] });
```

## Recent Architecture Updates (v2.0)

### Modern Design System Evolution

#### Color Palette Update
The application has transitioned to a modern purple-blue-pink gradient color scheme:

```css
Primary Colors:
- Primary: #667eea (Modern purple-blue)
- Accent: #f093fb (Modern pink)
- Gradient: linear-gradient(145deg, #667eea, #764ba2, #f093fb, #4facfe)
```

#### New Styling Utilities
```
Gradient System:
├── gradient-hero         // Animated background (15s infinite loop)
├── gradient-text         // Text with gradient fill
├── gradient-border       // Animated gradient borders
└── gradientShift         // Keyframe animation

Glassmorphism:
├── glass-effect         // Backdrop blur with transparency
├── Backdrop filters     // Modern blur effects
└── Semi-transparent UI  // RGBA-based backgrounds

Animations:
├── btn-glow            // Button hover glow animation
├── pulse-glow          // Pulsing shadow effect
├── float               // Floating dot animations
├── shine               // Rotating radial gradient
└── Custom scrollbar    // Gradient scrollbar styling
```

#### Typography Enhancements
- Extended Inter font family (weights: 300-900)
- Optimized letter-spacing for modern headings
- Enhanced readability on gradient backgrounds
- Smooth font rendering with antialiasing

#### Asset Management
**New Local Assets**:
- AWS logo (`public/assets/images/aws.png`)
- Databricks logo (`public/assets/images/databricks.png`)
- Barclays logo (`public/assets/images/barclays.jpg`)
- BIT Mesra logo (`public/assets/images/Bit_mesra.png`)
- Updated resume (`Prashaint_Kumar_Mishra_Mar25.pdf`)

**Profile Images**:
- `prashaint_profile2.jpg` - Main profile image with modern styling

### Component Updates

#### HeroSection Enhancements
```javascript
Key Changes:
├── Background: gradient-hero with animations
├── Text: White text on gradient background
├── Buttons: Modern styling with glow effects
├── Social Links: Glassmorphism effects
├── Profile Image: Decorative gradients + pulse glow
└── Floating Badge: Glass effect with availability status
```

#### Styling Philosophy
The architecture now follows a modern, visually engaging design philosophy:

1. **Visual Hierarchy**: Gradient backgrounds create depth
2. **Interactive Elements**: Smooth hover and glow effects
3. **Glassmorphism**: Modern transparency and blur
4. **Animations**: Subtle, continuous animations for engagement
5. **Performance**: CSS-based animations for optimal performance

### Performance Considerations

**Animation Performance**:
```javascript
// CSS-based animations (GPU accelerated)
- transform: translateY() ✓
- opacity: 0-1 ✓
- background-position ✓
- backdrop-filter ✓

// Avoided for performance
- width/height animations ✗
- top/left animations ✗
- filter (except backdrop-filter) ✗
```

**Optimization Strategies**:
- Use `will-change` for animated properties
- Limit `backdrop-filter` usage to essential elements
- Gradient animations use `background-position` for smoothness
- Pseudo-elements (`::before`, `::after`) for overlay effects

This architecture documentation provides a comprehensive view of how the portfolio application is structured and organized, making it easier for developers to understand and maintain the codebase.