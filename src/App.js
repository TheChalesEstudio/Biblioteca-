import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Cambiar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Aplicar la clase de modo oscuro al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Datos de ejemplo para los libros
  const books = [
    {
      id: 1,
      title: "El Hombre Celestial",
      author: "Estudio Teológico",
      description: "Explorando la naturaleza divina y humana de Cristo",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Teología",
      free: true
    },
    {
      id: 2,
      title: "El Libro de Enoc",
      author: "Textos Apócrifos",
      description: "Una mirada profunda a los textos no canónicos",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Estudios Bíblicos",
      free: true
    },
    {
      id: 3,
      title: "Evidencias de Dios",
      author: "Dr. Miguel Ángel Fuentes",
      description: "Argumentos científicos y filosóficos sobre la existencia divina",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Filosofía y Ciencia",
      free: true
    },
    {
      id: 4,
      title: "Arqueología Bíblica",
      author: "Instituto de Investigaciones",
      description: "Hallazgos que confirman los relatos bíblicos",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Arqueología",
      free: true
    },
    {
      id: 5,
      title: "Físicos que Creen",
      author: "Comunidad Científica",
      description: "Testimonios de científicos que encuentran a Dios en la física",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Ciencia y Fe",
      free: true
    },
    {
      id: 6,
      title: "La Trinidad Revelada",
      author: "Teólogos Contemporáneos",
      description: "Un estudio profundo sobre la naturaleza trinitaria de Dios",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Doctrina",
      free: true
    }
  ];

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-book-open"></i>
            <span>Biblioteca Teológica</span>
          </div>
          
          <div className="nav-menu">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#libros" className="nav-link">Libros</a>
            <a href="#categorias" className="nav-link">Categorías</a>
            <a href="#acerca" className="nav-link">Acerca de</a>
            <button 
              className="nav-button" 
              onClick={() => setShowSignup(true)}
            >
              <i className="fas fa-user-plus"></i> Crear Cuenta
            </button>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? 
                <i className="fas fa-sun"></i> : 
                <i className="fas fa-moon"></i>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>Explora la Sabiduría Divina</h1>
          <p>Descubre libros gratuitos sobre teología, filosofía y evidencias de la fe</p>
          <button className="cta-button">
            Explorar Libros <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Biblioteca teológica" 
          />
        </div>
      </section>

      {/* Books Section */}
      <section className="books-section" id="libros">
        <div className="section-header">
          <h2>Libros Gratuitos</h2>
          <p>Explora nuestra colección de libros teológicos disponibles gratuitamente</p>
        </div>
        
        <div className="books-grid">
          {books.map(book => (
            <div className="book-card" key={book.id}>
              <div className="card-badge">{book.category}</div>
              <div className="card-image">
                <img src={book.image} alt={book.title} />
                <div className="card-overlay">
                  <button className="read-button">
                    <i className="fas fa-book-open"></i> Leer Ahora
                  </button>
                </div>
              </div>
              <div className="card-content">
                <h3>{book.title}</h3>
                <p className="author">{book.author}</p>
                <p className="description">{book.description}</p>
                <div className="card-footer">
                  <span className="free-badge">
                    <i className="fas fa-gift"></i> Gratuito
                  </span>
                  <button className="fav-button">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Crear Cuenta</h2>
              <button 
                className="close-button"
                onClick={() => setShowSignup(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="signup-form">
                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input type="text" placeholder="Ingresa tu nombre" />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input type="email" placeholder="tu@email.com" />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" placeholder="Crea una contraseña" />
                </div>
                <button type="button" className="submit-button">
                  Crear Cuenta
                </button>
                <p className="form-footer">
                  Al crear una cuenta aceptas nuestros <a href="#terms">Términos y Condiciones</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Biblioteca Teológica</h3>
            <p>
              "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, 
              para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
              <br />
              <strong>Juan 3:16</strong>
            </p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#libros">Libros</a>
            <a href="#categorias">Categorías</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#youtube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Biblioteca Teológica. Desarrollado con <i className="fas fa-heart"></i> por Abner</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
