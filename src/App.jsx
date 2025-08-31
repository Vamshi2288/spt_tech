import React, { useState } from 'react';

const SpoorthiTechnologies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Precision Die Casting",
      description: "High-precision aluminum and zinc die casting solutions for automotive and industrial applications.",
      features: ["Aluminum Die Casting", "Zinc Die Casting", "Multi-Cavity Tooling", "Secondary Operations"]
    },
    {
      title: "Automotive Components",
      description: "Specialized casting solutions for automotive industry including engine components and transmission parts.",
      features: ["Engine Blocks", "Transmission Cases", "Brake Components", "Suspension Parts"]
    },
    {
      title: "Industrial Casting",
      description: "Custom casting solutions for various industrial applications with superior quality and precision.",
      features: ["Pump Components", "Valve Bodies", "Housing Parts", "Mechanical Components"]
    },
    {
      title: "Tooling & Machining",
      description: "Complete tooling design and precision machining services to support casting operations.",
      features: ["Die Design", "CNC Machining", "Tool Maintenance", "Prototype Development"]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control and testing to ensure products meet the highest standards.",
      features: ["Dimensional Inspection", "Material Testing", "Surface Analysis", "Performance Testing"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored casting solutions designed to meet specific customer requirements and applications.",
      features: ["Design Consultation", "Material Selection", "Process Optimization", "Volume Production"]
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500K+", label: "Parts Manufactured" },
    { number: "50+", label: "OEM Partners" },
    { number: "99.8%", label: "Quality Rating" }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-800 opacity-5 select-none transform -rotate-12">
          SPOORTHI
        </div>
      </div>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-3 select-none transform rotate-12 mt-20">
          TECHNOLOGIES
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-90 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-orange-500">Spoorthi Technologies</h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#home" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                  <a href="#about" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">About</a>
                  <a href="#services" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                  <a href="#contact" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-orange-500 p-2"
                >
                  <div className="w-6 h-6 flex flex-col justify-center">
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-orange-500">About</a>
                <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Services</a>
                <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Precision Die Casting Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
                Leading manufacturer of high-quality aluminum and zinc die casting components for automotive and industrial applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
                  Request Quote
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-colors">
                  View Capabilities
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Excellence in Die Casting Since 1999
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Spoorthi Technologies is a leading manufacturer of precision die cast components, specializing in
                  aluminum and zinc casting for automotive and industrial applications. With state-of-the-art facilities
                  and advanced manufacturing processes, we deliver superior quality components that meet the most demanding specifications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">Q</div>
                    <h3 className="font-semibold text-white">Quality First</h3>
                    <p className="text-sm text-gray-400">ISO 9001:2015 Certified</p>
                  </div>
                  <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">P</div>
                    <h3 className="font-semibold text-white">Precision</h3>
                    <p className="text-sm text-gray-400">Advanced CNC Machining</p>
                  </div>
                  <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">I</div>
                    <h3 className="font-semibold text-white">Innovation</h3>
                    <p className="text-sm text-gray-400">Cutting-edge Technology</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Expertise</h3>
                <p className="text-gray-300 mb-6">
                  With over 25 years of experience in die casting, we specialize in producing complex,
                  high-precision components that meet stringent automotive and industrial standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Advanced Die Casting Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Automated Production Lines</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Stringent Quality Controls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Just-in-Time Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Manufacturing Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive die casting and manufacturing services designed to meet the most demanding industrial requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-black bg-opacity-70 rounded-xl p-8 hover:bg-opacity-90 transition-all border border-gray-700 hover:border-orange-500 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-orange-500 font-semibold hover:text-orange-400 transition-colors cursor-pointer">
                    Learn More →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Contact Us</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ready to discuss your die casting requirements? Our expert team is here to provide solutions for your manufacturing needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Manufacturing Facility</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-orange-500 mb-2">Head Office & Factory</h4>
                      <p className="text-gray-300">
                        Spoorthi Technologies Pvt Ltd<br />
                        Industrial Area, Peenya<br />
                        Bangalore, Karnataka 560058<br />
                        India
                      </p>
                    </div>

                    <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-orange-500 mb-2">Phone</h4>
                      <p className="text-white font-semibold text-lg">+91 80 2839 5678</p>
                      <p className="text-gray-400 text-sm">Available Mon-Sat 8AM-6PM IST</p>
                    </div>

                    <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-orange-500 mb-2">Email</h4>
                      <p className="text-white font-semibold text-lg">info@spoorthitech.com</p>
                      <p className="text-gray-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Department Contacts</h3>

                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-green-600">
                  <h4 className="font-bold text-white mb-2">Sales & Business Development</h4>
                  <p className="text-gray-400 mb-3">New project inquiries and quotations</p>
                  <p className="text-green-400 font-semibold">sales@spoorthitech.com</p>
                  <p className="text-green-400 font-semibold">+91 80 2839 5679</p>
                </div>

                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-blue-600">
                  <h4 className="font-bold text-white mb-2">Production & Quality</h4>
                  <p className="text-gray-400 mb-3">Manufacturing schedules and quality assurance</p>
                  <p className="text-blue-400 font-semibold">production@spoorthitech.com</p>
                  <p className="text-blue-400 font-semibold">+91 80 2839 5680</p>
                </div>

                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-purple-600">
                  <h4 className="font-bold text-white mb-2">Engineering & Design</h4>
                  <p className="text-gray-400 mb-3">Technical specifications and design consultation</p>
                  <p className="text-purple-400 font-semibold">engineering@spoorthitech.com</p>
                  <p className="text-purple-400 font-semibold">+91 80 2839 5681</p>
                </div>

                <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-lg border border-red-600">
                  <h4 className="font-bold text-white mb-2">Emergency Support</h4>
                  <p className="text-red-200 mb-3">Critical production issues and urgent support</p>
                  <p className="text-red-300 font-semibold text-lg">+91 98765 43210</p>
                  <p className="text-red-300 font-semibold">emergency@spoorthitech.com</p>
                  <p className="text-red-200 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-orange-100">Partner with Spoorthi Technologies for superior die casting solutions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-black bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-all border border-orange-400">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">Q</div>
                <h3 className="text-xl font-bold mb-2 text-white">Request Quote</h3>
                <p className="text-orange-100 mb-4">Get detailed pricing for your project</p>
                <div className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Get Quote
                </div>
              </div>

              <div className="text-center p-6 bg-black bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-all border border-orange-400">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">T</div>
                <h3 className="text-xl font-bold mb-2 text-white">Factory Tour</h3>
                <p className="text-orange-100 mb-4">Visit our state-of-the-art facility</p>
                <div className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Schedule Visit
                </div>
              </div>

              <div className="text-center p-6 bg-black bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-all border border-orange-400">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">S</div>
                <h3 className="text-xl font-bold mb-2 text-white">Sample Request</h3>
                <p className="text-orange-100 mb-4">Quality samples for evaluation</p>
                <div className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Request Samples
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Spoorthi Technologies</h3>
                <p className="text-gray-400 mb-6">
                  Leading manufacturer of precision die cast components for automotive and industrial applications.
                  Committed to quality, innovation, and customer satisfaction since 1999.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all cursor-pointer">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all cursor-pointer">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all cursor-pointer">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all cursor-pointer">
                    <span className="text-white font-bold">I</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-orange-500 transition-colors">Manufacturing</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Quality Certifications</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Resources</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="font-semibold text-white">Factory Location:</li>
                  <li>+91 80 2839 5678</li>
                  <li>info@spoorthitech.com</li>
                  <li className="mt-3">Peenya Industrial Area</li>
                  <li>Bangalore, Karnataka 560058</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2025 Spoorthi Technologies Pvt Ltd. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Quality Standards</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SpoorthiTechnologies;