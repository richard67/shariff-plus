'use strict'

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

export default function data(shariff) {
  var shareUrl = new URL('https://twitter.com/intent/tweet');

  var title = shariff.getTitle()

  shareUrl.searchParams.set('url', shariff.getURL());
  if (shariff.options.twitterVia !== null) {
    shareUrl.searchParams.set('via', shariff.options.twitterVia);
  }
  // From Twitters documentation (May 2021):
  // The length of your passed Tweet text should not exceed 280 characters
  // when combined with any passed hashtags, via, or url parameters.
  var remainingTextLength = (280 - (shareUrl.searchParams.via || '').length - (shareUrl.searchParams.url || '').length)
  shareUrl.searchParams.set('text', abbreviateText(title, remainingTextLength));

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
    name: 'twitter',
    faPrefix: 'fab fa-brands',
    faName: 'fa-x-twitter',
    title: {
      bg: 'Сподели в X',
      cs: 'Sdílet na X',
      da: 'Del på X',
      de: 'Bei X teilen',
      en: 'Share on X',
      es: 'Compartir en X',
      fi: 'Jaa X',
      fr: 'Partager sur X',
      hr: 'Podijelite na X',
      hu: 'Megosztás X',
      it: 'Condividi su X',
      ja: 'Xで共有する',
      ko: 'X에서 공유',
      nl: 'Delen op X',
      no: 'Del på X',
      pl: 'Udostępnij na X',
      pt: 'Compartilhar no X',
      ro: 'Partajează pe X',
      ru: 'Поделиться на X',
      sk: 'Zdieľať na X',
      sl: 'Deli na X',
      sr: 'Podeli na X-u',
      sv: 'Dela på X',
      tr: "X'da paylaş",
      zh: '在X上分享',
    },
    // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
    shareUrl: shareUrl + shariff.getReferrerTrack()
  }
}
