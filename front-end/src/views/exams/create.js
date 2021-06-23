import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CCardFooter,
  CButton,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ExamCreate = () => {
  return (
    <CRow>
    <CCol xs="12" sm="8">
      <CCard accentColor="primary">
        <CCardHeader>
        Exam
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="name">Name</CLabel>
                <CInput id="name" placeholder="Enter name" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Content</CLabel>
                <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                    />
              </CFormGroup>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol xs="12" sm="4">
      <CCard accentColor="danger">
        <CCardHeader>
          SEO
        </CCardHeader>
        <CCardBody>
          <CFormGroup>
            <CLabel htmlFor="company">Meta Title</CLabel>
            <CInput id="name" placeholder="Enter meta title" required />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="vat">Meta keyword</CLabel>
            <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="2"
                      placeholder="Meta keyword..." 
                    />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="street">Meta Description</CLabel>
            <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Meta Description..." 
                    />
          </CFormGroup>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
    </CRow>
  )
}

export default ExamCreate
