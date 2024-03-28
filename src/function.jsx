
import everest from "./everest.jpg"

function Image() {

    return (
        <img src={everest} width={"350px"} style={{ borderRadius: "20px" }} />
    )
}

function Fcomponent(params) {

    return (
        
            <div className="container"style={{ padding: "35px", display:"flex",flexDirection:"column",border:"1px solid black",width:"400px",margin:"25px",justifyContent:"center",backgroundColor:"skyblue"}}>
                <h1>FUNCTION COMPONENT</h1>
                <Image />
                <hr></hr>
                
                First Name: <input type="text" placeholder="Enter you Fname"  width={"20%"}></input>
                Last Name: <input type="text" placeholder="Enter you Fname"></input>

                <ul>
                    <li>React JS</li>
                    <li>Virtual dom</li>
                    <li>Components</li>
                    <li>JSX</li>
                </ul>

                <table>
                        <tr>
                            <th>S.No</th>
                            <th>Functional Component</th>
                            <th>Class Components</th>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Functional Components are written as a JavaScript function</td>
                            <td>Class components are written as a JavaScript class</td>
                        </tr>
                        <tr>
                        <td>2</td>
                            <td>stateless components</td>
                            <td>statefull components</td>
                        </tr>
                        <tr>
                        <td>3</td>
                            <td>Functional components tend to be more shorter and more concise</td>
                            <td>Class components requires constructor method and use "this"</td>
                        </tr>
                </table>
            </div>
        
        
    )
}

export default Fcomponent