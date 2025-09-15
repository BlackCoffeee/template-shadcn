# Frontend Development Plan - Sistem Kolam Renang Syariah

## 📋 Overview

Frontend development menggunakan Vite + React + ShadCN UI dengan struktur modular dan scalable untuk sistem manajemen kolam renang syariah dengan dukungan multicabang system.

## 🏗️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Library**: ShadCN UI + Tailwind CSS
- **State Management**: Zustand / Redux Toolkit
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod
- **Date/Time**: Day.js
- **Charts**: Recharts
- **Real-time**: Socket.io-client
- **Maps**: Google Maps API + Leaflet
- **Testing**: Vitest + React Testing Library

## 📁 File Hierarchy Rules

Setiap fitur harus mengikuti urutan hirarki file berikut:

```
Components → Hooks → Services → Pages → Routes
```

### 🔄 Implementation Flow

1. **Components** - Reusable UI components dengan ShadCN
2. **Hooks** - Custom hooks untuk business logic
3. **Services** - API calls dan data management
4. **Pages** - Page components dengan layout
5. **Routes** - Route configuration dan navigation

### 📁 File Structure Example

```
src/
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components
│   └── features/           # Feature-specific components
├── hooks/
│   ├── useAuth.ts
│   ├── useBooking.ts
│   └── usePayment.ts
├── services/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── booking.ts
│   │   └── payment.ts
│   └── socket.ts
├── pages/
│   ├── auth/
│   ├── admin/
│   ├── member/
│   └── staff/
├── stores/
│   ├── authStore.ts
│   ├── bookingStore.ts
│   └── paymentStore.ts
└── types/
    ├── auth.ts
    ├── booking.ts
    └── payment.ts
```

### 🎯 Benefits

- **Component Reusability**: ShadCN UI components yang konsisten
- **Type Safety**: TypeScript untuk type checking
- **Performance**: Vite untuk fast development dan build
- **Maintainability**: Struktur yang jelas dan modular
- **Scalability**: Easy to add new features
- **Developer Experience**: Hot reload dan fast refresh

## 📁 Structure

```
frontend/
├── phase-1/          # Project Setup & Core Infrastructure
│   ├── 01-template-adaptation.md
│   ├── 02-project-structure.md
│   ├── 03-environment-configuration.md
│   ├── 04-state-management.md
│   ├── 05-additional-dependencies.md
│   └── 06-multicabang-foundation.md
├── phase-2/          # Authentication & User Management
│   ├── 01-authentication-ui.md
│   ├── 02-google-sso-integration.md
│   ├── 03-role-based-routing.md
│   ├── 04-user-profile-ui.md
│   └── 05-guest-user-ui.md
├── phase-3/          # Booking System & Calendar
│   ├── 01-calendar-interface.md
│   ├── 02-booking-form.md
│   ├── 03-availability-system.md
│   ├── 04-booking-management.md
│   └── 05-booking-confirmation.md
├── phase-4/          # Payment System & Manual Payment
│   ├── 01-payment-methods.md
│   ├── 02-manual-payment.md
│   ├── 03-payment-verification.md
│   ├── 04-payment-history.md
│   └── 05-refund-system.md
├── phase-5/          # Data Master & Admin Dashboard
│   ├── 01-data-master.md
│   ├── 02-admin-dashboard.md
│   ├── 03-member-management.md
│   ├── 04-quota-system.md
│   └── 05-system-configuration.md
├── phase-6/          # Cafe System & Barcode Integration
│   ├── 01-cafe-menu.md
│   ├── 02-order-processing.md
│   ├── 03-barcode-integration.md
│   ├── 04-inventory-management.md
│   └── 05-cafe-analytics.md
├── phase-7/          # Dynamic Pricing & Promotional System
│   ├── 01-dynamic-pricing-config.md
│   ├── 02-promotional-campaigns.md
│   ├── 03-pricing-history.md
│   ├── 04-seasonal-pricing.md
│   ├── 05-member-discounts.md
│   └── 06-promotional-pricing.md
├── phase-8/          # Member Quota & Queue Management
│   ├── 01-member-quota-config.md
│   ├── 02-queue-management.md
│   ├── 03-member-expiry-tracking.md
│   ├── 04-auto-promotion-system.md
│   ├── 05-quota-dashboard.md
│   └── 06-queue-analytics.md
├── phase-9/          # Notification & Communication System
│   ├── 01-push-notifications.md
│   ├── 02-notification-templates.md
│   ├── 03-notification-scheduling.md
│   ├── 04-user-preferences.md
│   ├── 05-admin-communication.md
│   └── 06-notification-history.md
├── phase-10/         # Rating & Review System
│   ├── 01-rating-system.md
│   ├── 02-review-submission.md
│   ├── 03-review-management.md
│   ├── 04-review-moderation.md
│   ├── 05-review-analytics.md
│   └── 06-review-display.md
└── phase-11/         # Comprehensive Reporting System
    ├── 01-analytics-dashboard.md
    ├── 02-financial-reports.md
    ├── 03-operational-reports.md
    ├── 04-custom-report-builder.md
    ├── 05-automated-reporting.md
    └── 06-data-export.md
```

## 🎯 Development Phases

### Phase 1: Project Setup & Core Infrastructure (Week 1-2)

- Template adaptation
- Project structure setup
- Environment configuration
- State management setup
- Additional dependencies
- Multicabang system foundation

### Phase 2: Authentication & User Management (Week 3-4)

- Authentication UI components
- Google SSO integration
- Role-based routing
- User profile management
- Guest user interface

### Phase 3: Booking System & Calendar (Week 5-6)

- Calendar interface
- Booking forms
- Real-time availability
- Booking management
- Booking confirmation

### Phase 4: Payment System & Manual Payment (Week 7-8)

- Payment methods
- Manual payment
- Payment verification
- Payment history
- Refund system

### Phase 5: Data Master & Admin Dashboard (Week 9-10)

- Data master management
- Admin dashboard
- Member management
- Quota system
- System configuration

### Phase 6: Cafe System & Barcode Integration (Week 11-12)

- Cafe menu management
- Order processing
- Barcode integration
- Inventory management
- Cafe analytics

### Phase 7: Dynamic Pricing & Promotional System (Week 13-14)

- Dynamic pricing configuration
- Promotional campaigns
- Pricing history
- Seasonal pricing
- Member discounts

### Phase 8: Member Quota & Queue Management (Week 15-16)

- Member quota configuration
- Queue management
- Member expiry tracking
- Auto-promotion system
- Quota dashboard

### Phase 9: Notification & Communication System (Week 17-18)

- Push notifications
- Notification templates
- Notification scheduling
- User preferences
- Admin communication

### Phase 10: Rating & Review System (Week 19-20)

- Rating system
- Review submission
- Review management
- Review moderation
- Review analytics

### Phase 11: Comprehensive Reporting System (Week 21-22)

- Analytics dashboard
- Financial reports
- Operational reports
- Custom report builder
- Automated reporting

## 🚀 Getting Started

1. Clone repository
2. Install dependencies: `npm install`
3. Copy environment file: `cp .env.example .env`
4. Configure API endpoints
5. Start development server: `npm run dev`

## 📚 Documentation

Each phase contains detailed documentation split into individual files for better organization:

### Phase 1: Project Setup & Core Infrastructure

- [Template Adaptation](phase-1/01-template-adaptation.md) - Adaptasi template ShadCN yang sudah ada
- [Project Structure](phase-1/02-project-structure.md) - Struktur project yang direkomendasikan
- [Environment Configuration](phase-1/03-environment-configuration.md) - Konfigurasi environment variables
- [State Management](phase-1/04-state-management.md) - Setup Zustand state management
- [Additional Dependencies](phase-1/05-additional-dependencies.md) - Dependencies tambahan yang diperlukan
- [Multicabang Foundation](phase-1/06-multicabang-foundation.md) - Multicabang system foundation

### Phase 2: Authentication & User Management

- [Authentication UI](phase-2/01-authentication-ui.md) - Login/Register forms
- [Google SSO Integration](phase-2/02-google-sso-integration.md) - Google OAuth integration
- [Role-based Routing](phase-2/03-role-based-routing.md) - Protected routes
- [User Profile UI](phase-2/04-user-profile-ui.md) - Profile management interface
- [Guest User UI](phase-2/05-guest-user-ui.md) - Guest user interface

### Phase 3: Booking System & Calendar

- [Calendar Interface](phase-3/01-calendar-interface.md) - Calendar interface components
- [Booking Form](phase-3/02-booking-form.md) - Booking form components
- [Availability System](phase-3/03-availability-system.md) - Real-time availability system
- [Booking Management](phase-3/04-booking-management.md) - Booking management interface
- [Booking Confirmation](phase-3/05-booking-confirmation.md) - Booking confirmation system

### Phase 4: Payment System & Manual Payment

- [Payment Methods](phase-4/01-payment-methods.md) - Payment method components
- [Manual Payment](phase-4/02-manual-payment.md) - Manual payment processing
- [Payment Verification](phase-4/03-payment-verification.md) - Payment verification system
- [Payment History](phase-4/04-payment-history.md) - Payment history tracking
- [Refund System](phase-4/05-refund-system.md) - Refund processing system

### Phase 5: Data Master & Admin Dashboard

- [Data Master](phase-5/01-data-master.md) - Data master management interface
- [Admin Dashboard](phase-5/02-admin-dashboard.md) - Admin dashboard components
- [Member Management](phase-5/03-member-management.md) - Member management interface
- [Quota System](phase-5/04-quota-system.md) - Quota management system
- [System Configuration](phase-5/05-system-configuration.md) - System configuration interface

### Phase 6: Cafe System & Barcode Integration

- [Cafe Menu](phase-6/01-cafe-menu.md) - Cafe menu management interface
- [Order Processing](phase-6/02-order-processing.md) - Order processing system
- [Barcode Integration](phase-6/03-barcode-integration.md) - Barcode scanning integration
- [Inventory Management](phase-6/04-inventory-management.md) - Inventory management system
- [Cafe Analytics](phase-6/05-cafe-analytics.md) - Cafe analytics dashboard

### Phase 7: Dynamic Pricing & Promotional System

- [Dynamic Pricing Config](phase-7/01-dynamic-pricing-config.md) - Dynamic pricing configuration
- [Promotional Campaigns](phase-7/02-promotional-campaigns.md) - Promotional campaign management
- [Pricing History](phase-7/03-pricing-history.md) - Pricing history tracking
- [Seasonal Pricing](phase-7/04-seasonal-pricing.md) - Seasonal pricing management
- [Member Discounts](phase-7/05-member-discounts.md) - Member discount system
- [Promotional Pricing](phase-7/06-promotional-pricing.md) - Promotional pricing system

### Phase 8: Member Quota & Queue Management

- [Member Quota Config](phase-8/01-member-quota-config.md) - Member quota configuration
- [Queue Management](phase-8/02-queue-management.md) - Queue management system
- [Member Expiry Tracking](phase-8/03-member-expiry-tracking.md) - Member expiry tracking
- [Auto-promotion System](phase-8/04-auto-promotion-system.md) - Auto-promotion system
- [Quota Dashboard](phase-8/05-quota-dashboard.md) - Quota dashboard interface
- [Queue Analytics](phase-8/06-queue-analytics.md) - Queue analytics system

### Phase 9: Notification & Communication System

- [Push Notifications](phase-9/01-push-notifications.md) - Push notification system
- [Notification Templates](phase-9/02-notification-templates.md) - Notification template system
- [Notification Scheduling](phase-9/03-notification-scheduling.md) - Notification scheduling system
- [User Preferences](phase-9/04-user-preferences.md) - User notification preferences
- [Admin Communication](phase-9/05-admin-communication.md) - Admin communication system
- [Notification History](phase-9/06-notification-history.md) - Notification history tracking

### Phase 10: Rating & Review System

- [Rating System](phase-10/01-rating-system.md) - Rating system components
- [Review Submission](phase-10/02-review-submission.md) - Review submission system
- [Review Management](phase-10/03-review-management.md) - Review management interface
- [Review Moderation](phase-10/04-review-moderation.md) - Review moderation system
- [Review Analytics](phase-10/05-review-analytics.md) - Review analytics dashboard
- [Review Display](phase-10/06-review-display.md) - Review display system

### Phase 11: Comprehensive Reporting System

- [Analytics Dashboard](phase-11/01-analytics-dashboard.md) - Analytics dashboard interface
- [Financial Reports](phase-11/02-financial-reports.md) - Financial reporting system
- [Operational Reports](phase-11/03-operational-reports.md) - Operational reporting system
- [Custom Report Builder](phase-11/04-custom-report-builder.md) - Custom report builder
- [Automated Reporting](phase-11/05-automated-reporting.md) - Automated reporting system
- [Data Export](phase-11/06-data-export.md) - Data export system

Each documentation file includes:

- Component specifications
- API integration details
- UI/UX requirements
- Testing procedures
- Success criteria

## 🎨 Design System

### ShadCN UI Components

- **Button**: Primary, secondary, outline, ghost variants
- **Input**: Text, email, password, number inputs
- **Card**: Container components
- **Dialog**: Modal dialogs
- **Form**: Form components with validation
- **Table**: Data tables
- **Calendar**: Date picker components
- **Toast**: Notification system

### Color Palette

- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#6B7280)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Background**: White (#FFFFFF)
- **Surface**: Gray-50 (#F9FAFB)

### Typography

- **Heading 1**: 32px, font-weight 700
- **Heading 2**: 24px, font-weight 600
- **Heading 3**: 20px, font-weight 600
- **Body**: 16px, font-weight 400
- **Caption**: 14px, font-weight 400
- **Small**: 12px, font-weight 400

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🏢 Multicabang System Architecture

### Branch Management

- **Branch Selection**: Location-based branch selection
- **Cross-Branch Booking**: Book across multiple branches
- **Branch-Specific Configuration**: Each branch has unique settings
- **Centralized Control**: Admin can manage all branches

### Cross-Branch Features

- **Location Services**: Google Maps integration
- **Branch Analytics**: Per-branch performance tracking
- **Cross-Branch Reports**: Comparative analytics
- **Branch Isolation**: Data separation with integration

### Branch State Management

- **Branch Context**: Current branch selection
- **Branch-Specific Data**: Isolated data per branch
- **Cross-Branch Sync**: Data synchronization
- **Branch Switching**: Seamless branch transitions

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries
- Use proper naming conventions

### Component Structure

```tsx
// Component example
interface ComponentProps {
    title: string
    onAction: () => void
}

export const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
    return (
        <div className='component-container'>
            <h2>{title}</h2>
            <Button onClick={onAction}>Action</Button>
        </div>
    )
}
```

### API Integration

```tsx
// API service example
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const authService = {
    login: (credentials: LoginCredentials) =>
        api.post('/auth/login', credentials),
    logout: () => api.post('/auth/logout'),
}
```

## 🧪 Testing Strategy

- **Unit Tests**: Component testing dengan React Testing Library
- **Integration Tests**: API integration testing
- **E2E Tests**: User flow testing dengan Playwright
- **Visual Tests**: Component visual regression testing

## 📦 Build & Deployment

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Test**: `npm run test`
- **Lint**: `npm run lint`

## 🔗 Backend Integration

Frontend ini terintegrasi dengan backend API yang sudah didokumentasikan di folder `backend/docs/api/`. Setiap endpoint API memiliki dokumentasi lengkap untuk memudahkan integrasi frontend.

### API Base URL

```
Development: http://localhost:8000/api/v1
Production: https://api.raujanpool.com/api/v1
```

### Authentication

Semua request ke API memerlukan Bearer token:

```tsx
const token = localStorage.getItem('auth_token')
api.defaults.headers.common['Authorization'] = `Bearer ${token}`
```

## 📞 Support

Untuk pertanyaan atau dukungan teknis:

- **Issues**: GitHub Issues
- **Email**: support@raujanpool.com
- **Documentation**: Lihat file-file di folder ini

---

**Last updated**: September 2025  
**Version**: 1.0.0  
**Status**: Development Ready ✅
