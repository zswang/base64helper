# Base64 Helper

## Usage

### Injection

```js
javascript:with(document)0[body.appendChild(createElement('script')).src='https://raw.githubusercontent.com/zswang/base64helper/master/base64.js?'+Math.random()]
```

### Inline

```js
javascript:void function()%7Bfunction%20t(t)%7Bvar%20e%2Cn%3Btry%7Be%3Dt.replace(%2F%5Ba-z0-9%2B%5C%2F%5D%2B%3D*%2Fgi%2Cfunction(t)%7Bvar%20e%3DdecodeURIComponent(escape(atob(t)))%3Breturn%2F%5Ba-z%5D%7B3%7D%2F.test(e)%7C%7C%2F%5B%5Cu4e00-%5Cu9fa5%5D%7B2%7D%2F.test(e)%3F(n%3D!0%2Ce)%3At%7D)%7Dcatch(t)%7Breturn!1%7Dreturn!!n%26%26e%7Dfunction%20e(t)%7Breturn%20btoa(unescape(encodeURIComponent(t)))%7Dfunction%20n(t)%7Bif(t)%7Bif(t%20instanceof%20HTMLInputElement%7C%7Ct%20instanceof%20HTMLTextAreaElement)return%20t%3Bif(t.getAttribute%26%26t.getAttribute(%22contenteditable%22))return%20t%3Bfor(t%3Dt.parentNode%3Bt%3B)%7Bif(n(t))return%20t%3Bt%3Dt.parentNode%7D%7D%7Dfunction%20o(t)%7Bvar%20e%3Ddocument.createEvent(%22HTMLEvents%22)%3Be.initEvent(%22input%22%2C!1%2C!0)%2Ct.dispatchEvent(e)%7Dfunction%20i(n%2Cr)%7Bif(n%26%26(r%7C%7C!n.getAttribute%7C%7C!n.getAttribute(%22contenteditable%22)))%7Bif(n.%24history_value)return%20n.value%3Dn.%24history_value%2Cvoid(n.%24history_value%3Dnull)%3Bif(n.%24history_textContent)return%20n.textContent%3Dn.%24history_textContent%2Cvoid(n.%24history_textContent%3Dnull)%3Bif(%2Finput%7Ctextarea%2Fi.test(n.tagName))if(r)t(n.value)%3D%3D%3D!1%26%26(n.%24history_value%3Dn.value%2Cn.value%3De(n.value)%2Co(r))%3Belse%7Bvar%20u%3Dt(n.value)%3Bu!%3D%3D!1%26%26(n.%24history_value%3Dn.value%2Cn.value%3Du)%7Delse%20if(n.nodeType!%3D%3DNode.TEXT_NODE)n.childNodes%26%26%5B%5D.slice.apply(n.childNodes).forEach(function(t)%7Bi(t%2Cr)%7D)%3Belse%20if(r)t(n.textContent)%3D%3D%3D!1%26%26(n.%24history_textContent%3Dn.textContent%2Cn.textContent%3De(n.textContent)%2Co(r))%3Belse%7Bvar%20u%3Dt(n.textContent)%3Bu!%3D%3D!1%26%26(n.%24history_textContent%3Dn.textContent%2Cn.textContent%3Du)%7D%7D%7Di(document.activeElement%2Cn(document.activeElement))%7D()%3B
```