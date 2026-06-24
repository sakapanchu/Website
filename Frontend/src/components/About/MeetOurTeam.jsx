import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import images from assets
import TeamMember1 from '../../assets/member1.png';
import TeamMember2 from '../../assets/member2.png';
import TeamMember3 from '../../assets/member3.png';
import TeamMember7 from '../../assets/member7.png';
import TeamMember4 from '../../assets/member4.png';
import TeamMember5 from '../../assets/member5.png';
import TeamMember6 from '../../assets/member6.png';
import TeamMember8 from '../../assets/member8.png';

// Import social icons from assets
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
// import LinkedInIcon from '../../assets/linkedin.png';
import LinkedInIcon from '../../assets/twitter.png';

export default function MeetOurTeam() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: "Mr. Anton Andrew Jebarson",
      title: "Co-Founder & CEO",
      description: "A visionary leader with extensive industry experience, driving innovation, guiding teams, fostering a culture of excellence, and building successful technology solutions with lasting impact.",
      image: TeamMember1,
      social: {
        facebook: "https://facebook.com/antonandrew",
        instagram: "https://instagram.com/antonandrew",
        linkedin: "https://linkedin.com/in/antonandrew",
        twitter: "https://twitter.com/antonandrew"
      }
    },
    {
      id: 2,
      name: "Mr. Thiyakarasa Saksin",
      title: "Co-Founder & CTO",
      description: "Visionary Director with expertise in creative strategy, brand development, and leadership. Known for driving award-winning campaigns, mentoring teams, and delivering impactful design solutions that fuel business growth.",
      image: TeamMember2,
      social: {
        facebook: "https://facebook.com/thiyakarasa",
        instagram: "https://instagram.com/thiyakarasa",
        linkedin: "https://linkedin.com/in/thiyakarasa",
        twitter: "https://twitter.com/thiyakarasa"
      }
    },
    {
      id: 3,
      name: "Ms. Theivayokanathan Saruja",
      title: "Operations Manager",
      description: "An experienced Operations Manager overseeing daily operations, optimizing processes, managing resources efficiently, and ensuring smooth collaboration across teams to achieve organizational goals.",
      image: TeamMember3,
      social: {
        facebook: "https://facebook.com/saruja",
        instagram: "https://instagram.com/saruja",
        linkedin: "https://linkedin.com/in/saruja",
        twitter: "https://twitter.com/saruja"
      }
    },
    {
      id: 4,
      name: "Mr. K.D.A.D Wickramasurendra",
      title: "Associate Software Developer",
      description: "Passionate full-stack developer focused on building high-performance, scalable, and user-friendly applications while continuously improving skills and delivering effective solutions.",
      image: TeamMember4,
      social: {
        facebook: "https://facebook.com/asanka",
        instagram: "https://instagram.com/asanka",
        linkedin: "https://linkedin.com/in/asanka",
        twitter: "https://twitter.com/asanka"
      }
    },
    {
      id: 5,
      name: "Ms. Sakaniya Panchalingam",
      title: "Junior Software Developer",
      description: "Focused on building responsive, user-centric interfaces, collaborating with the full-stack team, learning modern development practices, and contributing to real-world projects.",
      image: TeamMember5,
      social: {
        facebook: "https://facebook.com/sakaniya",
        instagram: "https://instagram.com/sakaniya",
        linkedin: "https://linkedin.com/in/sakaniya",
        twitter: "https://twitter.com/sakaniya"
      }
    },
    {
      id: 6,
      name: "Ms. Jeevana Jegatheeswaran",
      title: "Quality Assurance Engineer",
      description: "Experienced Quality Assurance Engineer dedicated to ensuring software quality through rigorous testing, identifying bugs, and collaborating with development teams to deliver reliable and high-quality products.",
      image: TeamMember6,
      social: {
        facebook: "https://www.facebook.com/share/1DQCe5LFuk/",
        instagram: "https://www.instagram.com/jeevii_20?igsh=ZzB3M3M2eXp3MXNo",
        linkedin: "https://www.linkedin.com/in/jeevi20?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "https://twitter.com/jeevana"
      }
    },
    {
      id: 7,
      name: "Mr. Hirusha Rashmika",
      title: "Trainee Software Engineer",
      description: "Dedicated Trainee Software Engineer focused on learning and contributing to software development projects, collaborating with team members, and gaining hands-on experience in various technologies.",
      image: TeamMember8,
      social: {
        facebook: "https://facebook.com/hirusha",
        instagram: "https://instagram.com/hirusha",
        linkedin: "https://linkedin.com/in/hirusha",
        twitter: "https://twitter.com/hirusha"
      }
    },
  ];

  // Social icons configuration
  const socialIcons = [
    { id: 'facebook', icon: FacebookIcon, alt: "Facebook" },
    { id: 'instagram', icon: InstagramIcon, alt: "Instagram" },
    { id: 'linkedin', icon: LinkedInIcon, alt: "LinkedIn" },
  ];

  return (
    <section ref={sectionRef} className="py-10 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#000000] leading-10 font-inter">
              Meet Our Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="bg-white border border-[#FFC80B] rounded-[10px_20px_10px_20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[3/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 lg:p-6 pb-16 sm:pb-18 lg:pb-20">
                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-semibold text-[#000000] leading-7 mb-1">
                    {member.name}
                  </h3>

                  {/* Job Title */}
                  <p className="text-sm sm:text-base font-normal text-[#EBBC00] leading-5 mb-2">
                    {member.title}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-normal text-[#000000] leading-5">
                    {member.description}
                  </p>
                </div>

                {/* Social Icons - Fixed at bottom left */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6 flex items-center gap-2 sm:gap-2.5">
                  {socialIcons.map((social) => {
                    const socialKey = social.id;
                    const socialUrl = member.social[socialKey];

                    if (!socialUrl) return null;

                    return (
                      <a
                        key={social.id}
                        href={socialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 border border-[#EBBA0A] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FFC80B] hover:border-[#FFC80B] hover:scale-110 bg-white"
                        aria-label={`Visit ${member.name}'s ${social.alt} profile`}
                      >
                        <img
                          src={social.icon}
                          alt={social.alt}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}