import React from "react";
import {Link,useLocation} from 'react-router-dom';

const Breadcrumbs =() => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
     <div className="breadcrumbs">
      {
        pathnames.map((path,index)=> {
          const routeTo = `/${pathnames.slice(0,index+1).join("/")}`;
          const isLast = index === pathname.length -1;

          return (
            <React.Fragment key = {index}>
              {index > 0 && <span> &gt;</span>}
              {isLast ? (
                <span className="current-page">{path}</span>
              ): (
                <Link to = {routeTo}>{path}</Link>
              )}
            </React.Fragment>
          )
        })
      }
     </div>
    </>
  )
}

export default Breadcrumbs