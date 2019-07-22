import React, { Fragment } from 'react';
import { Input, Button, List} from 'antd';

const TodoListUI = (props) => {
   return (
   		<Fragment>
                 <div style={{ margin: "10px 0 0 10px" }}>
                       <Input 
                            value = { props.inputValue } 
                            placeholder="todo info" 
                            style= {{ width:"300px", marginRight:"20px"}}
                            onChange={ props.handleInputChange }
                         />
                       <Button type="primary" onClick= { props.handleBtnClick }>提交</Button>
                 </div>
                 <div style = {{ width: "300px",margin: "10px 0 0 10px"}}>
                        <List
                                bordered
                                dataSource={props.list }
                                renderItem={(item,index) => (
                                    <List.Item onClick = {() => { props.handleItemDelete(index)}} >
                                        {item}
                                    </List.Item>
                            )}
                        />
                 </div>
                 
            </Fragment> 
   );
}

// class TodoListUI extends Component {

// 	render() {
// 		return (
//           <Fragment>
//                  <div style={{ margin: "10px 0 0 10px" }}>
//                        <Input 
//                             value = { this.props.inputValue } 
//                             placeholder="todo info" 
//                             style= {{ width:"300px", marginRight:"20px"}}
//                             onChange={ this.props.handleInputChange }
//                          />
//                        <Button type="primary" onClick= { this.props.handleBtnClick }>提交</Button>
//                  </div>
//                  <div style = {{ width: "300px",margin: "10px 0 0 10px"}}>
//                         <List
//                                 bordered
//                                 dataSource={this.props.list }
//                                 renderItem={(item,index) => (
//                                     <List.Item onClick = {(index) => { this.props.handleItemDelete(index)}} >
//                                         {item}
//                                     </List.Item>
//                             )}
//                         />
//                  </div>
                 
//             </Fragment> 
// 		)
// 	}
// }


export default TodoListUI;