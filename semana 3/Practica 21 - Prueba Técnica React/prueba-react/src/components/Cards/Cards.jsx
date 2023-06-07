
const Cards = ({ results }) => {
  return (
    <>
      {results &&
        results.map((item) => {
          let { id, image, name, species, gender, origin, location, status} = item;
          return (
            <div key={id} className="col-4 mb-5">
              <div className=" card p-2">
                <img src={image} className="img-fluid" />
                <div className="content">
                  <div className="fs-4 fw-bold mb-4">{name}</div>
                  <div className="mb-4">
                    <div className="fs-6">Species</div>
                    <div className="fs-5">{species}</div>
                    <div className="fs-6">Gender</div>
                    <div className="fs-5">{gender}</div>
                    <div className="fs-6">Origin</div>
                    <div className="fs-5">{origin.name}</div>
                    <div className="fs-6">Last location</div>
                    <div className="fs-5">{location.name}</div>
                    <div className="fs-6">Status</div>
                    <div> <span className={`badge + ${status == "Alive" ? "bg-success" : status == "Dead" ? "bg-danger" : status == "unknown" ? "bg-secondary" : ""}`}>{status}</span></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Cards;
