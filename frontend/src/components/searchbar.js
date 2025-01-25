import React from 'react';

function SearchBar() {
  return (
    <>
      {/* Barre de recherche */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center shadow rounded p-3 bg-white">

              <div className="px-3">
                <input type="text" className="form-control" placeholder="Lieu" />
              </div>

              <div className="px-3">
                <input type="text" className="form-control" placeholder="Type" />
              </div>

              <div className="px-3">
                <input type="date" className="form-control" />
              </div>

              <div className="px-3">
                <input type="date" className="form-control" />
              </div>

              <button className="btn btn-danger ms-3">
                <i className="fas fa-search text-white"></i> Search
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;