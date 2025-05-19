
import PortfolioGrid from "@/components/PortfolioGrid";

const allProjects = [
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
  },
  {
    id: 4,
    title: "Creature Animation",
    category: "character",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1400&q=80",
    link: "/work/creature-animation"
  },
  {
    id: 5,
    title: "Walk Cycle Study",
    category: "animation",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    link: "/work/walk-cycle"
  },
  {
    id: 6,
    title: "3D Animated Short",
    category: "film",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    link: "/work/animated-short"
  }
];

const Work = () => {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of 3D animation projects, including character work, animations, 
            and film production pieces.
          </p>
        </div>
        
        <PortfolioGrid projects={allProjects} showFilters={true} />
      </div>
    </main>
  );
};

export default Work;
