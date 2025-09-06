# 💻 Development Guide

Panduan lengkap untuk development menggunakan Template Shadcn.

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm atau yarn
- Git
- Code editor (VS Code recommended)

### Initial Setup
```bash
# Clone repository
git clone https://github.com/your-repo/template-shadcn.git
cd template-shadcn

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development server
npm run dev
```

## 🏗️ Project Architecture

### Folder Structure
```
src/
├── components/          # Reusable components
│   ├── ui/             # Base UI components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   ├── navigation/     # Navigation components
│   └── layouts/        # Layout components
├── pages/              # Page components
├── router/             # Routing configuration
├── store/              # State management
├── types/              # TypeScript type definitions
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

### Code Organization

#### Components
- **Atomic Design**: Components organized by complexity
- **Single Responsibility**: Each component has one purpose
- **Reusability**: Components designed for reuse

#### State Management
- **Zustand**: Lightweight state management
- **Local State**: React hooks for component state
- **Global State**: Zustand stores for app-wide state

#### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: For theme customization
- **Responsive Design**: Mobile-first approach

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
# ... your code changes ...

# Test changes
npm run dev

# Run tests
npm run test

# Lint code
npm run lint

# Commit changes
git add .
git commit -m "feat: add your feature"

# Push to remote
git push origin feature/your-feature-name
```

### 2. Code Quality
```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Build check
npm run build
```

### 3. Testing
```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Coding Standards

### TypeScript
- **Strict Mode**: Enabled for type safety
- **Interface First**: Define interfaces before implementation
- **Type Exports**: Export types for reuse
- **No Any**: Avoid `any` type

```tsx
// Good
interface UserProps {
  name: string
  email: string
  age?: number
}

// Bad
const user: any = { name: 'John' }
```

### React Best Practices
- **Functional Components**: Use function components
- **Hooks**: Use React hooks for state and effects
- **Props Interface**: Define props interface
- **Memo**: Use React.memo for performance

```tsx
// Good
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Bad
export const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
```

### CSS/Styling
- **Tailwind Classes**: Use Tailwind utility classes
- **CSS Variables**: For theme values
- **Responsive**: Mobile-first responsive design
- **Consistent**: Use design system tokens

```tsx
// Good
<div className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-gray-800">
  <div className="w-full md:w-1/2">Content</div>
</div>

// Bad
<div style={{ display: 'flex', padding: '16px' }}>Content</div>
```

## 🧪 Testing Strategy

### Unit Testing
- **Jest**: Testing framework
- **React Testing Library**: Component testing
- **MSW**: API mocking

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Integration Testing
- **User Flows**: Test complete user journeys
- **API Integration**: Test API interactions
- **State Management**: Test state changes

### E2E Testing
- **Playwright**: End-to-end testing
- **Critical Paths**: Test main user flows
- **Cross-browser**: Test in multiple browsers

## 🔍 Debugging

### Development Tools
- **React DevTools**: Component inspection
- **Redux DevTools**: State debugging
- **Network Tab**: API debugging
- **Console**: Error logging

### Common Issues

#### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run type-check
```

#### Runtime Errors
```tsx
// Use Error Boundary
import { ErrorBoundary } from '@/components/ErrorBoundary'

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

#### Performance Issues
```tsx
// Use React.memo for expensive components
export const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>
})

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])
```

## 🚀 Performance Optimization

### Code Splitting
```tsx
// Lazy load components
const LazyComponent = React.lazy(() => import('./LazyComponent'))

// Use with Suspense
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### Bundle Optimization
```tsx
// Tree shaking
import { Button } from '@/components/ui/button' // Good
import * as UI from '@/components/ui' // Bad

// Dynamic imports
const loadData = async () => {
  const { fetchData } = await import('./utils')
  return fetchData()
}
```

### Image Optimization
```tsx
// Use optimized images
import { Image } from '@/components/ui/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={300}
  height={200}
  loading="lazy"
/>
```

## 📦 Build Process

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Build Analysis
```bash
npm run build:analyze
```

## 🔄 CI/CD Pipeline

### Pre-commit Hooks
- **Linting**: ESLint checks
- **Formatting**: Prettier formatting
- **Type Checking**: TypeScript validation
- **Testing**: Unit tests

### GitHub Actions
```yaml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## 📚 Best Practices

### Code Organization
1. **Single Responsibility**: One component, one purpose
2. **Composition**: Compose complex components from simple ones
3. **Separation of Concerns**: Separate logic from presentation
4. **DRY Principle**: Don't repeat yourself

### Performance
1. **Lazy Loading**: Load components when needed
2. **Memoization**: Cache expensive calculations
3. **Virtual Scrolling**: For large lists
4. **Image Optimization**: Use appropriate formats

### Security
1. **Input Validation**: Validate all user inputs
2. **XSS Prevention**: Sanitize user content
3. **CSRF Protection**: Use CSRF tokens
4. **Environment Variables**: Never commit secrets

### Accessibility
1. **Semantic HTML**: Use proper HTML elements
2. **ARIA Labels**: Add accessibility labels
3. **Keyboard Navigation**: Support keyboard users
4. **Screen Readers**: Test with screen readers

## 🆘 Getting Help

### Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Community
- [GitHub Issues](https://github.com/your-repo/template-shadcn/issues)
- [Discord Community](https://discord.gg/your-community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react)

---

**Ready to start?** Check out [Getting Started](../getting-started.md) or [Components Documentation](../components/).
