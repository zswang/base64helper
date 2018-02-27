(function () {
  function tryBd(str) {
    var result
    try {
      result = str.replace(/[a-z0-9+\/]+=*/ig, function (all) {
        return decodeURIComponent(escape(atob(all)))
      })
    } catch (ex) {
      return false
    }
    if (/^[a-zA-Z0-9]{1,3}$/.test(result)) {
      return false
    }
    if (/[0x00-0x07]/.test(result)) {
      return false
    }
    return result
  }

  function be(str) {
    return btoa(unescape(encodeURIComponent(str)))
  }

  function ed(el) {
    if (!el) {
      return
    }
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      return el
    }
    if (el.getAttribute && el.getAttribute('contenteditable')) {
      return el
    }
    el = el.parentNode
    while (el) {
      if (ed(el)) {
        return el
      }
      el = el.parentNode
    }
  }

  function fireInput(editor) {
    var evt = document.createEvent('HTMLEvents')
    evt.initEvent('input', false, true)
    editor.dispatchEvent(evt)
  }

  function sc(el, editor) {
    if (!el) {
      return
    }
    if (!editor && el.getAttribute && el.getAttribute('contenteditable')) {
      return
    }
    if ((el instanceof HTMLInputElement && el.type === 'text') || el instanceof HTMLTextAreaElement) {
      if (editor) {
        if (tryBd(el.value) === false) {
          el.value = be(el.value)
          fireInput(editor)
        }
      }
      return
    }
    if (el.nodeType === Node.TEXT_NODE) {
      if (editor) {
        if (tryBd(el.textContent) === false) {
          el.textContent = be(el.textContent)
          fireInput(editor)
        }
      } else {
        var r = tryBd(el.textContent)
        if (r !== false) {
          el.textContent = r
        }
      }
      return
    }
    if (el.childNodes) {
      [].slice.apply(el.childNodes).forEach(function (item) {
        sc(item, editor)
      })
    }
  }

  sc(document.activeElement, ed(document.activeElement))
})()