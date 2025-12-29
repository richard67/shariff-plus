'use strict'

export default function data(shariff) {
  var title = shariff.getTitle()
  var creator = shariff.getMeta('DC.creator')
  if (creator.length > 0) {
    title += ' - ' + creator
  }
  var img = shariff.getOption('mediaUrl')
  if (!img || img.length <= 0) {
    img = shariff.getMeta('og:image')
  }

  var shareUrl = new URL('https://www.pinterest.com/pin/create/link/');
  shareUrl.searchParams.set('url', shariff.getURL());
  shareUrl.searchParams.set('media', img);
  shareUrl.searchParams.set('description', title);

  return {
    popup: true,
    shareText: 'pin it',
    name: 'pinterest',
    faPrefix: 'fab',
    faName: 'fa-pinterest-p',
    title: {
      bg: 'Сподели в Pinterest',
      cs: 'Přidat na Pinterest',
      da: 'Del på Pinterest',
      de: 'Bei Pinterest pinnen',
      en: 'Pin it on Pinterest',
      es: 'Compartir en Pinterest',
      fi: 'Jaa Pinterestissä',
      fr: 'Partager sur Pinterest',
      hr: 'Podijelite na Pinterest',
      hu: 'Megosztás Pinteresten',
      it: 'Condividi su Pinterest',
      ja: 'Pinterest上で共有',
      ko: 'Pinterest에서 공유하기',
      nl: 'Delen op Pinterest',
      no: 'Del på Pinterest',
      pl: 'Udostępnij przez Pinterest',
      pt: 'Compartilhar no Pinterest',
      ro: 'Partajează pe Pinterest',
      ru: 'Поделиться на Pinterest',
      sk: 'Zdieľať na Pinterest',
      sl: 'Deli na Pinterest',
      sr: 'Podeli na Pinterest-u',
      sv: 'Dela på Pinterest',
      tr: "Pinterest'ta paylaş",
      zh: '分享至Pinterest',
    },
    shareUrl: shareUrl + shariff.getReferrerTrack()
  }
}
