<script>
  import { fetchResources } from '$lib/supabase';
  import { supabaseClient } from '../+layout';

  // Resources state
  let resources = $state([]);
  let loading = $state(true);
  let error = $state('');
  
  // Filtering state
  let selectedCategory = $state('all');
  let searchQuery = $state('');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'education', name: 'Education' },
    { id: 'workplace', name: 'Workplace' },
    { id: 'community', name: 'Community Building' },
    { id: 'health', name: 'Health & Wellness' },
    { id: 'technology', name: 'Technology' },
  ];
  
  // Load resources on component mount
  $effect(async () => {
    try {
      loading = true;
      
      // Fetch resources (potentially with category filter)
      const category = selectedCategory === 'all' ? undefined : selectedCategory;
      const data = await fetchResources(supabaseClient, category);
      
      if (data) {
        resources = data;
      }
    } catch (err) {
      console.error('Error loading resources:', err);
      error = 'Failed to load resources. Please try again later.';
    } finally {
      loading = false;
    }
  });
  
  // Filtered resources based on search query and category
  $derived.by(() => {
    if (!resources) return [];
    
    return resources.filter(resource => {
      // Apply category filter if not 'all'
      const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
      
      // Apply search filter if there's a query
      const searchMatch = !searchQuery || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  });
  
  function handleCategoryChange(event) {
    selectedCategory = event.target.value;
  }
  
  function handleSearchInput(event) {
    searchQuery = event.target.value;
  }
</script>

<svelte:head>
  <title>Resources - Sunstone Inclusivity Network</title>
  <meta name="description" content="Access our library of resources on inclusivity and community building." />
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>Resources</h1>
    <p>Tools, guides, and articles to help you create more inclusive spaces.</p>
  </div>
</section>

<section class="resources-section">
  <div class="container">
    <div class="filter-bar">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search resources..." 
          bind:value={searchQuery} 
          on:input={handleSearchInput}
        />
      </div>
      
      <div class="category-filter">
        <select value={selectedCategory} on:change={handleCategoryChange}>
          {#each categories as category}
            <option value={category.id}>{category.name}</option>
          {/each}
        </select>
      </div>
    </div>
    
    {#if loading}
      <div class="loading">
        <p>Loading resources...</p>
      </div>
    {:else if error}
      <div class="error-message">
        <p>{error}</p>
        <button class="btn-retry" on:click={() => selectedCategory = selectedCategory}>Retry</button>
      </div>
    {:else if filteredResources.length === 0}
      <div class="no-results">
        <p>No resources found matching your criteria.</p>
        {#if searchQuery || selectedCategory !== 'all'}
          <button class="btn-clear" on:click={() => { searchQuery = ''; selectedCategory = 'all'; }}>
            Clear filters
          </button>
        {/if}
      </div>
    {:else}
      <div class="resources-grid">
        {#each filteredResources as resource}
          <div class="resource-card">
            <div class="resource-category">{resource.category}</div>
            <h3>{resource.title}</h3>
            <p class="resource-description">{resource.description}</p>
            <div class="resource-tags">
              {#each resource.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" class="resource-link">
              View Resource
            </a>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<section class="contribute-section">
  <div class="container">
    <div class="contribute-content">
      <h2>Have a Resource to Share?</h2>
      <p>
        Help our community grow by contributing your own resources, tools, or guides related to inclusivity.
      </p>
      <a href="/resources/contribute" class="btn-primary">Contribute a Resource</a>
    </div>
  </div>
</section>

<style>
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
  
  .resources-section {
    padding: 3rem 0;
  }
  
  .filter-bar {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
  
  .search-box {
    flex: 1;
  }
  
  .search-box input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .search-box input:focus {
    border-color: #5b3e90;
    outline: none;
  }
  
  .category-filter select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background-color: white;
    min-width: 200px;
  }
  
  .category-filter select:focus {
    border-color: #5b3e90;
    outline: none;
  }
  
  .loading, .error-message, .no-results {
    text-align: center;
    padding: 3rem 0;
    color: #666;
  }
  
  .btn-retry, .btn-clear {
    margin-top: 1rem;
    background-color: #5b3e90;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .resource-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
  }
  
  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .resource-category {
    display: inline-block;
    background-color: #f0e6ff;
    color: #5b3e90;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    margin-bottom: 1rem;
  }
  
  .resource-card h3 {
    font-size: 1.3rem;
    color: #2c1752;
    margin-bottom: 0.8rem;
    line-height: 1.4;
  }
  
  .resource-description {
    color: #555;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  .resource-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tag {
    background-color: #f5f5f5;
    color: #666;
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
  }
  
  .resource-link {
    align-self: flex-start;
    display: inline-block;
    color: #5b3e90;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
  }
  
  .resource-link:hover {
    border-color: #5b3e90;
  }
  
  .contribute-section {
    background-color: #f9f9f9;
    padding: 4rem 0;
    text-align: center;
  }
  
  .contribute-content {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .contribute-section h2 {
    font-size: 2rem;
    color: #2c1752;
    margin-bottom: 1rem;
  }
  
  .contribute-section p {
    margin-bottom: 1.5rem;
  }
  
  .btn-primary {
    background-color: #5b3e90;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #4a3275;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .filter-bar {
      flex-direction: column;
    }
    
    .category-filter select {
      width: 100%;
      min-width: auto;
    }
    
    .page-header {
      padding: 3rem 0;
    }
    
    .page-header h1 {
      font-size: 2rem;
    }
  }
</style>