
import { Separator } from "@/components/ui/separator";

const About = () => {
  const skills = [
    "Character Animation", 
    "Motion Capture", 
    "Rigging", 
    "3D Modeling", 
    "Texturing", 
    "Lighting", 
    "Rendering", 
    "Storytelling", 
    "Compositing"
  ];

  const tools = [
    "Maya", 
    "Blender", 
    "Cinema 4D", 
    "ZBrush", 
    "Houdini", 
    "Substance Painter", 
    "Nuke", 
    "After Effects", 
    "Unreal Engine"
  ];

  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="md:col-span-1">
              <div className="sticky top-28">
                <div className="aspect-square overflow-hidden rounded-lg bg-secondary/50">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Contact</h3>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm a passionate 3D character animator and film production artist with over 8 years of experience bringing digital characters to life. My work focuses on creating authentic emotional performances and visually striking animations for film, games, and interactive media.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                With a background in traditional animation principles and cutting-edge digital techniques, I bridge the gap between artistic expression and technical execution to tell compelling stories through movement.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-3xl font-semibold mb-6">Experience</h2>
              
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">Senior 3D Animator</h3>
                      <p className="text-primary">Animation Studio XYZ</p>
                    </div>
                    <span className="text-muted-foreground">2020 - Present</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Created character animations for award-winning animated features and shorts. Specialized in facial expressions and emotional performances.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">Character Animator</h3>
                      <p className="text-primary">Game Development Inc.</p>
                    </div>
                    <span className="text-muted-foreground">2017 - 2020</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Designed and animated characters for AAA game titles. Collaborated with motion capture team to refine performances.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">3D Animator</h3>
                      <p className="text-primary">Visual Effects Co.</p>
                    </div>
                    <span className="text-muted-foreground">2015 - 2017</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Created creature animations and character movements for visual effects in major film productions.
                  </p>
                </div>
              </div>
              
              <Separator className="my-10" />
              
              <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-medium mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Software & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator className="my-10" />
              
              <h2 className="text-3xl font-semibold mb-6">Education</h2>
              
              <div>
                <h3 className="text-xl font-medium">BFA in Animation</h3>
                <p className="text-primary">School of Visual Arts</p>
                <p className="text-muted-foreground mt-1">2011 - 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
