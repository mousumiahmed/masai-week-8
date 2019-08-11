import React from 'react';
import ReactDOM from 'react-dom';


var arrAdd=[];
var arrDeduct=[];
var arrItem=[];
class Demo extends React.Component {
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
    arrAdd.push(this.state.add);
    console.log(arrAdd);
    arrDeduct.push(this.state.deduct);
    console.log(arrDeduct);
    arrItem.push(this.state.item);
    console.log(arrItem);
    event.preventDefault();
    this.setState({
    add:'',
    deduct:''
       
     });
    }



    
        
        

    handleCheck(event){
      this.setState({
        
      })
      const str = "";
      var totalAddRice = 0;
        var totalDeductRice = 0;
        
        console.log(arrItem.length);
        for(var i=0;i< arrItem.length;i++){
            if(arrItem[i]==="Rice"){
                var count=1;
                totalAddRice += Number(this.state.add)
                totalDeductRice += this.state.deduct
                count++
                console.log(totalAddRice);
            }
            
        }

        this.setState({
            result:event.target.value = totalAddRice
        })

    }


  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmitAdd}>
                <select value={this.state.item} onChange={this.handleChangeItem}>
                    <option></option>
                    <option value="Rice">Rice</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Potato">Potato</option>
                    <option value="Salt">Salt</option>
                </select>
                <input type="text" value={this.state.add} onChange={(e)=>this.handleChangeAdd(e)} />
                <input type="text" value={this.state.deduct} onChange={(e)=>this.handleChangeDeduct(e)} />
                <input type="submit" value="Add Item" />
            </form>
            <div>
            {arrAdd.map((value,index)=> <div key={index}>{index}. {value}</div>)}
            {arrDeduct.map((value,index)=> <div key={index}>{index}. {value}</div>)}
            {arrItem.map((value,index)=> <div key={index}>{index}. {value}</div>)}

            <form>
            <button onClick = {this.handleCheck}>Check Result</button>
            <p>{this.state.result}</p>
      
            </form>
            </div>
                 
                 
        </div>
    );
  }
}

export default Demo