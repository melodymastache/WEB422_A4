import React from 'react';
import MainContainer from '../MainContainer';

class Teams extends React.Component {
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
            <MainContainer sidebar='Teams'>
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>
                                <strong>Name</strong>
                            </td>
                            <td>
                                <strong>Projects</strong>
                            </td>
                            <td>
                                <strong>Employees</strong>
                            </td>
                            <td>
                                <strong>Team Lead</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map(team => {
                            return (
                                <tr>
                                    <td>
                                        {team.TeamName}
                                    </td>
                                    <td>
                                        <ul>
                                            {team.Projects.map(project => {
                                                return (
                                                    <li>
                                                        {project.ProjectName}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td>
                                        {team.Employees.length + " Employees"}
                                    </td>
                                    <td>
                                        {team.TeamLead.FirstName + ' ' + team.TeamLead.LastName}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Teams;