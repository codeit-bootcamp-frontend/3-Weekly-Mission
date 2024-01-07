import React from "react";
import "../styles/ActionContainer.css";

function ActionContainer({ folderName }) {
    return (
        <div className="action-container-box">
            <p>{folderName}</p>
            {folderName !== "전체" && (
                <div className="action-container-icon">
                    <a>
                        <img src="/images/share.png" />
                        <div>공유</div>
                    </a>
                    <a>
                        <img src="/images/pen.png" />
                        <div>이름 변경</div>
                    </a>
                    <a>
                        <img src="/images/delete.png" />
                        <div>삭제</div>
                    </a>
                </div>
            )}
        </div>
    );
}

export default ActionContainer;
