import React ,{ Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import newPage from '../../components/propstype'


class RouterIndex extends Component{
render(){
return(
    // <Switch>//switch用于匹配路由path
    //     {/* <Route path='/' exact render={()=>(//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
    //     <Redirect to='/index'/>
    //     )}/> */}
       
       
    // </Switch>
    <Router>
       <Route path='/newPage' component={newPage}/>
    </Router>
    //  <Route path='/newPage' component={newPage}/>
    )
}
}

export default RouterIndex
