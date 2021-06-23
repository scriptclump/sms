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

const Reports = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard accentColor="primary">   
          <CCardHeader>
            Reports
          </CCardHeader>
          <CCardBody>
            
          </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}

export default Reports
