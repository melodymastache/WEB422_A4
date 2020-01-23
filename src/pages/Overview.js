import React from 'react';
import MainContainer from '../MainContainer';
import ProjectsPanel from '../panels/ProjectsPanel';
import TeamsPanel from '../panels/TeamsPanel';
import EmployeesPanel from '../panels/EmployeesPanel';

class Overview extends React.Component {
    render() {
        return (
            <MainContainer sidebar='Overview'>
                <h1 className="page-header">Overview</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectsPanel />
                    </div>
                    <div className="col-md-4">
                        <TeamsPanel />
                    </div>
                </div>
                <div className="col-md-4">
                    <EmployeesPanel />
                </div>
            </MainContainer >
        )
    }
}

export default Overview;