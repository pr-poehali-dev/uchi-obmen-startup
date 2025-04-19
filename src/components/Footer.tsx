import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-muted-foreground">
              Мобильное приложение для обмена учебными материалами и заметками среди учеников
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">О нас</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-skyblue-dark">О проекте</Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-skyblue-dark">Команда</Link>
              </li>
              <li>
                <Link to="/career" className="text-muted-foreground hover:text-skyblue-dark">Карьера</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-skyblue-dark">FAQ</Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-skyblue-dark">Помощь</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-skyblue-dark">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Политика</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-skyblue-dark">Условия использования</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-skyblue-dark">Политика конфиденциальности</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} УчиОбмен. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;