import React from "react";

function Search() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search 1"
                aria-label="Search 1"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search 2"
                aria-label="Search 2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search 3"
                aria-label="Search 3"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
