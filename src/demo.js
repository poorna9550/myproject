import './demo.css'

function Demo(props){
    
    console.log(props);
    
    return(
        <div>
            <table border='1'>
                <tr>
                    <th>name</th>
                    <th>Age</th>
                    <th>Place</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.place}</td>
                </tr>
            </table>
        </div>
    )
}

export default Demo