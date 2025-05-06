/**
 * proxy.pac
 * Маршрутизирует трафик к выбранным ресурсам через прокси
 * HTTP-прокси: 77.71.99.118:50100
 * SOCKС-прокси: 77.71.99.118:50101
 * Логин: artemmakaryev, Пароль: n7zrbfb5n7
 */

// PAC-файл с учетными данными
function FindProxyForURL(url, host) {
  // Проверяем, нужен ли прокси для этого хоста
  for (var i = 0; i < needProxy.length; i++) {
    if (hostEndsWith(host, needProxy[i])) {
      // Данные аутентификации прямо в строке настроек прокси
      return "PROXY artemmakaryev:n7zrbfb5n7@77.71.99.118:50100; SOCKS5 artemmakaryev:n7zrbfb5n7@77.71.99.118:50101";
    }
  }
  return "DIRECT";
}

var needProxy = [
  // Соцсети
  "youtube.com",
  "instagram.com",
  "facebook.com",
  "linkedin.com",

  // OpenAI / ChatGPT
  "openai.com",
  "chatgpt.com",
  "chat.openai.com",
  "auth0.openai.com",
  "platform.openai.com",
  "labs.openai.com",
  "ab.chatgpt.com",
  "webrtc.chatgpt.com",
  "android.chat.openai.com",
  "oaistatic.com",
  "oaiusercontent.com",

  // GitHub + Copilot
  "github.com",
  "github.dev",
  "githubusercontent.com",
  "githubcopilot.com",
  "api.github.com",
  "api.githubcopilot.com",
  "copilot.github.com",
  "copilot-proxy.githubusercontent.com",
  "copilot-telemetry.githubusercontent.com",
  "ghcr.io",
  "pkg.github.com",
  "actions.githubusercontent.com",
  "pkg.actions.githubusercontent.com",
  "results-receiver.actions.githubusercontent.com",
  "codeload.github.com",
  "objects.githubusercontent.com",
  "objects-origin.githubusercontent.com",
  "github-releases.githubusercontent.com",
  "github-registry-files.githubusercontent.com",
  "github-cloud.githubusercontent.com",
  "github-cloud.s3.amazonaws.com",

  // Google Gemini / Bard / AI-Studio
  "gemini.google.com",
  "bard.google.com",
  "aistudio.google.com",
  "ai.google.dev",
  "makersuite.google.com",
  "generativelanguage.googleapis.com",
  "googleapis.com",
  "apis.google.com",
  "cloud.google.com",

  // Anthropic Claude
  "claude.ai",
  "anthropic.com",
  "console.anthropic.com",
  "a-api.anthropic.com",
  "a-cdn.anthropic.com",
  "statsig.anthropic.com",
  "docs.anthropic.com",

  // xAI Grok
  "grok.x.ai",
  "accounts.x.ai",
  "x.ai",

  // Perplexity
  "perplexity.ai",

  // Hugging Face
  "huggingface.co",
  "huggingface.io",

  // Notion
  "notion.so",
  "notioncdn.net",

  // Midjourney
  "midjourney.com",

  // Stability AI
  "stability.ai",
  "platform.stability.ai",
  "api.stability.ai",
  "dreamstudio.ai",

  // Manus AI
  "manus.im"
];

function hostEndsWith(host, suffix) {
  // true для exact match и поддоменов: *.suffix
  return host === suffix || host.slice(-suffix.length - 1) === "." + suffix;
}
