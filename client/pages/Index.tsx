import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

function ClubCard({
  clubName,
  clubTagline,
  clubDescription,
  logoUrl,
  themeColor,
  leadership,
  executives,
  volunteers,
}: {
  clubName: string;
  clubTagline: string;
  clubDescription: string;
  logoUrl: string;
  themeColor: "blue" | "purple";
  leadership: Array<{ title: string; name: string }>;
  executives: string[];
  volunteers: string[];
}) {
  const [expandedVolunteers, setExpandedVolunteers] = useState(false);

  const toggleVolunteers = () => {
    setExpandedVolunteers(!expandedVolunteers);
  };

  const themeColors = {
    blue: {
      bg: "from-neon-blue/10",
      text: "text-neon-blue",
      border: "border-neon-blue/30",
      bgLight: "bg-neon-blue/10",
      bgMedium: "bg-neon-blue/5",
    },
    purple: {
      bg: "from-neon-purple/10",
      text: "text-neon-purple",
      border: "border-neon-purple/30",
      bgLight: "bg-neon-purple/10",
      bgMedium: "bg-neon-purple/5",
    },
  };

  const colors = themeColors[themeColor];

  return (
    <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
      <CardHeader className="pb-0">
        <div
          className={`flex justify-center mb-6 -mx-6 -mt-6 bg-gradient-to-b ${colors.bg} to-transparent pt-6 pb-8`}
        >
          <img
            src={logoUrl}
            alt={`${clubName} Logo`}
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </div>
        <CardTitle className="text-2xl md:text-3xl text-center gradient-text mb-2">
          {clubName}
        </CardTitle>
        <CardDescription className="text-center text-foreground/80 text-sm md:text-base">
          {clubTagline}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 md:space-y-6">
        <p className="text-center text-foreground/80 text-xs md:text-sm lg:text-base leading-relaxed">
          {clubDescription}
        </p>

        {/* Club Leadership */}
        <div className="space-y-3 border-t border-primary/10 pt-5 md:pt-6">
          <h4
            className={`font-semibold text-base md:text-lg ${colors.text} mb-3`}
          >
            Leadership
          </h4>
          <div className="space-y-2">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className={`p-3 bg-gradient-to-r ${colors.bgLight} to-transparent rounded-lg border ${colors.border}`}
              >
                <p className={`text-xs md:text-sm font-medium ${colors.text}`}>
                  {leader.title}
                </p>
                <p className="text-xs md:text-sm text-foreground/90">
                  {leader.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Members - Always Visible */}
        <div className="space-y-3 border-t border-primary/10 pt-5 md:pt-6">
          <h4
            className={`font-semibold text-base md:text-lg ${colors.text} mb-3`}
          >
            Executive Members ({executives.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2">
            {executives.map((member, idx) => (
              <div
                key={idx}
                className={`p-3 ${colors.bgLight} rounded-lg border ${colors.border}`}
              >
                <p className="text-xs md:text-sm text-foreground/80 line-clamp-2">
                  ⭐ {member}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteers - Collapsible */}
        {volunteers.length > 0 && (
          <div className="space-y-3 border-t border-primary/10 pt-5 md:pt-6">
            <button
              onClick={toggleVolunteers}
              className={`w-full p-3 ${colors.bgLight} hover:opacity-80 transition-opacity rounded-lg flex items-center justify-between border ${colors.border}`}
            >
              <span
                className={`text-sm md:text-base font-semibold ${colors.text}`}
              >
                Volunteers ({volunteers.length})
              </span>
              <ChevronDown
                className={`w-5 h-5 ${colors.text} transition-transform ${
                  expandedVolunteers ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedVolunteers && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2 pt-2">
                {volunteers.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-background/30 rounded-lg border border-primary/10"
                  >
                    <p className="text-xs md:text-sm text-foreground/70 line-clamp-2">
                      {member}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
import {
  Target,
  MessageSquare,
  Users,
  Code,
  Lightbulb,
  Calendar,
  TrendingUp,
  Shield,
  Heart,
  Zap,
  Github,
  Instagram,
  Mail,
  ChevronRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Index() {
  const withNoJump = (action: () => void) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e?.nativeEvent?.stopImmediatePropagation?.();
    const x = window.scrollX;
    const y = window.scrollY;
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    (document.activeElement as HTMLElement | null)?.blur?.();
    action();
    requestAnimationFrame(() => {
      window.scrollTo({ left: x, top: y, behavior: "auto" });
      requestAnimationFrame(() => {
        window.scrollTo({ left: x, top: y, behavior: "auto" });
        root.style.scrollBehavior = prev || "";
      });
    });
  };

  useEffect(() => {
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {}
    return () => {
      try {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "auto";
        }
      } catch {}
    };
  }, []);

  const missionPoints = [
    {
      icon: Users,
      title: "Connect & Collaborate",
      description:
        "Bridge the gap between juniors and seniors, fostering knowledge sharing and mentorship",
    },
    {
      icon: Calendar,
      title: "Organize Events",
      description:
        "Host department-level events that enhance technical skills, creativity, and teamwork",
    },
    {
      icon: MessageSquare,
      title: "Voice Concerns",
      description:
        "Serve as a platform for effective communication between students and management",
    },
    {
      icon: TrendingUp,
      title: "Develop Leadership",
      description:
        "Encourage leadership, problem-solving, and collaborative skills among students",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description:
        "Create opportunities through workshops, competitions, and peer-to-peer learning",
    },
  ];

  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Advanced workshops on cutting-edge technologies and programming languages",
    },
    {
      icon: Shield,
      title: "Student Advocacy",
      description:
        "Representing student interests and facilitating productive dialogue with faculty",
    },
    {
      icon: Heart,
      title: "Community Building",
      description:
        "Creating lasting bonds and networks within the Computer Science department",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative container mx-auto px-4 lg:px-8 py-12 md:py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2Fc300dff8710a4251833c0d954fc07e32?format=webp&width=800"
                alt="WEBRANIA Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain float-animation"
              />
            </div>

            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Sparkles className="w-4 h-4 mr-2" />
              WEBRANIA
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Welcome to{" "}
              <span className="gradient-text glow-text">WEBRANIA</span>
            </h1>

            <p className="text-base md:text-xl text-primary/80 mb-4 font-semibold">
              "A Association of CSE Department"
            </p>

            <div className="text-center mb-6 p-4 rounded-lg border border-primary/20">
              <div className="bg-background/20 p-3 rounded-lg mb-1 inline-block">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-12 h-12 sm:w-[75px] sm:h-[75px] object-contain"
                  />
                  <p className="text-lg md:text-xl text-primary/80 font-semibold mx-auto">
                    <span
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(6, 182, 212) 50%, rgb(139, 92, 246) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        fontWeight: 600,
                      }}
                    >
                      AL-AMEEN ENGINEERING COLLEGE
                      <br />
                      <div
                        style={{
                          display: "inline",
                          fontSize: "15px",
                          fontWeight: 600,
                        }}
                      >
                        &nbsp;(AUTONOMOUS)
                      </div>
                    </span>
                    <div className="text-sm text-foreground/80 mb-2">
                      Accredited with NAAC "A" Grade
                    </div>
                    <div className="text-sm text-foreground/70">
                      Approved by AICTE, New Delhi | Affiliated to Anna
                      University, Chennai
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building a strong and united Computer Science community where
              students, seniors, and faculty collaborate to share knowledge,
              solve challenges, and create opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-[#3762e5] hover:bg-[#3762e5]/90 text-white border-transparent"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-green/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              <Target className="w-4 h-4 mr-2" />
              Our Vision
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Shaping the Future of{" "}
              <span className="gradient-text">Computer Science</span>
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
                "To build a strong and united Computer Science community where
                students, seniors, and faculty collaborate to share knowledge,
                solve challenges, and create opportunities for growth,
                innovation, and holistic development."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-12 md:py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-purple/20 text-neon-purple border-neon-purple/30">
              <Zap className="w-4 h-4 mr-2" />
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Through <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our mission drives everything we do, from connecting students to
              organizing impactful events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="glow-card bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-green/20 text-neon-green border-neon-green/30">
              <Heart className="w-4 h-4 mr-2" />
              About WEBRANIA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building Tomorrow's{" "}
              <span className="gradient-text">Tech Leaders</span>
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20 mb-16">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
                "WEBRANIA – The CSE Department Association, is formed by
                students for students. We aim to create a platform where every
                member can learn, innovate, and grow together. From technical
                events to cultural programs, from academic support to
                problem-solving with management, WEBRANIA ensures that every
                student feels connected, supported, and inspired."
              </blockquote>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center glow-card bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-12 md:py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16 px-2">
            <Badge className="mb-4 bg-neon-pink/20 text-neon-pink border-neon-pink/30 text-xs sm:text-sm">
              <Users className="w-4 h-4 mr-2" />
              Our Clubs
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Clubs Under <span className="gradient-text">WEBRANIA</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto px-2">
              Specialized interest groups dedicated to fostering innovation,
              learning, and collaboration
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12"
            suppressHydrationWarning
          >
            {/* DEVELOPER CLUB */}
            <ClubCard
              clubName="DEVELOPER CLUB"
              clubTagline='"A Initiative of CSE DEPT"'
              clubDescription="The Developer Club helps students gain knowledge through courses and valuable learning sessions. We share many cost-free and useful courses (similar to Udemy) for continuous learning. The club also encourages networking sessions where juniors and seniors connect, share knowledge, and support each other's growth. Join us to nurture programming skills, promote collaborative development practices, and build a vibrant community of passionate developers working on real-world projects."
              logoUrl="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2Fa49cf763a5224d1aa6a79e549a80b048?format=webp&width=800&height=1200"
              themeColor="blue"
              leadership={[
                {
                  title: "President",
                  name: "Mr. Mohamed Irfan M – IV Year CSE",
                },
                {
                  title: "Vice President",
                  name: "Mr. A R Fazil – III Year CSE",
                },
                {
                  title: "Secretary",
                  name: "Mr. Venkatachalapathi M – II Year CSE",
                },
                {
                  title: "Joint Secretary",
                  name: "Mr. Chandru N – II Year CSE",
                },
              ]}
              executives={[
                "Barakath Nisha A – II Year CSE",
                "Hafila Farhana J – II Year CSE",
                "John Kennedy M – II Year CSE",
                "Saburunnisha S – II Year CSE",
                "Ayeesha Rilwana H – II Year AI & DS",
                "Pugalarasu J R – II Year AI & DS",
                "Ramzani A – II Year AI & DS",
                "Sowmiya K – II Year AI & DS",
                "Asha Banu M – II Year IT",
                "Meena G – II Year IT",
                "Mohammed Ashiq A – II Year IT",
                "Siddik M – II Year IT",
                "Gajini K – II Year ECE",
                "Haseena Mariyam M – II Year ECE",
                "Nandika M – II Year ECE",
              ]}
              volunteers={[
                "Dhana Shree D – II Year CSE",
                "Rasha Noorjahan S – II Year CSE",
                "Shifu Y – II Year CSE",
                "Sidiq Raja A – II Year CSE",
                "Gowtham J – II Year AI & DS",
                "James Inbaraj S – II Year AI & DS",
                "Kamila G – II Year AI & DS",
                "Rakshantha J – II Year AI & DS",
                "Sathiya Begum S – II Year AI & DS",
                "Sreemathi R – II Year AI & DS",
                "Vaishnavi M – II Year AI & DS",
                "Abuhuraira G J S – II Year IT",
                "Archana A – II Year IT",
                "Bharath S – II Year IT",
                "Gowtham P – II Year IT",
                "Kishore S – II Year IT",
                "Manasha G – II Year IT",
                "Oviya S – II Year IT",
                "Thamizhini M – II Year IT",
                "Azeeba Shana S – II Year ECE",
                "Eswaran S – II Year ECE",
                "Nilafar Nisha K – II Year ECE",
              ]}
            />

            {/* TECHNO HiVE Club */}
            <ClubCard
              clubName="TECHNO HiVE"
              clubTagline='"Innovation Through Collaboration"'
              clubDescription="TECHNO HiVE mainly focuses on technical connection sessions related to software and hardware basics, including practical implementation and technical exposure. We organize alumni interactions, workshops, and industry-related sessions to enhance students' real-world technical understanding. Join our community to explore cutting-edge technologies, foster innovation, and collaborate on groundbreaking projects while building connections with industry professionals."
              logoUrl="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F93405f7a24264f08a539d74ee6745014?format=webp&width=800&height=1200"
              themeColor="purple"
              leadership={[
                { title: "President", name: "Ms. Priyanga J – IV Year CSE" },
                {
                  title: "Vice President",
                  name: "Mr. Jesuraja J – III Year CSE",
                },
                {
                  title: "Secretary",
                  name: "Mr. Mohamed Asik I – III Year CSE",
                },
                {
                  title: "Joint Secretary",
                  name: "Ms. Saburunnisha S – II Year CSE",
                },
              ]}
              executives={[
                "Mr. Apsal S – IV Year CSE",
                "Mr. Arunpandi M – IV Year CSE",
                "Ms. Priya Jeniffer S – IV Year CSE",
                "Mr. AR Fazil – III Year CSE",
                "Mr. Siddiq Raja A – II Year CSE",
                "Ms. Kanisha Fathima N – II Year CSE",
                "Ms. Hafila Farhana J – II Year CSE",
              ]}
              volunteers={[]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              <Users className="w-4 h-4 mr-2" />
              Association Members & Staff
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Association Members */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">
                  Association Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-80 md:max-h-96 overflow-y-auto pr-2">
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      MOHAMED IRFAN M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span
                        className="text-sm px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: "rgba(207, 57, 55, 0.2)",
                          color: "rgba(224, 52, 110, 1)",
                          border: "1px solid rgba(236, 146, 43, 1)",
                          marginTop: "10px",
                        }}
                      >
                        SECRETARY
                      </span>
                      <a
                        href="tel:7598659947"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 7598659947
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      DHARSHAN S L
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full font-medium">
                        JOINT SECRETARY
                      </span>
                      <a
                        href="tel:8248784050"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8248784050
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      SIDDIQ T
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 rounded-full font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-400/80">
                        TREASURER
                      </span>
                      <a
                        href="tel:7010007067"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 7010007067
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      VENKATACHALAPATHI M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 rounded-full font-medium bg-blue-600/20 text-blue-400 border border-violet-600">
                        JOIN TREASURER
                      </span>
                      <a
                        href="tel:9500713994"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9500713994
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      MOHD KAIF ANSARI
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:9119827565"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9119827565
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      YUVARAJ B
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:8438917717"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8438917717
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      GAYATHRI M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:8807744683"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8807744683
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      MD RAEES ANSARI
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:7779948751"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 7779948751
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      SALAI DHIVYA JOTHI S
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:6381438080"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 6381438080
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      VINUTHA S
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:9344099133"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9344099133
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      CHANDRU N
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        EXECUTIVE MEMBER
                      </span>
                      <a
                        href="tel:6374889570"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 6374889570
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staff In Charge */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">
                  Staff In Charge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-80 md:max-h-96 overflow-y-auto pr-2">
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Dr. MOHAMED MUSTHAFA M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-medium">
                        VICE PRINCIPAL
                      </span>
                      <a
                        href="tel:9715309000"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9715309000
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mrs. AAFIYA THAHASEEN A
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-green/20 text-neon-green rounded-full font-medium">
                        HEAD OF DEPARTMENT
                      </span>
                      <a
                        href="tel:8122571174"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8122571174
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mr. MOHAMMED IBRAHIM S
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9994222786"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9994222786
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Ms. SANGEETHA S
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9894730667"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9894730667
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mr. RAMKUMAR C
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9585368444"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9585368444
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mrs. VASUKI M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9629778223"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9629778223
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mr. VIJAYANANTHAN S
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9790029701"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9790029701
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Mr. MOHAMMED ASLAM
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:8610165812"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8610165812
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Ms. GOWTHAMI M
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:8608531908"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 8608531908
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">
                      Ms. ESAI YAZHINI P
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">
                        AP/CSE
                      </span>
                      <a
                        href="tel:9943150099"
                        className="text-foreground/80 hover:text-primary transition-colors font-mono"
                      >
                        📞 9943150099
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* College Address */}
          <Card className="max-w-4xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="p-4 mb-4 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-2 sm:space-y-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain"
                  />
                  <h3 className="text-2xl font-bold gradient-text mx-auto">
                    AL-AMEEN ENGINEERING COLLEGE
                    <br />
                    <span style={{ fontSize: "15px", fontWeight: 700 }}>
                      &nbsp;(AUTONOMOUS)
                    </span>
                    <div className="text-foreground/80 font-normal text-sm sm:text-base">
                      <div className="mt-2">
                        Karundevanpalayam, Nanjai Uthukkuli Post, Erode - 638
                        104
                      </div>
                      <div className="mt-2">Tamilnadu, India</div>
                    </div>
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-12 md:py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-neon-pink/20 text-neon-pink border-neon-pink/30 text-xs sm:text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Our Events
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 px-2">
              <span className="gradient-text">♠ ACE'2K26 ♠</span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-foreground/80 mb-4 sm:mb-6 px-2">
              Join Our Technical & Non-Technical Events
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-6 px-4">
              Participate in technical and non-technical events designed to
              enhance your skills and showcase your talents
            </p>
            <div className="mt-4 flex justify-center px-2">
              <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 shadow flex-wrap justify-center">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Event Date: FEB 17, 2026
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Technical Events */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl gradient-text">
                  Technical Events
                </CardTitle>
                <CardDescription className="text-xs sm:text-base text-foreground/80 px-2">
                  Showcase your technical prowess and problem-solving skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Innovation Pitch",
                      icon: "💡",
                      members: "1-3 Members",
                      details: "",
                      description:
                        "✅ DO's: Prepare original technical content, keep slides simple and clear, use readable fonts, follow time limit, bring PPT in pen drive with email backup, practice your presentation, maintain professional dress and behavior. ❌ DON'Ts: Don't copy from internet (plagiarism), don't overcrowd slides with text, avoid excessive animations/sound effects, don't exceed time limit, don't use offensive/irrelevant content, don't argue with judges.",
                    },
                    {
                      name: "Project Arena",
                      icon: "🏗️",
                      members: "3-4 Members",
                      details: "",
                      description:
                        "✅ DO's: Know your project clearly (problem, solution, working, outcome), arrive on time, wear formal/college-approved attire, explain confidently and politely, display project details clearly, manage time wisely. ❌ DON'Ts: Don't copy projects, don't argue with judges, don't leave stall unattended, don't make noise/disturb others, don't damage property, don't misbehave/use inappropriate language, don't give wrong information, don't violate safety rules.",
                    },
                    {
                      name: "Debugging Duel",
                      icon: "🐛",
                      members: "Individual",
                      details: "",
                      description:
                        "✅ DO's: Read problem & code carefully, fix one bug at a time and test after each change, use debugging tools and error messages, test with different inputs/edge cases, manage time effectively and remain calm. ❌ DON'Ts: Don't bring mobile phones or smart watches, don't discuss solutions with other participants, don't argue with judges, don't exceed time limit, don't open unnecessary tabs. Time limit: 45-60 minutes.",
                    },
                    {
                      name: "Quizophile",
                      icon: "🧠",
                      members: "Individual",
                      details: "",
                      description:
                        "A comprehensive technical knowledge competition using Kahoot! ✅ DO's: Join on time using the Kahoot link/PIN, use only the provided system, ensure stable internet, enter your registered name, follow coordinator instructions, answer independently, keep screen visible, stay on Kahoot only, maintain discipline and silence. ❌ DON'Ts: Don't bring mobile phones (will be collected), smart watches, or earphones; don't open other tabs/windows; don't use Google, ChatGPT, notes, or external help; don't discuss answers; don't refresh/log out without permission; don't attempt multiple logins or use fake names. Any malpractice = immediate disqualification.",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-background/30 rounded-lg border border-primary/10 group transition-all duration-300 hover:border-primary/30 hover:bg-background/40"
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <span className="text-xl sm:text-2xl flex-shrink-0">
                            {event.icon}
                          </span>
                          <span className="text-xs sm:text-sm md:text-base font-medium text-foreground/90 truncate">
                            {event.name}
                          </span>
                        </div>
                        <div className="h-6 px-2 text-xs text-foreground/70 flex items-center select-none flex-shrink-0 ml-2">
                          <ChevronDown className="w-3 h-3 mr-1" />
                          <span className="hidden sm:inline">More</span>
                        </div>
                      </div>
                      <div className="ml-7 sm:ml-11 space-y-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-1">
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium whitespace-nowrap">
                            {event.members}
                          </span>
                          {event.details && (
                            <span className="text-xs text-foreground/60">
                              {event.details}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-2 sm:mt-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hidden group-hover:block">
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Non-Technical Events */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-green to-neon-pink rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl gradient-text">
                  Non-Technical Events
                </CardTitle>
                <CardDescription className="text-xs sm:text-base text-foreground/80 px-2">
                  Express your creativity and showcase your diverse talents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Reels & Photography",
                      icon: "📸",
                      members: "1-2 Members",
                      details: "",
                      description:
                        "✅ DO's: Follow nature-based metaphor photography theme, submit original content only, use your own mobile/camera, basic editing allowed (brightness, contrast, aspect ratio), reels max 30 seconds with clear message, maintain good audio/video quality, submit on time. ❌ DON'Ts: No copied/old/AI-generated content, no movie/YouTube clips, no offensive/vulgar/political/religious/love content, no heavy manipulation/over-editing/VFX/watermark/logo, no late submissions.",
                    },
                    {
                      name: "Connection",
                      icon: "🎮",
                      members: "1-2 Members",
                      details: "",
                      description:
                        "✅ DO's: Discuss only within your team, answer when host asks, follow time limit, respect the host and teams, enjoy and participate actively. ❌ DON'Ts: Don't use mobile phones, don't shout answers, don't copy or give hints, don't argue with host, don't disturb other teams. A fun networking event with engaging activities and icebreaker challenges.",
                    },
                    {
                      name: "Talent Show",
                      icon: "🎭",
                      members: "Solo/Individual",
                      details: "",
                      description:
                        "✅ DO's: Practice well in advance, be punctual, wear proper comfortable costume, follow rules and time limit, be confident and smile, respect judges/organizers/participants, keep props and music ready. ❌ DON'Ts: Don't panic on stage, don't exceed time limit, don't copy another's performance, don't argue with judges, don't use dangerous/unsafe props, don't disturb other participants. Time limit: 3-5 minutes.",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-background/30 rounded-lg border border-primary/10 group transition-all duration-300 hover:border-primary/30 hover:bg-background/40"
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <span className="text-xl sm:text-2xl flex-shrink-0">
                            {event.icon}
                          </span>
                          <span className="text-xs sm:text-sm md:text-base font-medium text-foreground/90 truncate">
                            {event.name}
                          </span>
                        </div>
                        <div className="h-6 px-2 text-xs text-foreground/70 flex items-center select-none flex-shrink-0 ml-2">
                          <ChevronDown className="w-3 h-3 mr-1" />
                          <span className="hidden sm:inline">More</span>
                        </div>
                      </div>
                      <div className="ml-7 sm:ml-11 space-y-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-1">
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium whitespace-nowrap">
                            {event.members}
                          </span>
                          {event.details && (
                            <span className="text-xs text-foreground/60">
                              {event.details}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-2 sm:mt-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hidden group-hover:block">
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mb-10 px-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-xs sm:text-sm md:text-base"
            >
              <a
                href="https://forms.gle/uwuzJcQyjSpCr2Pa7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for Events
              </a>
            </Button>
          </div>

          {/* Prizes and Certificates Section */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-semibold text-neon-purple mb-3">
                  Exciting Prizes
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Win amazing prizes in our competitions and events!
                  certificates of merit, and recognition for outstanding
                  performances await the winners.
                </p>
              </CardContent>
            </Card>
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-semibold text-neon-blue mb-3">
                  E-Certificates
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  📜 <strong>Technical Events:</strong> Participation certificates for all participants. <strong>Non-Technical Events:</strong> E-certificates for participants and special achievement certificates for winners. Build your portfolio with our official certifications!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2Fc300dff8710a4251833c0d954fc07e32?format=webp&width=800"
                alt="WEBRANIA Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">
                  WEBRANIA
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-foreground/60">
                    A CSE Department Association
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-foreground/60 hover:text-primary"
              >
                <a
                  href="https://www.instagram.com/webrania_aec?igsh=MWk0NXJiaXk4Y2s2cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/60 hover:text-primary"
                onClick={() =>
                  (window.location.href = "mailto:aec.webrania@gmail.com")
                }
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 gradient-text">
                Contact Us
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:aec.webrania@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    aec.webrania@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:cse.developerclub@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    cse.developerclub@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:technohiveaec12@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    technohiveaec12@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-4 h-4 object-contain"
                  />
                  <a
                    href="https://alameen.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    AL-AMEEN ENGINEERING COLLEGE
                  </a>
                </div>
              </div>
              <p className="text-xs text-foreground/70 mt-4 inline-block border border-primary/20 rounded px-2 py-1">
                ⭐ Credits: Mohamed Irfan M-Secratary-Final Year -CSE.
              </p>
              <p className="text-xs text-foreground/70 mt-2 inline-block border border-primary/20 rounded px-2 py-1">
                Special thanks to Suaib S Final Year - CSE
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 gradient-text">
                Quick Links
              </h4>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("vision")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  Vision
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("mission")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  Mission
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("clubs")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  Clubs
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("events")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-left text-foreground/80 hover:text-primary transition-colors"
                >
                  Events
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 text-center">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0 mb-2">
                <p className="text-foreground/60">
                  © 2024 WEBRANIA - CSE Department Association,
                </p>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                  alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                  className="w-4 h-4 object-contain"
                />
                <p className="text-foreground/60">
                  AL-AMEEN ENGINEERING COLLEGE (AUTONOMOUS)
                </p>
              </div>
              <p className="text-foreground/60">
                Building the future together.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
