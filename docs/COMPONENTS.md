# Components Documentation

## Table of Contents
1. [Component Library Overview](#component-library-overview)
2. [UI Components](#ui-components)
3. [Layout Components](#layout-components)
4. [Form Components](#form-components)
5. [Navigation Components](#navigation-components)
6. [Modal Components](#modal-components)
7. [Page Components](#page-components)
8. [Utility Components](#utility-components)
9. [Component Patterns](#component-patterns)
10. [Styling Guidelines](#styling-guidelines)

## Component Library Overview

### Design System Architecture
```
Design System
├── Tokens (Colors, Typography, Spacing)
├── Base Components (Button, Input, Card)
├── Composite Components (Modal, Form, Navigation)
├── Layout Components (Grid, Container, Section)
└── Page Components (Home, Portfolio, About)
```

### Component Categories
- **Primitive Components**: Basic building blocks (Button, Input, Text)
- **Composite Components**: Complex functionality (Modal, Form, Table)
- **Layout Components**: Structure and positioning (Grid, Container, Section)
- **Page Components**: Full page implementations
- **Utility Components**: Helper functionality (ErrorBoundary, ScrollToTop)

## UI Components

### Button Component

**Location**: `src/components/ui/Button.jsx`

#### API Reference
```javascript
<Button
  variant="default"     // default | destructive | outline | secondary | ghost | link | success | warning | danger
  size="default"        // xs | sm | default | lg | xl | icon
  loading={false}       // boolean
  disabled={false}      // boolean
  fullWidth={false}     // boolean
  iconName="Download"   // Lucide icon name
  iconPosition="left"   // left | right
  asChild={false}       // boolean - render as child component
  onClick={handleClick} // function
>
  Button Text
</Button>
```

#### Variants
```javascript
// Primary action
<Button variant="default">Save Changes</Button>

// Destructive action
<Button variant="destructive">Delete Item</Button>

// Secondary action
<Button variant="outline">Cancel</Button>

// Ghost button
<Button variant="ghost">Learn More</Button>

// Icon only
<Button variant="ghost" size="icon" iconName="Search" />

// Loading state
<Button loading={isSubmitting}>
  {isSubmitting ? 'Saving...' : 'Save'}
</Button>
```

#### Styling
```css
/* Base styles */
.btn-base {
  @apply inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
}

/* Variant styles */
.btn-default {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
}

.btn-outline {
  @apply border border-input hover:bg-accent hover:text-accent-foreground;
}
```

### Input Component

**Location**: `src/components/ui/Input.jsx`

#### API Reference
```javascript
<Input
  type="text"           // text | email | password | number | tel | url
  label="Email Address" // string
  placeholder="Enter email"
  value={value}         // string
  onChange={handleChange}
  error={errors.email}  // string
  description="Help text"
  required={true}       // boolean
  disabled={false}      // boolean
  id="email-input"      // string
/>
```

#### Input Types
```javascript
// Text input
<Input
  label="Full Name"
  type="text"
  placeholder="John Doe"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// Email input with validation
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>

// Password input
<Input
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  description="Must be at least 8 characters"
/>

// Number input
<Input
  label="Age"
  type="number"
  min="18"
  max="100"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
```

### Select Component

**Location**: `src/components/ui/Select.jsx`

#### API Reference
```javascript
<Select
  options={options}     // Array of {value, label} objects
  value={selectedValue} // string | array (for multiple)
  onChange={handleChange}
  placeholder="Select option"
  multiple={false}      // boolean
  searchable={false}    // boolean
  clearable={false}     // boolean
  loading={false}       // boolean
  error={errors.field}  // string
  label="Select Project Type"
  required={true}       // boolean
/>
```

#### Usage Examples
```javascript
// Basic select
const projectTypes = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'design', label: 'UI/UX Design' }
];

<Select
  label="Project Type"
  options={projectTypes}
  value={selectedType}
  onChange={setSelectedType}
  placeholder="Choose project type"
/>

// Multi-select with search
<Select
  label="Technologies"
  options={techOptions}
  value={selectedTechs}
  onChange={setSelectedTechs}
  multiple
  searchable
  clearable
  placeholder="Select technologies"
/>

// Loading state
<Select
  label="Categories"
  options={categories}
  loading={isLoadingCategories}
  placeholder="Loading categories..."
/>
```

### Checkbox Component

**Location**: `src/components/ui/Checkbox.jsx`

#### API Reference
```javascript
<Checkbox
  checked={isChecked}    // boolean
  onChange={handleChange}
  label="Accept Terms"   // string
  description="I agree to the terms"
  error={errors.terms}   // string
  required={true}        // boolean
  disabled={false}       // boolean
  indeterminate={false}  // boolean
  size="default"         // sm | default | lg
/>
```

#### Usage Examples
```javascript
// Basic checkbox
<Checkbox
  checked={agreedToTerms}
  onChange={setAgreedToTerms}
  label="I agree to the Terms of Service"
  required
/>

// Checkbox group
<CheckboxGroup
  label="Select Skills"
  error={errors.skills}
  required
>
  <Checkbox
    checked={skills.includes('react')}
    onChange={(checked) => toggleSkill('react', checked)}
    label="React"
  />
  <Checkbox
    checked={skills.includes('vue')}
    onChange={(checked) => toggleSkill('vue', checked)}
    label="Vue.js"
  />
</CheckboxGroup>

// Indeterminate state (for "select all")
<Checkbox
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
  label="Select All"
/>
```

## Layout Components

### Header Component

**Location**: `src/components/ui/Header.jsx`

#### Features
- Responsive navigation with mobile hamburger menu
- Active route highlighting
- Smooth animations and transitions
- Logo and branding
- Accessible keyboard navigation

#### Usage
```javascript
// Header is automatically included in the app layout
// Navigation items are configured in the component
const navigationItems = [
  { label: 'Home', path: '/home-landing-page', icon: 'Home' },
  { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Briefcase' },
  { label: 'About', path: '/about-bio-section', icon: 'User' },
  { label: 'Experience', path: '/experience-timeline', icon: 'Clock' },
  { label: 'Contact', path: '/contact-form-page', icon: 'Mail' }
];
```

### Container Components

#### Grid System
```javascript
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-card p-6 rounded-lg">
      {item.content}
    </div>
  ))}
</div>

// Auto-fit grid
<div className="grid grid-cols-auto-fit-minmax-300px gap-4">
  {cards.map(card => <Card key={card.id} {...card} />)}
</div>
```

#### Section Wrapper
```javascript
const Section = ({ children, className, background = "default" }) => {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    gradient: "bg-gradient-to-br from-primary/5 via-background to-accent/5"
  };

  return (
    <section className={cn("py-16 lg:py-24", bgClasses[background], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
```

## Form Components

### ContactForm Component

**Location**: `src/pages/contact-form-page/components/ContactForm.jsx`

#### Features
- Real-time validation
- Loading states
- Success/error feedback
- Accessibility compliant
- Progressive enhancement

#### Form Structure
```javascript
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
    </form>
  );
};
```

### Form Validation Patterns
```javascript
// Real-time validation
const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback((name, value) => {
    const rule = validationRules[name];
    if (rule) {
      const error = rule(value, values);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [validationRules, values]);

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validate(name, value);
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    validate(name, values[name]);
  };

  return { values, errors, touched, handleChange, handleBlur };
};
```

## Navigation Components

### FilterBar Component

**Location**: Multiple locations (`src/pages/*/components/FilterBar.jsx`)

#### Features
- Category filtering
- Search functionality
- Sort options
- Responsive design
- Clear filters option

#### API Structure
```javascript
<FilterBar
  categories={categories}        // Array of category objects
  activeCategory={activeCategory}
  onCategoryChange={handleCategoryChange}
  searchQuery={searchQuery}
  onSearchChange={handleSearchChange}
  sortBy={sortBy}
  onSortChange={handleSortChange}
  filters={filters}              // Current filter state
  onClearFilters={handleClearFilters}
/>
```

### Pagination Component
```javascript
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  showPrevNext = true,
  showFirstLast = true 
}) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {showFirstLast && (
          <Button 
            variant="outline" 
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </Button>
        )}
        {showPrevNext && (
          <Button 
            variant="outline" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            iconName="ChevronLeft"
          >
            Previous
          </Button>
        )}
        
        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page => 
            page === 1 || 
            page === totalPages || 
            Math.abs(page - currentPage) <= 2
          )
          .map(page => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ))}
        
        {showPrevNext && (
          <Button 
            variant="outline" 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            iconName="ChevronRight"
            iconPosition="right"
          >
            Next
          </Button>
        )}
        {showFirstLast && (
          <Button 
            variant="outline" 
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </Button>
        )}
      </div>
      
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};
```

## Modal Components

### ProjectDetailModal Component

**Location**: `src/pages/project-detail-modal/index.jsx`

#### Features
- Full-screen and windowed modes
- Image gallery with navigation
- Project information display
- External links and actions
- Keyboard navigation (ESC to close)
- Backdrop click to close

#### Modal Structure
```javascript
const ProjectDetailModal = ({ isOpen, onClose, project, projects, onNavigateProject }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg overflow-hidden">
        <ProjectNavigation />
        <div className="flex">
          <ProjectImageGallery />
          <ProjectInfo />
        </div>
        <ProjectActions />
      </div>
    </div>
  );
};
```

### Modal Hook Pattern
```javascript
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const openModal = (modalData = null) => {
    setData(modalData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setData(null);
  };

  return {
    isOpen,
    data,
    openModal,
    closeModal
  };
};

// Usage
const { isOpen, data, openModal, closeModal } = useModal();
```

## Page Components

### HomePage Structure

**Location**: `src/pages/home-landing-page/index.jsx`

#### Component Breakdown
```javascript
const HomeLandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <SkillsOverview />
        <AboutPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};
```

#### HeroSection Component

**Location**: [src/pages/home-landing-page/components/HeroSection.jsx](src/pages/home-landing-page/components/HeroSection.jsx)

**Features** (Updated v2.0):
- Animated gradient background with modern color scheme
- Glassmorphism effects on social links and floating badge
- Modern button styling with glow effects
- Gradient text for name highlighting
- Profile image with decorative gradient elements and pulse glow
- Resume download functionality

```javascript
const HeroSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/prashaint' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/prashaint' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/prashaint44903' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/prashaint/?hl=en' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Prashaint_Kumar_Mishra_Mar25.pdf';
    link.download = 'Prashaint_Kumar_Mishra_Mar25.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Gradient Background with Shine Effects - Applied via CSS */}

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Prashaint Kumar Mishra
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mb-6">
                AVP - Senior Data Engineer, Barclays
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Seasoned Senior Data Engineer with 14+ years of hands-on experience...
              </p>
            </div>

            {/* CTA Buttons with Modern Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/portfolio-gallery">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 btn-glow shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm glass-effect"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links with Modern Styling */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group glass-effect"
                  aria-label={`Visit ${social?.name} profile`}
                >
                  <Icon
                    name={social?.icon}
                    size={20}
                    className="text-white group-hover:text-white transition-colors duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with Modern Effects */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Gradient Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-white/10 rounded-2xl transform rotate-3 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/10 rounded-2xl transform -rotate-3 backdrop-blur-sm"></div>

              {/* Main Image Container with Gradient Border */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] overflow-hidden rounded-2xl shadow-2xl pulse-glow">
                <Image
                  src="assets/images/prashaint_profile2.jpg"
                  alt="Prashaint Mishra - Senior Data Engineer"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge with Glassmorphism */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-lg p-4 shadow-xl border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-white/70">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} className="text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};
```

**Modern Styling Classes Used**:
- `.gradient-hero` - Animated multi-color gradient background
- `.glass-effect` - Glassmorphism with backdrop blur
- `.btn-glow` - Button hover glow animation
- `.pulse-glow` - Pulsing glow effect on profile image
- `.gradient-text` - Gradient text effect for name

### Portfolio Gallery Structure

**Location**: `src/pages/portfolio-gallery/index.jsx`

#### State Management
```javascript
const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(12);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;
    
    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completedDate) - new Date(a.completedDate);
        case 'oldest':
          return new Date(a.completedDate) - new Date(b.completedDate);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.completedDate) - new Date(a.completedDate);
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [allProjects, activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterBar {...filterProps} />
      <StatsSection projects={allProjects} />
      <ProjectGrid {...gridProps} />
      <ProjectDetailModal {...modalProps} />
    </div>
  );
};
```

## Utility Components

### AppIcon Component

**Location**: `src/components/AppIcon.jsx`

#### Features
- Centralized icon system using Lucide React
- Fallback handling for missing icons
- Size and color customization
- Consistent icon usage across the app

```javascript
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}) => {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    return <HelpCircle size={size} color="gray" strokeWidth={strokeWidth} className={className} {...props} />;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

// Usage examples
<Icon name="Download" size={20} className="mr-2" />
<Icon name="Github" size={24} color="#333" />
<Icon name="ChevronRight" strokeWidth={1.5} />
```

### AppImage Component

**Location**: `src/components/AppImage.jsx`

#### Features
- Automatic fallback for broken images
- Error handling and loading states
- Optimized image loading

```javascript
const Image = ({
  src,
  alt = "Image Name",
  className = "",
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    e.target.src = "/assets/images/no_image.png";
    onError?.(e);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};
```

### ErrorBoundary Component

**Location**: `src/components/ErrorBoundary.jsx`

#### Features
- Catches JavaScript errors in component tree
- Displays fallback UI
- Error reporting and logging
- Graceful error recovery

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to monitoring service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AlertTriangle" size={32} className="text-destructive" />
            </div>
            <h1 className="text-2xl font-medium text-foreground mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-base mb-6">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <Button
              onClick={() => window.location.reload()}
              iconName="RefreshCw"
              iconPosition="left"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Component Patterns

### Compound Component Pattern
```javascript
// Modal compound component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-background/80" onClick={onClose} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children }) => (
  <div className="flex items-center justify-between p-4 border-b">
    {children}
  </div>
);

Modal.Body = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

Modal.Footer = ({ children }) => (
  <div className="flex items-center justify-end p-4 border-t gap-2">
    {children}
  </div>
);

// Usage
<Modal isOpen={isOpen} onClose={onClose}>
  <Modal.Header>
    <h2>Modal Title</h2>
    <Button variant="ghost" size="icon" onClick={onClose}>
      <Icon name="X" />
    </Button>
  </Modal.Header>
  <Modal.Body>
    <p>Modal content</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={onClose}>Cancel</Button>
    <Button onClick={onSave}>Save</Button>
  </Modal.Footer>
</Modal>
```

### Render Props Pattern (Modern Hook Version)
```javascript
// Custom hook for data fetching
const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Usage in component
const ProjectList = () => {
  const { data: projects, loading, error } = useApiData('/api/projects');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

### Higher-Order Component Pattern
```javascript
// HOC for analytics tracking
const withAnalytics = (WrappedComponent, eventName) => {
  return (props) => {
    useEffect(() => {
      // Track component mount
      gtag('event', 'page_view', {
        page_title: eventName,
        page_location: window.location.href
      });
    }, []);

    const trackClick = (originalOnClick) => (event) => {
      gtag('event', 'click', {
        event_category: eventName,
        event_label: event.target.textContent
      });
      originalOnClick?.(event);
    };

    return (
      <WrappedComponent
        {...props}
        onClick={trackClick(props.onClick)}
      />
    );
  };
};

// Usage
const TrackedButton = withAnalytics(Button, 'cta_button');
```

## Styling Guidelines

### CSS Class Naming Convention
```javascript
// Component-specific classes
const componentClasses = {
  root: "portfolio-card",
  header: "portfolio-card__header",
  body: "portfolio-card__body",
  footer: "portfolio-card__footer"
};

// State classes
const stateClasses = {
  loading: "portfolio-card--loading",
  featured: "portfolio-card--featured",
  selected: "portfolio-card--selected"
};

// Utility classes
const utilityClasses = {
  hidden: "sr-only",
  truncate: "line-clamp-2",
  responsive: "responsive-image"
};
```

### Responsive Design Patterns
```css
/* Mobile-first responsive design */
.component {
  @apply w-full p-4;
  
  /* Tablet */
  @screen md {
    @apply p-6;
  }
  
  /* Desktop */
  @screen lg {
    @apply p-8;
  }
  
  /* Large desktop */
  @screen xl {
    @apply p-10;
  }
}

/* Container queries (when supported) */
@container (min-width: 400px) {
  .card {
    @apply grid-cols-2;
  }
}
```

### Component Variants System
```javascript
// Using class-variance-authority
const cardVariants = cva(
  "rounded-lg border transition-colors", // base styles
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        outline: "border-border bg-transparent",
        filled: "bg-primary text-primary-foreground",
      },
      size: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Usage in component
const Card = ({ variant, size, className, ...props }) => (
  <div 
    className={cn(cardVariants({ variant, size }), className)} 
    {...props} 
  />
);
```

This components documentation provides comprehensive information about all the UI components, their APIs, usage patterns, and styling guidelines used throughout the portfolio application.