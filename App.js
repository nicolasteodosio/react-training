import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state= {red:0}
//         this.update = this.update.bind(this)
//
//     }
//     update(e){
//         this.setState(
//             {
//                 red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//             }
//         )
//     }
//     render() {
//         return (
//             <div>
//             <NumInput
//                 ref="red"
//                 min={0}
//                 max={255}
//                 step={1}
//                 val={+this.state.red}
//                 label="Red"
//                 type="number"
//                 update={this.update} />
//                 {this.state.red}
//                 <br/>
//             </div>
//         )
//     }
// }
//
// class NumInput extends React.Component {
//     render(){
//         let label = this.props.label !== '' ?
//             <label>{this.props.label} - {this.props.val}</label> : ''
//         return (
//             <div>
//                 <input ref="inp"
//                        type={this.props.type}
//                        min={this.props.min}
//                        max={this.props.max}
//                        step={this.props.step}
//                        defaultValue={this.props.val}
//                        onChange={this.props.update}/>
//                 {label}
//             </div>)
//     }
// }
//
// NumInput.propTypes = {
//     min: React.PropTypes.number,
//     max: React.PropTypes.number,
//     step: React.PropTypes.number,
//     val: React.PropTypes.number,
//     update: React.PropTypes.string,
//     label: React.PropTypes.func.isRequired,
//     type: React.PropTypes.oneOf(['number', 'range'])
// }
//
// NumInput.defaultProps = {
//     min: 0,
//     max: 0,
//     step: 1,
//     val: 0,
//     label: '',
//     type: 'range'
// }

// class App extends React.Component {
//     render(){
//         return <Button>I <Heart /> React</Button>
//     }
// }
//
// class Button extends React.Component {
//     render(){
//         return <button>{this.props.children}</button>
//     }
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

// class App extends React.Component {
//     constructor(){
//     super();
//         this.state = {val:0}
//         this.update = this.update.bind(this)
//     }
//     update(){
//         this.setState({val: this.state.val + 1})
//     }
//     componentWillMount(){
//         this.setState({m: 2})
//     }
//     componentDidMount(){
//         this.inc = setInterval(this.update,500)
//     }
//     componentWillUnmount(){
//         clearInterval(this.inc)
//     }
//     render(){
//         console.log('rendering')
//         return <button className="btn btn-info" onClick={this.update}>{this.state.val * this.state.m}</button>
//     }
// }
//
// class Wrapper extends React.Component {
//     constructor(){
//         super();
//     }
//     mount(){
//         ReactDOM.render(<App/>, document.getElementById('a'))
//     }
//     unmount(){
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//     render(){
//         return (<div>
//             <button className='btn btn-sucess' onClick={this.mount.bind(this)}> Mount</button>
//             <button className="btn btn-warning" onClick={this.unmount.bind(this)}>Unmount</button>
//             <div id="a"></div>
//         </div>)
//     }
// }

// class App extends React.Component {
//     constructor(){
//     super();
//         this.update = this.update.bind(this);
//         this.state = {increasing: false}
//     }
//     update() {
//         ReactDOM.render(
//             <App val={this.props.val+1}/>,
//             document.getElementById('app')
//         )
//     }
//     componentWillReceiveProps(nextProps){
//         this.setState({increasing: nextProps.val > this.props.val})
//     }
//     shouldComponentUpdate(nextProps, nextState){
//         return nextProps.val % 5 ===0;
//
//     }
//     render(){
//         console.log(this.state.increasing);
//         return (<button onClick={this.update}>{this.props.val}</button>)
//     }
//
//     componentDidUpdate(prevProps, prevState){
//         console.log('ad', prevProps)
//     }
// }
//
// App.defaultProps = {val : 0};

// let Mixin = InnerComponent => class extends React.Component {
//     constructor(){
//         super();
//         this.update = this.update.bind(this);
//         this.state = {val: 0}
//     }
//     componentWillMount(){
//         console.log('vai montar')
//     }
//     update() {
//         this.setState({val: this.state.val+1})
//     }
//     componentDidMount(){
//         console.log('mountou')
//     }
//     render() {
//         return (<InnerComponent update={this.update} {...this.state}{...this.props}/>)
//     }
// }
//
//
// const Button = (props) => <button className="btn btn-default" onClick={props.update}>
//     {props.txt} - {props.val} </button>
//
// const Label = (props) => <label onMouseMove={props.update}>
//     {props.txt} - {props.val} </label>
//
// let BUttonMixed = Mixin(Button)
// let LabelMixed = Mixin(Label)
//
// class App extends React.Component {
//
//     render(){
//         return (<div>
//             <BUttonMixed txt="butam"/>
//             <LabelMixed txt="label"/>
//         </div>)
//     }
//
//
// }
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {data: [
//             {id:1, name:"Nicolas"},
//             {id:2, name:"Jorge"},
//             {id:3, name:"Renan"},
//             {id:4, name:"João"},
//             {id:5, name:"Camila"},
//             {id:6, name:"Cintia"},
//             {id:7, name:"Flavio"},
//             {id:8, name:"Marcus"},
//             {id:9, name:"Dayane"},
//             {id:10, name:"Gabriel"},
//             {id:11, name:"Cesar"},
//             {id:12, name:"Suelen"},
//             {id:13, name:"Bruno"},
//             {id:14, name:"Gustavo"},
//             {id:15, name:"Egg"},
//             {id:16, name:"Foo"},
//             {id:17, name:"Bar"},
//             {id:18, name:"xpto"}
//         ]
//
//         }
//     }
//     render(){
//         let rows = this.state.data.map(person =>{
//             return <PersonRow key={person.id} data={person}/>
//         })
//         return (<tabel className="table table-striped">
//             <tbody>{rows}</tbody>
//         </tabel>)
//     }
// }
//
// const PersonRow = (props) => {
//     return(<tr>
//         <td>{props.data.id}</td>
//         <td>{props.data.name}</td>
//     </tr>)
// }


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            input: '/* add your jsx here*/',
            output:'',
            err:''
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                output: babel.transform(code, {stage:0, loose:'all'}).code,
                err:''
            })
        }catch(err){
            this.setState({err:err.message})
        }
    }
    render(){
        return (<div>
            <header>{this.state.err}</header>
            <div className="container">
                <textarea className="form-control"
                    onChange={this.update}
                    defaultValue={this.state.input}>
                </textarea>
                <pre>{this.state.output}</pre>
            </div>
        </div>)
    }
}
export default App;
// export default Wrapper;