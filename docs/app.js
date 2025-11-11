const mount = document.getElementById('app');

async function loadRepoInfo() {
  const url = 'https://api.github.com/repos/1xLab/cat1';
  const res = await fetch(url, { headers: { 'Accept': 'application/vnd.github+json' } });
  if (!res.ok) throw new Error('GitHub API error');
  return res.json();
}

function render(data) {
  mount.innerHTML = 
    <div>
      <p><strong>Repository:</strong> <a href=""></a></p>
      <p><strong>Stars:</strong>  | <strong>Forks:</strong> </p>
      <p><strong>Description:</strong> </p>
    </div>
  ;
}

(async () => {
  mount.textContent = 'Loading…';
  try {
    const repo = await loadRepoInfo();
    render(repo);
  } catch (e) {
    mount.textContent = 'Failed to load data.';
  }
})();
