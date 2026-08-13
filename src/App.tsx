import { useState } from "react";

type Page =
  | "home"
  | "gallery"
  | "about"
  | "contact"
  | "login"
  | "signup";

type Artwork = {
  title: string;
  artist: string;
  category: string;
  price: string;
  image: string;
};

const artworks: Artwork[] = [
  {
    title: "Ethereal Dreams",
    artist: "Maya Rodriguez",
    category: "Contemporary",
    price: "$2,500",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Urban Symphony",
    artist: "David Chen",
    category: "Abstract",
    price: "$1,800",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Nature's Whisper",
    artist: "Lena Thompson",
    category: "Landscape",
    price: "$3,200",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Purple Flow",
    artist: "Sophia Lee",
    category: "Modern",
    price: "$2,100",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golden Hour",
    artist: "James Wilson",
    category: "Landscape",
    price: "$2,800",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Silent Memories",
    artist: "Emma Davis",
    category: "Contemporary",
    price: "$1,950",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [page, setPage] = useState<Page>("home");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.app}>
      <style>{globalStyles}</style>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div
          style={styles.logo}
          onClick={() => navigate("home")}
        >
          🎨 <span>ArtVista</span>
        </div>

        <div style={styles.navLinks}>
          <button
            style={page === "home" ? styles.activeNav : styles.navButton}
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            style={page === "gallery" ? styles.activeNav : styles.navButton}
            onClick={() => navigate("gallery")}
          >
            Gallery
          </button>

          <button
            style={page === "about" ? styles.activeNav : styles.navButton}
            onClick={() => navigate("about")}
          >
            About
          </button>

          <button
            style={page === "contact" ? styles.activeNav : styles.navButton}
            onClick={() => navigate("contact")}
          >
            Contact
          </button>
        </div>

        <div style={styles.authButtons}>
          {loggedIn ? (
            <button
              style={styles.loginButton}
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                style={styles.loginButton}
                onClick={() => navigate("login")}
              >
                Login
              </button>

              <button
                style={styles.signupButton}
                onClick={() => navigate("signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {page === "home" && (
        <HomePage navigate={navigate} />
      )}

      {page === "gallery" && (
        <GalleryPage />
      )}

      {page === "about" && (
        <AboutPage />
      )}

      {page === "contact" && (
        <ContactPage />
      )}

      {page === "login" && (
        <LoginPage
          navigate={navigate}
          setLoggedIn={setLoggedIn}
        />
      )}

      {page === "signup" && (
        <SignupPage
          navigate={navigate}
          setLoggedIn={setLoggedIn}
        />
      )}

      {/* FOOTER */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* =========================
   HOME PAGE
========================= */

function HomePage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Discover
            <br />
            <span>Extraordinary</span>
            <br />
            Artworks
          </h1>

          <p style={styles.heroText}>
            Explore a curated collection of stunning artworks from
            talented artists worldwide. Find your perfect piece and
            transform your space.
          </p>

          <button
            style={styles.primaryButton}
            onClick={() => navigate("gallery")}
          >
            Explore Gallery →
          </button>
        </div>

        <div style={styles.heroImages}>
          <img
            src={artworks[0].image}
            alt="Featured artwork"
            style={styles.heroImageLarge}
          />

          <img
            src={artworks[1].image}
            alt="Featured artwork"
            style={styles.heroImageSmall}
          />
        </div>
      </section>

      {/* STATISTICS */}
      <section style={styles.stats}>
        <div>
          <h2>10,000+</h2>
          <p>Artworks</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Artists</p>
        </div>

        <div>
          <h2>4.9/5</h2>
          <p>Reviews</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Awards</p>
        </div>
      </section>

      {/* FEATURED ARTWORKS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Featured Artworks
        </h2>

        <p style={styles.sectionSubtitle}>
          Discover our handpicked collection of extraordinary
          pieces from emerging and established artists.
        </p>

        <div style={styles.artGrid}>
          {artworks.slice(0, 3).map((artwork) => (
            <ArtworkCard
              key={artwork.title}
              artwork={artwork}
            />
          ))}
        </div>

        <div style={styles.center}>
          <button
            style={styles.darkButton}
            onClick={() => navigate("gallery")}
          >
            View All Artworks
          </button>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to Start Your Art Journey?</h2>

        <p>
          Join thousands of art enthusiasts and discover your
          next favorite piece.
        </p>

        <button
          style={styles.whiteButton}
          onClick={() => navigate("signup")}
        >
          Create Account
        </button>
      </section>
    </>
  );
}

/* =========================
   GALLERY PAGE
========================= */

function GalleryPage() {
  const [search, setSearch] = useState("");

  const filteredArtworks = artworks.filter(
    (artwork) =>
      artwork.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      artwork.artist
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      artwork.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section style={styles.pageSection}>
      <h1 style={styles.pageTitle}>Art Gallery</h1>

      <p style={styles.sectionSubtitle}>
        Explore our collection of extraordinary artworks.
      </p>

      <input
        type="text"
        placeholder="Search artworks or artists..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.artGrid}>
        {filteredArtworks.map((artwork) => (
          <ArtworkCard
            key={artwork.title}
            artwork={artwork}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================
   ARTWORK CARD
========================= */

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div style={styles.card}>
      <img
        src={artwork.image}
        alt={artwork.title}
        style={styles.cardImage}
      />

      <div style={styles.cardContent}>
        <span style={styles.badge}>
          {artwork.category}
        </span>

        <h3>{artwork.title}</h3>

        <p style={styles.artist}>
          by {artwork.artist}
        </p>

        <div style={styles.cardBottom}>
          <strong style={styles.price}>
            {artwork.price}
          </strong>

          <button style={styles.smallButton}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   ABOUT PAGE
========================= */

function AboutPage() {
  return (
    <section style={styles.pageSection}>
      <div style={styles.pageBanner}>
        <h1>
          About <span>ArtVista</span>
        </h1>

        <p>
          Connecting artists and art enthusiasts through
          creativity and technology.
        </p>
      </div>

      <div style={styles.aboutContent}>
        <div>
          <h2>Our Story</h2>

          <p>
            ArtVista was created to make extraordinary art
            accessible to everyone. We connect talented artists
            with art lovers around the world through a simple
            and beautiful digital platform.
          </p>

          <p>
            Our mission is to help artists showcase their
            creativity while giving art enthusiasts an easy way
            to discover, explore, and collect unique artworks.
          </p>
        </div>

        <img
          src={artworks[0].image}
          alt="ArtVista artwork"
          style={styles.aboutImage}
        />
      </div>

      <h2 style={styles.sectionTitle}>
        Our Values
      </h2>

      <div style={styles.valuesGrid}>
        <div style={styles.valueCard}>
          <h3>🎨 Authenticity</h3>
          <p>We celebrate original and meaningful artwork.</p>
        </div>

        <div style={styles.valueCard}>
          <h3>💡 Quality</h3>
          <p>We focus on high-quality artistic experiences.</p>
        </div>

        <div style={styles.valueCard}>
          <h3>🌍 Accessibility</h3>
          <p>We make art discovery accessible to everyone.</p>
        </div>

        <div style={styles.valueCard}>
          <h3>🤝 Community</h3>
          <p>We connect artists and art enthusiasts.</p>
        </div>
      </div>
    </section>
  );
}

/* =========================
   CONTACT PAGE
========================= */

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={styles.pageSection}>
      <div style={styles.pageBanner}>
        <h1>Get in Touch</h1>

        <p>
          We'd love to hear from you. Send us a message.
        </p>
      </div>

      <div style={styles.contactGrid}>
        <div>
          <h2>Contact Information</h2>

          <p>📧 info@artvista.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 123 Art Street, Creative City</p>

          <div style={styles.contactBox}>
            <h3>Follow Us</h3>
            <p>Facebook · Instagram · Twitter</p>
          </div>
        </div>

        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <h2>Send us a Message</h2>

          <input
            placeholder="Your Name"
            style={styles.formInput}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.formInput}
            required
          />

          <input
            placeholder="Subject"
            style={styles.formInput}
          />

          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            rows={5}
            required
          />

          <button
            type="submit"
            style={styles.primaryButton}
          >
            Send Message
          </button>

          {submitted && (
            <p style={styles.success}>
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* =========================
   LOGIN PAGE
========================= */

function LoginPage({
  navigate,
  setLoggedIn,
}: {
  navigate: (page: Page) => void;
  setLoggedIn: (value: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section style={styles.authPage}>
      <div style={styles.authCard}>
        <div style={styles.authLogo}>
          🎨 ArtVista
        </div>

        <h1>Welcome Back</h1>

        <p>
          Sign in to continue exploring extraordinary art.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.formInput}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.formInput}
        />

        <button
          style={styles.primaryButton}
          onClick={() => {
            setLoggedIn(true);
            navigate("home");
          }}
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <button
            style={styles.linkButton}
            onClick={() => navigate("signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </section>
  );
}

/* =========================
   SIGNUP PAGE
========================= */

function SignupPage({
  navigate,
  setLoggedIn,
}: {
  navigate: (page: Page) => void;
  setLoggedIn: (value: boolean) => void;
}) {
  return (
    <section style={styles.authPage}>
      <div style={styles.authCard}>
        <div style={styles.authLogo}>
          🎨 ArtVista
        </div>

        <h1>Create Your Account</h1>

        <p>
          Join ArtVista and start your journey into the world
          of extraordinary art.
        </p>

        <input
          placeholder="Enter your full name"
          style={styles.formInput}
        />

        <input
          type="email"
          placeholder="Enter your email"
          style={styles.formInput}
        />

        <input
          type="password"
          placeholder="Create a strong password"
          style={styles.formInput}
        />

        <input
          type="password"
          placeholder="Confirm your password"
          style={styles.formInput}
        />

        <label style={styles.checkbox}>
          <input type="checkbox" />
          I agree to the Terms of Service and Privacy Policy
        </label>

        <button
          style={styles.primaryButton}
          onClick={() => {
            setLoggedIn(true);
            navigate("home");
          }}
        >
          Create Account
        </button>

        <p>
          Already have an account?{" "}
          <button
            style={styles.linkButton}
            onClick={() => navigate("login")}
          >
            Sign in here
          </button>
        </p>
      </div>
    </section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer({
  navigate,
}: {
  navigate: (page: Page) => void;
}) {
  return (
    <footer style={styles.footer}>
      <div>
        <h2>🎨 ArtVista</h2>

        <p>
          Discover and collect extraordinary artworks from
          talented artists around the world.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>

        <button onClick={() => navigate("home")}>
          Home
        </button>

        <button onClick={() => navigate("gallery")}>
          Gallery
        </button>

        <button onClick={() => navigate("about")}>
          About
        </button>

        <button onClick={() => navigate("contact")}>
          Contact
        </button>
      </div>

      <div>
        <h3>Contact Info</h3>

        <p>📧 info@artvista.com</p>
        <p>📞 +1 (555) 123-4567</p>
        <p>📍 123 Art Street, Creative City</p>
      </div>

      <div style={styles.copyright}>
        © 2024 ArtVista. All rights reserved.
      </div>
    </footer>
  );
}

/* =========================
   STYLES
========================= */

const styles: any = {
  app: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#222",
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 6%",
    background: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#7b2cbf",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  navButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "15px",
    padding: "8px",
  },

  activeNav: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#7b2cbf",
    fontWeight: "bold",
    fontSize: "15px",
    padding: "8px",
  },

  authButtons: {
    display: "flex",
    gap: "10px",
  },

  loginButton: {
    padding: "9px 18px",
    border: "1px solid #7b2cbf",
    background: "#fff",
    color: "#7b2cbf",
    borderRadius: "5px",
    cursor: "pointer",
  },

  signupButton: {
    padding: "9px 18px",
    border: "none",
    background: "#7b2cbf",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 8%",
    background:
      "linear-gradient(120deg, #4a148c, #7b1fa2, #c2185b)",
    color: "#fff",
    minHeight: "420px",
  },

  heroContent: {
    maxWidth: "500px",
  },

  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.05,
    marginBottom: "20px",
  },

  heroText: {
    fontSize: "17px",
    lineHeight: 1.6,
    marginBottom: "25px",
  },

  heroImages: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  heroImageLarge: {
    width: "230px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    transform: "rotate(-3deg)",
  },

  heroImageSmall: {
    width: "190px",
    height: "260px",
    objectFit: "cover",
    borderRadius: "8px",
    transform: "rotate(4deg)",
  },

  primaryButton: {
    padding: "12px 25px",
    border: "none",
    background:
      "linear-gradient(90deg, #8e24aa, #ec407a)",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  stats: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4, 1fr)",
    textAlign: "center",
    padding: "35px 8%",
    background: "#fafafa",
  },

  section: {
    padding: "70px 8%",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "10px",
  },

  sectionSubtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
  },

  artGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow:
      "0 4px 15px rgba(0,0,0,0.12)",
  },

  cardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "20px",
  },

  badge: {
    background: "#7b2cbf",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
  },

  artist: {
    color: "#666",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#7b2cbf",
    fontSize: "20px",
  },

  smallButton: {
    background: "#222",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },

  center: {
    textAlign: "center",
    marginTop: "35px",
  },

  darkButton: {
    background: "#111827",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cta: {
    textAlign: "center",
    padding: "70px 20px",
    background:
      "linear-gradient(90deg, #9c27b0, #e91e63)",
    color: "#fff",
  },

  whiteButton: {
    padding: "12px 25px",
    background: "#fff",
    color: "#7b2cbf",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  pageSection: {
    padding: "60px 8%",
    minHeight: "600px",
  },

  pageTitle: {
    textAlign: "center",
    fontSize: "40px",
    color: "#7b2cbf",
  },

  pageBanner: {
    textAlign: "center",
    padding: "50px",
    marginBottom: "50px",
    color: "#fff",
    background:
      "linear-gradient(90deg, #4a148c, #c2185b)",
  },

  searchInput: {
    display: "block",
    width: "80%",
    maxWidth: "600px",
    margin: "0 auto 40px",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },

  aboutContent: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    alignItems: "center",
  },

  aboutImage: {
    width: "100%",
    borderRadius: "8px",
  },

  valuesGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  valueCard: {
    padding: "25px",
    background: "#fafafa",
    borderRadius: "8px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "50px",
  },

  contactBox: {
    padding: "25px",
    background: "#f8f0ff",
    borderRadius: "8px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  formInput: {
    padding: "13px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },

  textarea: {
    padding: "13px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    resize: "vertical",
  },

  success: {
    color: "green",
    fontWeight: "bold",
  },

  authPage: {
    minHeight: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    background: "#faf2ff",
  },

  authCard: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow:
      "0 5px 25px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  authLogo: {
    textAlign: "center",
    fontSize: "28px",
    color: "#9c27b0",
    fontWeight: "bold",
  },

  checkbox: {
    fontSize: "13px",
    color: "#555",
  },

  linkButton: {
    border: "none",
    background: "none",
    color: "#7b2cbf",
    cursor: "pointer",
    fontWeight: "bold",
  },

  footer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    padding: "50px 8%",
    background: "#111827",
    color: "#fff",
  },

  copyright: {
    gridColumn: "1 / -1",
    textAlign: "center",
    paddingTop: "20px",
    borderTop: "1px solid #374151",
    color: "#aaa",
  },
};

const globalStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  button:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    nav {
      flex-wrap: wrap;
      gap: 15px;
    }

    .hero {
      flex-direction: column;
      text-align: center;
      gap: 40px;
    }
  }
`;

export default App;