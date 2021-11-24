import React, { useState } from 'react'
import '../App.css';

const Tabs = () => {
    const [tabs, setTabs] = useState("one")
    const [label, setLabel] = useState(["Tab 1", "Tab 2", "Tab 3"])
    const [stuff, setStuff] = useState(["Tab 1 content is showing here", "Tab 2 content is showing here", "Tab 3 content is showing here"])



    return (
        <div>
            <button onClick={() => setTabs("one")}>{label[0]}</button>
            <button onClick={() => setTabs("two")}>{label[1]}</button>
            <button onClick={() => setTabs("three")}>{label[2]}</button>

            <div>
                {tabs === "one" ?
                <div>{stuff[0]}</div> : "" }
                {tabs === "two" ?
                <div>{stuff[1]}</div> : "" }
                {tabs === "three" ?
                <div>{stuff[2]}</div> : "" }
            </div>
        </div>
    )
}

export default Tabs
