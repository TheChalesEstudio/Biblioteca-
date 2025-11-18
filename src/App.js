import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoon, 
  faSun, 
  faBook, 
  faSearch, 
  faUser, 
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faHeart,
  faStar,
  faRibbon,
  faCross,
  faHandsPraying,
  faScroll,
  faMicroscope,
  faCode,
  faGraduationCap,
  faShieldHeart,
  faQuoteLeft,
  faQuoteRight,
  faBible,
  faChurch,
  faPray,
  faHistory,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo para los libros
  const books = [
    {
      id: 1,
      title: "El Libro de Enoc",
      description: "Texto antiguo que complementa las escrituras con revelaciones celestiales sobre ángeles y el mundo espiritual.",
      icon: faScroll,
      category: "textos-antiguos",
      ribbon: "Exclusivo",
      color: "#8B4513",
      featured: true
    },
    {
      id: 2,
      title: "Evidencias de la Existencia de Dios",
      description: "Argumentos filosóficos y científicos que demuestran la existencia divina a través de la creación y la razón.",
      icon: faMicroscope,
      category: "filosofia",
      ribbon: "Nuevo",
      color: "#2E8B57",
      featured: true
    },
    {
      id: 3,
      title: "Códigos Bíblicos",
      description: "Descubre los patrones matemáticos y códigos ocultos en el texto sagrado que revelan profecías.",
      icon: faCode,
      category: "estudios",
      ribbon: "Popular",
      color: "#4682B4"
    },
    {
      id: 4,
      title: "Teología Sistemática",
      description: "Estudio profundo y organizado de las doctrinas fundamentales de la fe cristiana.",
      icon: faGraduationCap,
      category: "teologia",
      ribbon: "Clásico",
      color: "#6A5ACD"
    },
    {
      id: 5,
      title: "Evidencia Médica de Jesús",
      description: "Análisis científico de la crucifixión y resurrección desde la perspectiva médica forense.",
      icon: faShieldHeart,
      category: "ciencia",
      ribbon: "Investigación",
      color: "#DC143C"
    },
    {
      id: 6,
      title: "El Propósito de Jesús",
      description: "Exploración del significado profundo de la encarnación y el plan de salvación.",
      icon: faCross,
      category: "cristologia",
      ribbon: "Esencial",
      color: "#FFD700"
    },
    {
      id: 7,
      title: "Filosofía y Fe",
      description: "Diálogo entre la razón filosófica y la revelación divina a través de los siglos.",
      icon: faHistory,
      category: "filosofia",
      ribbon: "Actual",
      color: "#20B2AA"
    },
    {
      id: 8,
      title: "Manuscritos del Mar Muerto",
      description: "Los descubrimientos arqueológicos que confirman la veracidad de las Escrituras.",
      icon: faBookOpen,
      category: "arqueologia",
      ribbon: "Histórico",
      color: "#CD853F"
    }
  ];

  const verses = [
    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna. - Juan 3:16",
    "Yo soy el camino, la verdad y la vida; nadie viene al Padre, sino por mí. - Juan 14:6",
    "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. - Juan 1:1",
    "Pero a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios. - Juan 1:12",
    "Y conoceréis la verdad, y la verdad os hará libres. - Juan 8:32",
    "Jesús le dijo: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. - Juan 11:25"
  ];

  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Simulación de login
    setCurrentUser({ name: "Usuario", email });
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Simulación de registro
    setCurrentUser({ name, email });
    setShowRegister(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const openBook = (bookId) => {
    if (!currentUser) {
      setShowLogin(true);
      return;
    }
    // Aquí iría la lógica para abrir el libro
    alert(`Accediendo al libro: ${books.find(b => b.id === bookId).title}`);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredBooks = books.filter(book => book.featured);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <FontAwesomeIcon icon={faBible} className="logo-icon" />
            <h1>Biblioteca Teológica</h1>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-btn ${activeTab === 'inicio' ? 'active' : ''}`}
              onClick={() => setActiveTab('inicio')}
            >
              <FontAwesomeIcon icon={faChurch} />
              <span>Inicio</span>
            </button>
            <button 
              className={`nav-btn ${activeTab === 'libros' ? 'active' : ''}`}
              onClick={() => setActiveTab('libros')}
            >
              <FontAwesomeIcon icon={faBookOpen} />
              <span>Libros</span>
            </button>
            <button 
              className={`nav-btn ${activeTab === 'estudios' ? 'active' : ''}`}
              onClick={() => setActiveTab('estudios')}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Estudios</span>
            </button>
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar libros..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="theme-toggle" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            {currentUser ? (
              <div className="user-menu">
                <button className="user-btn">
                  <FontAwesomeIcon icon={faUser} />
                  <span>{currentUser.name}</span>
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="auth-btn login" onClick={() => setShowLogin(true)}>
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <span>Ingresar</span>
                </button>
                <button className="auth-btn register" onClick={() => setShowRegister(true)}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Registro</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Verse Display */}
      <section className="verse-section">
        <div className="container">
          <div className="verse-container">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
            <div className="verse-text">
              {verses[currentVerse]}
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Featured Books */}
          {activeTab === 'inicio' && (
            <section className="featured-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faStar} />
                Libros Destacados
              </h2>
              <div className="books-grid">
                {featuredBooks.map(book => (
                  <div key={book.id} className="book-card featured">
                    <div className="card-ribbon">{book.ribbon}</div>
                    <div className="card-icon" style={{ color: book.color }}>
                      <FontAwesomeIcon icon={book.icon} />
                    </div>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-description">{book.description}</p>
                    <button 
                      className="card-btn"
                      onClick={() => openBook(book.id)}
                    >
                      <FontAwesomeIcon icon={faBook} />
                      Leer Ahora
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Books */}
          {(activeTab === 'libros' || activeTab === 'estudios') && (
            <section className="books-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faBookOpen} />
                Todos los Libros
              </h2>
              <div className="books-grid">
                {filteredBooks.map(book => (
                  <div key={book.id} className="book-card">
                    <div className="card-ribbon">{book.ribbon}</div>
                    <div className="card-icon" style={{ color: book.color }}>
                      <FontAwesomeIcon icon={book.icon} />
                    </div>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-description">{book.description}</p>
                    <button 
                      className="card-btn"
                      onClick={() => openBook(book.id)}
                    >
                      <FontAwesomeIcon icon={faBook} />
                      {currentUser ? 'Leer Ahora' : 'Iniciar Sesión'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Iniciar Sesión</h2>
              <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
            </div>
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faSignInAlt} />
                Ingresar
              </button>
            </form>
            <p className="auth-switch">
              ¿No tienes cuenta? <button onClick={() => { setShowLogin(false); setShowRegister(true); }}>Regístrate</button>
            </p>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Crear Cuenta</h2>
              <button className="close-btn" onClick={() => setShowRegister(false)}>×</button>
            </div>
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faUserPlus} />
                Registrarse
              </button>
            </form>
            <p className="auth-switch">
              ¿Ya tienes cuenta? <button onClick={() => { setShowRegister(false); setShowLogin(true); }}>Ingresa aquí</button>
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              <p>Biblioteca Teológica - Un espacio para el estudio y crecimiento espiritual</p>
            </div>
            <div className="signature">
              <p>Desarrollado por <strong>Abner</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
