<script lang="ts">
  import { onMount } from 'svelte';
  import Fuse from 'fuse.js';
  import { format } from 'date-fns';
  import Icon from '@iconify/svelte';

  type Post = {
    title: string;
    description: string;
    date: string;
    image: {
      url: string;
      alt: string;
    };
    slug: string;
  };

  export let posts: Post[] = [];

  let query: string = '';
  let filtered: Post[] = posts;
  let fuse: Fuse<Post>;
  let debounceTimeout: NodeJS.Timeout;

  onMount(() => {
    fuse = new Fuse(posts, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });
  });

  function onSearchInput(e: Event) {
    clearTimeout(debounceTimeout);
    query = (e.target as HTMLInputElement).value;
    debounceTimeout = setTimeout(() => {
      if (!query.trim()) {
        filtered = posts;
      } else {
        const results = fuse.search(query).map((r) => r.item);
        filtered = results;
      }
    }, 300);
  }
</script>

<div class="search-container">
  <span class="search-icon">
    <Icon icon="mdi:magnify" />
  </span>
  <input
    type="text"
    placeholder="Discover musings..."
    on:input={onSearchInput}
    class="search-bar"
  />
</div>

<div id="posts">
  {#each filtered as post}
    <div class="post-row">
      <div class="post">
        <div class="post-details">
          <span class="post-title">
            <a href={`/musings/${post.slug}`}>{post.title}</a>
          </span>
          <div class="post-date-section">
            <span class="post-date">
              <i>{format(new Date(post.date), 'PPP')}</i>
            </span>
          </div>
          <span class="post-description">{post.description}</span>
        </div>
        <div class="post-preview-image">
          <img src={post.image.url} alt={post.image.alt} height={50} />
        </div>
      </div>
      <hr />
    </div>
  {/each}
</div>

<style>
  .search-icon {
    position: absolute;
    top: 50%;
    left: 0.75em;
    transform: translateY(-50%);
    color: #888888;
    pointer-events: none;
  }

  .search-container {
    position: relative;
    width: 100%;
    margin-bottom: 1em;
    box-sizing: border-box;
  }

  .search-bar {
    width: 100%;
    padding: 0.75em 0.75em 0.75em 2.5em;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 1em;
    outline: none;
    box-sizing: border-box;
  }

  .search-bar::placeholder {
    color: #888888;
  }

  #posts {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
  }

  .post-row {
    margin-bottom: 2em;
  }

  .post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .post-details {
    display: flex;
    flex-direction: column;
  }

  .post-date-section {
    display: flex;
    align-items: center;
    color: #f0883e;
    gap: 0.5em;
  }

  .post-description {
    color: #aaaaaa;
  }
</style>
