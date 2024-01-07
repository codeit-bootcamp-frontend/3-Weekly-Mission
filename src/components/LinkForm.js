import React from "react";
import "../styles/LinkForm.css";

function LinkForm() {
    return (
        <div className="link-form-box">
            <form className="link-form">
                <img src="/images/link.png" alt="link" />
                <input type="text" placeholder="링크를 추가해 보세요." />
                <button className="link-form-add">추가하기</button>
            </form>
        </div>
    );
}

export default LinkForm;
