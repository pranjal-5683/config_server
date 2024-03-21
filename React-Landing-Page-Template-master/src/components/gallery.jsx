import React, { useEffect, useState } from "react";

export const Gallery = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6; // Display 6 images per page
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (Array.isArray(images)) {
      setResult(images);
    } else {
      setResult([]);
    }
  }, [images]);

  // Calculate total number of pages
  const totalPages = Math.ceil(result.length / imagesPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Logic to slice images based on current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = result.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div id="portfolio" className="text-center">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Gallery</h2>
          <p></p>
        </div>

        <div className="row">
          {currentImages.map((d, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }}
            >
              <div
                className="image-container"
                style={{
                  height: "300px",
                  overflow: "hidden",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={require(`../images/${d.image}`)}
                  className="img-responsive"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  alt={`Image ${indexOfFirstImage + i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
            >
              <a href="#!" onClick={() => paginate(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
