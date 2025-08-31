import React, { useState } from 'react';

const SpoorthiTechnologies = () => {
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
                <h1 className="text-2xl font-bold text-blue-700">Spoorthi Technologies</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-700 p-2"
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
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-700">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-blue-700">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-blue-700">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-blue-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering businesses with innovative technology solutions, strategic consulting, and comprehensive digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
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
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
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
                Leading Technology Innovation Since 2009
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Spoorthi Technologies is a premier enterprise technology company specializing in digital transformation,
                custom software development, and strategic IT consulting. We partner with businesses across industries
                to deliver innovative solutions that drive growth and operational excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">ST</div>
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-sm text-gray-600">200+ certified professionals</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">R</div>
                  <h3 className="font-semibold text-gray-900">Results Driven</h3>
                  <p className="text-sm text-gray-600">Measurable business outcomes</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">A</div>
                  <h3 className="font-semibold text-gray-900">Industry Leader</h3>
                  <p className="text-sm text-gray-600">Award-winning solutions</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower businesses through innovative technology solutions that drive growth,
                efficiency, and competitive advantage in the digital era.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the trusted technology partner for enterprises worldwide,
                enabling digital transformation and sustainable business success.
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-700 group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-700 font-semibold hover:text-blue-800 transition-colors cursor-pointer">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Contact our expert team to discuss your enterprise technology needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
                    <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-blue-700 font-semibold text-lg">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm">Available Mon-Fri 9AM-6PM IST</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-blue-700 font-semibold text-lg">info@spoorthitech.com</p>
                    <p className="text-gray-600 text-sm">Response within 24 hours</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
                    <h4 className="font-bold text-gray-900 mb-2">Head Office</h4>
                    <p className="text-gray-700">
                      Spoorthi Technologies Pvt Ltd<br />
                      Tech Park, Electronic City<br />
                      Bangalore, Karnataka 560100<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Departments */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h4 className="font-bold text-gray-900 mb-2">Sales & Business Development</h4>
                <p className="text-gray-600 mb-3">New project inquiries and business partnerships</p>
                <p className="text-green-600 font-semibold">sales@spoorthitech.com</p>
                <p className="text-green-600 font-semibold">+91 98765 43211</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                <p className="text-gray-600 mb-3">Existing client support and technical assistance</p>
                <p className="text-purple-600 font-semibold">support@spoorthitech.com</p>
                <p className="text-purple-600 font-semibold">+91 98765 43212</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
                <h4 className="font-bold text-gray-900 mb-2">Human Resources</h4>
                <p className="text-gray-600 mb-3">Career opportunities and recruitment</p>
                <p className="text-orange-600 font-semibold">careers@spoorthitech.com</p>
                <p className="text-orange-600 font-semibold">+91 98765 43213</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-gray-900 mb-2">24/7 Emergency Support</h4>
                <p className="text-gray-600 mb-3">Critical system failures and urgent technical issues</p>
                <p className="text-red-600 font-semibold text-lg">+91 98765 URGENT</p>
                <p className="text-red-600 font-semibold">emergency@spoorthitech.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100">Let's discuss how Spoorthi Technologies can drive your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-800 rounded-xl hover:bg-blue-600 transition-colors">
              <div className="w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">C</div>
              <h3 className="text-xl font-bold mb-2">Schedule Consultation</h3>
              <p className="text-blue-100 mb-4">Free 30-minute strategy session</p>
              <div className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Book Now
              </div>
            </div>

            <div className="text-center p-6 bg-blue-800 rounded-xl hover:bg-blue-600 transition-colors">
              <div className="w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">P</div>
              <h3 className="text-xl font-bold mb-2">Get Proposal</h3>
              <p className="text-blue-100 mb-4">Customized solution proposal</p>
              <div className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Request Quote
              </div>
            </div>

            <div className="text-center p-6 bg-blue-800 rounded-xl hover:bg-blue-600 transition-colors">
              <div className="w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">D</div>
              <h3 className="text-xl font-bold mb-2">Download Brochure</h3>
              <p className="text-blue-100 mb-4">Complete service overview</p>
              <div className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Download PDF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Spoorthi Technologies</h3>
              <p className="text-gray-300 mb-6">
                Transforming businesses through innovative technology solutions and strategic consulting services.
                Your trusted partner for digital transformation and enterprise technology solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">F</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">I</span>
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
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="font-semibold text-white">Main Office:</li>
                <li>+91 98765 43210</li>
                <li>info@spoorthitech.com</li>
                <li className="mt-3">Electronic City, Bangalore</li>
                <li>Karnataka 560100, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2025 Spoorthi Technologies Pvt Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpoorthiTechnologies;