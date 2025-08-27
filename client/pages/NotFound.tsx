import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-md mx-auto glow-card bg-card/50 backdrop-blur-sm border-primary/20 text-center">
            <CardContent className="py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <h2 className="text-xl font-semibold mb-4 gradient-text">Page Not Found</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                The page you're looking for doesn't exist yet.
                We're constantly building new features for the WEBRANIA community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
