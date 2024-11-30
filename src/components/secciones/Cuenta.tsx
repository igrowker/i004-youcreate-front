import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Cuenta: React.FC = () => {


  return (

    <body>
    <div className='container p-5 h-screen w-full bg-black'>

      <div className='container sm bg-slate-300 rounded-lg'>

        <div className='flex'>
          <FontAwesomeIcon className='text-4xl' icon={faUser} />
          <h1 className='text-3xl font-bold'>Cuenta</h1>
        </div>

        <div>
          <div className="card rounded-4F shadow-lg border-0 mb-5">
            <div className="card-body">
              <div>
                <h4 className="fw-bold">Free</h4>
                <p className="text-muted">For Freelancers</p>
              </div>
              <h2 className="display-4 fw-bold mb-5">$0</h2>


              <ul className="list-group list-group-flush mb-5 gap-3">
                <li className="list-group-item border-0">
                  <i className="bi bi-check2">Single user</i>
                </li>

                <li className="list-group-item border-0">
                  <i className="bi bi-check2">10 Downloads Per Month</i>
                </li>

                <li className="list-group-item border-0">
                  <i className="bi bi-check2">Faster Files</i>
                </li>

                <li className="list-group-item border-0">
                  <i className="bi bi-check2">25 Custom Packs</i>
                </li>
              </ul>

              <div className="d-grid">
                <button className="m-4 btn btn-dark rounded-4">Subscribe</button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
    </body>
  );
};

