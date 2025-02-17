import React, { useState } from 'react';
import {
  Layout,
  Video,
  PenTool,
  LineChart,
  Plus,
  ChevronDown,
  GitBranch,
  Briefcase,
  X,
  Upload,
  ChevronDown as ChevronDownIcon,
  Sparkles
} from 'lucide-react';

function App() {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [portfolioForm, setPortfolioForm] = useState({
    name: '',
    category: '',
    description: ''
  });

  const categories = [
    "Residential",
    "Commercial",
    "Urban Planning",
    "Interior Design",
    "Landscape Architecture"
  ];

  const templates = [
    {
      name: "Minimalist Showcase",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Clean and modern layout for elegant presentations."
    },
    {
      name: "Urban Aesthetic",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      description: "Perfect for large-scale projects with bold visuals."
    },
    {
      name: "Classic Blueprint",
      image: "https://images.unsplash.com/photo-1574359411659-11a4a7b6b0ad",
      description: "Blueprint-style design for a technical touch."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPortfolioForm({
      ...portfolioForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold">DesignHub</span>
            </div>
            
            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowPortfolioModal(!showPortfolioModal)}
                  className="flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Portfolio
                </button>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowQuickLinks(!showQuickLinks)}
                  className="flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
                >
                  Quick Links
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {showQuickLinks && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <GitBranch className="h-4 w-4 mr-2" />
                        Version Control System
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Project Management
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Create Portfolio Modal */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-200 p-4 overflow-y-auto">
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-xl w-full max-w-[560px] shadow-xl transition-all duration-200 ease-out my-8">
              <div className="p-5 sm:p-6 flex flex-col gap-4">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-bold text-gray-800">Create Your Portfolio</h2>
                  <button 
                    onClick={() => setShowPortfolioModal(false)}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="E.g., Modern Residential Designs"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={portfolioForm.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                        value={portfolioForm.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Project Images
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="images" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                            <span>Upload files</span>
                            <input
                              id="images"
                              name="images"
                              type="file"
                              className="sr-only"
                              multiple
                              accept=".jpg,.png,.jpeg"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Describe your project, key highlights, and unique design elements."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={portfolioForm.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Templates Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose a Portfolio Template</h3>
                  
                  {/* AI Template Option */}
                  <div className="mb-4">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">Create with AI</span>
                    </button>
                    <p className="text-sm text-gray-500 mt-2 text-center">Let AI generate a unique portfolio layout based on your content</p>
                  </div>

                  {/* Template Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[200px] overflow-y-auto pr-2">
                    {templates.map((template) => (
                      <div
                        key={template.name}
                        className="group cursor-pointer transition-all hover:scale-102"
                      >
                        <div className="relative">
                          <img
                            src={template.image}
                            alt={template.name}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg" />
                        </div>
                        <h4 className="mt-2 text-sm font-medium text-gray-900">{template.name}</h4>
                        <p className="text-xs text-gray-500">{template.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setShowPortfolioModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-[#4A90E2] hover:bg-[#357ABD] rounded-md transition-colors"
                  >
                    Create Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Elevate Your Design Practice
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The ultimate platform for architects, interior designers, and urban planners to showcase their work and connect with clients.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Video Showcase</h3>
            <p className="text-gray-600">Create and share compelling video content of your projects in both short and long formats.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <PenTool className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Creator Tools</h3>
            <p className="text-gray-600">Professional tools for video creation and comprehensive analytics dashboard.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">Track your content performance with detailed insights and metrics.</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trending in Your Domain</h2>
            <p className="mt-4 text-lg text-gray-600">Discover the latest trends and inspirations in architecture and design.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Video Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern Architecture"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Modern Minimalism in Architecture</h3>
                <p className="text-gray-600">Exploring the beauty of minimalist design in modern architecture.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                alt="Interior Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Sustainable Interior Design</h3>
                <p className="text-gray-600">Incorporating eco-friendly materials in interior spaces.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507149833265-60c372daea22"
                alt="Urban Planning"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Future of Urban Spaces</h3>
                <p className="text-gray-600">Innovative approaches to urban planning and development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;