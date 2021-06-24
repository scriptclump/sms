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
  CInputRadio,
  CInputFile,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const AnnouncementCreate = () => {
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard accentColor="primary">
          <CCardHeader>
            Announcement & Notice
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12">
                <CFormGroup>                 
                  <CCol xs="12">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Announcement</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Notice</CLabel>
                    </CFormGroup>                    
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="name">Title</CLabel>
                  <CInput id="name" placeholder="Enter title" required />
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
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Image</CLabel>
                  <CInputFile custom id="custom-file-input"/>
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Choose file...
                  </CLabel>  
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="date-input">From</CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                  <CCol md="1">
                    <CLabel htmlFor="date-input">To</CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>    
    </CRow>
  )
}

export default AnnouncementCreate
