
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
};

type PortfolioGridProps = {
  title?: string;
  projects: Project[];
  limit?: number;
  showFilters?: boolean;
};

const PortfolioGrid = ({ title, projects, limit, showFilters = false }: PortfolioGridProps) => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = projects
    .filter(project => filter === 'all' || project.category === filter)
    .slice(0, limit);

  return (
    <section className="py-20" id="featured-work">
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
        )}
        
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
        
        <div className="grid-container">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <Link to={project.link} className="block relative aspect-[16/9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <div>
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {limit && projects.length > limit && (
          <div className="mt-12 text-center">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
