import React from 'react'
import TableComponent from '../../components/Table/TableComponent'

function UserPage() {
    return (
        <div className="app-main__inner">
            <div className="tabs-animation">
                {/* Table start */}
                <TableComponent/>
                {/* Table end */}
            </div>
        </div>
    )
}

export default UserPage
