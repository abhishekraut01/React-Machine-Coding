document.getElementById('sendBtn').onclick = async () => {
  const json = document.getElementById('json').value;
  const auth = document.getElementById('auth').value;
  const cookie = document.getElementById('cookie').value;
  const result = document.getElementById('result');
  result.textContent = 'Sending...';

  try {
    // Validate JSON
    const body = JSON.parse(json);
    const url = "https://api-v2.aifiesta.ai/api/chat/completions";

    const headers = {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': auth,
      'content-type': 'application/json',
      'origin': 'https://chat.aifiesta.ai',
      'priority': 'u=1, i',
      'referer': 'https://chat.aifiesta.ai/',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Brave";v="139", "Chromium";v="139"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
    };
    if (cookie) headers['cookie'] = cookie;

    // Send request
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
      credentials: 'include' // enables sending cookies if needed
    });

    const text = await res.text();
    result.textContent = res.ok ? text : `Error: ${res.status}\n${text}`;
  } catch (e) {
    result.textContent = "Invalid JSON or request error!\n" + e;
  }
};

// Optionally, load previous input from localStorage
window.onload = () => {
  document.getElementById('auth').value = localStorage.getItem('auth') || '';
  document.getElementById('cookie').value = localStorage.getItem('cookie') || '';
  document.getElementById('json').value = localStorage.getItem('json') || '';
};
['auth', 'cookie', 'json'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    localStorage.setItem(id, e.target.value);
  });
});
