import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        console.log("exec");
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },
                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },
                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                <Tabledata/>
                <table className="table-bordered">
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i}
                                                                  data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
class Tabledata extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export {Table};