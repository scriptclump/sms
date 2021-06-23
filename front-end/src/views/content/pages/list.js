import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CDataTable,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../../routes'
import usersData from '../../users/UsersData';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const PageList = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          {/* <button class="btn btn-primary">Add New Page</button> */}
          <CCardHeader>
            Pages
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              dark
              hover
              striped
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
          </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}

export default PageList
