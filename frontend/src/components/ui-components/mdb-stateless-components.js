import React from 'react';
import { Link } from 'react-router-dom';

export const ShowCard = props => {
  return (
    <div className="card hoverable mt-4">
      <div className="card-body">
        <h4 className="card-title">
          <a>{props.title}</a>
        </h4>
        <p className="card-text">{props.children}</p>
        <Link to={'campaigns/' + props.route}>
          <button className="btn btn-info">View Campaign</button>
        </Link>
      </div>
    </div>
  );
};

export const DetailCard = props => {
  return (
    <div className="col-md-6 mt-5">
      <div className="z-depth-3">
        <div className="card" style={{ height: '200px' }}>
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <h4 className="card-title text-muted">{props.meta}</h4>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CampaignTron = props => {
  return (
    <div className="jumbotron text-center hoverable">
      <h1 className="h1-reponsive mb-3">
        <strong>Name of the Campaign!</strong>
      </h1>
      <h3 className="h3-responsive text-muted">
        Address of the Manager: {props.manager}
      </h3>
    </div>
  );
};

export const Jumbotron = props => {
  return (
    <div className="z-depth-4">
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage:
            'url(https://avatars.mds.yandex.net/get-pdb/985790/b812a497-5256-4af1-b79d-9190d692e788/orig)'
        }}
      >
        <div className="container text-center">
          <h1 className="h1-reponsive mb-4 mt-2 text-white font-bold display-4">
            {props.title}
          </h1>
          <p className="lead text-white">{props.content}</p>
          <br />
          <Link to="/create-campaign">
            <button className="btn btn-outline-white btn-rounded">
              <i className="fa fa-plus left" /> {props.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
