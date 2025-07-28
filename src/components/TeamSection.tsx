import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  teamLeads?: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Meet Our Team",
  subtitle = "The talented individuals behind our success",
  members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years of experience in tech innovation and team building.",
      skills: ["Strategy", "Leadership", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@company.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      department: "Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
      skills: ["React", "Node.js", "Cloud Architecture"],
      social: {
        github: "#",
        linkedin: "#",
        email: "michael@company.com"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user-centered design and beautiful, functional interfaces.",
      skills: ["UI/UX", "Figma", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@company.com"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Backend specialist with expertise in microservices and database optimization.",
      skills: ["Python", "PostgreSQL", "Docker"],
      social: {
        github: "#",
        linkedin: "#",
        email: "david@company.com"
      }
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Product Manager",
      department: "Product",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist who bridges the gap between user needs and technical solutions.",
      skills: ["Product Strategy", "Analytics", "Agile"],
      social: {
        linkedin: "#",
        email: "lisa@company.com"
      }
    },
    {
      id: 6,
      name: "Alex Morgan",
      role: "Marketing Director",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Growth-focused marketer with a data-driven approach to brand building and customer acquisition.",
      skills: ["Digital Marketing", "SEO", "Content Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@company.com"
      }
    }
  ],
  teamLeads = [
    {
      id: 101,
      name: "Dr. John Smith",
      role: "Faculty Coordinator",
      department: "Academic",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced faculty member leading academic initiatives and student mentorship programs.",
      skills: ["Mentorship", "Research", "Academic Leadership"],
      social: {
        linkedin: "#",
        email: "john.smith@college.edu"
      }
    },
    {
      id: 102,
      name: "Prof. Maria Garcia",
      role: "Technical Lead",
      department: "Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Technical expert guiding students in cutting-edge technologies and innovation projects.",
      skills: ["AI/ML", "Software Engineering", "Innovation"],
      social: {
        linkedin: "#",
        github: "#",
        email: "maria.garcia@college.edu"
      }
    },
    {
      id: 103,
      name: "Dr. Rajesh Kumar",
      role: "Research Lead",
      department: "Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Leading research initiatives and fostering a culture of innovation and discovery.",
      skills: ["Research", "Innovation", "Project Management"],
      social: {
        linkedin: "#",
        email: "rajesh.kumar@college.edu"
      }
    },
    {
      id: 104,
      name: "Ms. Priya Sharma",
      role: "Student Coordinator",
      department: "Student Affairs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Dedicated to student development and organizing impactful events and workshops.",
      skills: ["Event Management", "Student Development", "Communication"],
      social: {
        linkedin: "#",
        email: "priya.sharma@college.edu"
      }
    }
  ]
}) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="h-4 w-4" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      case 'email':
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      'Leadership': 'bg-purple-100 text-purple-800 border-purple-200',
      'Technology': 'bg-blue-100 text-blue-800 border-blue-200',
      'Design': 'bg-pink-100 text-pink-800 border-pink-200',
      'Engineering': 'bg-green-100 text-green-800 border-green-200',
      'Product': 'bg-orange-100 text-orange-800 border-orange-200',
      'Marketing': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Academic': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Research': 'bg-teal-100 text-teal-800 border-teal-200',
      'Student Affairs': 'bg-rose-100 text-rose-800 border-rose-200'
    };
    return colors[department] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const renderTeamCards = (teamMembers: TeamMember[], sectionTitle: string) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {sectionTitle}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
            <CardContent className="p-6">
              {/* Avatar and Basic Info */}
              <div className="text-center mb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-gray-100 shadow-lg">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-lg font-semibold bg-gray-100 text-gray-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-gray-600 font-medium mb-2">
                  {member.role}
                </p>
                
                <Badge 
                  variant="secondary" 
                  className={`${getDepartmentColor(member.department)} text-xs`}
                >
                  {member.department}
                </Badge>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs bg-gray-50 border-gray-200 text-gray-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-2 pt-4 border-t border-gray-200">
                {Object.entries(member.social).map(([platform, url]) => (
                  <Button
                    key={platform}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    asChild
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {getSocialIcon(platform)}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Team Leads Section */}
        {renderTeamCards(teamLeads, "Executive Team")}

        {/* Regular Team Members Section */}
        {renderTeamCards(members, "Team Leads")}
      </div>
    </section>
  );
};

export default TeamSection; 