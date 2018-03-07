import * as React from "react";

export const LoadingBar = () => {
    return (
        <div style={{ marginTop: "25vh" }}>
            <h3 style={{ textAlign: "center" }}>Please wait. Loading...</h3>
            <div className="progress" style={{ width: "90%", marginLeft: "5%" }}>
                <div className="progress-bar progress-bar-striped active" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                </div>
            </div>
        </div>
    )
};