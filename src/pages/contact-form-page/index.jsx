import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Connect & Learn - Prashaint Mishra | Let's Explore Together</title>
        <meta 
          name="description" 
          content="Connect with Prashaint Mishra to explore data engineering, machine learning, and technology together. Join for knowledge sharing, mentoring, and learning opportunities." 
        />
        <meta name="keywords" content="connect, Data Engineering, learning, mentorship, knowledge sharing, technology discussions, networking" />
        <meta property="og:title" content="Connect & Learn - Prashaint Mishra | Let's Explore Together" />
        <meta property="og:description" content="Ready to explore technology and learn together? Connect with Prashaint Mishra for knowledge sharing and meaningful professional relationships." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-form-page" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Main Content */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information - Sidebar */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  What kind of connections are you looking for?
                </h3>
                <p className="text-sm text-muted-foreground">
                  I'm interested in connecting with fellow tech enthusiasts, students, professionals, and anyone passionate about learning. 
                  Whether you're starting your career or are an experienced professional, I'd love to share knowledge and learn from each other.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Do you offer mentorship?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! I'm passionate about helping others grow in their careers. I can provide guidance on data engineering, 
                  career development, technology choices, and industry best practices based on my 13+ years of experience.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  What topics can we discuss?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We can explore data engineering, machine learning, cloud technologies, career growth, technology trends, 
                  open source projects, and much more. I'm always eager to learn about new technologies and share experiences.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Is this platform for paid work or consultations?
                </h3>
                <p className="text-sm text-muted-foreground">
                  No, this platform is strictly for knowledge sharing, networking, and learning purposes. I do not accept 
                  any paid work or consultations through this website. All interactions are focused on mutual learning and growth.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  How do you prefer to connect?
                </h3>
                <p className="text-sm text-muted-foreground">
                  I enjoy various forms of connection - from casual coffee chats (if you're in Pune), video calls, 
                  knowledge sharing sessions, collaborative learning projects, or simply exchanging ideas through messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Prashaint Mishra. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              This platform is for educational and networking purposes only. No commercial activities are conducted here.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFormPage;