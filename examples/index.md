# 演示文档

---

````html
<form action="" name="form" id="confirm-form" method="post">
    <div class="ali-field">
        <div class="ali-flexbox">
            <div class="ali-flexbox-item">
                <div class="ali-field-input">
                    <input id="checkcode-input" type="tel" placeholder="请输入验证码" pattern="\d*" autocomplete="off" />
                </div>
            </div>
            <div class="ali-captcha-button">
                <button type="button" class="ali-button ali-button-blue" id="resend-btn">重新发送</button>
            </div>
        </div>
    </div>
    <div class="ali-field">
        <div class="ali-field-input">
            <input id="id-code" type="tel" placeholder="请输入您的身份证后四位" pattern="\d*" autocomplete="off" />
        </div>
    </div>
    <div class="ali-field">
        <input type="submit" id="submit-btn" class="ali-button ali-button-orange" value="下一步" />
    </div>
</form>
````