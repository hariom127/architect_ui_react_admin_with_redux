import React from 'react'

function DashboardPage() {
    return (
        <div className="app-main__inner">
                    <div className="tabs-animation">
                        <div className="mb-3 card">
                            <div className="card-header-tab card-header">
                            <div
                                className="card-header-title font-size-lg text-capitalize font-weight-normal"
                            >
                                <i
                                className="header-icon lnr-charts icon-gradient bg-happy-green"
                                >
                                </i>
                                Portfolio Performance
                            </div>
                            <div className="btn-actions-pane-right text-capitalize">
                                <button
                                className="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
                                >
                                View All
                                </button>
                            </div>
                            </div>
                            <div className="no-gutters row">
                            <div className="col-sm-6 col-md-4 col-xl-4">
                                <div
                                className="card no-shadow rm-border bg-transparent widget-chart text-left"
                                >
                                <div className="icon-wrapper rounded-circle">
                                    <div
                                    className="icon-wrapper-bg opacity-10 bg-warning"
                                    ></div>
                                    <i className="lnr-laptop-phone text-dark opacity-8"></i>
                                </div>
                                <div className="widget-chart-content">
                                    <div className="widget-subheading">Cash Deposits</div>
                                    <div className="widget-numbers">1,7M</div>
                                    <div className="widget-description opacity-8 text-focus">
                                    <div className="d-inline text-danger pr-1">
                                        <i className="fa fa-angle-down"></i>
                                        <span className="pl-1">54.1%</span>
                                    </div>
                                    less earnings
                                    </div>
                                </div>
                                </div>
                                <div className="divider m-0 d-md-none d-sm-block"></div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-4">
                                <div
                                className="card no-shadow rm-border bg-transparent widget-chart text-left"
                                >
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg opacity-9 bg-danger"></div>
                                    <i className="lnr-graduation-hat text-white"></i>
                                </div>
                                <div className="widget-chart-content">
                                    <div className="widget-subheading">Invested Dividents</div>
                                    <div className="widget-numbers"><span>9M</span></div>
                                    <div className="widget-description opacity-8 text-focus">
                                    Grow Rate:
                                    <span className="text-info pl-1">
                                        <i className="fa fa-angle-down"></i>
                                        <span className="pl-1">14.1%</span>
                                    </span>
                                    </div>
                                </div>
                                </div>
                                <div className="divider m-0 d-md-none d-sm-block"></div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4">
                                <div
                                className="card no-shadow rm-border bg-transparent widget-chart text-left"
                                >
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg opacity-9 bg-success"></div>
                                    <i className="lnr-apartment text-white"></i>
                                </div>
                                <div className="widget-chart-content">
                                    <div className="widget-subheading">Capital Gains</div>
                                    <div className="widget-numbers text-success">
                                    <span>$563</span>
                                    </div>
                                    <div className="widget-description text-focus">
                                    Increased by
                                    <span className="text-warning pl-1">
                                        <i className="fa fa-angle-up"></i>
                                        <span className="pl-1">7.35%</span>
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-center d-block p-3 card-footer">
                            <button
                                className="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg"
                            >
                                <span className="mr-2 opacity-7">
                                <i
                                    className="icon icon-anim-pulse ion-ios-analytics-outline"
                                ></i>
                                </span>
                                <span className="mr-1">View Complete Report</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default DashboardPage
