import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react';
const arr = [
  {
    imgsrc: require('./images/1.jpg'),
    Name: 'Rice',
    price: '50'
  },
  {
    imgsrc: require('./images/2.jpg'),
    Name: 'Burger',
    price: '40'
  },
  {
    imgsrc: require('./images/3.jpg'),
    Name: 'Pizza',
    price: '60'
  },
  {
    imgsrc: require('./images/4.jpg'),
    Name: 'Dosa',
    price: '45'
  },
  {
    imgsrc: require('./images/5.jpg'),
    Name: 'Dish',
    price: '30'
  },
  {
    imgsrc: require('./images/6.jpg'),
    Name: 'Samosa',
    price: '10'
  }
]
var sum = 0;
function App() {

  const [checked, setChecked] = useState(0);
  const [GST, setGST] = useState(0);
  const [Pay, setPay] = useState(0);

  function hendleCheck(e) {
    // alert(e.target.value);
    if (e.target.checked) {
      sum = parseInt(sum) + parseInt(e.target.value);
      setChecked(sum);
      var g = sum * 18 / 100;
      setGST(g)
      var total = sum + g;
      setPay(total)

    }
    else {

      sum = parseInt(sum) - parseInt(e.target.value);
      setChecked(sum);
      var g = sum * 18 / 100;
      setGST(g)
      total=sum+g;
      setPay(total)
    }
  }

  return (
    <>
      <h1 align="center" className='py-4' style={{ background: '#ffc300', textTransform: 'uppercase', fontSize: '20px', fontWeight: '700' }}>Restaurant menu</h1>
      <Row className="container">
        <Col lg={9} className='card1'>
          {
            arr.map((val, i) => {
              return (
                <div key={i} className='res'>
                  <div className="restaurant">
                    <img src={val.imgsrc} />
                    <h3>{val.Name}</h3>
                    <h4>{val.price}</h4>
                    <input type="checkbox" value={val.price} onChange={(t) => { hendleCheck(t) }} />
                  </div>
                </div>
              )
            })
          }
        </Col>
        <Col lg={3} className="bill">
          <h1>Bill</h1>
          <table align="center" cellPadding={10}>
            <tr>
              <td>Item Total</td>
              <td>
                <input type="text" value={checked} />
              </td>
            </tr>
            <tr>
              <td>GST(18%)</td>
              <td><input type="text" value={GST} /></td>
            </tr>
            <tr>
              <td>To pay</td>
              <td><input type="text" value={Pay} /></td>
            </tr>
            {/* <tr>
                    <td>
                        <button>Pay</button>
                    </td>
                </tr> */}
          </table>
        </Col>
      </Row>
    </>
  );
}

export default App;
