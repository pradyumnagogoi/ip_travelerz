import React, { useState } from 'react';
import '../Destination/Destination.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ImageSlider from '../ImageSlider';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Destination() {
  const [addpeople, setAddpeople] = useState(1);
  const [addroom, setAddroom] = useState(1);
  return (
    <div className='destination'>
      <div className='destination_head'>
        <div className='booking'>
          <div className='booking_offers'>
            <ImageSlider />
          </div>
          <div className='booking_slider'>
            <div className='slider_text'>Plan a different kind of getaway this time</div>
            <div className='slider'>
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732417_2_10.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732387_3_7.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732339_1_10.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216649_andaman.jpg' alt='...' />
              <img className='slider_image' src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg' alt='...' />
            </div>
          </div>
        </div>
        <div className='booking_form'>
          <h2>Travelerz Tour Package</h2>
          <div className='input'>
            <input className='booking_input' type='email' placeholder='Email' />
            <input className='booking_input' type='text' placeholder='Full Name' />
            <input className='booking_input' type="tel" placeholder='Contact Number' />
            <input className='booking_input' type="date" placeholder='Deparature Date' />
            <input className='booking_input' type='text' placeholder='Departure City' />
            <input className='booking_input' type='text' placeholder='Destination' />
          </div>
          <div className='booking_calc'>
            <div>Number Of People</div>
            <div className='calc'>
              <RemoveIcon className='calc_btn' onClick={() => setAddpeople(addpeople - 1)} />
              <div>{addpeople}</div>
              <AddIcon className='calc_btn' onClick={() => setAddpeople(addpeople + 1)} />
            </div>
          </div>
          <div className='booking_calc'>
            <div className='calc'>
              <RemoveIcon className='calc_btn' onClick={() => setAddroom(addroom - 1)} />
              <div>{addroom}</div>
              <AddIcon className='calc_btn' onClick={() => setAddroom(addroom + 1)} />
            </div>
            <div>Number Of Room</div>
          </div>
          <div className='booking_room'>
            <div>Type Of Room</div>
            <div className='room_type'>
              <div>
                <input type="radio" value="cheap" />
                <label for="cheap">Cheap</label>
              </div>
              <div>
                <input type="radio" value="standard" />
                <label for="standard">Standard</label>
              </div>
              <div>
                <input type="radio" value="lux" />
                <label for="lux">Luxary</label>
              </div>
            </div>
          </div>
          <div className='check_booking'>
            <input type='checkbox' />
            <label className='checkBox'>Send me updates for this booking on <img className='logo_whatsapp' src='https://cdn1.tripoto.com/assets/2.9/img/logo/whatsapp-logo.png' alt='img' /></label>
          </div>
          <button className='booking_btn'>Submit Details</button>
          <p className='tAndC'>I accept the Terms of Use and Privacy Policy of Travelerz. </p>
        </div>
      </div>
      <div className='destination_body'>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1652947865_k10_3.jpg' alt='...' />
          <div><LocationOnIcon/>Kashmir</div>
          <p>heaven on earth, <span className='place_span'>indeed</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653294329_10_4.jpg' alt='...' />
          <div><LocationOnIcon/>Spiti Valley</div>
          <p>Explore the <span className='place_span'>little tibet</span> of india</p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654149620_leh1.jpg' alt='...' />
          <div><LocationOnIcon/>Leh-Ladakh</div>
          <p>the <span className='place_span'>moon land</span> of india</p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2211564/Image/1654501120_1639555882_8manali_1.jpeg' alt='...' />
          <div><LocationOnIcon/>manali</div>
          <p>the <span className='place_span'>valley of gods</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1649744796_u10.jpg' alt='...' />
          <div><LocationOnIcon/>Uttrakhand</div>
          <p>Land of <span className='place_span'>Gods'</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2025553/Image/1614250695_rajasthan_02.jpg' alt='...' />
          <div><LocationOnIcon/>Rajasthan</div>
          <p>Land of the <span className='place_span'>kings</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645070582_9_2.jpg' alt='...' />
          <div><LocationOnIcon/>Darjeeling</div>
          <p>The queen of <span className='place_span'>the hills</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/1535571/Image/1649178428_1645070867_5_4.jpeg' alt='...' />
          <div><LocationOnIcon/>sikkim</div>
          <p>paradise of <span className='place_span'>the botanist</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=370:240&downsize=370:240' alt='...' />
          <div><LocationOnIcon/>Goa</div>
          <p>the party <span className='place_span'>capital of india</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654840850_k1_3.jpg' alt='...' />
          <div><LocationOnIcon/>kerala</div>
          <p>god's own country <span className='place_span'>indeed</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2086483/Image/1630642887_5.jpg' alt='...' />
          <div><LocationOnIcon/>mumbai</div>
          <p>city of <span className='place_span'>dreams</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645183545_9_3.jpg' alt='...' />
          <div><LocationOnIcon/>south india</div>
          <p>explore the <span className='place_span'>deccan</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1655714797_22_5.jpg' alt='...' />
          <div><LocationOnIcon/>Andaman</div>
          <p>experience a <span className='place_span'>whole new world</span></p>
          <button className='place_btn'>Explore</button>
        </div>
      </div>
      <div className='destination_body'>
      <h1 className='places' id='destination_text'>Trending <br/>International Packages</h1>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645682386_m3_2.jpg' alt='...' />
          <div><LocationOnIcon/>Maldives</div>
          <p>discover the <span className='place_span'>sunny side of life</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654500326_mauritius_b.jpg' alt='...' />
          <div><LocationOnIcon/>mauritius</div>
          <p>unwind at this <span className='place_span'>tropical paradise</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1635501546_3_1.jpg' alt='...' />
          <div><LocationOnIcon/>dubai</div>
          <p>city of <span className='place_span'>gold</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1650700898_6_5.jpg' alt='...' />
          <div><LocationOnIcon/>singapore</div>
          <p>where <span className='place_span'>dreams come true</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1655311212_13_2.jpg' alt='...' />
          <div><LocationOnIcon/>thailand</div>
          <p>world's <span className='place_span'>beach capital</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1648716376_6_3.jpg' alt='...' />
          <div><LocationOnIcon/>turkey</div>
          <p>a canvas of <span className='place_span'>historical wonders</span></p>
          <button className='place_btn'>Explore</button>
        </div>
        <div className='places'>
          <img className='place_img' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1648716043_p3_3.jpg' alt='...' />
          <div><LocationOnIcon/>paris</div>
          <p>explore the <span className='place_span'>city of light</span></p>
          <button className='place_btn'>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Destination