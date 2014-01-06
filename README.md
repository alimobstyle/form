# Modal

---

表单

---

<!--基于aliceui-->
<link type="text/css" rel="stylesheet" media="screen" href="src/button.css">
<link type="text/css" rel="stylesheet" media="screen" href="src/form.css">

## 演示

### 基本用法

````html
<form action="" name="form" class="ali-mobile-form">
    <fieldset>
        <legend>二次验证</legend>
        <div class="ali-mobile-form-item">
            <input class="ali-input" id="checkcode-input" type="text" placeholder="请输入验证码" pattern="\d*" />
        </div>
        <div class="ali-tiptext-container ali-tiptext-container-info hidden" id="checkcode-tip">
            <div class="ali-tiptext-arrow ali-tiptext-arrowup">
                <em>◆</em>
                <span>◆</span>
            </div>
            <p class="ali-tiptext ali-tiptext-info">
                <i class="ali-tiptext-icon iconfont"></i>
                <span class="tiptext-content">
                    请输入正确的验证码
                </span>
            </p>
        </div>
        <div class="ali-mobile-form-item">
            <input class="ali-input" id="id-code" type="text" placeholder="请输入您的身份证后六位" pattern="\d*" />
        </div>
        <div class="ali-tiptext-container ali-tiptext-container-info hidden" id="idcode-tip">
            <div class="ali-tiptext-arrow ali-tiptext-arrowup">
                <em>◆</em>
                <span>◆</span>
            </div>
            <p class="ali-tiptext ali-tiptext-info">
                <i class="ali-tiptext-icon iconfont"></i>
                <span class="tiptext-content">
                    请输入正确的身份证后六位
                </span>
            </p>
        </div>
        <div class="ali-mobile-form-item ali-form-submit-line">
            <input type="submit" id="submit-btn" class="ali-button ali-button-block ali-button-lorange" value="下一步" />
        </div>
    </fieldset>
</form>
````
