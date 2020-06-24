import React from "react";

export const Contact = (props) => {
    if (!props) {
        return null;
    }
    return (
        <div className="card" key={props.contact.id}>
            <div className="card-body">
                <h5 className="card-title">{props.contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.contact.email}
                </h6>
                <p className="card-text">{props.contact.company.catchPhrase}</p>
            </div>
        </div>
    );
};
