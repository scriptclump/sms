import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../../routes'

const PageCreate = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Pages
            {/* <DocsLink name="CBreadcrumb"/> */}
          </CCardHeader>
          <CCardBody>           
                        
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PageCreate
