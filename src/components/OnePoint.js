import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs';


const OnePoint =()=>{
    const print = () =>{
        console.log(data)
        setI(data.map((x)=>x.iteration));
        setValuex1(data.map((x)=>x.x1));
        return(
            <Container>
                <Table striped bordered hover variant="warning">
                    <thead>
                        <tr>
                            <th width="50%">Iteration</th>
                            <th width="50%">Xi+1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.x1}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    const CalOnePoint = (X0) => {
        var x0,x1,scopex0,er;
        var step = 0;
        var stepMax = 100;
        var obj={};
        var x = [];
        var y = [];
        var X1= [];
        var y1= [];
        x0 = X0;
        do
        {
            scopex0 = {
                x:x0,
            }
            x1 = evaluate(Equation , scopex0);
            console.log(x1);
            step++;
            console.log(step);
            if(step>stepMax){
                break;
            }
            obj = {
                iteration:step,
                x1:x1,
            }
            er = error(x0,x1)
            x0 = x1;
            x.push(step)
            y.push(x1)
            X1.push(step)
            y1.push(er)
            data.push(obj)
        }while(er>0.000001)
        setX1(x1)
    }

    const data =[];
    const [valuex1, setValuex1] = useState([]);
    const [valueI, setI] = useState([]);
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState('(1/2)*(25/x+x)')
    const [X1,setX1] = useState(0)
    const [X0,setX0] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }


    const calculateRoot = () =>{
        const x0num = parseFloat(X0)
        CalOnePoint(x0num);
     
        setHtml(print());
           
        console.log(valueI)
        console.log(valuex1)
        
    }

    return (
            <Container>
                <div className="background"/>
                <br></br>
                <h2 style={{textAlign:"left" ,padding:"20px"}}>One-Point Iteration Methods</h2>
                <Form >
                    <Form.Group className="mb-3" style={{textAlign:"left"}}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                        <br></br>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="X0" value={X0} onChange={inputX0} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                    </Form.Group>
                    <div style={{textAlign:"left",  display: 'block' }}>
                        <Button variant="danger" style={{margin:"10px" }} onClick={calculateRoot}>
                            Calculate
                        </Button>
                    </div>
                </Form>
                <br></br>
                <h5 style={{textAlign:"left"}}>Answer = {X1.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )
}

export default OnePoint