import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

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
      title: "Estudio del Hombre Celestial",
      author: "Instituto Teológico",
      description: "Análisis profundo de la naturaleza divina y humana de Cristo",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Cristología",
      free: true
    },
    {
      id: 2,
      title: "Enoc y la Tradición",
      author: "Dr. Samuel Rodríguez",
      description: "Estudio académico de los textos apócrifos y su contexto",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Estudios Bíblicos",
      free: true
    },
    {
      id: 3,
      title: "Evidencias Científicas de la Fe",
      author: "Comunidad Científica Cristiana",
      description: "Argumentos racionales sobre la existencia divina",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Ciencia y Fe",
      free: true
    },
    {
      id: 4,
      title: "Arqueología Bíblica Confirmada",
      author: "Instituto Arqueológico",
      description: "Hallazgos que respaldan los relatos bíblicos",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Arqueología",
      free: true
    },
    {
      id: 5,
      title: "Física y la Existencia Divina",
      author: "Dr. Michael Thompson",
      description: "Perspectivas científicas sobre la creación",
      image: "https://share.google/5n7D5gRqCwhJjIdCv",
      category: "Ciencia",
      free: true
    },
    {
      id: 6,
      title: "La Doctrina de la Trinidad",
      author: "Teólogos Contemporáneos",
      description: "Estudio sistemático de la naturaleza trinitaria",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Doctrina",
      free: true
    }
  ];

  // Función para manejar registro
  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    
    // Verificar si el usuario ya existe
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      alert('Este correo ya está registrado');
      return;
    }
    
    setUsers([...users, userData]);
    setCurrentUser(userData);
    setShowSignup(false);
    alert('¡Cuenta creada exitosamente!');
  };

  // Función para manejar login
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setShowLogin(false);
      alert(`¡Bienvenido de nuevo, ${user.name}!`);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Función para logout
  const handleLogout = () => {
    setCurrentUser(null);
    alert('Sesión cerrada');
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-book-bible"></i>
            <span>Estudio Teológico</span>
          </div>
          
          <div className="nav-menu">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#libros" className="nav-link">Libros</a>
            <a href="#categorias" className="nav-link">Categorías</a>
            <a href="#acerca" className="nav-link">Acerca</a>
            
            {currentUser ? (
              <div className="user-menu">
                <span>Hola, {currentUser.name}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="login-btn" onClick={() => setShowLogin(true)}>
                  <i className="fas fa-sign-in-alt"></i> Ingresar
                </button>
                <button className="signup-btn" onClick={() => setShowSignup(true)}>
                  <i className="fas fa-user-plus"></i> Crear Cuenta
                </button>
              </div>
            )}
            
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
          <h1>Libros de Estudio Teológico</h1>
          <p>Accede gratuitamente a nuestra colección de estudios bíblicos y teológicos</p>
          <button className="cta-button" onClick={() => document.getElementById('libros').scrollIntoView({behavior: 'smooth'})}>
            Explorar Libros <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </section>

      {/* Books Section */}
      <section className="books-section" id="libros">
        <div className="section-header">
          <h2>Libros Gratuitos de Estudio</h2>
          <p>Selección exclusiva de materiales teológicos para tu crecimiento</p>
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

      {/* Bible Verse Section */}
      <section className="verse-section">
        <div className="verse-container">
          <i className="fas fa-cross verse-icon"></i>
          <h3>"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."</h3>
          <p className="verse-reference">Juan 3:16</p>
          <p className="verse-subtitle">En Cristo encontramos la verdad y la vida</p>
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
              <form className="auth-form" onSubmit={handleSignup}>
                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Ingresa tu nombre completo" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Crea una contraseña segura" 
                    required
                    minLength="6"
                  />
                </div>
                <button type="submit" className="submit-button">
                  Crear Cuenta
                </button>
                <p className="auth-switch">
                  ¿Ya tienes cuenta? <span onClick={() => {setShowSignup(false); setShowLogin(true);}}>Ingresar aquí</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Ingresar</h2>
              <button 
                className="close-button"
                onClick={() => setShowLogin(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="auth-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Ingresa tu contraseña" 
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Ingresar
                </button>
                <p className="auth-switch">
                  ¿No tienes cuenta? <span onClick={() => {setShowLogin(false); setShowSignup(true);}}>Crear cuenta aquí</span>
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
            <div className="footer-logo">
              <i className="fas fa-book-bible"></i>
              <span>Estudio Teológico</span>
            </div>
            <p>Recursos gratuitos para el estudio serio de las Escrituras</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#libros">Libros Gratuitos</a>
            <a href="#categorias">Categorías</a>
            <a href="#acerca">Acerca de</a>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p><i className="fas fa-envelope"></i> info@estudioteologico.com</p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Estudio Teológico. Todos los derechos reservados. <strong>Abner</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
