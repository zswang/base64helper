# Base64 Helper

## Usage

### Injection

```js
javascript:with(document)0[body.appendChild(createElement('script')).src='https://raw.githubusercontent.com/zswang/base64helper/master/base64.js?'+Math.random()]
```

### Inline

```js
javascript:void function()%7Bfunction%20t(t)%7Bvar%20e%3Btry%7Be%3Dt.replace(%2F%5Ba-z0-9%2B%5C%2F%5D%2B%3D*%2Fgi%2Cfunction(t)%7Breturn%20decodeURIComponent(escape(atob(t)))%7D)%7Dcatch(t)%7Breturn!1%7Dreturn!%2F%5E%5Ba-zA-Z0-9%5D%7B1%2C3%7D%24%2F.test(e)%26%26(!%2F%5B0x00-0x07%5D%2F.test(e)%26%26e)%7Dfunction%20e(t)%7Breturn%20btoa(unescape(encodeURIComponent(t)))%7Dfunction%20n(t)%7Bif(t)%7Bif(t%20instanceof%20HTMLInputElement%7C%7Ct%20instanceof%20HTMLTextAreaElement)return%20t%3Bif(t.getAttribute%26%26t.getAttribute(%22contenteditable%22))return%20t%3Bfor(t%3Dt.parentNode%3Bt%3B)%7Bif(n(t))return%20t%3Bt%3Dt.parentNode%7D%7D%7Dfunction%20o(t)%7Bvar%20e%3Ddocument.createEvent(%22HTMLEvents%22)%3Be.initEvent(%22input%22%2C!1%2C!0)%2Ct.dispatchEvent(e)%7Dfunction%20i(n%2Cc)%7Bif(n%26%26(c%7C%7C!n.getAttribute%7C%7C!n.getAttribute(%22contenteditable%22)))%7Bif(n%20instanceof%20HTMLInputElement%26%26%22text%22%3D%3D%3Dn.type%7C%7Cn%20instanceof%20HTMLTextAreaElement)return%20void(c%26%26t(n.value)%3D%3D%3D!1%26%26(n.value%3De(n.value)%2Co(c)))%3Bif(n.nodeType!%3D%3DNode.TEXT_NODE)n.childNodes%26%26%5B%5D.slice.apply(n.childNodes).forEach(function(t)%7Bi(t%2Cc)%7D)%3Belse%20if(c)t(n.textContent)%3D%3D%3D!1%26%26(n.textContent%3De(n.textContent)%2Co(c))%3Belse%7Bvar%20r%3Dt(n.textContent)%3Br!%3D%3D!1%26%26(n.textContent%3Dr)%7D%7D%7Di(document.activeElement%2Cn(document.activeElement))%7D()%3B
```