// src/pages/ProjectsOverview.jsx
import { useNavigate } from 'react-router-dom';

export default function ProjectsOverview() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "AI Platform for Government Intelligence",
      description: "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      category: "AI & Analytics",
      bgColor: "from-blue-600 to-indigo-700",
      image: "/images/project-gov.jpg",
      year: "2025"
    },
    {
      id: 2,
      title: "Digital Banking Transformation",
      description: "Modern digital solutions for seamless banking experiences.",
      category: "FinTech",
      bgColor: "from-purple-600 to-pink-700",
      image: "/images/project-banking.jpg",
      year: "2025"
    },
    {
      id: 3,
      title: "Omni-channel Retail Platform",
      description: "Unified commerce experiences across all touchpoints.",
      category: "Retail",
      bgColor: "from-green-600 to-teal-700",
      image: "/images/project-retail.jpg",
      year: "2024"
    },
    {
      id: 4,
      title: "Telemedicine & Patient Portal",
      description: "Connecting patients and doctors through technology.",
      category: "Healthcare",
      bgColor: "from-red-600 to-orange-700",
      image: "/images/project-health.jpg",
      year: "2024"
    },
    {
      id: 5,
      title: "ERP & Workflow Automation",
      description: "Streamlined operations for better productivity at scale.",
      category: "Enterprise",
      bgColor: "from-indigo-600 to-blue-800",
      image: "/images/project-erp.jpg",
      year: "2024"
    },
      {
      id: 6,
      title: "Smart City IoT Platform",
      description: "Connected infrastructure solutions for sustainable urban development.",
      category: "IOT / SMART",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Projects</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that drive real impact across industries.
          </p>
          <div className="w-20 h-1 bg-[#FFC80B] mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className={`h-48 bg-gradient-to-r ${project.bgColor} flex items-center justify-center relative`}>
                <span className="text-5xl opacity-20">📊</span>
                <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-xs">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#FFC80B]/20 text-[#FFC80B] text-xs font-bold rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FFC80B] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="text-[#FFC80B] font-semibold hover:text-[#e6b40a] transition-colors flex items-center gap-2">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-300 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}