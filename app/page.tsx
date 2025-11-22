'use client'

import { useState } from 'react'
import { Briefcase, Users, TrendingUp, DollarSign, Search, Star, MapPin, Phone, Mail } from 'lucide-react'

interface Service {
  id: number
  title: string
  provider: string
  price: number
  rating: number
  reviews: number
  category: string
  location: string
  image: string
}

export default function Home() {
  const [services] = useState<Service[]>([
    {
      id: 1,
      title: 'تصميم مواقع احترافية',
      provider: 'أحمد بن علي',
      price: 15000,
      rating: 4.9,
      reviews: 127,
      category: 'تصميم',
      location: 'الجزائر العاصمة',
      image: '🎨'
    },
    {
      id: 2,
      title: 'كتابة محتوى تسويقي',
      provider: 'فاطمة الزهراء',
      price: 8000,
      rating: 4.8,
      reviews: 89,
      category: 'كتابة',
      location: 'وهران',
      image: '✍️'
    },
    {
      id: 3,
      title: 'تطوير تطبيقات الموبايل',
      provider: 'محمد الأمين',
      price: 35000,
      rating: 5.0,
      reviews: 203,
      category: 'برمجة',
      location: 'قسنطينة',
      image: '📱'
    },
    {
      id: 4,
      title: 'تسويق إلكتروني',
      provider: 'سارة بوعلام',
      price: 12000,
      rating: 4.7,
      reviews: 156,
      category: 'تسويق',
      location: 'عنابة',
      image: '📊'
    },
    {
      id: 5,
      title: 'تصوير فوتوغرافي محترف',
      provider: 'كريم الدين',
      price: 10000,
      rating: 4.9,
      reviews: 92,
      category: 'تصوير',
      location: 'الجزائر العاصمة',
      image: '📸'
    },
    {
      id: 6,
      title: 'استشارات قانونية',
      provider: 'ليلى مرابط',
      price: 6000,
      rating: 4.8,
      reviews: 134,
      category: 'استشارات',
      location: 'سطيف',
      image: '⚖️'
    },
    {
      id: 7,
      title: 'ترجمة احترافية',
      provider: 'يوسف بن يحيى',
      price: 5000,
      rating: 4.9,
      reviews: 178,
      category: 'ترجمة',
      location: 'وهران',
      image: '🌐'
    },
    {
      id: 8,
      title: 'تصميم شعارات',
      provider: 'نورة العمري',
      price: 7000,
      rating: 4.7,
      reviews: 145,
      category: 'تصميم',
      location: 'تلمسان',
      image: '🎯'
    }
  ])

  const [stats] = useState({
    totalRevenue: 2847500,
    activeServices: 1243,
    totalUsers: 5678,
    todayEarnings: 127500
  })

  const categories = ['الكل', 'برمجة', 'تصميم', 'كتابة', 'تسويق', 'تصوير', 'استشارات', 'ترجمة']
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const filteredServices = selectedCategory === 'الكل'
    ? services
    : services.filter(s => s.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-4">
              <Briefcase className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">خدماتي</h1>
            </div>
            <div className="flex items-center space-x-reverse space-x-4">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                تسجيل الدخول
              </button>
              <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">الأرباح اليوم</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayEarnings.toLocaleString()} دج</p>
              </div>
              <DollarSign className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">إجمالي الإيرادات</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue.toLocaleString()} دج</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">الخدمات النشطة</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeServices.toLocaleString()}</p>
              </div>
              <Briefcase className="w-12 h-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">إجمالي المستخدمين</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <Users className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="relative">
            <Search className="absolute right-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن الخدمة التي تحتاجها..."
              className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{service.image}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.provider}</p>

                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="mr-1 text-sm font-semibold">{service.rating}</span>
                  <span className="text-gray-500 text-sm">({service.reviews} تقييم)</span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 ml-1" />
                  {service.location}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">{service.price.toLocaleString()} دج</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm">
                    اطلب الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Model Info */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">نموذج الربح</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">عمولة 10% على كل خدمة</h3>
              <p className="opacity-90">نحصل على 10% من قيمة كل خدمة مباعة على المنصة</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">رسوم العضوية المميزة</h3>
              <p className="opacity-90">اشتراك شهري 5,000 دج للبائعين المميزين</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">رسوم الإعلانات</h3>
              <p className="opacity-90">خيارات إعلانية مدفوعة لظهور أفضل</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">كيف يعمل الموقع؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">ابحث عن الخدمة</h3>
              <p className="text-gray-600">تصفح آلاف الخدمات المختلفة واختر ما يناسبك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">اطلب وادفع</h3>
              <p className="text-gray-600">اطلب الخدمة وادفع بأمان عبر المنصة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">استلم العمل</h3>
              <p className="text-gray-600">احصل على عملك المنجز بجودة عالية</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-12 rounded-xl shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-4">ابدأ الربح اليوم!</h2>
          <p className="text-xl mb-6 opacity-90">انضم إلى آلاف مقدمي الخدمات واربح المال من مهاراتك</p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            سجل الآن وابدأ البيع
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">خدماتي</h3>
              <p className="text-gray-400">منصة جزائرية رائدة لبيع وشراء الخدمات المختلفة</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">من نحن</a></li>
                <li><a href="#" className="hover:text-white">كيف يعمل</a></li>
                <li><a href="#" className="hover:text-white">الأسعار</a></li>
                <li><a href="#" className="hover:text-white">المدونة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-white">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 ml-2" />
                  <span>+213 555 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 ml-2" />
                  <span>info@khadamati.dz</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 ml-2" />
                  <span>الجزائر العاصمة، الجزائر</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 خدماتي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
