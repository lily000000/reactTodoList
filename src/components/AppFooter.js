import React from 'react'
class AppFooter extends React.Component {
    handleAll =(value)=> {
        this.props.submitChooseValue(value);
    }
    
    handleActive =(value)=> {
        this.props.submitChooseValue(value);
    }
    
    handleComplete =(value)=> { 
        this.props.submitChooseValue(value);
    }
    render(){
        return(
            <div>
                <button  onClick={()=>this.handleAll('1')}>全部</button>
                <button  onClick={()=>this.handleActive('2')}>还未完成</button>
                <button  onClick={()=>this.handleComplete(('3'))}>已完成</button>
            </div>
        )
        

    }
}
export default AppFooter;