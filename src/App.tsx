import { useState } from 'react';
import './App.css';
import {
  Cpu,
  Wrench,
  Zap,
  Snowflake,
  Sun,
  Leaf,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  Menu,
  X,
  CircuitBoard,
  Shield,
  Clock,
  Award,
  Eye,
  Monitor,
  Settings
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const services = [
    {
      icon: Cpu,
      title: 'Reparación de Placas Electrónicas',
      description: 'Servicio especializado en diagnóstico y reparación de placas madre y circuitos electrónicos. Soporte para equipos de diversas marcas y modelos.'
    },
    {
      icon: Zap,
      title: 'Equipos Inverter AC',
      description: 'Service y diagnóstico de equipos Inverter de aire acondicionado. Reparación de placas de control y potencia.'
    },
    {
      icon: Sun,
      title: 'Energía Solar',
      description: 'Reparación de sistemas fotovoltaicos, inversores solares y controladores de carga. Mantenimiento preventivo y correctivo.'
    },
    {
      icon: Snowflake,
      title: 'Fabricadoras de Hielo y Helados',
      description: 'Reparación de máquinas fabricadoras de hielo y helados. Placas electrónicas y sistemas de control.'
    },
    {
      icon: Leaf,
      title: 'Sistemas de Hidroponía',
      description: 'Servicio técnico para equipos de siembra hidropónica. Automatización y control de sistemas de cultivo.'
    },
    {
      icon: CircuitBoard,
      title: 'Fabricación de Prototipos',
      description: 'Diseño y fabricación de prototipos electrónicos personalizados. Interfaces de control y sistemas embebidos.'
    },
    {
      icon: Eye,
      title: 'Realidad Aumentada',
      description: 'Desarrollo de experiencias interactivas con realidad aumentada para formación técnica, mantenimiento y visualización de equipos.'
    },
    {
      icon: Monitor,
      title: 'Desarrollo de SPAs',
      description: 'Aplicaciones web de página única (SPA) modernas y reactivas. Sistemas de gestión y control para monitoreo de equipos.'
    },
    {
      icon: Settings,
      title: 'Diseñamos tu Sistema a Medida',
      description: 'Soluciones personalizadas para tus necesidades específicas. Desarrollo de sistemas integralmente diseñados para tu operación.'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Servicio Exclusivo para Profesionales',
      description: 'Atención especializada para técnicos, empresas del rubro y entidades con personal técnico propio.'
    },
    {
      icon: Clock,
      title: 'Diagnóstico Rápido',
      description: 'Evaluación técnica precisa y eficiente para identificar fallas y proponer soluciones.'
    },
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Trayectoria en reparación de equipos industriales y sistemas electrónicos especializados.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">iOSSYS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {['inicio', 'servicios', 'nosotros', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1">
            {['inicio', 'servicios', 'nosotros', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-900 text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Servicio Técnico Especializado
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Reparación de
                <span className="text-blue-900 block">Plaquetas Electrónicas</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Servicio técnico profesional especializado en reparación de placas electrónicas,
                equipos Inverter y sistemas de energía. Soluciones técnicas para profesionales y empresas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5492215710797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Ver Servicios
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                    <Cpu className="w-8 h-8 text-blue-600" />
                    <div className="text-sm font-semibold text-slate-900">Placas Electrónicas</div>
                    <div className="text-xs text-slate-500">Reparación profesional</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                    <Zap className="w-8 h-8 text-blue-600" />
                    <div className="text-sm font-semibold text-slate-900">Equipos Inverter</div>
                    <div className="text-xs text-slate-500">Aire acondicionado</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                    <Sun className="w-8 h-8 text-blue-600" />
                    <div className="text-sm font-semibold text-slate-900">Energía Solar</div>
                    <div className="text-xs text-slate-500">Sistemas fotovoltaicos</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                    <Wrench className="w-8 h-8 text-blue-600" />
                    <div className="text-sm font-semibold text-slate-900">Prototipos</div>
                    <div className="text-xs text-slate-500">Fabricación propia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Nuestros Servicios</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Soluciones Técnicas Integrales
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos servicios de reparación y fabricación para equipos electrónicos industriales
              y sistemas especializados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-900 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 text-lg font-bold">!</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Nota Importante</h4>
                <p className="text-sm text-amber-800">
                  <strong>No se realizan reparaciones a particulares.</strong> Nuestro servicio está
                  exclusivamente orientado a técnicos capacitados, empresas del rubro y entidades
                  con personal técnico propio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Sobre Nosotros</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Experiencia en Servicio Técnico
                </h2>
              </div>

              <p className="text-slate-300 leading-relaxed">
                En <strong className="text-white">iOSSYS</strong> nos especializamos en la reparación
                de equipos electrónicos industriales y sistemas de control. Con sede en La Plata,
                Buenos Aires, atendemos a técnicos profesionales y empresas del rubro con soluciones
                técnicas confiables.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Nuestra área de especialización incluye equipos Inverter de aire acondicionado,
                sistemas de energía solar, máquinas fabricadoras de hielo y helados, sistemas de
                hidroponía, y fabricación de prototipos electrónicos personalizados.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <feature.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</div>
                    <div className="text-xs text-slate-400 mt-1">{feature.title.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Contacto</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Comuníquese con Nosotros
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Estamos disponibles para consultas sobre equipos que no tienen servicio técnico oficial
              en su zona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="https://wa.me/5492215710797"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Phone className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-slate-600">+54 9 221 571-0797</p>
              <p className="text-xs text-slate-400 mt-1">Consultas y turnos</p>
            </a>

            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Ubicación</h3>
              <p className="text-sm text-slate-600">La Plata</p>
              <p className="text-xs text-slate-400 mt-1">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 iOSSYS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <a className='footer' href='https://tvs.ar/' target='_blank'>
        <p>Desarrollado por Teves Tech</p>
        <img src={"https://i.imgur.com/oOd3LQH.png"} alt="Logo"></img>
      </a>
    </div>
  );
}

export default App;
