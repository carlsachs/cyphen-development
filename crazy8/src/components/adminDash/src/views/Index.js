
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import "../assets/scss/argon-dashboard-react.scss";

import Header2 from "components/headers/light";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import {
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../variables/charts.js";

import Header from "../components/Headers/Header.js";
import Sidebar from "../layouts/Admin";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render() {
    return (
      <>
        <Header2 />
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="text-white mb-0">M/M Order Flow</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Revenue
                      </h6>
                      <h2 className="mb-0">Total orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Project Queue</h3>
            </CardHeader>
            <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Status</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("../assets/img/theme/bootstrap.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Argon Design System
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$2,500 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    pending
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742438047"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip742438047"
                    >
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip941738690"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip941738690"
                    >
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">70%</span>
                    <div>
                      <Progress
                        max="100"
                        value="70"
                        barClassName="bg-info"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Details
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Change Status
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Remove from Queue
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("../assets/img/theme/angular.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Angular Now UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$1,800 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip746418347"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip746418347"
                    >
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip102182364"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip102182364"
                    >
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip406489510"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip406489510"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip476840018"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip476840018"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-success"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Details
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Change Status
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Remove from Queue
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("../assets/img/theme/sketch.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Black Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$3,150 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-danger" />
                    delayed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip753056318"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip753056318"
                    >
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip441753266"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip441753266"
                    >
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip188462246"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip188462246"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip621168444"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip621168444"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">72%</span>
                    <div>
                      <Progress
                        max="100"
                        value="72"
                        barClassName="bg-info"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Details
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Change Status
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Remove from Queue
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("../assets/img/theme/react.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        React Material Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$4,400 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-info" />
                    on schedule
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip875258217"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip875258217"
                    >
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip834416663"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip834416663"
                    >
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip372449339"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip372449339"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip108714769"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip108714769"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">90%</span>
                    <div>
                      <Progress
                        max="100"
                        value="90"
                        barClassName="bg-info"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Details
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Change Status
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Remove from Queue
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("../assets/img/theme/vue.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Vue Paper UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$2,200 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip664029969"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip664029969"
                    >
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip806693074"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip806693074"
                    >
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip844096937"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip844096937"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip757459971"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip757459971"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-success"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Details
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Change Status
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Remove from Queue
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
          </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
