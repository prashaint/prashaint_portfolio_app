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
        <title>Contact - Portfolio Pro | Let's Work Together</title>
        <meta 
          name="description" 
          content="Get in touch with Portfolio Pro for your next web development, mobile app, or digital solution project. Quick response guaranteed within 24 hours." 
        />
        <meta name="keywords" content="contact, web development, mobile app, digital solutions, portfolio, freelancer" />
        <meta property="og:title" content="Contact - Portfolio Pro | Let's Work Together" />
        <meta property="og:description" content="Ready to bring your project to life? Contact Portfolio Pro for professional web development and digital solutions." />
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
                  What's your typical project timeline?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, 
                  while complex web applications can take 2-6 months. I'll provide a detailed timeline after our initial consultation.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! I work with clients worldwide and am comfortable with different time zones. 
                  Most communication happens via email and video calls, making location irrelevant.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  What information should I include in my project inquiry?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Please include your project goals, target audience, preferred timeline, budget range, 
                  and any specific features or requirements. The more details you provide, the better I can assist you.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Do you provide ongoing support after project completion?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes! I offer various support packages including bug fixes, content updates, security monitoring, 
                  and feature enhancements. We can discuss the best support plan for your needs.
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
              © {new Date()?.getFullYear()} Portfolio Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFormPage;