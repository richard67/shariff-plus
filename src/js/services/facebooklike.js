'use strict'

module.exports = function(shariff) {
  var url = shariff.getURL()
  var dialogTitle = shariff.getTitle()
  var shariffLang = shariff.getOption('lang')
  var fbLang = 'en_US'
  var dialogClose = 'Close'
  var fbScript = '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/'
  var fbDiv = '<div class="fb-like" data-href="' + encodeURIComponent(url) + shariff.getReferrerTrack()
  var minWidth = 47
  var stdWidth = 103
  var dialogHtml = '<div id="fb-root"></div>'
  var fblikeOptions = shariff.getFacebooklikeOptions()
  switch (shariffLang) {
  case 'bg': dialogClose = 'Близо'; fbLang = 'bg_BG'; break
  case 'cs': dialogClose = 'Zavřít'; fbLang = 'cs_CZ'; break
  case 'da': dialogClose = 'Luk'; fbLang = 'da_DK'; break
  case 'de': dialogClose = 'Schließen'; fbLang = 'de_DE'; break
  case 'es': dialogClose = 'Cerrar'; fbLang = 'es_ES'; break
  case 'fi': dialogClose = 'Sulje'; fbLang = 'fi_FI'; break
  case 'fr': dialogClose = 'Fermer'; fbLang = 'fr_FR'; break
  case 'hr': dialogClose = 'Zatvoriti'; fbLang = 'hr_HR'; break
  case 'hu': dialogClose = 'Bezár'; fbLang = 'hu_HU'; break
  case 'it': dialogClose = 'Chiudi'; fbLang = 'it_IT'; break
  case 'ja': dialogClose = '閉じる'; fbLang = 'ja_JP'; break
  case 'ko': dialogClose = '닫기'; fbLang = 'ko_KR'; break
  case 'nl': dialogClose = 'Sluiten'; fbLang = 'nl_NL'; break
  case 'no': dialogClose = 'Lukk'; fbLang = 'nb_NO'; break
  case 'pl': dialogClose = 'Zamknij'; fbLang = 'pl_PL'; break
  case 'pt': dialogClose = 'Fechar'; fbLang = 'pt_PT'; break
  case 'ro': dialogClose = 'Închide'; fbLang = 'ro_RO'; break
  case 'ru': dialogClose = 'Закрыть'; fbLang = 'ru_RU'; break
  case 'sk': dialogClose = 'Zatvoriť'; fbLang = 'sk_SK'; break
  case 'sl': dialogClose = 'Zapri'; fbLang = 'sl_SI'; break
  case 'sr': dialogClose = 'Zatvori'; fbLang = 'sr_RS'; break
  case 'sv': dialogClose = 'Stäng'; fbLang = 'sv_SE'; break
  case 'tr': dialogClose = 'Kapatın'; fbLang = 'tr_TR'; break
  case 'zh': dialogClose = '关闭'; fbLang = 'zh_CN'; break
  }
  fbScript += fbLang + '/sdk.js#xfbml=1&version=v11.0'
  fblikeOptions.appId = fblikeOptions.appId || (shariff.getMeta('fb:app_id') || null)
  if (fblikeOptions.appId !== null) {
    fbScript += '&appId=' + fblikeOptions.appId
    fblikeOptions.appId = null
  }
  fbScript += '&autoLogAppEvents=1 nonce="Kw8QY9uP"></script>'
  switch (fblikeOptions.layout) {
  case 'standard':
    minWidth = 225
    stdWidth = 450
    break
  case 'box_count':
    minWidth = 55
    stdWidth = 103
    break
  case 'button_count':
    minWidth = 90
    stdWidth = 154
    break
  }
  if (typeof fblikeOptions.width === 'undefined' || fblikeOptions.width === null) {
    fblikeOptions.width = stdWidth
  } else if (fblikeOptions.width < minWidth) {
    fblikeOptions.width = minWidth
  }
  for (var opt in fblikeOptions) {
    if (fblikeOptions.hasOwnProperty(opt) && typeof fblikeOptions[opt] !== 'undefined' && fblikeOptions[opt] !== null) {
      fbDiv += ' data-' + opt + '="' + fblikeOptions[opt] + '"'
    }
  }
  fbDiv += '</div>'
  dialogHtml += fbScript + '<div>' + '<h1 class="dialogtitle">' + dialogTitle + '</h1>' +
    '<a class="dialoglink" href="' + url + '">' + url + '</a></div>' + fbDiv
    '<div>' + '<button class="dialogbutton" onclick="self.close()">' + dialogClose + '</button></div>'
  return {
    popup: true,
    shareText: {
      'bg': 'харесвам',
      'cs': 'to se mi líbí',
      'da': 'synes godt om',
      'de': 'gefällt mir',
      'en': 'like',
      'es': 'me gusta',
      'fi': 'tykkää',
      'fr': 'j’aime',
      'hr': 'sviđa mi se',
      'hu': 'tetszik',
      'it': 'mi piace',
      'ja': 'いいね！',
      'ko': '좋아요',
      'nl': 'vind ik leuk',
      'no': 'liker',
      'pl': 'lubię to!',
      'pt': 'gosto',
      'ro': 'îmi place',
      'ru': 'нравится',
      'sk': 'páči sa mi to',
      'sl': 'všeč mi je',
      'sr': 'свиђа ми се',
      'sv': 'gilla',
      'tr': 'beğen',
      'zh': '赞'
    },
    name: 'facebooklike',
    faPrefix: 'fas',
    faName: 'fa-thumbs-up',
    title: {
      'bg': 'Харесвам/Вече не харесвам във Facebook',
      'cs': 'To se mi líbí/už se mi to nelíbí na Facebooku',
      'da': 'Synes godt om/Fjern Synes godt om på Facebook',
      'de': 'Gefällt mir/Gefällt mir nicht mehr bei Facebook',
      'en': 'Like/Unlike on Facebook',
      'es': 'Me gusta/Ya no me gusta en Facebook',
      'fi': 'Tykkää/En tykkääkään Facebookissa',
      'fr': 'J’aime/Je n’aime plus sur Facebook',
      'hr': 'Sviđa mi se/Ne sviđa mi se na Facebooku',
      'hu': 'Tetszik/Mégsem tetszik a Facebookon',
      'it': 'Mi piace/Non mi piace più su Facebook',
      'ja': 'フェイスブック上 いいね！/「いいね！」を取り消す',
      'ko': '페이스북에서 좋아요/싫어함',
      'nl': 'Vind ik leuk/Vind ik niet meer leuk op Facebook',
      'no': 'Liker/Slutt å like på Facebook',
      'pl': 'Lubię to!/Nie lubię na Facebooku',
      'pt': 'Gosto/Não gosto no Facebook',
      'ro': 'Îmi place/Nu-mi mai place pe Facebook',
      'ru': 'Нравится/Не нравится на Facebook',
      'sk': 'Páči sa mi to/Zrušiť Páči sa mi to na Facebooku',
      'sl': 'Všeč mi je/Ni mi všeč na Facebooku',
      'sr': 'Свиђа ми се/Не свиђа ми се на Фацебооку',
      'sv': 'Gilla/Sluta gilla på Facebook',
      'tr': 'Facebook\'ta Beğen/Beğenmekten Vazgeç',
      'zh': 'Facebook上的赞/取消赞'
    },
    shareUrl: 'javascript:void(0);',
    dialogHtml: dialogHtml,
    dialogCssUrl: shariff.getDialogsMediaUrl() + '/' + shariff.getFacebooklikeCss()
  }
}
