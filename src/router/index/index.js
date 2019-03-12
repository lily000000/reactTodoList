import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import './index.css'
import data from '../book'
import { Promise } from "q";
import { resolve } from "path";
// import newPage from '../../components/propstype'
let styles = {
  'father':{
  'margin':'0px',
  'padding': '0px',
  'width':'100%',
  'listStyle':'none',
  'display':'flex',
  'justifyContent': 'space-around'
  },
  'child':{
    'display':'inline-block',

  }
 
}

class Index  extends React.Component{
  render(){
    return (<div className='book-item'>
    {data.map((item,index)=>{
      console.log(item.bookrack)
      if(item.bookrack){
       return item.bookrack.map((itemt,index)=>{
        const { name,url,introduce } = itemt;
        return (
          <div key={index} className='book-wrap' onClick={()=>this.routerTo()}>
             <img src={url} className='imgicon'></img> 
             <div className='describe'>
               <p>{name}</p>
               <p>{introduce}</p>
             </div>
            </div>              
           )
          }) 

        }
       })
       }
   </div>)
  }
  routerTo() {
    this.props.history.push({pathname: `/newPage/`, state: 1})
  }
 
}

function About() {
  return <div className='book-item'>
  {data.map((item,index)=>{
    if(item.choiceness){
     return item.choiceness.map((itemt,index)=>{
      const { name,url,introduce } = itemt;
      return (
        <div key={index} className='book-wrap'>
          <img src={url} className='imgicon'></img> 
          <div className='describe'>
            <p>{name}</p>
            <p>{introduce}</p>
          </div>
          </div>              
         )
        }) 

      }
     })
     }
    
 </div>;
}

function Users() {
  return <div className='book-item'>
  {data.map((item,index)=>{
    if(item.collect){
     return item.collect.map((itemt,index)=>{
      const { name,url,introduce } = itemt;
      return (
        <div key={index} className='book-wrap' >
          <img src={url} className='imgicon'></img> 
          <div className='describe'>
            <p>{name}</p>
            <p>{introduce}</p>
          </div>
          </div>              
         )
        }) 

      }
     })
     }
    
 </div>;
}
class AppRouter extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // let arr = [1,2,3,4,5];
    // arr.splice(0,3,'ww','qq','ee','55')
    // console.log(arr)
    var currentUrl = window.location.href; //获取当前链接   
    var arr = currentUrl.split("3000",1); //分割域名和参数界限  
    console.log(arr)
    this.func().then(function(data){
      console.log('看看我是谁',data)
    });

   
  }
  func=()=>{
    var p = new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log('执行完成')
        resolve('随便什么数据')
      }, 1000);
    })
    return p;

  }


  render(){
    console.log(data)
    return (
      <Router>
        <div>
          <nav>
            <ul style={styles.father} className='nav'>
              <li style={styles.child}>
                <NavLink to="/" exact  activeStyle={{'color':'red'}} onClick = {() => {
                                }}>书架</NavLink>
              </li>
              <li style={styles.child}>
                <NavLink to="/about/" activeStyle={{'color':'red'}} >精选</NavLink>
              </li>
              <li style={styles.child}>
                <NavLink to="/users/" activeStyle={{'color':'red'}}>收藏</NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index}  />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          {/* <Route path="/newPage" component={newPage} />    */}
        </div>
      </Router>
    );

  }
 
}

export default AppRouter;