import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      status: "Active",
      validUntil: "2026"
    },
    {
      id: 2,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2022",
      credentialId: "GOOGLE-UX-2022-045",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      status: "Active",
      validUntil: "Lifetime"
    },
    {
      id: 3,
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-FE-2023-078",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
      status: "Active",
      validUntil: "Lifetime"
    },
    {
      id: 4,
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2022",
      credentialId: "CSM-2022-1234",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
      status: "Active",
      validUntil: "2024"
    }
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
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Birla Institute of Technology, Mesra",
      location: "Ranchi, India",
      period: "2005 - 2008",
      gpa: "7.15/10.0",
      specialization: "Computer Science and Applications",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop"
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
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <Image
                    src={cert?.logo}
                    alt={cert?.issuer}
                    className="w-full h-full object-cover"
                  />
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
                        cert?.status === 'Active' ?'bg-success/10 text-success' :'bg-muted text-muted-foreground'
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
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <Image
                    src={edu?.logo}
                    alt={edu?.institution}
                    className="w-full h-full object-cover"
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