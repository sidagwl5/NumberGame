import React from 'react';

export default function Table() {
  return (
    <>
      
      <div className="instruction">
            <table>

             <thead>   
              <tr>
                <th>Color Strips</th>
                <th>Difference</th>
              </tr>
             </thead> 

             <tbody>
              <tr>
                <td>
                  <div className="circle"></div>
                </td>

                <td>0</td>
              </tr>

              <tr>
                <td>
                  <div className="circle1"></div>
                </td>

                <td>1-4</td>
              </tr>

              
              <tr>
                <td>
                  <div className="circle2"></div>
                </td>

                <td>5 - 15</td>
              </tr>

              <tr>
                <td>
                  <div className="circle3"></div>
                </td>

                <td>bigger than 15</td>
              </tr>
              </tbody>
              
            </table>
          </div>
    </>
  );
}
