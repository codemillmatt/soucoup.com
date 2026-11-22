(() => {
  const root = document.querySelector("[data-site-search]");
  if (!root) return;

  const form = root.querySelector("[data-search-form]");
  const input = root.querySelector("#site-search-input");
  const status = root.querySelector("[data-search-status]");
  const results = root.querySelector("[data-search-results]");
  const retry = root.querySelector("[data-search-retry]");
  let entries = [];

  const normalize = (value) => value.toLocaleLowerCase().trim();

  function render(query) {
    results.replaceChildren();
    const term = normalize(query);
    if (!term) {
      status.textContent = "Search by title, topic, or phrase.";
      return;
    }

    const matches = entries.filter((entry) => {
      const searchable = [
        entry.title,
        entry.summary,
        entry.content,
        ...(Array.isArray(entry.tags) ? entry.tags : []),
      ].join(" ");
      return normalize(searchable).includes(term);
    });

    if (matches.length === 0) {
      status.textContent = `No notes found for “${query}”. Try a broader term.`;
      return;
    }

    status.textContent = `${matches.length} ${matches.length === 1 ? "note" : "notes"} found.`;
    matches.forEach((entry) => {
      const item = document.createElement("li");
      item.className = "entry-row";
      const article = document.createElement("article");
      const heading = document.createElement("h3");
      const link = document.createElement("a");
      const summary = document.createElement("p");
      const date = document.createElement("p");
      const destination = new URL(entry.permalink, window.location.href);

      if (destination.origin !== window.location.origin) return;
      link.href = destination.href;
      link.textContent = entry.title;
      heading.append(link);
      summary.className = "entry-summary";
      summary.textContent = entry.summary || "";
      date.className = "entry-meta";
      date.textContent = entry.date || "";
      article.append(date, heading, summary);
      item.append(article);
      results.append(item);
    });
  }

  async function loadIndex() {
    retry.hidden = true;
    status.textContent = "Loading the index…";
    try {
      const response = await fetch(root.dataset.indexUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Search index returned ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Search index has an unexpected format");
      entries = data;
      const query = new URLSearchParams(window.location.search).get("q") || "";
      input.value = query;
      render(query);
    } catch {
      status.textContent = "The search index could not be loaded. Please try again.";
      retry.hidden = false;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    const url = new URL(window.location.href);
    query ? url.searchParams.set("q", query) : url.searchParams.delete("q");
    window.history.replaceState({}, "", url);
    render(query);
  });

  input.addEventListener("input", () => render(input.value));
  retry.addEventListener("click", loadIndex);
  loadIndex();
})();
