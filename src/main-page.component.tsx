import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { Component } from "react";

import { Link } from "react-router-dom";
import websites from './website';
import './main-page.component.css'
import { Button } from "@material-ui/core";

const columns = [
  {
    name: "Website name",
    selector: "websiteName",
    sortable: true
  },
  {
    name: "Number of Events",
    selector: "numberOfEvents",
    sortable: true
  },
  {
    name: "Last event Date",
    selector: "lastEventTimestamp",
    sortable: true
  },
  {
    name: "The most popular event",
    selector: "mostPopularEventName",
    sortable: true
  },
  {
    name: "",
    selector: "id",
    cell: (row: any) => <Link onClick={(e) => {localStorage.setItem("token", row.websiteId)}} to="/dashboard" >See more</Link>

  }

];
type State = {
  websiteData: WebsiteData[];
};

let initialState: State = {
  websiteData: []
}

type WebsiteData = {
  websiteName: string;
  numberOfEvents: number;
  lastEventTimestamp: string;
  mostPopularEventName: string;
  id: string;
}

export default class MainPage extends Component {
  state = initialState;
 
  componentDidMount() {
    fetch('http://localhost:8080/user/'+ localStorage.getItem("user"))
      .then(response => response.json())
      .then(data => {
        this.setState({ websiteData: data });
        
      });
  }

  render() {
    return (
      <div className="table">
        <br></br>
        <Card>
          <div className="websiteButton">
            <Link to="./newWebsite"><Button>Add new website</Button> </Link>
          </div>
          <DataTable
            title="Your website list"
            columns={columns}
            data={this.state.websiteData}
            defaultSortField="name"
            sortIcon={<SortIcon />}
          />
        </Card>
      </div>

    );
  }
}