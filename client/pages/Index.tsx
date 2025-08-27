import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Sparkles
} from "lucide-react";

export default function Index() {
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
              INAUGURATION FUNCTION
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Welcome to{" "}
              <span className="gradient-text glow-text">WEBRANIA</span>
            </h1>

            <p className="text-lg md:text-xl text-primary/80 mb-4 font-semibold">
              "A Association of CSE Department"
            </p>

            <p className="text-lg md:text-xl text-primary/80 mb-6 font-semibold">
              AL-AMEEN ENGINEERING COLLEGE (AUTONOMOUS)
            </p>

            <div className="text-center mb-6">
              <Badge className="mb-2 bg-neon-green/20 text-neon-green border-neon-green/30">
                NAAC "A" Grade Accredited
              </Badge>
              <p className="text-sm text-foreground/70">
                Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building a strong and united Computer Science community where students, seniors, 
              and faculty collaborate to share knowledge, solve challenges, and create opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-border text-lg px-8 py-6"
                onClick={() => window.location.href = 'mailto:aec.webrania@gmail.com?subject=Join Webrania Community'}
              >
                Join Our Community
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
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
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic mb-6">
                "WEBRANIA – The CSE Department Association, is formed by students for students.
                We aim to create a platform where every member can learn, innovate, and grow together.
                From technical events to cultural programs, from academic support to problem-solving
                with management, WEBRANIA ensures that every student feels connected, supported, and inspired."
              </blockquote>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2">🏆</span>
                    <h4 className="font-semibold text-neon-purple">Exciting Prizes</h4>
                  </div>
                  <p className="text-sm text-foreground/80">Win amazing prizes in our competitions and events!</p>
                </div>
                <div className="p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2">🎓</span>
                    <h4 className="font-semibold text-neon-blue">Certificates</h4>
                  </div>
                  <p className="text-sm text-foreground/80">All participants receive E-certificates for participation!</p>
                </div>
              </div>
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
                    { name: "Paper Presentation", icon: "📄", members: "1-2 Members", details: "(12-15 Slides)" },
                    { name: "Project Presentation", icon: "💻", members: "3-4 Members", details: "" },
                    { name: "Code Debugging", icon: "🐛", members: "1-2 Members", details: "" },
                    { name: "Technical Quiz", icon: "🧠", members: "1-2 Members", details: "" },
                    { name: "Poster Designing", icon: "🎨", members: "Individual", details: "" }
                  ].map((event, index) => (
                    <div key={index} className="p-3 bg-background/30 rounded-lg border border-primary/10">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{event.icon}</span>
                        <span className="font-medium text-foreground/90">{event.name}</span>
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
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">🎭</span>
                      <span className="font-medium text-foreground/90">Talent Show</span>
                    </div>
                    <div className="ml-11">
                      <span className="text-xs px-2 py-1 bg-destructive/20 text-destructive rounded-full font-medium">
                        No Group Dance
                      </span>
                    </div>
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

          <Card className="max-w-2xl mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="text-center py-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-bold">Chief Guest</h3>
              </div>
              <p className="text-lg font-semibold gradient-text mb-6">
                AL-AMEEN ENGINEERING COLLEGE
              </p>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'mailto:aec.webrania@gmail.com?subject=Event Registration'}
              >
                Register for Events
              </Button>
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
                alt="Webrania Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">Webrania</span>
                <span className="text-sm text-foreground/60">CSE Department Association</span>
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
                  <span className="text-foreground/80">AL-AMEEN ENGINEERING COLLEGE</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 gradient-text">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-foreground/80 hover:text-primary transition-colors">About</a>
                <a href="#vision" className="block text-foreground/80 hover:text-primary transition-colors">Vision</a>
                <a href="#mission" className="block text-foreground/80 hover:text-primary transition-colors">Mission</a>
                <a href="#events" className="block text-foreground/80 hover:text-primary transition-colors">Events</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 text-center">
            <p className="text-foreground/60">
              © 2024 Webrania - CSE Department Association, AL-AMEEN ENGINEERING COLLEGE. Building the future together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
