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
    tags: Array<string>;
    slug: string;
  };

  export let posts: Post[] = [];

  let fuse: Fuse<Post>;

  let query: string = '';
  let filtered: Post[] = posts;
  let activeTags: string[] = [];

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags)),
  ).sort();

  let debounceTimeout: NodeJS.Timeout;
  let searchInput: HTMLInputElement;

  onMount(() => {
    fuse = new Fuse(posts, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });
  });

  function updateSearch() {
    const tokens = query.trim().split(/\s+/);
    activeTags = tokens
      .filter((t) => t.startsWith('#'))
      .map((t) => t.slice(1).toLowerCase());
    const textQuery = tokens
      .filter((t) => !t.startsWith('#'))
      .join(' ')
      .trim();

    let result = textQuery ? fuse.search(textQuery).map((r) => r.item) : posts;

    if (activeTags.length > 0) {
      result = result.filter((post) =>
        activeTags.every((tag) =>
          post.tags.some((t) => t.toLowerCase().includes(tag)),
        ),
      );
    }

    filtered = result;
  }

  function onSearchInput(e: Event) {
    clearTimeout(debounceTimeout);
    query = (e.target as HTMLInputElement).value;
    debounceTimeout = setTimeout(updateSearch, 100);
  }

  function focusSearch(e: KeyboardEvent) {
    const target = e.target as HTMLElement;

    const isTyping =
      ['INPUT', 'TEXTAREA'].includes(target.tagName) ||
      target.isContentEditable;

    if (!isTyping && e.key === '/') {
      e.preventDefault();
      searchInput.focus();

      const length = searchInput.value.length;
      searchInput.setSelectionRange(length, length);
    }

    if (isTyping && e.key === 'Escape') {
      (target as HTMLInputElement).blur();
    }
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');

    if (initialQuery) {
      query = initialQuery.trim();
      updateSearch();
    }
  });

  onMount(() => {
    window.addEventListener('keydown', focusSearch);
    return () => window.removeEventListener('keydown', focusSearch);
  });

  function toggleTag(tag: string) {
    const tokens = query.trim().split(/\s+/);
    const tagToken = `#${tag}`;

    if (tokens.includes(tagToken)) {
      query = tokens.filter((t) => t !== tagToken).join(' ');
    } else {
      query = [...tokens, tagToken].join(' ').trim();
    }

    updateSearch();
  }

  function isTagActive(tag: string) {
    return query.trim().split(/\s+/).includes(`#${tag}`);
  }
</script>

<div class="search-container">
  <span class="search-icon">
    <Icon icon="mdi:magnify" />
  </span>

  <input
    type="text"
    placeholder="Search..."
    bind:value={query}
    bind:this={searchInput}
    on:input={onSearchInput}
    class="search-bar"
  />
</div>

<div class="tag-grid">
  {#each allTags as tag}
    <button
      class="tag-chip {isTagActive(tag) ? 'active' : ''}"
      on:click={() => toggleTag(tag)}
    >
      #{tag}
    </button>
  {/each}
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
            <span><i>{format(new Date(post.date), 'PPP')}</i></span>
          </div>
          <span class="post-description">{post.description}</span>
          <div class="post-tags">
            {#each post.tags as tag}
              <span class="tag">#{tag}</span>
            {/each}
          </div>
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

  .post-tags {
    margin-top: 0.5em;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }

  .tag {
    background: #121212;
    padding: 0.2em 0.5em;
    font-size: 0.85em;
  }

  .tag-chip {
    background: #121212;
    color: white;
    padding: 0.25em 0.6em;
    border: 1px solid white;
    font-size: 0.9em;
    cursor: pointer;
    user-select: none;
  }

  .tag-chip:hover {
    background: #333333;
  }

  .tag-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 1em;
  }

  .tag-chip {
    background-color: transparent;
    border: 1px solid #888;
    color: #ccc;
    padding: 0.3rem 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .tag-chip:hover {
    border-color: #fff;
    color: white;
  }

  .tag-chip.active {
    background-color: #fff;
    color: #111;
    border-color: #fff;
  }
</style>
