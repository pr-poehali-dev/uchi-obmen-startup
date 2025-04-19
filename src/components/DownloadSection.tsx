import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <div className="bg-skyblue/10 py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-skyblue p-8 text-skyblue-foreground md:flex-row md:p-12">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Начните обмениваться знаниями уже сегодня</h2>
            <p className="mb-6 max-w-md text-lg opacity-90">
              Присоединяйтесь к тысячам студентов, которые уже используют УчиОбмен для обмена учебными материалами
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white font-semibold text-skyblue-dark hover:bg-white/90">
                <span className="mr-2 text-xl">📱</span>
                App Store
              </Button>
              <Button size="lg" className="bg-white font-semibold text-skyblue-dark hover:bg-white/90">
                <span className="mr-2 text-xl">🤖</span>
                Google Play
              </Button>
            </div>
          </div>
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-4 border-white/30">
            <img 
              src="/placeholder.svg" 
              alt="Мобильное приложение" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;