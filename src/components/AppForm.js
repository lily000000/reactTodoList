import React from 'react';
import uuid from 'uuid';
var styles = {
    'title': {
      width: 200,
      display: 'inline-block',
      marginRight: 10,
      verticalAlign: 'top'
    }
  }
class AppForm extends React.Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log('提交')
        let text = this.refs.text.value
        console.log(text);
        let id = uuid();
        // let id = this.props.data.length;
        if (!text.trim()) {
            alert("Input can't be null")
            return
          }
        this.props.addTodoItem({id,text,complete:false});
        // console.log(222,this.props)
    }
    render(){
        return(
            <form className='ui reply form' onSubmit={this.handleSubmit.bind(this)}>
                <div className='field' style={styles.title}>
                    <input type='text' placeholder='TODO' ref='text' />
                </div> 
                <button type='submit' className='ui blue button' >
                    添加
                </button>
            </form>
        )

    }    
}
export default AppForm;