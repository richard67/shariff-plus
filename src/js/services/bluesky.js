'use strict'

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function (text, length) {
  if (length <= 0) {
    return ''
  }

  var div = document.createElement('div')
  var node = document.createTextNode(text)
  div.appendChild(node)
  var abbreviated = div.textContent
  if (abbreviated.length <= length) {
    return text
  }

  var lastWhitespaceIndex = abbreviated
    .substring(0, length - 1)
    .lastIndexOf(' ')
  abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026'

  return abbreviated
}

module.exports = function (shariff) {
  var title = shariff.getTitle()
  var url = shariff.getURL()
  // From Bluesky documentation (Decembe 2024):
  // The post length limit on Bluesky is 300 characters.
  var text = abbreviateText(title, 299 - url.length));
  if (text.length > 0) {
    text += ' ' + url;
  } else {
    text = url;
  }

  return {
    popup: true,
    shareText: {
      de: 'posten',
      en: 'post',
      ja: '投稿',
      ko: '게시물',
      ru: 'Посты',
      sr: 'pošta',
      zh: '职位',
    },
    name: 'bluesky',
    faPrefix: 'fab fa-brands',
    faName: 'fa-bluesky',
    title: {
      bg: 'Сподели в Bluesky',
      cs: 'Sdílet na Bluesky',
      da: 'Del på Bluesky',
      de: 'Bei Bluesky teilen',
      en: 'Share on Bluesky',
      es: 'Compartir en Bluesky',
      fi: 'Jaa Bluesky',
      fr: 'Partager sur Bluesky',
      hr: 'Podijelite na Bluesky',
      hu: 'Megosztás Bluesky',
      it: 'Condividi su Bluesky',
      ja: 'Xで共有する',
      ko: 'X에서 공유',
      nl: 'Delen op Bluesky',
      no: 'Del på Bluesky',
      pl: 'Udostępnij na Bluesky',
      pt: 'Compartilhar no Bluesky',
      ro: 'Partajează pe Bluesky',
      ru: 'Поделиться на Bluesky',
      sk: 'Zdieľať na Bluesky',
      sl: 'Deli na Bluesky',
      sr: 'Podeli na Bluesky',
      sv: 'Dela på Bluesky',
      tr: "Bluesky'da paylaş",
      zh: 'Bluesky',
    },
    shareUrl:
      'https://bsky.app/intent/compose?text=' +
      encodeURIComponent(text) +
      shariff.getReferrerTrack(),
  }
}
