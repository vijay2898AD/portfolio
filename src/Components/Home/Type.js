import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div >
            <h1 className="typewriter-text">
                <Typewriter
                    options={{
                        strings: [
                            "I'M VIJAY VIPPARTHI",
                            "WELCOME TO MY PORTFOLIO"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        cursor: '|',
                    }}
                />
            </h1>
        </div>
    );
}

export default Type;
