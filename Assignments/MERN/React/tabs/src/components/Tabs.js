import React, { useState } from 'react'


const Tabs = () => {
    const [tabs, setTabs] = useState("one")
    const label = ["Tab 1", "Tab 2", "Tab 3"]
    const stuff = ["Tab 1 content is showing here", "Tab 2 content is showing here", "Tab 3 content is showing here"]



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
