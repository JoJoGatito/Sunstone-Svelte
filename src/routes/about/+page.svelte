<script>
  // About page component
</script>

<svelte:head>
  <title>About - Sunstone Inclusivity Network</title>
  <meta name="description" content="Learn about our mission, values, and the team behind Sunstone Inclusivity Network." />
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>About Us</h1>
    <p>Learn about our mission, values, and the community we're building.</p>
  </div>
</section>

<section class="about-mission">
  <div class="container">
    <div class="mission-content">
      <h2>Our Mission</h2>
      <p>
        The Sunstone Inclusivity Network is dedicated to building and supporting inclusive communities
        where every person feels valued, respected, and empowered. We believe that inclusivity is not
        just a goal, but a continuous journey that requires education, awareness, and active participation.
      </p>
      <p>
        Through our resources, community events, and support networks, we aim to equip individuals and
        organizations with the tools they need to create spaces where diversity is celebrated and everyone
        has an opportunity to thrive.
      </p>
    </div>
  </div>
</section>

<section class="values">
  <div class="container">
    <h2>Our Core Values</h2>
    
    <div class="values-grid">
      <div class="value-card">
        <h3>Inclusivity</h3>
        <p>
          We believe in creating spaces where everyone is welcome, regardless of background, identity, or experience.
        </p>
      </div>
      
      <div class="value-card">
        <h3>Respect</h3>
        <p>
          We honor the dignity and worth of every individual and treat each person with courtesy and consideration.
        </p>
      </div>
      
      <div class="value-card">
        <h3>Empathy</h3>
        <p>
          We seek to understand different perspectives and experiences, and approach every interaction with compassion.
        </p>
      </div>
      
      <div class="value-card">
        <h3>Growth</h3>
        <p>
          We embrace learning, change, and personal development as essential elements of creating inclusive communities.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="team">
  <div class="container">
    <h2>Our Team</h2>
    <p class="team-intro">
      Sunstone Inclusivity Network is powered by a dedicated team of professionals with diverse backgrounds
      and expertise in community building, education, and inclusivity practices.
    </p>
    
    <div class="team-grid">
      <div class="team-member">
        <div class="member-photo"></div>
        <h3>Jordan Lee</h3>
        <p class="member-title">Founder & Executive Director</p>
        <p class="member-bio">
          With over 15 years of experience in community organization and education,
          Jordan founded Sunstone to help create more inclusive spaces across different sectors.
        </p>
      </div>
      
      <div class="team-member">
        <div class="member-photo"></div>
        <h3>Alex Rivera</h3>
        <p class="member-title">Director of Education</p>
        <p class="member-bio">
          Alex develops our educational resources and training programs, bringing expertise
          in curriculum development and inclusive teaching practices.
        </p>
      </div>
      
      <div class="team-member">
        <div class="member-photo"></div>
        <h3>Taylor Kim</h3>
        <p class="member-title">Community Outreach Manager</p>
        <p class="member-bio">
          Taylor builds partnerships with organizations and communities, connecting people
          with resources and support to implement inclusive practices.
        </p>
      </div>
      
      <div class="team-member">
        <div class="member-photo"></div>
        <h3>Morgan Patel</h3>
        <p class="member-title">Technology Director</p>
        <p class="member-bio">
          Morgan ensures our digital platforms are accessible and user-friendly,
          helping us reach and support more communities online.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="join-cta">
  <div class="container">
    <h2>Join Our Community</h2>
    <p>
      Whether you're just beginning your inclusivity journey or looking to share your expertise,
      we welcome you to be part of our growing network.
    </p>
    <a href="/join" class="btn-primary">Get Involved</a>
  </div>
</section>

<style>
  /* Page header */
  .page-header {
    background: linear-gradient(135deg, #5b3e90 0%, #2c1752 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .page-header p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
  }
  
  /* Mission section */
  .about-mission {
    padding: 5rem 0;
  }
  
  .mission-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .mission-content h2 {
    font-size: 2rem;
    color: #2c1752;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .mission-content p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  /* Values section */
  .values {
    padding: 5rem 0;
    background-color: #f9f9f9;
  }
  
  .values h2 {
    font-size: 2rem;
    color: #2c1752;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .value-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  
  .value-card h3 {
    font-size: 1.3rem;
    color: #5b3e90;
    margin-bottom: 1rem;
  }
  
  .value-card p {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  /* Team section */
  .team {
    padding: 5rem 0;
  }
  
  .team h2 {
    font-size: 2rem;
    color: #2c1752;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .team-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
  }
  
  .team-member {
    text-align: center;
  }
  
  .member-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ddd; /* Placeholder for actual photos */
    margin: 0 auto 1.5rem;
  }
  
  .team-member h3 {
    font-size: 1.3rem;
    color: #2c1752;
    margin-bottom: 0.5rem;
  }
  
  .member-title {
    color: #5b3e90;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .member-bio {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  /* Join CTA section */
  .join-cta {
    background-color: #5b3e90;
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .join-cta h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .join-cta p {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }
  
  .btn-primary {
    background-color: white;
    color: #5b3e90;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;
    display: inline-block;
  }
  
  .btn-primary:hover {
    background-color: #f0f0f0;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .page-header {
      padding: 3rem 0;
    }
    
    .page-header h1 {
      font-size: 2rem;
    }
    
    .mission-content h2,
    .values h2,
    .team h2,
    .join-cta h2 {
      font-size: 1.7rem;
    }
    
    .about-mission,
    .values,
    .team {
      padding: 3rem 0;
    }
  }
</style>