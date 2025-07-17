import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Mountain" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Горные Приключения</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Забронировать тур
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/79314188-1524-49df-b21f-f876d0e0e02b.jpg')`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Покоряй Вершины
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in">
            Профессиональные горные экскурсии с опытными гидами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Calendar" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent">О нашей компании</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ваш путь к горным вершинам
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы - команда профессиональных горных гидов с более чем 15-летним опытом. 
                Наша миссия - открыть для вас красоту и величие горных пейзажей, 
                обеспечив максимальную безопасность и комфорт.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">500+</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mountain" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">50+</div>
                    <div className="text-sm text-muted-foreground">Покоренных вершин</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">15+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">100%</div>
                    <div className="text-sm text-muted-foreground">Безопасность</div>
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/02748b2d-6080-41a0-a812-0a6849bd93bc.jpg" 
                alt="Горные экскурсии" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Рейтинг клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent">Популярные туры</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Выберите свое приключение
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От однодневных прогулок до многодневных экспедиций - у нас есть маршруты для любого уровня подготовки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/img/5a7cee8f-220e-48a9-8b00-aaeed7a51e83.jpg" 
                  alt="Восхождение на Эльбрус" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Хит</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Восхождение на Эльбрус</span>
                  <span className="text-primary font-bold">от 45 000 ₽</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  7-дневное восхождение на высочайшую вершину Европы с полным сопровождением
                </p>
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>7 дней</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span>До 8 человек</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                    <span>Сложно</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            {/* Tour Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/img/79314188-1524-49df-b21f-f876d0e0e02b.jpg" 
                  alt="Треккинг в Домбае" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">Популярно</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Треккинг в Домбае</span>
                  <span className="text-primary font-bold">от 15 000 ₽</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  3-дневный поход по живописным тропам с ночевкой в горном приюте
                </p>
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>3 дня</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span>До 12 человек</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Activity" size={16} className="text-muted-foreground" />
                    <span>Средне</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            {/* Tour Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/img/02748b2d-6080-41a0-a812-0a6849bd93bc.jpg" 
                  alt="Однодневный поход" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">Легко</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Однодневный поход</span>
                  <span className="text-primary font-bold">от 3 500 ₽</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Знакомство с горами для новичков. Легкий маршрут с потрясающими видами
                </p>
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>1 день</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span>До 15 человек</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Zap" size={16} className="text-muted-foreground" />
                    <span>Легко</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Что говорят о нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Анна Петрова</div>
                  <div className="text-sm text-muted-foreground">Москва</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Невероятное путешествие! Профессиональные гиды, потрясающие виды. 
                Восхождение на Эльбрус стало незабываемым опытом в моей жизни."
              </p>
            </Card>

            {/* Review 2 */}
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Дмитрий Соколов</div>
                  <div className="text-sm text-muted-foreground">Санкт-Петербург</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Отличная организация, безопасность на высшем уровне. 
                Треккинг в Домбае превзошел все ожидания. Рекомендую всем!"
              </p>
            </Card>

            {/* Review 3 */}
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Елена Волкова</div>
                  <div className="text-sm text-muted-foreground">Казань</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Первый раз в горах, было немного страшно. Но гиды так хорошо все объяснили, 
                что чувствовала себя в полной безопасности. Спасибо за заботу!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы к своему горному приключению?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами и забронируйте незабываемое путешествие
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={24} className="text-primary" />
                <span className="text-xl font-bold">Горные Приключения</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональные горные экскурсии и восхождения с опытными гидами
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@mountain-adventures.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Кавказские горы, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Восхождения на вершины</li>
                <li>Треккинг туры</li>
                <li>Однодневные походы</li>
                <li>Обучение альпинизму</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Горные Приключения. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;