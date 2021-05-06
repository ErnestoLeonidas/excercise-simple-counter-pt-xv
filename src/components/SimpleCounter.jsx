import React from 'react';

const SimpleCounter = (props) => {
    return(
        <div className="container bg-dark text-white text-center font-weight-bold">
            <div className="row">
                <div className="col display-4 m-3">
                    <i className="fa fa-clock"></i>
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num6}
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num5}
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num4}
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num3}
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num2}
                </div>
                <div className="col display-4 m-3 font-weight-bold">
                    {props.num1}
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter;