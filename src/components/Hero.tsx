
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-700/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating 3D-style shapes */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded bg-primary/80 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-400/80 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-lg bg-indigo-500/80 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-sm bg-cyan-400/80 animate-float" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-gradient">Character animator</span>
          <br />
          <span className="text-white">& 3D artist</span>
        </h1>
        
        <p className="mt-6 text-xl max-w-2xl mx-auto text-muted-foreground">
          Bringing characters to life through animation.
          Creating immersive worlds and compelling stories.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/work">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#featured-work"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <span>Scroll Down</span>
          <svg className="mt-2 animate-bounce" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
