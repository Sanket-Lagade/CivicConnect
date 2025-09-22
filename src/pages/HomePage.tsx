import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Camera, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  MessageCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Connect Your Community
                <span className="block text-blue-200">Build Better Cities</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Report civic issues, track progress, and work together with local authorities 
                to create positive change in your neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/report"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <Camera className="h-5 w-5" />
                  <span>Report an Issue</span>
                </Link>
                <Link
                  to="#features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <h3 className="text-2xl font-bold">1,247</h3>
                    <p className="text-blue-200">Issues Reported</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <h3 className="text-2xl font-bold">892</h3>
                    <p className="text-blue-200">Issues Resolved</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center col-span-2">
                    <h3 className="text-2xl font-bold">72%</h3>
                    <p className="text-blue-200">Resolution Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How CivicConnect Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy for citizens to report issues and for administrators 
              to manage them efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Report Issues</h3>
              <p className="text-gray-600">
                Take a photo, add a description, and submit your civic concern with automatic location detection.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Track Progress</h3>
              <p className="text-gray-600">
                Monitor the status of your reported issues and receive updates as they're addressed.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">See Results</h3>
              <p className="text-gray-600">
                Watch as your community improves through collaborative civic engagement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Built for Communities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">Issues are routed directly to the appropriate departments for quick action.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location Aware</h4>
                    <p className="text-gray-600">GPS integration ensures accurate location data for every reported issue.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Assistant</h4>
                    <p className="text-gray-600">Get help from our AI chatbot for guidance on reporting different types of issues.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h4>
              <p className="text-gray-600">
                View all reported issues on an interactive map to see what's happening in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of citizens who are already using CivicConnect to improve their communities. 
            Your voice matters, and every issue reported brings us one step closer to better cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/report"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Report Your First Issue</span>
            </Link>
            <Link
              to="/admin/login"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;