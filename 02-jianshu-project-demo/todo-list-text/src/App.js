import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";




class App extends Component {
   constructor(props) {
      super(props);
      
      this.handleAddItem= this.handleAddItem.bind(this);
      this.state = {
          list: []
      }
   }



    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition in={ this.state.show } 
                               timeout={ 1000 }  
                               classNames ='fade'
                               unmountOnExit
                               onEntered={(el) => {el.style.color='blue'}} 
                               appear={true}
                               key={index}
                >
                                  <div>{item}</div>
                              </CSSTransition>
                        )
                    })
                    }
                </TransitionGroup>
                <button onClick={ this.handleAddItem }>button</button>
            </Fragment>
            
        )
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;