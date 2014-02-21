# Form

---

表单

---

## 演示

<link rel="stylesheet" href="src/form.css" />

### Input
````html
<div class="ali-field">
    <div class="ali-field-input">
        <input type="text" placeholder="电话" value="">
    </div>
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <p>提示信息</p>
    </div>
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
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
</div>
````

### Input-警告
````html
<div class="ali-field ali-field-warn">
    <div class="ali-field-input">
        <input type="text" placeholder="银行开户名">
    </div>
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
</div>
````

### Input-验证失败
````html
<div class="ali-field ali-field-error">
    <div class="ali-field-input">
        <input type="text" placeholder="身份证号">
    </div>
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
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
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <p>提示信息</p>
    </div>
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
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
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
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
</div>
````

### Checbox-选中
````html
<div class="ali-field">
    <label class="ali-checkbox">
        表单项复选框——选中<input type="checkbox" checked="checked">
        <span class="ali-icon icon-check"></span>
    </label>
</div>
````

### Checbox-未选中
````html
<div class="ali-field">
    <label class="ali-checkbox">
        表单项复选框——未选中<input type="checkbox">
        <span class="ali-icon icon-check"></span>
    </label>
</div>
````

### Checbox-不可用
````html
<div class="ali-field">
    <label class="ali-checkbox ali-checkbox-disabled">
        表单项复选框——不可用<input type="checkbox" disabled="disabled">
        <span class="ali-icon icon-check"></span>
    </label>
</div>
````

### Checbox-警告
````html
<div class="ali-field ali-field-warn">
    <label class="ali-checkbox">
        <input type="checkbox">表单项复选框——出错
        <span class="ali-icon icon-check"></span>
    </label>
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
</div>
````

### Checbox-出错
````html
<div class="ali-field ali-field-warn">
    <label class="ali-checkbox">
        <input type="checkbox">表单项复选框——出错
        <span class="ali-icon icon-check"></span>
    </label>
    <div class="ali-field-message">
        <div class="ali-field-message-arrow"></div>
        <div class="ali-field-message-icon"></div>
        <p>提示信息</p>
    </div>
</div>
````

### Checbox-无框
````html
<div class="ali-field">
    <label class="ali-checkbox ali-checkbox-naked">
        <input type="checkbox">表单项复选框——无框
        <span class="ali-icon icon-check"></span>
    </label>
</div>
````

### Checkbox-mini
````html
<div class="ali-field">
    <label class="ali-checkbox ali-checkbox-mini">
        <input type="checkbox">
        <span class="ali-icon icon-check"></span>
        当日累积消费≤200元可免输密码
    </label>
</div>
````

### Checkbox-simple
````html
<div class="ali-field">
    <label class="ali-checkbox ali-checkbox-simple">
        <input type="checkbox">
        <span class="ali-icon icon-check"></span>
        同意《信用支付服务合同》
    </label>
</div>
````

### Checkbox-simple
````html
<div class="ali-field">
    <span class="ali-checkbox ali-checkbox-simple fn-left">
        <input id="agree" type="checkbox">
        <span class="ali-icon icon-check"></span>
    </span>
    <label for="agree">同意《信用支付服务合同》<a href="http://www.baidu.com">链接</a></label>
</div>
````


### Checkbox-style
````html
<div class="ali-field">
    <div class="ali-checkbox-style">
        <input type="checkbox">
        <label>
            <i></i>
        </label>
    </div>
</div>
````


### Select(需要配合alimobscript/select使用)
````html
<div class="ali-field">
    <div class="ali-select">
        <select>
            <option value="1">一天</option>
            <option value="7">一周</option>
            <option value="30" class="active">一个月</option>
        </select>
        <div class="ali-select-cont">
            <h3>操作记录</h3>
            <div class="ali-select-main">
                <div class="ali-select-arrow"></div>
                <ul>
                    <li data-value="1">一天</li>
                    <li data-value="7">一周</li>
                    <li data-value="30" class="active">一个月</li>
                </ul>
            </div>
        </div>
    </div>
</div>
````

### Select-不可用
````html
<div class="ali-field">
    <div class="ali-select ali-select-disabled">
        <select>
            <option value="">很长很长很长很长很长很长很长很长很长很长很长很长很长下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
        <div class="ali-select-cont">
            <h3>操作记录</h3>
        </div>
    </div>
</div>
````

### Select-出错
````html
<div class="ali-field ali-field-error">
    <div class="ali-select">
        <select>
            <option value="">很长很长很长很长很长很长很长很长很长很长很长很长很长下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
        <div class="ali-select-cont">
            <h3>操作记录</h3>
        </div>
    </div>
    <div class="ali-field-message">error message</div>
</div>
````

### Textarea
````html
<div class="ali-field">
    <div class="ali-textarea">
        <textarea name="" placeholder="请输入评论内容"></textarea>
    </div>
    <div class="ali-field-message">error message</div>
</div>
````

### Textarea - 出错
````html
<div class="ali-field ali-field-error">
    <div class="ali-textarea">
        <textarea name="" placeholder="请输入评论内容"></textarea>
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
