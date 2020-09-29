import React from "react";
import "./Table.css";
// import employees from "../../utils/employees.json";

const useSortableData = (employees, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = employees;
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [employees, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { employees: sortedItems, requestSort, sortConfig };
};



const Table = props => {
    const { employees, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>id</th> */}
                        <th>Image</th>
                        <th><button onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}>Name</button></th>
                        <th><button onClick={() => requestSort('phone')}
                            className={getClassNamesFor('phone')}>Phone</button></th>
                        <th><button onClick={() => requestSort('email')}
                            className={getClassNamesFor('email')}>Email</button></th>
                        <th><button onClick={() => requestSort('DOB')}
                            className={getClassNamesFor('DOB')}>DOB</button></th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => {
                        return (
                            <tr key={employee.id}>
                                {/* <th scope="row">{employee.id}</th> */}
                                <td><img alt={employees.name} src={employee.image} /></td>
                                <td> {employee.name} </td>
                                <td> {employee.phone} </td>
                                <td> {employee.email} </td>
                                <td> {employee.DOB} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;