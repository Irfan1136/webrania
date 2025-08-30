import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
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
  Twitter,
  Mail,
  ChevronRight,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function Index() {
  const [expandedEvents, setExpandedEvents] = useState<{[key: string]: boolean}>({});
  const [expandedTalentShow, setExpandedTalentShow] = useState(false);
  const [showMoreMembers, setShowMoreMembers] = useState(false);
  const [showMoreStaff, setShowMoreStaff] = useState(false);

  const toggleEventDescription = (eventName: string) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventName]: !prev[eventName]
    }));
  };

  const missionPoints = [
    {
      icon: Users,
      title: "Connect & Collaborate",
      description: "Bridge the gap between juniors and seniors, fostering knowledge sharing and mentorship"
    },
    {
      icon: Calendar,
      title: "Organize Events",
      description: "Host department-level events that enhance technical skills, creativity, and teamwork"
    },
    {
      icon: MessageSquare,
      title: "Voice Concerns",
      description: "Serve as a platform for effective communication between students and management"
    },
    {
      icon: TrendingUp,
      title: "Develop Leadership",
      description: "Encourage leadership, problem-solving, and collaborative skills among students"
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Create opportunities through workshops, competitions, and peer-to-peer learning"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Advanced workshops on cutting-edge technologies and programming languages"
    },
    {
      icon: Shield,
      title: "Student Advocacy",
      description: "Representing student interests and facilitating productive dialogue with faculty"
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Creating lasting bonds and networks within the Computer Science department"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
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

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Welcome to{" "}
              <span className="gradient-text glow-text">WEBRANIA</span>
            </h1>

            <p className="text-lg md:text-xl text-primary/80 mb-4 font-semibold">
              "A Association of CSE Department"
            </p>

            <div className="text-center mb-6 p-4 rounded-lg border border-primary/20">
              <div className="bg-background/20 p-3 rounded-lg mb-1 inline-block">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-[75px] h-[75px] object-contain"
                  />
                  <p className="text-lg md:text-xl text-primary/80 font-semibold mx-auto">
                    <span style={{ backgroundImage: "linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(6, 182, 212) 50%, rgb(139, 92, 246) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontWeight: 600 }}>
                      AL-AMEEN ENGINEERING COLLEGE
                      <br />
                      <span style={{fontSize: "15px"}}>&nbsp;(AUTONOMOUS)</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-background/20 p-3 rounded-lg mb-1 inline-block">
                <p className="text-sm text-foreground/80 mb-2">
                  Accredited with NAAC "A" Grade
                </p>
                <p className="text-sm text-foreground/70">
                  Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
                </p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building a strong and united Computer Science community where students, seniors, 
              and faculty collaborate to share knowledge, solve challenges, and create opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl float-animation" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-green/20 rounded-full blur-xl float-animation" style={{animationDelay: "4s"}}></div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              <Target className="w-4 h-4 mr-2" />
              Our Vision
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Shaping the Future of <span className="gradient-text">Computer Science</span>
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
                "To build a strong and united Computer Science community where students, seniors, 
                and faculty collaborate to share knowledge, solve challenges, and create opportunities 
                for growth, innovation, and holistic development."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 lg:py-32 bg-card/30">
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
              Our mission drives everything we do, from connecting students to organizing impactful events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="glow-card bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
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
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-green/20 text-neon-green border-neon-green/30">
              <Heart className="w-4 h-4 mr-2" />
              About WEBRANIA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building Tomorrow's <span className="gradient-text">Tech Leaders</span>
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20 mb-16">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
                "WEBRANIA – The CSE Department Association, is formed by students for students.
                We aim to create a platform where every member can learn, innovate, and grow together.
                From technical events to cultural programs, from academic support to problem-solving
                with management, WEBRANIA ensures that every student feels connected, supported, and inspired."
              </blockquote>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center glow-card bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
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
                <CardTitle className="text-2xl gradient-text">Association Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">MOHAMED IRFAN M</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(207, 57, 55, 0.2)", color: "rgba(224, 52, 110, 1)", border: "1px solid rgba(236, 146, 43, 1)", marginTop: "10px" }}>SECRETARY</span>
                      <a href="tel:7598659947" className="text-foreground/80 hover:text-primary transition-colors font-mono">
                        📞 7598659947
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">DHARSHAN S L</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full font-medium">JOINT SECRETARY</span>
                      <a href="tel:8248784050" className="text-foreground/80 hover:text-primary transition-colors font-mono">
                        📞 8248784050
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">SIDDIQ T</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 rounded-full font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-400/80">TREASURER</span>
                      <a href="tel:7010007067" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 7010007067</a>
                    </div>
                  </div>

                  {showMoreMembers && (
                    <>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">VENKATACHALAPATHI M</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 rounded-full font-medium bg-blue-600/20 text-blue-400 border border-violet-600">JOIN TREASURER</span>
                          <a href="tel:9500713994" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9500713994</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">MOHD KAIF ANSARI</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:9119827565" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9119827565</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">YUVARAJ B</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:8438917717" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 8438917717</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">GAYATHRI M</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:8807744683" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 8807744683</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">MD RAEES ANSARI</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:7779948751" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 7779948751</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">SALAI DIVYA JOTHI S</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:6381438080" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 6381438080</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">VINUTHA S</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:9344099133" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9344099133</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">CHANDRU N</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">EXECUTIVE MEMBER</span>
                          <a href="tel:6374889570" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 6374889570</a>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="text-center pt-2">
                    <Button variant="outline" size="sm" type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMoreMembers(!showMoreMembers); }}>
                      {showMoreMembers ? "View less" : "View more"}
                    </Button>
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
                <CardTitle className="text-2xl gradient-text">Staff In Charge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">Dr. MOHAMED MUSTHAFA M</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-medium">VICE PRINCIPAL</span>
                      <a href="tel:9715309000" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9715309000</a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mrs. AAFIYA THAHASEEN A</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-green/20 text-neon-green rounded-full font-medium">HEAD OF DEPARTMENT</span>
                      <a href="tel:8122571174" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 8122571174</a>
                    </div>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mr. MOHAMMED IBRAHIM S</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                      <a href="tel:9994222786" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9994222786</a>
                    </div>
                  </div>

                  {showMoreStaff && (
                    <>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Dr. MOHAMED MUSTHAFA M</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full font-medium">VICE PRINCIPAL</span>
                          <a href="tel:9715309000" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9715309000</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Ms. SANGEETHA S</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:9894730667" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9894730667</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mr. RAMKUMAR C</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:9585368444" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9585368444</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mrs. VASUKI P</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:9629778223" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9629778223</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mr. VIJAYANANTHAN S</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:9790029701" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9790029701</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Mr. MOHAMMED ASLAM</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:8610165812" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 8610165812</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Ms. GOWTHAMI M</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:8608531908" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 8608531908</a>
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-lg text-foreground/90 mb-2">Ms. ESAI YAZHINI P</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full font-medium">AP/CSE</span>
                          <a href="tel:9943150099" className="text-foreground/80 hover:text-primary transition-colors font-mono">📞 9943150099</a>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="text-center pt-2">
                    <Button variant="outline" size="sm" type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMoreStaff(!showMoreStaff); }}>
                      {showMoreStaff ? "View less" : "View more"}
                    </Button>
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
              <div className="bg-background/20 p-4 rounded-lg mb-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-[75px] h-[75px] object-contain"
                  />
                  <h3 className="text-2xl font-bold gradient-text mx-auto">
                    AL-AMEEN ENGINEERING COLLEGE
                    <br />
                    <span style={{fontSize: "15px"}}>&nbsp;(AUTONOMOUS)</span>
                  </h3>
                </div>
              </div>
              <div className="bg-background/20 p-4 rounded-lg text-center flex flex-col">
                <div className="space-y-2 text-foreground/80 mx-auto">
                  <a href="https://share.google/0ZOtblzeA2m5w55yf" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium">LOCATION:</a>
                  <p>Karundevanpalayam, Nanjai Uthukkuli Post, Erode - 638 104</p>
                  <p>Tamilnadu, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-pink/20 text-neon-pink border-neon-pink/30">
              <Calendar className="w-4 h-4 mr-2" />
              Our Events
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Participate in technical and non-technical events designed to enhance your skills and showcase your talents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Technical Events */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">Technical Events</CardTitle>
                <CardDescription className="text-foreground/80">
                  Showcase your technical prowess and problem-solving skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Paper Presentation",
                      icon: "📄",
                      members: "1-2 Members",
                      details: "(12-15 Slides)",
                      place: "SEMINAR HALL",
                      description: "Present your research findings, technical innovations, or emerging technology concepts through a professional presentation. Topics can cover AI/ML, blockchain, IoT, cybersecurity, software engineering, web development, mobile computing, or any cutting-edge technology. Presentations should be well-researched, technically sound, and include practical applications. Judges will evaluate based on content quality, presentation skills, technical depth, innovation, and Q&A handling. Time limit: 8-10 minutes plus 2-3 minutes for questions. Visual aids and demonstrations are encouraged."
                    },
                    {
                      name: "Project Presentation",
                      icon: "💻",
                      members: "3-4 Members",
                      details: "",
                      place: "AUDITORIUM",
                      description: "Showcase your completed software/hardware projects with live demonstrations. Projects can include web applications, mobile apps, desktop software, embedded systems, IoT devices, games, or any innovative technical solution. Teams must present the problem statement, solution approach, technical architecture, implementation details, challenges faced, and future enhancements. Demonstration of working prototype is mandatory. Evaluation criteria include innovation, technical complexity, user interface, functionality, code quality, teamwork, and presentation clarity. Time limit: 12-15 minutes including demo and Q&A."
                    },
                    {
                      name: "Code Debugging",
                      icon: "🐛",
                      members: "1-2 Members",
                      details: "",
                      place: "CC2",
                      description: "Test your analytical and problem-solving skills by identifying, analyzing, and fixing logical errors, syntax errors, and runtime issues in provided code snippets. Programming languages may include C, C++, Java, Python, JavaScript, or pseudo-code. Participants will receive code samples with intentional bugs and must provide corrected versions with explanations. Types of errors include infinite loops, memory leaks, incorrect algorithms, wrong data structures, improper variable usage, and logical mistakes. Time limit: 45-60 minutes. Points awarded for correct identification, proper fixes, and clear explanations of the debugging process."
                    },
                    {
                      name: "Technical Quiz",
                      icon: "🧠",
                      members: "1-2 Members",
                      details: "",
                      place: "CC2",
                      description: "Comprehensive knowledge test covering computer science fundamentals, programming concepts, current technology trends, and industry awareness. Topics include data structures & algorithms, operating systems, database management, computer networks, software engineering, object-oriented programming, web technologies, mobile development, artificial intelligence, machine learning, cybersecurity, cloud computing, and latest tech news. Question formats include multiple choice, fill-in-the-blanks, true/false, and short answers. Rapid-fire rounds test quick thinking. Total questions: 50-75. Time limit: 60-90 minutes. Bonus points for innovative answers and real-world applications."
                    },
                    {
                      name: "Poster Designing",
                      icon: "🎨",
                      members: "Individual",
                      details: "",
                      place: "CC1",
                      description: "Design creative and informative posters on cutting-edge technical topics, combining artistic creativity with technical accuracy. Themes can include emerging technologies, future of computing, digital transformation, tech innovations, environmental technology, or social impact of technology. Posters should be visually appealing, well-researched, informative, and technically accurate. Use of graphics, charts, infographics, and creative layouts is encouraged. Size: A1 or A2 format. Evaluation based on creativity, technical content, visual appeal, originality, research quality, and message clarity. Digital tools or hand-drawing both accepted. Time limit: 2-3 hours for on-spot creation."
                    }
                  ].map((event, index) => (
                    <div key={index} className="p-3 bg-background/30 rounded-lg border border-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{event.icon}</span>
                          <span className="font-medium text-foreground/90">{event.name}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          type="button"
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleEventDescription(event.name); }}
                          className="h-6 px-2 text-xs"
                        >
                          {expandedEvents[event.name] ? (
                            <>
                              <ChevronUp className="w-3 h-3 mr-1" />
                              Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 mr-1" />
                              More
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="ml-11 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">
                            {event.members}
                          </span>
                          {event.details && (
                            <span className="text-xs text-foreground/60">
                              {event.details}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Click-based Description */}
                      {expandedEvents[event.name] && (
                        <div className="mt-3 p-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg">
                          {event.place && (
                            <p className="text-sm text-foreground/90 leading-relaxed mb-2"><span className="font-bold">PLACE:</span> {event.place}</p>
                          )}
                          <p className="text-sm text-foreground/90 leading-relaxed">{event.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Non-Technical Events */}
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">Non-Technical Events</CardTitle>
                <CardDescription className="text-foreground/80">
                  Express your creativity and showcase your diverse talents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-background/30 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎭</span>
                        <span className="font-medium text-foreground/90">Talent Show</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpandedTalentShow(!expandedTalentShow); }}
                        className="h-6 px-2 text-xs"
                      >
                        {expandedTalentShow ? (
                          <>
                            <ChevronUp className="w-3 h-3 mr-1" />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3 mr-1" />
                            More
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="ml-11">
                      <span className="text-xs px-2 py-1 bg-destructive/20 text-destructive rounded-full font-medium">
                        No Group Dance
                      </span>
                    </div>

                    {/* Click-based Description */}
                    {expandedTalentShow && (
                      <div className="mt-3 p-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg">
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          Express your unique individual talents and creativity! Accepted performances include: vocal singing (any genre), musical instruments (guitar, keyboard, drums, flute, etc.), solo dance (classical, western, folk), stand-up comedy, poetry recitation, storytelling, beatboxing, magic tricks, mimicry, mono-acting, or any other creative solo performance. Group dance is strictly prohibited, but all other individual talents are welcomed and encouraged. Time limit: 3-5 minutes per performance. Participants may use backing tracks or instrumental music. Evaluation criteria include creativity, stage presence, audience engagement, technical skill, and entertainment value. Prizes for most creative, most entertaining, and best overall performance!
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground/80 italic">
                      Show off your unique talents, from singing to stand-up comedy and more!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8N9EUpRE4TWSNefQga81P6-jIXar_pekRxXoVinc6yCOn9g/viewform?usp=header" target="_blank" rel="noopener noreferrer">Register for Events</a>
            </Button>
          </div>

          {/* Prizes and Certificates Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-semibold text-neon-purple mb-3">Exciting Prizes</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Win amazing prizes in our competitions and events! certificates of merit,
                  and recognition for outstanding performances await the winners.
                </p>
              </CardContent>
            </Card>
            <Card className="glow-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-semibold text-neon-blue mb-3">E-Certificates</h4>
                <p className="text-foreground/80 leading-relaxed">
                  All participants receive digital certificates for participation! Winners get special
                  achievement certificates. Build your portfolio with our official certifications.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="text-center py-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-bold">Chief Guest</h3>
              </div>
              <div className="mb-6 flex items-center justify-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                  alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                  className="w-8 h-8 object-contain"
                />
                <p className="text-lg font-semibold gradient-text">
                  AL-AMEEN ENGINEERING COLLEGE
                </p>
              </div>
            </CardContent>
          </Card>
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
                <span className="text-xl font-bold gradient-text">WEBRANIA</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-foreground/60">A CSE Department Association</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/60 hover:text-primary"
                onClick={() => window.location.href = 'mailto:aec.webrania@gmail.com'}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 gradient-text">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:aec.webrania@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                    aec.webrania@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                    alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-foreground/80">AL-AMEEN ENGINEERING COLLEGE</span>
                </div>
              </div>
              <p className="text-xs text-foreground/70 mt-4 inline-block border border-primary/20 rounded px-2 py-1">⭐ Credits: WEBRANIA CSE Association</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 gradient-text">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-foreground/80 hover:text-primary transition-colors">About</a>
                <a href="#vision" className="block text-foreground/80 hover:text-primary transition-colors">Vision</a>
                <a href="#mission" className="block text-foreground/80 hover:text-primary transition-colors">Mission</a>
                <a href="#contact" className="block text-foreground/80 hover:text-primary transition-colors">Contact</a>
                <a href="#events" className="block text-foreground/80 hover:text-primary transition-colors">Events</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 text-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
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
