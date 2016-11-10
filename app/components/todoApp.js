import React from 'react'

export default class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.tasks);


        var newItem = {
            text: this.state.text,
        };
        this.setState((prevState) => ({
            tasks: prevState.tasks.concat(newItem),
            text: ''
        }));

        console.log(this.state.tasks)
    }

    render() {
        return (
            <div id='content'>
                <h2> TODO </h2>
                <ul>
                    {this.state.tasks.map((task, index) => (
                        <li key={index}> {task.text} </li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        );
    }
}


