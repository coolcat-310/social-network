import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Metrics = props =>{
    return (
        <Fragment>
            <div className="ui grid">
                <div className="row">
                    <div className="twelve wide column">
                        <div className="ui text container">
                        <h2 className="ui center aligned icon header">
                            <i className="circular chart area icon"/>
                            <p className="large text-primary">Metrics</p>
                        </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices elit aliquam
                                volutpat suscipit. Ut neque ligula, dapibus a efficitur lobortis, viverra ut nunc. Sed nec
                                enim rhoncus, aliquet purus imperdiet, malesuada ex. Sed rutrum velit vel lorem hendrerit
                                porttitor. Vestibulum efficitur, neque varius finibus accumsan, lorem ligula dapibus libero,
                                non suscipit orci massa ac libero. Proin purus velit, vulputate sed dictum eu, pretium eu
                                nibh. Cras volutpat feugiat justo quis malesuada. Suspendisse malesuada sapien ut dictum
                                tempus. Vestibulum nulla leo, rhoncus vitae nunc nec, iaculis porttitor libero. Nullam eu
                                sodales dui. Nullam lacinia risus id felis auctor, at auctor arcu vehicula. Quisque
                                tincidunt faucibus pulvinar. Aenean scelerisque dapibus accumsan. Donec eu tellus mollis,
                                maximus ex nec, tincidunt mauris. Praesent id ultrices nisl. Vivamus enim nunc, accumsan
                                vel condimentum eget, imperdiet sed libero.
                            </p>
                        </div>
                    </div>
                    <div className="three wide column">
                    <div className="ui vertical menu">
            <div className="item">
                <div className="header">SAP</div>
                <div className="menu">
                    <Link to="/sd029s" className="item">SD029</Link>
                    <a className="item">Consumer</a>
                </div>
            </div>
            <div className="item">
                <div className="header">CMS Solutions</div>
                <div className="menu">
                    <a className="item">Rails</a>
                    <a className="item">Python</a>
                    <a className="item">PHP</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Hosting</div>
                <div className="menu">
                    <a className="item">Shared</a>
                    <a className="item">Dedicated</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Support</div>
                <div className="menu">
                    <a className="item">E-mail Support</a>
                    <a className="item">FAQs</a>
                </div>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Metrics;