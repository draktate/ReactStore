import React, { Component } from 'react';

export default function  Title({name, title}){

    return (
      <div className="row"> 
        <div className="col-10 mx-auto my-2 text-center text-title ">
            <h1 className=" font-weigth-bold text-capitalize">
                {name}
                <br></br>
                <strong className="text-blue text-capitalize">
                    {title}
                </strong>

            </h1>

        </div> 

      </div>
    );
}
