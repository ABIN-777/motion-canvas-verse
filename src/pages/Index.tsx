
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

const featuredProjects = [
  {
    id: 1,
    title: "Character Rig Animation",
    category: "character",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    link: "/work/character-animation"
  },
  {
    id: 2,
    title: "Robot Animation Test",
    category: "animation",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    link: "/work/robot-animation"
  },
  {
    id: 3,
    title: "Short Film Scene",
    category: "film",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
    link: "/work/short-film"
  }
];

const Index = () => {
  return (
    <main className="pt-0">
      <Hero />
      <PortfolioGrid title="Featured Work" projects={featuredProjects} limit={3} />
      
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's create something <span className="text-gradient">amazing</span> together
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
