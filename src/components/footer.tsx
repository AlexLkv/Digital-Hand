import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital <span className="text-purple-500">Hand</span></h3>
            <p className="text-zinc-400 mb-4">
              Тактильный рукав с микротоками, имитирующими прикосновение, для передачи тактильных сигналов на расстоянии.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="#concept" className="hover:text-purple-400 transition-colors">
                  Концепция
                </Link>
              </li>
              <li>
                <Link href="#problem" className="hover:text-purple-400 transition-colors">
                  Проблема
                </Link>
              </li>
              <li>
                <Link href="#product" className="hover:text-purple-400 transition-colors">
                  Продукт
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="hover:text-purple-400 transition-colors">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="#preorder" className="hover:text-purple-400 transition-colors">
                  Предзаказ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Email: info@digitalhand.ru</li>
              <li>Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Digital Hand. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
