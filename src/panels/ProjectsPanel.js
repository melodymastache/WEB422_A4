import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectsPanel extends React.Component {
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
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong>Projects</strong></h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map(project => {
                                    return (
                                        <tr>
                                            <td>
                                                {project.ProjectName}
                                            </td>
                                            <td>
                                                {moment().diff(moment(project.ProjectStartDate), 'days')}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                        <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                </div>
                )
            }
        }
        
export default ProjectsPanel;