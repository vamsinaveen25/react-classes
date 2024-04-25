import React from 'react';

function Table() {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%'
    };

    const thStyle = {
        border: '2px solid black', 
        padding: '8px',
        textAlign: 'left'
    };

    const tdStyle = {
        border: '2px solid black',
        padding: '8px',
        textAlign: 'left'
    };

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={thStyle}>s.no</th>
                    <th style={thStyle}>First Name</th>
                    <th style={thStyle}>Middle Name</th>
                    <th style={thStyle}>Last Name</th>
                    <th style={thStyle}>Email ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={tdStyle}>1</td>
                    <td style={tdStyle}>Vamsi</td>
                    <td style={tdStyle}>Naveen</td>
                    <td style={tdStyle}>Kumar</td>
                    <td style={tdStyle}>vamsinaveen3@gmail.com</td>
                </tr>
                <tr>
                    <td style={tdStyle}>2</td>
                    <td style={tdStyle}>Vamsi</td>
                    <td style={tdStyle}>Naveen</td>
                    <td style={tdStyle}>Kumar</td>
                    <td style={tdStyle}>vamsinaveen3@gmail.com</td>
                </tr>
                <tr>
                    <td style={tdStyle}>3</td>
                    <td style={tdStyle}>Vamsi</td>
                    <td style={tdStyle}>Naveen</td>
                    <td style={tdStyle}>Kumar</td>
                    <td style={tdStyle}>vamsinaveen3@gmail.com</td>
                </tr>
                <tr>
                    <td style={tdStyle}>4</td>
                    <td style={tdStyle}>Vamsi</td>
                    <td style={tdStyle}>Naveen</td>
                    <td style={tdStyle}>Kumar</td>
                    <td style={tdStyle}>vamsinaveen3@gmail.com</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
