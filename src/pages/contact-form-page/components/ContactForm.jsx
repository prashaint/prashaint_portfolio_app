import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    interestArea: '',
    exploreAreas: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestAreaOptions = [
    { value: 'Data Engineering', label: 'Data Engineering' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Cloud Technologies', label: 'Cloud Technologies' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'Technology Trends', label: 'Technology Trends' },
    { value: 'Career Guidance', label: 'Career Guidance' },
    { value: 'Learning & Development', label: 'Learning & Development' },
    { value: 'Open Source Projects', label: 'Open Source Projects' },
    { value: 'Other', label: 'Other' }
  ];

  const exploreAreasOptions = [
    { value: 'Knowledge Sharing', label: 'Knowledge Sharing' },
    { value: 'Technical Discussions', label: 'Technical Discussions' },
    { value: 'Mentorship', label: 'Mentorship' },
    { value: 'Community Building', label: 'Community Building' },
    { value: 'Open Source Collaboration', label: 'Open Source Collaboration' },
    { value: 'Technology Exchange', label: 'Technology Exchange' },
    { value: 'Learning Together', label: 'Learning Together' },
    { value: 'Networking', label: 'Networking' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.age?.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData?.age) || parseInt(formData?.age) < 16 || parseInt(formData?.age) > 100) {
      newErrors.age = 'Please enter a valid age (16-100)';
    }

    if (!formData?.interestArea) {
      newErrors.interestArea = 'Please select your interest area';
    }

    if (!formData?.exploreAreas) {
      newErrors.exploreAreas = 'Please select areas to explore together';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const emailBody = `
New Connection Request from Portfolio Website

Name: ${formData.name}
Email: ${formData.email}
Age: ${formData.age}
Interest Area: ${formData.interestArea}
Areas to Explore Together: ${formData.exploreAreas}

Message:
${formData.message}

---
This message was sent from the portfolio website contact form.
      `;

      // Create mailto link
      const mailtoLink = `mailto:prashaint.kumar.mishra@gmail.com?subject=New Connection Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        age: '',
        interestArea: '',
        exploreAreas: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg border border-border p-6 md:p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Connection Request Sent!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out! I'll get back to you soon to explore opportunities together.
          </p>
          <Button 
            variant="outline" 
            onClick={handleNewMessage}
            iconName="Plus"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Let's Connect to Learn More!
        </h2>
        <p className="text-muted-foreground mb-4">
          I'm always excited to connect with fellow enthusiasts, share knowledge, and explore new learning opportunities together. Fill out the form below to get in touch!
        </p>
        
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-2">
            <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-800 mb-1">Important Disclaimer</h4>
              <p className="text-xs text-amber-700">
                This website is for knowledge sharing and networking purposes only. I do not accept paid project work or any other form of work that involves monetary benefits through this platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Age"
            type="number"
            placeholder="Enter your age"
            value={formData?.age}
            onChange={(e) => handleInputChange('age', e?.target?.value)}
            error={errors?.age}
            required
            min="16"
            max="100"
          />

          <Select
            label="Interest Area"
            placeholder="Select your main interest"
            options={interestAreaOptions}
            value={formData?.interestArea}
            onChange={(value) => handleInputChange('interestArea', value)}
            error={errors?.interestArea}
            required
          />

          <Select
            label="Areas to Explore Together"
            placeholder="What would you like to explore?"
            options={exploreAreasOptions}
            value={formData?.exploreAreas}
            onChange={(value) => handleInputChange('exploreAreas', value)}
            error={errors?.exploreAreas}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tell me more about yourself and what you'd like to explore <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Share your background, interests, learning goals, or any specific topics you'd like to discuss..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            rows={6}
            className={`w-full px-3 py-2 border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none ${
              errors?.message ? 'border-error' : 'border-border'
            }`}
            required
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error">{errors?.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Connection Request'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                age: '',
                interestArea: '',
                exploreAreas: '',
                message: ''
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;