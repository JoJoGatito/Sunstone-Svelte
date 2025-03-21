<script>
  // Home page component
</script>

<svelte:head>
  <title>Sunstone Inclusivity Network - Home</title>
  <meta name="description" content="Fostering inclusive communities through connection and support" />
</svelte:head>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Building Inclusive Communities Together</h1>
      <p>
        The Sunstone Inclusivity Network provides resources, support, and community
        for those seeking to create more inclusive spaces.
      </p>
      <div class="hero-buttons">
        <a href="/about" class="btn-primary">Learn More</a>
        <a href="/join" class="btn-secondary">Join Our Community</a>
      </div>
    </div>
  </div>
</section>

<section class="features">
  <div class="container">
    <h2 class="section-title">What We Offer</h2>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>Resources</h3>
        <p>Access our curated collection of inclusivity resources, guides, and research materials.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h3>Community</h3>
        <p>Connect with others who are committed to building and maintaining inclusive spaces.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Events</h3>
        <p>Participate in workshops, webinars, and community events focused on inclusivity practices.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <h3>Support</h3>
        <p>Get guidance and support from experienced community members and inclusivity advocates.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Make a Difference?</h2>
      <p>Join our community today and be part of the movement for more inclusive spaces.</p>
      <a href="/join" class="btn-primary">Get Started</a>
    </div>
  </div>
</section>

<style>
  /* Hero section */
  .hero {
    background: linear-gradient(135deg, #5b3e90 0%, #2c1752 100%);
    color: white;
    padding: 5rem 0;
    text-align: center;
  }
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-primary {
    background-color: #ff6b6b;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #ff5252;
  }
  
  .btn-secondary {
    background-color: transparent;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid white;
    transition: background-color 0.3s;
  }
  
  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Features section */
  .features {
    padding: 5rem 0;
    background-color: #f9f9f9;
  }
  
  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #2c1752;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #5b3e90;
  }
  
  /* CTA section */
  .cta {
    background-color: #5b3e90;
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .cta h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .cta p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    .hero p {
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 1.7rem;
    }
    
    .cta h2 {
      font-size: 1.7rem;
    }
  }
</style>