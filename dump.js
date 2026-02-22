(async () => {
  const contentDiv = document.getElementById('content');
  const { state } = await chrome.storage.local.get('state');
  const text = state
    ? JSON.parse(state)
        .tabGroups.map((g) => g.tabsMeta)
        .map((tabs) => tabs.map((t) => `${t.url} | ${t.title}`).join('\n'))
        .join('\n\n')
    : 'No data found';
  contentDiv.appendChild(document.createTextNode(text));
})();