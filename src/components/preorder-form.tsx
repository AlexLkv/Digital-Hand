"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PreorderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "basic",
    consent: false
  })

  const [orderCount, setOrderCount] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.consent) {
      alert("Пожалуйста, заполните все обязательные поля")
      return
    }

    // Increment order count
    setOrderCount(prev => prev + 1)

    // Show success message
    setIsSubmitted(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      model: "basic",
      consent: false
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="max-w-2xl mx-auto bg-zinc-800 rounded-xl p-8">
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-900/40 border border-green-700 rounded-lg text-green-400">
          Ваш предзаказ успешно оформлен! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div>
          <label htmlFor="model" className="block mb-2 font-medium">Модель</label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="basic">Базовая модель - 7000 ₽</option>
            <option value="premium">Премиум модель - 12000 ₽</option>
            <option value="rental">Аренда - от 500 ₽/месяц</option>
          </select>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2"
            required
          />
          <label htmlFor="consent" className="text-sm text-zinc-300">
            Я согласен на обработку персональных данных
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
        >
          Оформить предзаказ
        </Button>

        <div className="text-center mt-4 text-zinc-300">
          Уже оформлено предзаказов: <span className="font-bold text-purple-500">{orderCount}</span>
        </div>
      </form>
    </div>
  )
}
