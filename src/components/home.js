// src/components/Home.js
import React, { useState } from "react";

function Home() {

  const [showInsertModal, setShowInsertModal] = useState(false);

  const closeInsertModal = () => {
    setShowInsertModal(false);
  };

  const openInsertModal = () => {
    ("#insertModal").modal("show");
  };

  const openQueryModal = () => {
    // Add logic to open the query modal
  };

  const openUpdateModal = () => {
    // Add logic to open the update modal
  };

  const openDeleteModal = () => {
    // Add logic to open the delete modal
  };

  const submitInsertForm = () => {
    // Add logic to handle form submission
    closeInsertModal(); // Close the modal after form submission
  };

  const searchStudentScore = () => {
    // Add logic to search student score
  };

  const searchAndUpdateStudent = () => {
    // Add logic to search and update student
  };

  const submitUpdateForm = () => {
    // Add logic to submit update form
  };

  const submitDeleteForm = () => {
    // Add logic to submit delete form
  };

  return (
    <div className="container">
      <h2>Welcome to Database</h2>

      <div>
        <button type="button" className="btn btn-default" onClick={openInsertModal}>
          <span className="glyphicon glyphicon-arrow-up"></span> Insert
        </button>
        <button type="button" className="btn btn-default" onClick={openQueryModal}>
          <span className="glyphicon glyphicon-search"></span> Query
        </button>
        <button type="button" className="btn btn-default" onClick={openUpdateModal}>
          <span className="glyphicon glyphicon-wrench"></span> Update
        </button>
        <button type="button" className="btn btn-default" onClick={openDeleteModal}>
          <span className="glyphicon glyphicon-trash"></span> Delete
        </button>
        <button type="button" className="btn btn-default" onClick={() => window.location.reload()}>
          <span className="glyphicon glyphicon-refresh"></span> Clear
        </button>
      </div>
      <br />
      <div className="table-container" id="tableContainer"></div>

      {/* Insert Modal
      <div id="insertModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Insert Data</h4>
            </div>
            <div className="modal-body">
              <form id="insertForm">
                <div className="form-group">
                  <label htmlFor="student_id">student_id:</label>
                  <input type="text" className="form-control" id="student_id" name="student_id" />
                </div>
                <div className="form-group">
                  <label htmlFor="first_name">first_name:</label>
                  <input type="text" className="form-control" id="first_name" name="first_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">last_name:</label>
                  <input type="text" className="form-control" id="last_name" name="last_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="math_score">math_score:</label>
                  <input type="text" className="form-control" id="math_score" name="math_score" />
                </div>
                <div className="form-group">
                  <label htmlFor="science_score">science_score:</label>
                  <input type="text" className="form-control" id="science_score" name="science_score" />
                </div>
                <div className="form-group">
                  <label htmlFor="english_score">english_score:</label>
                  <input type="text" className="form-control" id="english_score" name="english_score" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={submitInsertForm}>Insert</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Insert Modal */}
      {showInsertModal && (
        <div className="modal fade" id="insertModal" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={closeInsertModal}>&times;</button>
                <h4 className="modal-title">Insert Data</h4>
              </div>
              <div className="modal-body">
                <form id="insertForm">
                <div className="form-group">
                  <label htmlFor="student_id">student_id:</label>
                  <input type="text" className="form-control" id="student_id" name="student_id" />
                </div>
                <div className="form-group">
                  <label htmlFor="first_name">first_name:</label>
                  <input type="text" className="form-control" id="first_name" name="first_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">last_name:</label>
                  <input type="text" className="form-control" id="last_name" name="last_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="math_score">math_score:</label>
                  <input type="text" className="form-control" id="math_score" name="math_score" />
                </div>
                <div className="form-group">
                  <label htmlFor="science_score">science_score:</label>
                  <input type="text" className="form-control" id="science_score" name="science_score" />
                </div>
                <div className="form-group">
                  <label htmlFor="english_score">english_score:</label>
                  <input type="text" className="form-control" id="english_score" name="english_score" />
                </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={closeInsertModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={submitInsertForm}>Insert</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Query Modal */}
      <div className="modal fade" id="queryModal" tabIndex="-1" role="dialog" aria-labelledby="queryModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="queryModalLabel">Query Student Scores</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="score_type">Select Score Type</label>
                  <select id="score_type" className="form-control">
                    <option value="math_score">Math Score</option>
                    <option value="science_score">Science Score</option>
                    <option value="english_score">English Score</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="score_value">Score Value</label>
                  <input type="number" className="form-control" id="score_value" placeholder="Enter score value" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Clear</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={searchStudentScore}>Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Query Results Container */}
      <div id="queryResultsContainer"></div>

      {/* Update Modal */}
      <div id="updateModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Update Student Data</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="search_student_id">Search Student ID:</label>
                <input id="search_student_id" type="text" className="form-control" name="search_student_id" />
              </div>
              <button type="button" className="btn btn-primary" onClick={searchAndUpdateStudent}>Search</button>

              <form id="updateForm">
                <div className="form-group">
                  <label htmlFor="student_id_update_modal">Student ID:</label>
                  <input id="student_id_update_modal" type="text" className="form-control" name="student_id_update_modal" />
                </div>
                <div className="form-group">
                  <label htmlFor="first_name_update_modal">First Name:</label>
                  <input id="first_name_update_modal" type="text" className="form-control" name="first_name_update_modal" />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name_update_modal">Last Name:</label>
                  <input id="last_name_update_modal" type="text" className="form-control" name="last_name_update_modal" />
                </div>
                <div className="form-group">
                  <label htmlFor="math_score_update_modal">Math Score:</label>
                  <input id="math_score_update_modal" type="number" className="form-control" name="math_score_update_modal" />
                </div>
                <div className="form-group">
                  <label htmlFor="science_score_update_modal">Science Score:</label>
                  <input id="science_score_update_modal" type="number" className="form-control" name="science_score_update_modal" />
                </div>
                <div className="form-group">
                  <label htmlFor="english_score_update_modal">English Score:</label>
                  <input id="english_score_update_modal" type="number" className="form-control" name="english_score_update_modal" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={submitUpdateForm}>Update</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div id="deleteModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Delete Data</h4>
            </div>
            <div className="modal-body">
              <form id="deleteForm">
                <div className="form-group">
                  <label htmlFor="student_id_modal">Student ID:</label>
                  <input id="student_id_modal" type="text" className="form-control" name="student_id_modal" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={submitDeleteForm}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
