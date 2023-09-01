import React,{Component} from 'react';
export default class Exp6 extends Component{
    state = {count : 0};
    increment = ()=>{
        this.setState({count : this.state.count+1});
    }

    decrement = ()=>{
        if(this.state.count >0){
        this.setState({count : this.state.count-1});
        }
    }

    render(){
        return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '300%',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '-15%',
            }}>
              C O U N T E R
              <div style={{
                fontSize: '120%',
                position: 'relative',
                top: '10vh',
              }}>
                {this.state.count}
              </div>
              <div className="buttons">
                <button style={{
                  fontSize: '60%',
                  position: 'relative',
                  top: '20vh',
                  marginRight: '5px',
                  backgroundColor: 'green',
                  borderRadius: '8%',
                  color: 'white',
                }}
                  onClick={this.increment}>I N C R E M E N T</button>
                <button style={{
                  fontSize: '60%',
                  position: 'relative',
                  top: '20vh',
                  marginLeft: '5px',
                  backgroundColor: 'red',
                  borderRadius: '8%',
                  color: 'white',
                }}
                  onClick={this.decrement}>D E C R E M E N T</button>
              </div>
            </div>
          )
    }

}