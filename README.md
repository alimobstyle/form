# Modal

---

表单

---

<link type="text/css" rel="stylesheet" media="screen" href="src/base.css">
<link type="text/css" rel="stylesheet" media="screen" href="src/form.css">

## 演示

### Input
````html
<div class="ali-field">
    <div class="ali-field-input">
        <input type="text" placeholder="电话" value="">
    </div>
    <div class="ali-field-message">提示信息</div>
</div>
````

### Input-不可用
````html
<div class="ali-field ali-field-disabled">
    <div class="ali-field-input">
        <input type="text" placeholder="电话" value="" disabled="disabled">
    </div>
</div>
````

### Input-验证成功
````html
<div class="ali-field ali-field-success">
    <div class="ali-field-input">
        <input type="text" placeholder="银行开户名">
    </div>
</div>
````

### Input-警告
````html
<div class="ali-field ali-field-warn">
    <div class="ali-field-input">
        <input type="text" placeholder="银行开户名">
    </div>
    <div class="ali-field-message">warn message</div>
</div>
````

### Input-验证失败
````html
<div class="ali-field ali-field-error">
    <div class="ali-field-input">
        <input type="text" placeholder="身份证号">
    </div>
    <div class="ali-field-default-message">default message</div>
    <div class="ali-field-message">error message</div>
</div>
````

### Input-loading
````html
<div class="ali-field ali-field-loading">
    <div class="ali-field-input">
        <input type="text" placeholder="身份证号">
    </div>
</div>
````

### Input-pack
````html
<div class="ali-field ali-field-pack">
    <div class="ali-flexbox">
      <div class="ali-flexbox-item ali-field-item ali-field-item-reset">
        <div class="ali-field-input">
          <input type="text" placeholder="姓">
        </div>
      </div>
      <div class="ali-flexbox-item ali-field-item ali-field-item-reset">
        <div class="ali-field-input">
          <input type="text" placeholder="名">
        </div>
      </div>
    </div>
    <div class="ali-field-message">default message</div>
</div>
````

### Input-pack-出错
````html
<div class="ali-field ali-field-pack ali-field-error">
    <div class="ali-flexbox">
      <div class="ali-flexbox-item ali-field-item">
        <div class="ali-field-input">
          <input type="text" placeholder="姓">
        </div>
      </div>
      <div class="ali-flexbox-item ali-field-item ali-field-item-reset">
        <div class="ali-field-input">
          <input type="text" placeholder="名">
        </div>
      </div>
    </div>
    <div class="ali-field-message">default message</div>
</div>
<div class="ali-field ali-field-pack ali-field-error">
    <div class="ali-flexbox">
      <div class="ali-flexbox-item ali-field-item ali-field-item-reset">
        <div class="ali-field-input">
          <input type="text" placeholder="姓">
        </div>
      </div>
      <div class="ali-flexbox-item ali-field-item">
        <div class="ali-field-input">
          <input type="text" placeholder="名">
        </div>
      </div>
    </div>
    <div class="ali-field-message">default message</div>
</div>
````

### Checbox-选中
````html
<div class="ali-field">
  <label class="ali-checkbox">表单项复选框——选中<input type="checkbox" checked="checked"><span class="ali-icon icon-check"></span></label>
</div>
````

### Checbox-未选中
````html
<div class="ali-field">
  <label class="ali-checkbox">表单项复选框——未选中<input type="checkbox"><span class="ali-icon icon-check"></span></label>
</div>
````

### Checbox-不可用
````html
<div class="ali-field">
  <label class="ali-checkbox ali-checkbox-disabled">表单项复选框——不可用<input type="checkbox" disabled="disabled"><span class="ali-icon icon-check"></span></label>
</div>
````

### Checbox-警告
````html
<div class="ali-field ali-field-warn">
  <label class="ali-checkbox"><input type="checkbox">表单项复选框——出错<span class="ali-icon icon-check"></span></label>
  <div class="ali-field-message">warn message</div>
</div>
````

### Checbox-出错
````html
<div class="ali-field ali-field-warn">
  <label class="ali-checkbox"><input type="checkbox">表单项复选框——出错<span class="ali-icon icon-check"></span></label>
  <div class="ali-field-message">warn message</div>
</div>
````

### Checbox-无框
````html
<div class="ali-field">
  <label class="ali-checkbox ali-checkbox-naked"><input type="checkbox">表单项复选框——无框<span class="ali-icon icon-check"></span></label>
</div>
````

### Checkbox-mini
````html
<div class="ali-field">
  <label class="ali-checkbox ali-checkbox-mini"><input type="checkbox"><span class="ali-icon icon-check"></span>当日累积消费≤200元可免输密码</label>
</div>
````

### Checkbox-simple
````html
<div class="ali-field">
  <label class="ali-checkbox ali-checkbox-simple"><input type="checkbox"><span class="ali-icon icon-check"></span>同意《信用支付服务合同》</label>
</div>
````

### Checkbox-simple
````html
<div class="ali-field">
  <span class="ali-checkbox ali-checkbox-simple fn-left"><input id="agree" type="checkbox"><span class="ali-icon icon-check"></span></span><label for="agree">同意《信用支付服务合同》<a href="http://www.baidu.com">链接</a></label>
</div>
````

### Select
````html
<div class="ali-field">
    <div class="ali-select">
        <select>
            <option value="">很长很长很长很长很长很长很长很长很长很长很长很长很长下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
<div class="ali-field">
    <div class="ali-select ali-select-custom">
        <span class="ali-select-text">下拉列表1 <em>优惠</em></span>
        <select>
            <option value="">很长很长很长很长很长很长很长很长很长很长很长很长很长下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
````

### Select-不可用
````html
<div class="ali-field">
    <div class="ali-select ali-select-disabled">
        <select disabled="">
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
<div class="ali-field">
    <div class="ali-select ali-select-custom ali-select-disabled">
        <span class="ali-select-text">下拉列表1 <em>优惠</em></span>
        <select disabled="">
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
````

### Select-出错
````html
<div class="ali-field ali-field-error">
    <div class="ali-select">
        <select>
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
    <div class="ali-field-message">error message</div>
</div>
<div class="ali-field ali-field-error">
    <div class="ali-select ali-select-custom">
        <span class="ali-select-text">下拉列表1 <em>优惠</em></span>
        <select>
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
    <div class="ali-field-message">error message</div>
</div>
````


<script type="text/javascript">
window.addEventListener('load', function () {
    var interval = 500, begin = Date.now(), img = new Image(), timer = setTimeout(handler, interval);
    window.removeEventListener('load', arguments.callee);
    img.addEventListener('load', handler, false);
    img.src = 'https://i.alipayobjects.com/e/201305/Q9jNoeIir.gif?t=' + begin;

    function handler() {
        clearTimeout(timer);
        img.removeEventListener('load', handler);
        //响应在500ms以内算高速网络 高清（HD）标清（SD）
        document.body.className = (document.body.className + (Date.now() - begin < interval ? ' ali-hd' : ' ali-sd')).trim();
    }
}, false);
</script>
