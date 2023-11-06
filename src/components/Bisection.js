import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'


const Bisection =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));
        setValuefXm(data.map((x)=>x.y));
        return(
            <Container>
                <Table striped bordered hover variant="warning">
                    <thead>
                        <tr>
                            <th width="15%">Iteration</th>
                            <th width="25%">XL</th>
                            <th width="20%">XM</th>
                            <th width="25%">XR</th>
                            <th width="30%">fXm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                                <td>{element.y}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        var x = [];
        var y = [];
        var x1= [];
        var y1= [];

        do{
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    y:fXm
                }
                x.push(iter)
                y.push(xm)
                x1.push(iter)
                y1.push(ea)
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    y:fXm
                }
                x.push(iter)
                y.push(xm)
                x1.push(iter)
                y1.push(ea)
                data.push(obj)
                xl = xm;
            }
        
      }while(ea>e && iter<MAX)
      setX(xm)
  }
    

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const [valuefXm, setValuefXm] = useState([]);
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState('2x^3-2x-5')
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)


    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
     
        setHtml(print());
        console.log(valueXm)
        console.log(valueXr)
        console.log(valueIter)
        console.log(valueXl)
        console.log(valuefXm);
    }

    return (
            <Container>
                <div className="background"/>
                <br></br>
                <h2 style={{textAlign:"left" ,padding:"20px"}}>Bisection Methods</h2>
                <Form>
                    <Form.Group className="mb-3" style={{textAlign:"left"}}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                        <br></br>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" value={XL} onChange={inputXL} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" value={XR} onChange={inputXR} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                    </Form.Group>
                    <div style={{textAlign:"left",  display: 'block' }}>
                        <Button variant="danger" style={{margin:"10px" }} onClick={calculateRoot}>
                            Calculate
                        </Button>
                    </div>
                </Form>
                <br></br>
                <h5 style={{textAlign:"left"}}>Answer = {X.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )
}

export default Bisection