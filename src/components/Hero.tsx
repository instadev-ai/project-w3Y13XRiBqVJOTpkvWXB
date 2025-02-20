import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary mt-2">Your Name</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
              A passionate developer crafting beautiful digital experiences. 
              I specialize in building modern web applications with cutting-edge technologies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Read My Blog
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2">
        <div className="relative h-full">
          <div className="absolute right-0 w-screen bg-gray-50 h-full transform translate-x-1/2 -skew-x-12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;