import FeatureCard from "@/components/FeatureCard";
import { BookMarked, Share2, Users, Shield, MessageSquare, Search } from "lucide-react";

const Features = () => {
  return (
    <div className="container py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Почему УчиОбмен?</h2>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Наше приложение разработано специально для учеников, чтобы сделать обмен учебными материалами максимально удобным
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard 
          title="Обмен заметками" 
          description="Делитесь конспектами, заметками и учебными материалами в пару кликов"
          icon={Share2}
        />
        <FeatureCard 
          title="Библиотека знаний" 
          description="Сохраняйте полезные материалы в личной библиотеке для быстрого доступа"
          icon={BookMarked}
        />
        <FeatureCard 
          title="Учебные группы" 
          description="Создавайте группы по предметам для эффективного взаимодействия"
          icon={Users}
        />
        <FeatureCard 
          title="Удобный поиск" 
          description="Находите нужные материалы по темам, предметам или авторам"
          icon={Search}
        />
        <FeatureCard 
          title="Обсуждения" 
          description="Комментируйте и обсуждайте учебные материалы внутри приложения"
          icon={MessageSquare}
        />
        <FeatureCard 
          title="Безопасность" 
          description="Ваши материалы защищены и доступны только тем, кому вы разрешите"
          icon={Shield}
        />
      </div>
    </div>
  );
};

export default Features;