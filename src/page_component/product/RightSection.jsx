import PropTypes from 'prop-types';
function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
  <div className="row right-section">
    <div className="col-12 col-md-6 p-5 mt-5">
      <h1>{productName}</h1>
      <p>{productDesription}</p>
      <div>
        <a href={learnMore}>Learn More</a>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <img src={imageURL} className="img-fluid" alt={productName} />
    </div>
  </div>
</div>

  );
}

RightSection.propTypes = {
    imageURL: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDesription: PropTypes.string.isRequired,  // Updated here
    tryDemo: PropTypes.string.isRequired,
    learnMore: PropTypes.string.isRequired,
    
  };

export default RightSection;
