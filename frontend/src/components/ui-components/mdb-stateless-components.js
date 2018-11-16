import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Campaign from '../../ethereum/campaign';

export class ShowCard extends Component {
  state = {
    campaignName: ''
  };
  async componentDidMount() {
    const campaign = Campaign(this.props.address);
    const campaignName = await campaign.methods.campaignName().call();
    this.setState({ campaignName });
  }

  render() {
    return (
      <div className="card hoverable mt-4 animated fadeIn">
        <div className="card-body">
          <h3 className="card-title animated fadeIn">
            {this.state.campaignName}
          </h3>
          <h5 className="card-title text-muted">{this.props.address}</h5>
          <Link to={'campaigns/' + this.props.route}>
            <button className="btn btn-info float-right">查看当前活动</button>
          </Link>
        </div>
      </div>
    );
  }
}

export const DetailCard = props => {
  return (
    <div className="col-md-6 mt-5 animated fadeIn">
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
    <div className="jumbotron text-center hoverable animated fadeIn">
      <h1 className="h1-reponsive mb-4 animated fadeIn">
        <strong>{props.campaignName}</strong>
      </h1>
      <h3
        className="h3-responsive text-muted"
        style={{ wordWrap: 'break-word' }}
      >
        本活动智能合约地址: {props.contractAddress}
      </h3>
      <h4
        className="h3-responsive text-muted"
        style={{ wordWrap: 'break-word' }}
      >
        管理者: {props.manager}
      </h4>
    </div>
  );
};

export const Jumbotron = props => {
  return (
    <div className="z-depth-4">
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundColor: '#1696ea'
        }}
      >
        <div className="container text-center">
          <h1 className="h1-reponsive mb-4 mt-2 text-white display-4">
            {props.title}
          </h1>
          <p className="lead text-white">{props.children}</p>
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
