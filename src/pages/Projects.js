import React from 'react';
import MainContainer from '../MainContainer';
import moment from 'moment';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        fetch("https://quiet-wave-16481.herokuapp.com/projects")
            .then(res => res.json())
            .then(data => this.setState({ projects: data }));
    }
    getDate(projectDate) {
        if (projectDate != null) {
            return moment(projectDate).format("LL");
        }
        else {
            return "n/a";
        }
    }
    render() {
        return (
            <MainContainer sidebar='Projects'>
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>
                                <strong>Name</strong>
                            </td>
                            <td>
                                <strong>Description</strong>
                            </td>
                            <td>
                                <strong>Start Date</strong>
                            </td>
                            <td>
                                <strong>End Date</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(project => {
                            return (
                                <tr>
                                    <td>
                                        {project.ProjectName}
                                    </td>
                                    <td>
                                        {project.ProjectDescription}
                                    </td>
                                    <td>
                                        {moment(project.ProjectStartDate).format("MMMM D, YYYY")}
                                    </td>
                                    <td>
                                        {this.getDate(project.ProjectEndDate)}
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

export default Projects;