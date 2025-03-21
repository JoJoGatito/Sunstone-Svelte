<script>
  import { page } from '$app/stores';
  
  let isMenuOpen = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav>
    <div class="container">
      <a href="/" class="logo">Sunstone Inclusivity Network</a>
      
      <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="nav-links" class:active={isMenuOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          {#if $page.data.session}
            <a href="/profile">Profile</a>
            <a href="/logout">Logout</a>
          {:else}
            <a href="/login" class="btn-primary">Login</a>
          {/if}
        </li>
      </ul>
    </div>
  </nav>
</header>

<main>
  {#if $$slots.default}
    <div class="container main-content">
      {@render $$slots.default()}
    </div>
  {:else}
    <div class="container main-content">
      <p>No content available</p>
    </div>
  {/if}
</main>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Sunstone Inclusivity Network</h3>
        <p>Fostering inclusive communities through connection and support.</p>
      </div>
      
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@sunstoneinclusivity.network</p>
        <div class="social-links">
          <!-- Social media links go here -->
        </div>
      </div>
    </div>
    
    <div class="copyright">
      &copy; {new Date().getFullYear()} Sunstone Inclusivity Network. All rights reserved.
    </div>
  </div>
</footer>

<style>
  /* Basic reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Global styles */
  :global(body) {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  /* Header styles */
  header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  nav {
    padding: 1rem 0;
  }
  
  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #5b3e90;
    text-decoration: none;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    align-items: center;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #5b3e90;
  }
  
  .btn-primary {
    background-color: #5b3e90;
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #4a3275;
  }
  
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 6px;
  }
  
  .menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: transform 0.3s;
  }
  
  /* Main content */
  main {
    min-height: calc(100vh - 150px);
    padding: 2rem 0;
  }
  
  .main-content {
    padding: 1rem 0;
  }
  
  /* Footer styles */
  footer {
    background-color: #2c1752;
    color: white;
    padding: 3rem 0 1.5rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-section h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .footer-section ul {
    list-style: none;
  }
  
  .footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: white;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .copyright {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }
    
    .nav-links {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background-color: white;
      flex-direction: column;
      align-items: start;
      padding: 1rem;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      transform: translateY(-150%);
      transition: transform 0.3s;
    }
    
    .nav-links.active {
      transform: translateY(0);
    }
  }
</style>