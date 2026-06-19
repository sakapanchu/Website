// src/pages/ProjectDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample project data - in real app, fetch from API
  const projectsData = {
    1: {
      id: 1,
      title: "AI Platform for Government Intelligence",
      description: "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      category: "AI & Analytics",
      bgColor: "from-blue-600 to-indigo-700",
      details: {
        overview: "A comprehensive AI platform designed for government agencies to analyze vast amounts of data, identify patterns, and make informed decisions quickly.",
        technologies: ["Artificial Intelligence", "Machine Learning", "Big Data", "Analytics", "Python", "TensorFlow"],
        duration: "12 months",
        impact: "40% faster decision-making",
        features: [
          "Real-time data processing",
          "Predictive analytics",
          "Secure data handling",
          "Customizable dashboards",
          "Automated reporting"
        ],
        client: "Government Intelligence Agency",
        year: "2025"
      }
    },
    2: {
      id: 2,
      title: "Digital Banking Transformation",
      description: "Modern digital solutions for seamless banking experiences.",
      category: "FinTech",
      bgColor: "from-purple-600 to-pink-700",
      details: {
        overview: "End-to-end digital banking platform that provides seamless, secure, and personalized banking experiences across all channels.",
        technologies: ["React", "Node.js", "AWS", "Microservices", "GraphQL"],
        duration: "8 months",
        impact: "60% improved user satisfaction",
        features: [
          "Mobile-first design",
          "Biometric authentication",
          "Real-time transactions",
          "AI-powered insights",
          "Integrated payment systems"
        ],
        client: "Leading National Bank",
        year: "2025"
      }
    }
    // ... add more projects
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const projectData = projectsData[id];
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FFC80B] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Project not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-[#FFC80B] text-black rounded-full hover:bg-[#e6b40a]"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${project.bgColor} text-white py-20 px-4`}>
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Projects
          </button>
          <div className="inline-block px-4 py-1 bg-[#FFC80B] text-black text-sm font-bold rounded-full mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.details.overview}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#FFC80B]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-md sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-semibold text-gray-800">{project.details.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-800">{project.details.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Year</div>
                  <div className="font-semibold text-gray-800">{project.details.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Impact</div>
                  <div className="font-semibold text-[#FFC80B]">{project.details.impact}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-[#FFC80B] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-colors">
                Contact Us About This Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}