

const BoxShow = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {props.updatedColor.map((x,y) => {
                return (

                        <div key={y} style={{ height: "200px", width: "200px", backgroundColor: `${x}`, margin: "15px" }}></div>

                ) 
            }
        )}
        </div>
    )
}

export default BoxShow
