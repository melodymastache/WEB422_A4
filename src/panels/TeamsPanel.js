import React from 'react';
import { Link } from 'react-router-dom';

class TeamsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    }
    componentDidMount() {
        fetch("https://quiet-wave-16481.herokuapp.com/teams")
            .then(res => res.json())
            .then(data => this.setState({ teams: data }));
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong>Teams</strong></h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map(team => {
                                    return (
                                        <tr>
                                            <td>
                                                {team.TeamName}
                                            </td>
                                            <td>
                                                {team.Employees.length}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                        <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                    </div>
                </div>
                )
            }
        }
        
export default TeamsPanel;