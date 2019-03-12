import React from 'react';
import AppTodos from './AppTodos';

class AppList extends React.Component {
    componentWillMount(){
        console.log(1,this.props.data)
    }
    componentDidMount(){
    }
    delect =(id,index)=>{
        console.log('下标',index)
        this.props.deleteItemTop(id,index)  
    }
    changeComplete =(id,index)=>{
        this.props.changeCompleteTop(id,index)   
    }
    render () {  
        let {data = [],filters} = this.props; 
        console.log(data)
        // data = filters ? data.filters(item =>item.status == filters):data
        return (
            <div>
                {data.map((item,index)=>{
                    const { id,text,status,complete } = item;
                    return (
                        <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            status={status}
                            complete={complete} 
                            delect = {()=>this.delect(id,index)} 
                            choosevalue = {this.props.choosevalue}
                            changeCompleteTop = {()=>this.changeComplete(id,index)}
                            />
                    )
                })
            }
            </div>
        )
      }
}
export default AppList;