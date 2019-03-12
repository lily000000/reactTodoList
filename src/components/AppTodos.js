import React from 'react'
var styles = {
    'title': {
      paddingLeft: '20px',
      paddingRight: '50px',
      position: 'relative',
      lineHeight:'40px',

    },
    'delete': {
      marginLeft: '20px',
      marginRight: '50px'
    }
  }
  //核心组件
  function ListItem(props){
    console.log(props)
    return  <div className='comment'>
              <div className='content' onClick={props.changeCompleteTop}>
                <span className='author' style={styles.title} >
                    {props.text}
                    <span  className={props.complete ? 'line' : ''} />
                </span>
                <span className='author' style={styles.title}>
                    <span style={{color: (props.complete) ? "red" : "#000"}}>{props.complete ? '已完成' : '未完成'}</span>
                    
                </span>
                <span className='author'>{props.id}</span>
                <span className='ui blue button' style={styles.delete}  onClick={props.handleDelete}>
                      删除
                </span>  
              </div>
          </div>
    }

  class AppTodos extends React.Component {
    handleDelete =()=>{
      console.log('哈哈',this.props.id)
      this.props.delect(this.props.id)
    }
    changeCompleteTop =()=>{
      this.props.changeCompleteTop()
    }

      render() {
          console.log(this.props.text)
          console.log('value',this.props.choosevalue)
          console.log('列表',this.props.deleteFlag)
          const value = this.props.choosevalue
          const complete = this.props.complete
            return (
                <div>
                     {value == '1'  &&
                      <ListItem text={this.props.text}  complete={complete} handleDelete={this.handleDelete} id={this.props.id} changeCompleteTop={this.changeCompleteTop}/>
                     }
                    {value == '2' && complete === false &&
                      <ListItem text={this.props.text}  complete={complete}  handleDelete={this.handleDelete} id={this.props.id} changeCompleteTop={this.changeCompleteTop}/>
                    }
                    {value == '3' && complete === true  &&
                      <ListItem text={this.props.text}  complete={complete}  handleDelete={this.handleDelete} id={this.props.id} changeCompleteTop={this.changeCompleteTop}/>
                    }
                </div>
              
            )
         
        }
        
      
  }
  export default AppTodos;