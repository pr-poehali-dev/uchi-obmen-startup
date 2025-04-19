import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e6f4ff_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container py-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Обмен учебными материалами
          <span className="block text-skyblue-dark">стал проще</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          УчиОбмен — мобильное приложение для обмена учебными материалами и заметками. 
          Удобно делитесь знаниями с одноклассниками и друзьями.
        </p>
        
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-skyblue text-skyblue-foreground hover:bg-skyblue-dark">
            <Download className="mr-2 h-5 w-5" />
            Скачать приложение
          </Button>
          <Button size="lg" variant="outline">
            Узнать больше
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative h-[500px] w-[280px] overflow-hidden rounded-3xl border-4 border-skyblue-dark/20 shadow-2xl">
            <img 
              src="/placeholder.svg" 
              alt="Мобильное приложение УчиОбмен" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-skyblue/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;