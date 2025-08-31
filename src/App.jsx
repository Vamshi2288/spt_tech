import React, { useState } from 'react';
import { Phone, Mail, MapPin, Users, Target, Award, ChevronRight, Menu, X } from 'lucide-react';

const EnterpriseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Digital Transformation",
      description: "Transform your business with cutting-edge digital solutions and strategic technology implementation.",
      features: ["Cloud Migration", "Process Automation", "Digital Strategy", "Legacy System Modernization"]
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and industry requirements.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive cybersecurity solutions and risk management.",
      features: ["Security Assessment", "Threat Monitoring", "Compliance Management", "Incident Response"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to accelerate your business growth.",
      features: ["AWS/Azure Migration", "Cloud Architecture", "DevOps Services", "Container Solutions"]
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Technology Strategy", "System Integration", "Performance Optimization", "IT Governance"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Enterprise Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">TechCorp Solutions</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-blue-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Solutions for Modern Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering organizations with cutting-edge technology solutions, strategic consulting, and innovative digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Enterprise Innovation Since 2009
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechCorp Solutions is a premier enterprise technology company specializing in digital transformation,
                custom software development, and strategic IT consulting. We partner with Fortune 500 companies and
                growing enterprises to deliver innovative solutions that drive business success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-sm text-gray-600">200+ certified professionals</p>
                </div>
                <div className="text-center p-4">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Results Driven</h3>
                  <p className="text-sm text-gray-600">Measurable business outcomes</p>
                </div>
                <div className="text-center p-4">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Industry Leader</h3>
                  <p className="text-sm text-gray-600">Award-winning solutions</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower businesses through innovative technology solutions that drive growth,
                efficiency, and competitive advantage in the digital era.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in enterprise technology transformation,
                helping organizations navigate and thrive in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive enterprise solutions designed to accelerate your business transformation and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Contact our expert team to discuss your enterprise technology needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@techcorpsolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Business District, Suite 500<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-2">24/7 Critical Support Hotline</p>
                <p className="text-blue-600 font-semibold">+1 (555) 911-TECH</p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Multiple Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">Sales Inquiries</h4>
                  <p className="text-gray-600 mb-3">Interested in our enterprise solutions?</p>
                  <p className="text-blue-600 font-semibold">sales@techcorpsolutions.com</p>
                  <p className="text-blue-600 font-semibold">+1 (555) 123-SALE</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                  <p className="text-gray-600 mb-3">Need help with existing services?</p>
                  <p className="text-green-600 font-semibold">support@techcorpsolutions.com</p>
                  <p className="text-green-600 font-semibold">+1 (555) 456-HELP</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-gray-900 mb-2">Partnership Opportunities</h4>
                  <p className="text-gray-600 mb-3">Explore strategic partnerships</p>
                  <p className="text-purple-600 font-semibold">partners@techcorpsolutions.com</p>
                  <p className="text-purple-600 font-semibold">+1 (555) 789-PART</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-gray-900 mb-2">Media & Press</h4>
                  <p className="text-gray-600 mb-3">Press inquiries and media relations</p>
                  <p className="text-orange-600 font-semibold">media@techcorpsolutions.com</p>
                  <p className="text-orange-600 font-semibold">+1 (555) 321-NEWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100">Choose the best way to connect with our team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-700 rounded-xl">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
              <p className="text-blue-100 mb-4">Book a consultation with our experts</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>

            <div className="text-center p-6 bg-blue-700 rounded-xl">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Get detailed project information</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Email
              </button>
            </div>

            <div className="text-center p-6 bg-blue-700 rounded-xl">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Request Proposal</h3>
              <p className="text-blue-100 mb-4">Get a customized solution proposal</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">TechCorp Solutions</h3>
              <p className="text-gray-300 mb-4">
                Transforming businesses through innovative technology solutions and strategic consulting services.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">F</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+1 (555) 123-4567</li>
                <li>contact@techcorpsolutions.com</li>
                <li>123 Business District<br />New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechCorp Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnterpriseWebsite;