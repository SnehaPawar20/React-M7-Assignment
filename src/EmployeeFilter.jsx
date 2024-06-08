import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function EmployeeFilter() {
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    return (
        <Card>
            <Card.Header as="h5">Filter</Card.Header>
            <Card.Body>
                <Card.Text>
                    Currently Employed:
                    {' '}
                    <select 
                        value={searchParams.get('employed') || ''}
                        onChange={(e) => navigate(
                            e.target.value ? 
                            `/employees?employed=${e.target.value}` : 
                            `/employees`
                        )}>
                        <option value="">All</option>
                        <option value="true">Employed</option>
                        <option value="false">Not Employed</option>
                    </select>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

// export default class EmployeeFilter extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Filter: {'  '}
// 				<a href="/#/employees">All Employees</a>
// 				{' | '}
// 				<a href="/#/employees?employed=true">Employed</a>
// 				{' | '}
// 				<a href="/#/employees?employed=false">Not Emlpoyed</a>
// 			</div>
// 		)
// 	}
// }

/* export default class EmployeeFilter extends React.Component {
	render() {
		const Separator = () => <span> | </span>
		return (
			<div>
				Filter: 
				<Link to={{pathname: 'employees'}}> All Employees </Link>
				<Separator />
				<Link to={{pathname: 'employees', search: '?employed=true' }}> Employed </Link>
				{' | '}
				<Link to={{pathname: 'employees', search: '?employed=false' }}>Not Employed </Link>
			</div>
		)
	}
} */