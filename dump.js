(async () => {
  const contentDiv = document.getElementById('content');
  chrome.storage.local.get('state', ({state}) => {
  const text = state ? JSON.parse(state)
    .tabGroups.map(g=>g.tabsMeta)
    .map(tabs=>tabs.map(t=>`${t.url} | ${t.title}`).join('\n'))
    .join('\n\n') : 'No data found';
  contentDiv.appendChild(document.createTextNode(text));
  });
})();