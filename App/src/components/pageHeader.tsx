import * as React from "react";

type Props = {
    title: string,
};

export const PageHeader = (props: Props) => {
    const divStyle = {
        borderBottom: "1px solid rgb(221, 221, 221)",
        marginBottom: "25px",
    }

    const headerStyle = {
        marginTop: "0",
    }
    return (
        <div style={divStyle}>
            <h2 style={headerStyle}>{props.title}</h2>
        </div>
    );
}