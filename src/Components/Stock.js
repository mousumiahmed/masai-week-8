import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Nav,NavDropdown,Form,FormControl,Jumbotron } from 'react-bootstrap';



    var arrAdd=[];
    var arrDeduct=[];
    var arrItem=[];
    let finalRice=0;
    let totalAddRice = 0;
    let totalDeductRice = 0;
    let totalAddDal = 0;
    class Stock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {add: '',
                  deduct:'',
                  item:'',
                  result:''};

        this.handleChangeAdd = this.handleChangeAdd.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleChangeDeduct = this.handleChangeDeduct.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        }

        handleChangeAdd(event) {
             this.setState({add: Number(event.target.value)});
         }
        handleChangeDeduct(event) {
            this.setState({deduct: Number(event.target.value)});
        }
        handleChangeItem(event) {
            this.setState({item: event.target.value});
        }

        handleSubmitAdd(event) {
        arrAdd.push(this.state.add,this.state.deduct,this.state.item);
        console.log(arrAdd);
        arrDeduct.push(this.state.deduct);
        //console.log(arrDeduct);
        arrItem.push(this.state.item);
        //console.log(arrItem);
        event.preventDefault();
        this.setState({
        add:'',
        deduct:''
       
         });
        }
        

         handleCheck(event){
             
            let i;
            if(arrItem[i]="Rice"){
                totalAddRice += arrAdd[arrAdd.length-1];
                
            }
            else if(arrItem[i]="Dal"){
                totalAddDal +=arrAdd[arrAdd.length-1];

            }

              
                 this.setState({
                 result: "Rice" + totalAddRice + "Dal  :"+  totalAddDal
                 
             })
             }
            
    render() {
        return (
            <Jumbotron className="bg-dark" style={{width:"100%", height:"900px"}}>
            <h1 className = "text-center text-info mb-5">STOCK MANAGEMENT</h1>
            <Container className="bg-secondary" style={{width:"90%", height:"50%"}}>
            <Row className="text-light text-center">
                 <Col sm={6} className="bg-info">
                     <h2 className="mt-3"> Item List</h2>
                     <div>
                         <table>
                          <tr>
                         {arrItem.map((value,index)=> <td key={index}>{index+1}. {value}</td>)}
                         {arrAdd.map((value,index)=> <td key={index}>:  {value}  kg added and </td>)}
                         {arrDeduct.map((value,index)=> <td key={index}>: {value}  kg deducted</td>)}
                        </tr>
                        
                           
                         </table>
                         
                         
                         </div>
                 </Col>
                 <Col sm={6} className="bg-danger">
                     <h2 className="mt-3 ">Balance</h2>
                     <p>{this.state.result}</p>
                 </Col>
            </Row>
           <Form onSubmit={this.handleSubmitAdd}>
           <select className="p-1 bg-warning mt-3" value={this.state.item} onChange={this.handleChangeItem}>
                <option> </option>
                <option value="Rice">Rice</option>
                <option value="Dal">Dal</option>
                <option value="Sugar">Sugar</option>
                <option value="Potato">Potato</option>
            </select>
            <input type="text" value={this.state.add} onChange={(e)=>this.handleChangeAdd(e)} name="name" placeholder="Enter the amount to add" />
            <input type="text" value={this.state.deduct} onChange={(e)=>this.handleChangeDeduct(e)} name="name" placeholder="Enter the amount to deduct" />
            <button type="submit" className="bg-info" >Add Item</button>
            <button onClick = {this.handleCheck} className="bg-dark">Balance</button>

           </Form>

           <Form>
            
            
      
            </Form>
           
            

            </Container>
            
          </Jumbotron>
        );
    }
}
export default Stock
