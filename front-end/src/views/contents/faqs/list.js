import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDataTable,
  CCardHeader,
  CLink,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Faq = (props) => {

  return (
    <div className="page-container">
      <CRow>
        <CCol>         
          <CLink to="/content/faqs/create" className="btn btn-primary">Create New FAQ</CLink>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{ marginTop: "15px" }}>
          <DataTable />
        </CCol>
      </CRow>
    </div>
  );
};

const DataTable = () => {
  const fields = [
    { key: "id", label: "ID", sorter: true, _style: { width: '5%'} },
    { key: "question", label: "Question", sorter: true },
    {
      key: "action",
      label: "Action",
      sorter: false,
      filter: false
    }
  ];

  return (
    <CCard>
      <CCardHeader>FAQs</CCardHeader>
      <CCardBody>
        <CDataTable
          items={data}
          fields={fields}
          tableFilter={{ placeholder: "search" }}
          columnFilter
          footer={false}
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination={{ style: { display: "inline", float: "right" } }}
          border={true}
          striped={true}
          scopedSlots={{
            action: () => action(),
          }}
        />
      </CCardBody>
    </CCard>
  );
};

const action = () => {
  return (
    <td>
      <FontAwesomeIcon icon={faEye} title="View" />&nbsp;<FontAwesomeIcon icon={faPencilAlt} title="Edit" />&nbsp;<FontAwesomeIcon icon={faTrash} title="Delete" />
    </td>
  );
};

const data = [
  {
    id: "1",
    question: "How to Signup ?",
    action: "",
  },
  {
    id: "2",
    question: "Who can register?",
     action: "",
  },
  {
    id: "3",
    question: "How to see the reports?",  
    action: "",
  },
  {
    id: "4",
    question: "How to download the certificates?",
     action: "",
  },
  {
    id: "5",
    question: "When payslip will generate?",
    action: "",
  }
];

export default Faq;
