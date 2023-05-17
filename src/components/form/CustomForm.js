import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from 'react-select'
import { useState } from 'react';
import { Card } from 'react-bootstrap';



function CustomerForm() {

    const [startDate, setStartDate] = useState(new Date(new Date().toLocaleDateString()));
    const [endDate, setendDate] = useState(null);
    let [oneWay,setOneway] = useState(true)
    let [roundWay,setroundWay] = useState(false)
    const [tripType, setTripType] = useState("oneWay");
    if(tripType == 'oneWay'){
        oneWay=true
        roundWay=false
    }
    if(tripType == 'roundTrip'){
        oneWay=false
        roundWay=true
    }
    const options = [
        { value: 'Hazrat Shahjalal International Airport, ', label: 'Shah Makhdum Airport' },
        { value: 'Barishal Airport', label: 'Barishal Airport' },
        { value: "Cox's Bazar International Airport", label: "Cox's Bazar International Airport" }
      ]



  return (
    <Container>
      <Row>
      <Tabs
      defaultActiveKey="Flights"
      id="uncontrolled-tab-example"
      className="mb-3"
    >  


      <Tab eventKey="Flights" title="Flights">
      <Card >
         <div className='way-wrapper text-start d-flex my-3'>
            <div className="radio-btn-container">
            <div
              className="radio-btn"
              onClick={() => {
                setTripType("oneWay");
            }}
            >
            <input
                type="radio"
                value={tripType}
                name="tripType"
                checked={tripType == "oneWay"}
            />
            One-way
            </div>
            <div
            className="radio-btn"
            onClick={() => {
                setTripType("roundTrip");
            }}
            >
            <input
                type="radio"
                value={tripType}
                name="tripType"
                checked={tripType == "roundTrip"}
            />
            Round-Trip
            </div>
            <div
            className="radio-btn"
            onClick={() => {
                setTripType("multiCity");
            }}
            >
            <input
                type="radio"
                value={tripType}
                name="tripType"
                checked={tripType == "multiCity"}
            />
            Multi-City
            </div>
            </div> 
         </div>
         <div className='tripway'>
           <form>
              {/* single input */}
                <Row>
                <Col>
                  <div className='form-group'>
                    <label>From</label>
                    <Select options={options}  />
                 </div>
                </Col>
              <Col>
                 <div className='form-group'>
                    <label>To</label>
                    <Select options={options}  />
                 </div>
              </Col>
              <Col>
                <div className='form-group'>
                    <label>Departure</label>
                    {/* <input type="date" className='form-control' name='fromInput'  /> */}
                    <DatePicker  
                       selected={startDate} 
                       onChange={(date) => setStartDate(date)} 
                       minDate={new Date(new Date().toLocaleDateString())}
                       value={new Date()}
                    />
                 </div>
              </Col>
              <Col>
                <div className='form-group'>
                    <label>Return</label>
                    {
                        oneWay? <DatePicker 
                        selected={endDate} 
                        onChange={(date) => setendDate(date)}
                        minDate={new Date(new Date().toLocaleDateString())}
                        disabled={true}
                        
                    
                       />: <DatePicker 
                        selected={endDate} 
                        onChange={(date) => setendDate(date)}
                        minDate={new Date(new Date().toLocaleDateString())}
                        
                    
                       />
                    }
                   
                 </div>
              </Col>
            {/* singleinput */}
                </Row>
                <Row>
                    <Col>
                    <div className='form-group'>
                        <input type="submit" value="SEARCH" className='btn btn-primary m-4'/>
                    </div>
                    </Col>
                </Row>
            </form>  
         </div>
      </Card>
      </Tab>
      <Tab eventKey="Hotels" title="Hotels">
        
      </Tab>
      <Tab eventKey="Homestays" title="Homestays" >
        
      </Tab>
    </Tabs>
      </Row>
    </Container>
  );
}

export default CustomerForm;


