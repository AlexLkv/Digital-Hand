import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PreorderForm } from "@/components/preorder-form"
import { ProductImage } from "@/components/product-image"
import { HeroBackground } from "@/components/hero-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 min-h-screen relative overflow-hidden">
        <HeroBackground />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Цифровая рука
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-zinc-300">
            Тактильный рукав с микротоками, имитирующими прикосновение, и приложение для видеозвонков,
            позволяющее передавать тактильные сигналы на расстоянии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#preorder">Оформить предзаказ</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-purple-600 text-purple-600 hover:bg-purple-950">
              <Link href="#concept">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Концепция</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8 text-zinc-300">
              Тактильный рукав с микротоками, имитирующими прикосновение, и приложение для видеозвонков,
              позволяющее передавать тактильные сигналы на расстоянии.
            </p>
            <div className="rounded-lg overflow-hidden mb-8 bg-zinc-800 p-3">
              <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
                <div className="text-zinc-400 text-center p-8">
                  <p className="text-xl mb-4">Демонстрационное видео</p>
                  <p>Видео будет доступно в ближайшее время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Актуальность проблемы</h2>
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>70% россиян в возрасте от 18 до 35 лет живут отдельно от родителей.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>67% тех, кто работает вдали от семьи, испытывают эмоциональные трудности.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Молодые пары боятся переезжать из-за потери контакта с близкими.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Видеозвонки (72%) доминируют в качестве способа общения, но не обеспечивают физического контакта.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Целевая аудитория</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-800 rounded-xl p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-purple-500">Молодые семьи</h3>
              <p className="text-zinc-300 mb-2">20-35 лет</p>
              <p className="text-zinc-400">Долгосрочная аренда или покупка</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-purple-500">Студенты</h3>
              <p className="text-zinc-300 mb-2">18-27 лет</p>
              <p className="text-zinc-400">Скидки на аренду</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-purple-500">Пожилые люди</h3>
              <p className="text-zinc-300 mb-2">60+ лет</p>
              <p className="text-zinc-400">Покупка с поддержкой детей, упрощенный интерфейс</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12 bg-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-500">География</h3>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Сменные регионы (Норильск, Тюмень)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Крупные города (Москва, Санкт—Петербург - студенты)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Пригороды (пожилые люди)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Продукт и технология</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <ProductImage type="sleeve" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-500">Тактильный рукав</h3>
                <p className="text-zinc-300">Передает прикосновения посредством микротоков</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <ProductImage type="app" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-500">Приложение для видеозвонков</h3>
                <p className="text-zinc-300">Интегрировано с устройством</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <ProductImage type="rental" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-500">Сеть пунктов проката</h3>
                <p className="text-zinc-300">В торговых центрах, на вокзалах и в коворкингах</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-500 text-center">Принцип действия</h3>
            <ol className="space-y-4 text-zinc-300">
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 shrink-0">1</span>
                <span>Выбор между арендой или покупкой.</span>
              </li>
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 shrink-0">2</span>
                <span>Регистрация в приложении, подключение Bluetooth-кабеля.</span>
              </li>
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 shrink-0">3</span>
                <span>Отрегулируйте силу нажатия.</span>
              </li>
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 shrink-0">4</span>
                <span>Во время видеозвонка передаются тактильные сигналы.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Конкуренты и преимущества</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-500">Прямые конкуренты</h3>
              <p className="text-zinc-300">Вибробраслеты, перчатки HaptX (дорогие и громоздкие).</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-500">Косвенные конкуренты</h3>
              <p className="text-zinc-300">Мессенджеры, очки виртуальной реальности (не передают тактильные ощущения).</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-purple-500 text-center">Преимущества Digital Hand</h3>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Доступность:</span> низкая стоимость аренды по сравнению с 300 тысячами рублей у HaptX.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Простота:</span> Подключение за 2 минуты.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Эмоциональная ценность:</span> Не просто технология, а расширение человеческих связей.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section id="finance" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Финансовая модель</h2>
          <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Цена устройства:</span> 7000 рублей.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Стоимость:</span> ~1700 рублей.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Ожидаемый доход:</span> 1 млн рублей в месяц (150 клиентов).
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Срок окупаемости:</span> 2 месяца.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600 font-bold">•</span>
                <div>
                  <span className="font-bold">Первоначальные инвестиции:</span> 849 300 рублей (оборудование, серверы, реклама).
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Preorder Form Section */}
      <section id="preorder" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Оформить предзаказ</h2>
          <PreorderForm />
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Заключение</h2>
          <p className="text-xl text-center max-w-3xl mx-auto text-zinc-300">
            Digital Hand - это инновационное решение, которое объединяет людей посредством тактильного контакта.
            Цель состоит в том, чтобы через год каждый мог почувствовать своих близких даже на расстоянии.
          </p>
        </div>
      </section>
    </div>
  )
}
