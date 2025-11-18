import React from 'react';
import './App.css';

const App = () => {
  const books = [
    {
      id: 1,
      title: "La Santa Biblia",
      author: "Dios",
      description: "La Palabra de Dios que guía e ilumina nuestro camino",
      image: "https://images.unsplash.com/photo-1543005471-64b4c690af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Sagradas Escrituras",
      link: "https://www.biblegateway.com/",
      icon: "fas fa-bible"
    },
    {
      id: 2,
      title: "El Peregrino",
      author: "John Bunyan",
      description: "El viaje espiritual de Cristiano hacia la Ciudad Celestial",
      image: "https://images.unsplash.com/photo-1461360370896-922624c12f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Clásico Cristiano",
      link: "https://www.gutenberg.org/ebooks/131",
      icon: "fas fa-hiking"
    },
    {
      id: 3,
      title: "El Hombre Celestial",
      author: "Watchman Nee",
      description: "Revelando el propósito eterno de Dios para la humanidad",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Vida Espiritual",
      link: "#",
      icon: "fas fa-pray"
    },
    {
      id: 4,
      title: "El Libro de Enoc",
      author: "Enoc",
      description: "Textos apócrifos que complementan la revelación divina",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Textos Antiguos",
      link: "#",
      icon: "fas fa-scroll"
    },
    {
      id: 5,
      title: "Mere Christianity",
      author: "C.S. Lewis",
      description: "Una defensa lógica y apasionada de la fe cristiana",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Apologética",
      link: "#",
      icon: "fas fa-cross"
    },
    {
      id: 6,
      title: "Libro",
      author: "Derek Prince",
      description: "libro",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Guerra Espiritual",
      link: "#",
      icon: "fas fa-shield-alt"
    }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-cross"></i>
            <span>Luz Eterna</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#inicio" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#libros" className="nav-link">Libros</a>
            </li>
            <li className="nav-item">
              <a href="#sobre" className="nav-link">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link">Contacto</a>
            </li>
          </ul>
          <div className="nav-actions">
            <button className="btn-secondary">
              <i className="fas fa-user"></i>
              Mi Cuenta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Encuentra <span className="highlight">Sabiduría</span> en Cada Página
            </h1>
            <p className="hero-description">
              Descubre libros que transformarán tu vida espiritual y te acercarán más a Dios. 
              Cada palabra es un paso hacia crecimiento.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <i className="fas fa-book-open"></i>
                Explorar Libros
              </button>
              <button className="btn-outline">
                <i className="fas fa-play-circle"></i>
                Ver Testimonios
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <i className="fas fa-dove"></i>
              <h3>Paz Espiritual</h3>
              <p>Encuentra consuelo en la palabra</p>
            </div>
          </div>
        </div>
        <div className="hero-verse">
          <p>"Tu palabra es una lámpara a mis pies; es una luz en mi camino" - Salmo 119:105</p>
        </div>
      </section>

      {/* Books Section */}
      <section id="libros" className="books-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestra Colección Espiritual</h2>
            <p>Libros seleccionados para tu crecimiento espiritual</p>
          </div>
          <div className="books-grid">
            {books.map(book => (
              <div key={book.id} className="book-card">
                <div className="card-image">
                  <img src={book.image} alt={book.title} />
                  <div className="card-overlay">
                    <button className="card-btn">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                    <button className="card-btn">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                  <div className="card-category">
                    <i className={book.icon}></i>
                    {book.category}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="card-author">{book.author}</p>
                  <p className="card-description">{book.description}</p>
                  <div className="card-actions">
                    <a href={book.link} className="btn-card">
                      <i className="fas fa-book"></i>
                      Leer Ahora
                    </a>
                    <button className="btn-icon">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-praying-hands"></i>
              </div>
              <h3>Oración Diaria</h3>
              <p>Encuentra guías de oración para fortalecer tu comunicación con Dios</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Comunidad</h3>
              <p>Únete a nuestra comunidad de creyentes que buscan crecer juntos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Estudio Bíblico</h3>
              <p>Profundiza en las escrituras con nuestros estudios guiados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Comienza Tu Viaje Espiritual Hoy</h2>
            <p>Únete a miles de personas que han encontrado consuelo y dirección en estos textos sagrados</p>
            <div className="cta-buttons">
              <button className="btn-primary large">
                <i className="fas fa-download"></i>
                Descargar App
              </button>
              <button className="btn-outline large">
                <i className="fas fa-comments"></i>
                Hablar con Consejero
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <i className="fas fa-cross"></i>
                <span>Luz Eterna</span>
              </div>
              <p className="footer-message">
                "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos" - Mateo 18:20
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#libros">Libros</a></li>
                <li><a href="#sobre">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Categorías</h4>
              <ul>
                <li><a href="#">Sagradas Escrituras</a></li>
                <li><a href="#">Clásicos Cristianos</a></li>
                <li><a href="#">Vida Espiritual</a></li>
                <li><a href="#">Textos Antiguos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> info@luzeterna.com</p>
                <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i className="fas fa-map-marker-alt"></i> Ciudad de la Fe, País</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 abner. Todos los derechos reservados.</p>
            <div className="signature">
              <p>Al servicio <strong>Charly</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
