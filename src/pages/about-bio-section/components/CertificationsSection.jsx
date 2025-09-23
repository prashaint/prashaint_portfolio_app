import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CSA-2023-001",
      logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
      status: "Active",
      validUntil: "2026"
    },
    {
      id: 2,
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "META-FE-2023-078",
      logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-AI-Practitioner_badge.6f7d0bb5f0b4b8b4f3b1f9c8f7f9f2f9f2f9f2f9.png",
      status: "Active",
      validUntil: "2027"
    },
    {
      id: 3,
      title: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      date: "2025",
      credentialId: "155614829",
      logo: "https://www.databricks.com/sites/default/files/inline-images/db-academy-rgb-1200px_6.png",
      status: "Active",
      validUntil: "2027"
    },
    {
      id: 4,
      title: "Databricks Certified Associate Developer for Apache Spark 3.0",
      issuer: "Databricks",
      date: "2022",
      credentialId: "62859947",
      logo: "https://www.databricks.com/sites/default/files/inline-images/db-academy-rgb-1200px_6.png",
      status: "Active",
      validUntil: "2027"
    },
    {
      id: 5,
      title: "Academy Accreditation - Databricks Lakehouse Fundamentals",
      issuer: "Databricks",
      date: "2022",
      credentialId: "58972200",
      logo: "https://www.databricks.com/sites/default/files/inline-images/db-academy-rgb-1200px_6.png",
      status: "Active",
      validUntil: "2027"
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Birla Institute of Technology, Mesra",
      location: "Ranchi, India",
      period: "2008 - 2011",
      gpa: "8.14/10.0",
      specialization: "Computer Science and Applications",
      logo: "/assets/images/Bit_mesra.png"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Birla Institute of Technology, Mesra",
      location: "Ranchi, India",
      period: "2005 - 2008",
      gpa: "7.15/10.0",
      specialization: "Computer Science and Applications",
      logo: "/assets/images/Bit_mesra.png"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Innovation Award",
      organization: "TechCorp Annual Conference",
      year: "2023",
      description: "Recognized for developing an AI-powered user interface that improved user engagement by 40%"
    },
    {
      id: 2,
      title: "Open Source Contributor of the Year",
      organization: "React Community",
      year: "2022",
      description: "Contributed to multiple React ecosystem projects with over 1000+ GitHub stars"
    },
    {
      id: 3,
      title: "Team Leadership Excellence",
      organization: "Digital Solutions Inc.",
      year: "2023",
      description: "Led a cross-functional team of 8 developers to deliver 5 major projects ahead of schedule"
    }
  ];

  // Function to get company logo based on issuer
  const getCompanyLogo = (issuer) => {
    const logoMap = {
      "Amazon Web Services": "/assets/images/aws.png", // Local image
      "Databricks": "/assets/images/databricks.png", // Local image
      "Barclays": "/assets/images/barclays.jpg", // Local image
      "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/200px-Google_%22G%22_logo.svg.png",
      "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
      "Meta": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png"
    };
    
    return logoMap[issuer] || "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop";
  };

  // Function to get company-specific styling
  const getLogoStyling = (issuer) => {
    const stylingMap = {
      "Amazon Web Services": "dark:filter dark:brightness-110 dark:contrast-90",
      "Databricks": "dark:filter dark:brightness-105 dark:contrast-95", // Adjusted for local image
      "Barclays": "dark:filter dark:brightness-105 dark:contrast-95", // Added for Barclays
      "Google": "dark:filter dark:brightness-105 dark:contrast-95",
      "Microsoft": "dark:filter dark:brightness-110 dark:contrast-90",
      "Meta": "dark:filter dark:brightness-105 dark:contrast-95"
    };
    
    return stylingMap[issuer] || "dark:filter dark:brightness-110 dark:contrast-90";
  };

  // Component for rendering company logos with text fallbacks
  const CompanyLogo = ({ issuer, className }) => {
    const [imageError, setImageError] = useState(false);
    
    const textLogos = {
      "Amazon Web Services": { text: "AWS", bgColor: "bg-orange-500", textColor: "text-white" },
      "Databricks": { text: "DB", bgColor: "bg-red-500", textColor: "text-white" },
      "Barclays": { text: "BC", bgColor: "bg-blue-600", textColor: "text-white" },
      "Google": { text: "G", bgColor: "bg-blue-500", textColor: "text-white" },
      "Microsoft": { text: "MS", bgColor: "bg-blue-600", textColor: "text-white" },
      "Meta": { text: "M", bgColor: "bg-blue-700", textColor: "text-white" }
    };

    if (imageError || !getCompanyLogo(issuer)) {
      const textLogo = textLogos[issuer] || { text: "?", bgColor: "bg-gray-500", textColor: "text-white" };
      return (
        <div className={`w-full h-full flex items-center justify-center ${textLogo.bgColor} ${textLogo.textColor} font-bold text-lg ${className}`}>
          {textLogo.text}
        </div>
      );
    }

    return (
      <Image
        src={getCompanyLogo(issuer)}
        alt={issuer}
        className={`w-full h-full object-contain p-2 ${getLogoStyling(issuer)} ${className}`}
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <div className="space-y-12">
      {/* Certifications */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Certifications
          </h2>
          <p className="text-muted-foreground">
            Professional certifications that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications?.map((cert) => (
            <div key={cert?.id} className="bg-card rounded-xl p-6 shadow-soft-hover hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white dark:bg-white/90 border border-border/50">
                  <CompanyLogo issuer={cert?.issuer} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {cert?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {cert?.issuer} • {cert?.date}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      ID: {cert?.credentialId}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        cert?.status === 'Active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                      }`}>
                        {cert?.status}
                      </span>
                      <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Valid until: {cert?.validUntil}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Education
          </h2>
          <p className="text-muted-foreground">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="space-y-6">
          {education?.map((edu) => (
            <div key={edu?.id} className="bg-card rounded-xl p-6 shadow-soft-hover">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white dark:bg-white/95 border border-border/30">
                  <Image
                    src={edu?.logo}
                    alt={edu?.institution}
                    className="w-full h-full object-cover dark:filter dark:brightness-105 dark:contrast-95"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {edu?.degree}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {edu?.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu?.location} • {edu?.period}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-muted-foreground">
                      GPA: <span className="font-medium text-foreground">{edu?.gpa}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Specialization: <span className="font-medium text-foreground">{edu?.specialization}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Notable Achievements
          </h2>
          <p className="text-muted-foreground">
            Recognition for outstanding contributions and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements?.map((achievement) => (
            <div key={achievement?.id} className="bg-card rounded-xl p-6 shadow-soft-hover text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {achievement?.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {achievement?.organization} • {achievement?.year}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;