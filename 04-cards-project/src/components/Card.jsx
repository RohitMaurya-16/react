
import {Bookmark} from 'lucide-react';
import './index.css';
 const Card = (prop) => {
  return (
    <div className='card'>
          <div>
            <div className="top">
          <img src={prop.logo}/>
          <button>Save <Bookmark  size={15}/></button>
          </div>
          <div className="center">
<h3>{prop.name}<span>{prop.days}</span></h3>
<h2>{prop.title}</h2>
            <div className='tag'>
              <h4>{prop.level}</h4> 
            </div>
          </div>
          </div>
          <div className="bottom">
              <div>
                <h3>{prop.salary}</h3>
                <p>{prop.location}</p>
              </div>
              <button>Apply Now</button>
           </div>
          </div>
  )
};

export default Card;
