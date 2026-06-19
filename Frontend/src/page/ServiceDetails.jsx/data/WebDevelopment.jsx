// Feature Icons
import WebPerformanceIcon from '../../../assets/features/web/performance.png';
import WebScalableIcon from '../../../assets/features/web/scalable.png';
import WebSecurityIcon from '../../../assets/features/web/security.png';
import WebResponsiveIcon from '../../../assets/features/web/responsive.png';
import WebEcommerceIcon from '../../../assets/features/web/ecommerce.png';
import WebSeoIcon from '../../../assets/features/web/seo.png';

// Tech Icons
import ReactIcon from '../../../assets/tech/react.png';
import NextJsIcon from '../../../assets/tech/nextjs.png';
import NodeJsIcon from '../../../assets/tech/nodejs.png';
import LaravelIcon from '../../../assets/tech/laravel.png';
import AwsIcon from '../../../assets/tech/aws.png';
import DockerIcon from '../../../assets/tech/docker.png';
import PythonIcon from '../../../assets/tech/vuejs.png';
import MongoIcon from '../../../assets/tech/mongoDB.png';

// Process Icons
import DiscoveryIcon from '../../../assets/process/discovery.png';
import PlanningIcon from '../../../assets/process/planning.png';
import DevelopmentIcon from '../../../assets/process/development.png';
import LaunchIcon from '../../../assets/process/launch.png';

// Service Images
import WebHeroImage from '../../../assets/web-hero.png';
// import WebIconImage from '../../../assets/services/web-icon.png';

// Project Images
import EcommerceProjectImage from '../../../assets/RecentProjects/ecommerce.png';
import BankingProjectImage from '../../../assets/RecentProjects/banking.png';

// CTA Background
import CtaBgImage from '../../../assets/web-Cta.png';

export const webDevelopmentData = {
  id: "web-development",
  slug: "web-development",
  title: "Web Development",
  tagline: "Custom website solutions, e-commerce platforms, and web applications with cutting-edge technology.",
  description: "We specialize in creating powerful, scalable web solutions that drive business growth. Our expert team combines technical excellence with creative design to deliver exceptional results.",
  heroImage: WebHeroImage,
  // icon: WebIconImage,
  badge: "OUR SERVICES",
  buttonText: "Request a Quote",
  buttonSecondaryText: "Talk to an Expert",
  ctaBg: CtaBgImage,
  
  features: [
    { title: "High Performance", description: "Optimized for speed and efficiency", icon: WebPerformanceIcon },
    { title: "Scalable Architecture", description: "Built to grow with your business", icon: WebScalableIcon },
    { title: "Security First", description: "Enterprise-grade security measures", icon: WebSecurityIcon },
    { title: "Responsive Design", description: "Perfect on all devices", icon: WebResponsiveIcon },
    { title: "E-commerce Ready", description: "Built for shopping features", icon: WebEcommerceIcon },
    { title: "SEO Optimized", description: "Better search visibility", icon: WebSeoIcon }
  ],
  
  featuresList: [
    "Custom web application development",
    "Progressive Web Apps (PWAs)",
    "Cloud-native applications",
    "E-commerce solutions and integrations",
    "API development and integration",
    "Performance optimization"
  ],
  
  techStack: [
    { name: "React", icon: ReactIcon, color: "#3B82F6" },
    { name: "Next.js", icon: NextJsIcon, color: "#111827" },
    { name: "Node.js", icon: NodeJsIcon, color: "#16A34A" },
    { name: "Laravel", icon: LaravelIcon, color: "#EF4444" },
    { name: "AWS", icon: AwsIcon, color: "#F97316" },
    { name: "Docker", icon: DockerIcon, color: "#2563EB" },
    { name: "Python", icon: PythonIcon, color: "#CA8A04" },
    { name: "MongoDB", icon: MongoIcon, color: "#1D4ED8" }
  ],
  
  process: [
    { step: "01", title: "Discovery", description: "Understanding your requirements and business goals", icon: DiscoveryIcon },
    { step: "02", title: "Planning", description: "Creating detailed technical specifications and roadmap", icon: PlanningIcon },
    { step: "03", title: "Development", description: "Building your solution with agile methodology", icon: DevelopmentIcon },
    { step: "04", title: "Launch", description: "Deployment and continuous support", icon: LaunchIcon }
  ],
  
  recentProjects: [
    {
      title: "E-commerce Platform",
      category: "FASHION RETAILER",
      description: "Built a scalable e-commerce solution with advanced features for high-volume sales.",
      image: EcommerceProjectImage
    },
    {
      title: "Banking Dashboard",
      category: "FINANCIAL INSTITUTION",
      description: "Developed a secure banking portal with real-time analytics and transaction tracking.",
      image: BankingProjectImage
    }
  ],
  
  ctaTitle: "Web Development Project?",
  ctaDescription: "Let's transform your ideas into reality with our expert web development services.",
  ctaButtonText: "Get Started",
  ctaButtonSecondary: "View Portfolio"
};