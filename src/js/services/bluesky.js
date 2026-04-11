'use strict'

var url = require('url')

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function (text, length) {
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
  var shareUrl = url.parse('https://bsky.app/intent/compose', true)

  var title = shariff.getTitle()

  shareUrl.query.url = shariff.getURL()
  // From Bluesky documentation (Decembe 2024):
  // The length of your passed text should not exceed 300 characters
  // when combined with any passed hashtags, via, or url parameters.
  var remainingTextLength =
    300 - (shareUrl.query.url || '').length
  shareUrl.query.text = abbreviateText(title, remainingTextLength)

  delete shareUrl.search

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
    // shareUrl: 'https://bsky.app/intent/compose?text='+ shariff.getShareText() + ' ' + url
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack(),
  }
}
