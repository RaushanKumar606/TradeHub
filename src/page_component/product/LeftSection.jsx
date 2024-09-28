import PropTypes from 'prop-types';
function  LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
    <div className="row left-section">
      <div className="col-12 col-md-6">
        <img src={imageURL} className="img-fluid" alt={productName} />
      </div>
      <div className="col-12 col-md-6 p-5 mt-5">
        <h1>{productName}</h1>
        <p>{productDesription}</p>
        <div>
          <a href={tryDemo} className="btn btn-link">Try Demo</a>
          <a href={learnMore} className="btn btn-link ml-5">Learn More</a>
        </div>
        <div className="mt-3">
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
          </a>
          <a href={appStore} className="ml-5">
            <img src="media/images/appstoreBadge.svg" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
}
 LeftSection.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDesription: PropTypes.string.isRequired,  // Updated here
  tryDemo: PropTypes.string.isRequired,
  learnMore: PropTypes.string.isRequired,
  googlePlay: PropTypes.string.isRequired,
  appStore: PropTypes.string.isRequired,
};

export default  LeftSection;

