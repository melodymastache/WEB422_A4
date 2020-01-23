import React from 'react';
import MainContainer from '../MainContainer';
import moment from 'moment';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        fetch("https://quiet-wave-16481.herokuapp.com/employees")
            .then(res => res.json())
            .then(data => this.setState({ employees: data }));
    }
    getDate(date) {
        var d = new Date(date);
        d = moment(d).utc();
        d = moment(d).format("MMMM D, YYYY");
        return d;
    }
    render() {
        return (
            <MainContainer sidebar='Employees'>
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>
                                <strong>Name &amp; Position</strong>
                            </td>
                            <td>
                                <strong>Address</strong>
                            </td>
                            <td>
                                <strong>Phone Num</strong>
                            </td>
                            <td>
                                <strong>Hire Date</strong>
                            </td>
                            <td>
                                <strong>Salary Bonus</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return (
                                <tr>
                                    <td>
                                        {employee.FirstName + ' ' + employee.LastName + ' - ' + employee.Position.PositionName}
                                    </td>
                                    <td>
                                        {employee.AddressStreet + '. ' + employee.AddressCity + ' ' + employee.AddressState + ', ' + employee.AddressZip}
                                    </td>
                                    <td>
                                        {employee.PhoneNum + ' ex: ' + employee.Extension}
                                    </td>
                                    <td>
                                        {this.getDate(employee.HireDate)}
                                    </td>
                                    <td>
                                        {'$ ' + employee.SalaryBonus}
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

export default Employees;