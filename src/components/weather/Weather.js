import Styles from './Weather.module.css';
import TestChart from './TestChart';
import rain from '../../assets/Rain.png';

const Weather = () => {

  const temp = 'F';
  const selected = { color: '#fff',  };

  return (
    <div className={Styles.weather}>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} />
            <span className={Styles.averageTemp}>77°</span>
            <div className={Styles.tempSelector}><span style={temp === 'F' ? selected : {}}>F</span>{'|'}<span style={temp === "C" ? selected : {}}>C</span> </div>
          </div>
          <div className={Styles.description}>
            <p>Saturday</p>
            <p>Clear with periodic clouds</p>
          </div>
        </div>
        <div className={Styles.headinfoRight}>
          <p>Precipiration: 24%</p>
          <p>Humidity: 40%</p>
          <p>Wind: 5mph</p>
        </div>
      </div>
      <div className={Styles.chartTabs}>
        <div className={Styles.selectedTab}>Temperature</div>
        <span>|</span>
        <div>Precipitation</div>
        <span>|</span>
        <div>Humidity</div>
        <span>|</span>
        <div>Wind</div>
      </div>
      <div className={Styles.timeWrapper}>
          <span>1am</span>
          <span>4am</span>
          <span>7am</span>
          <span>10am</span>
          <span>1pm</span>
          <span>4pm</span>
          <span>7pm</span>
        </div>
      <div className={Styles.chartWrapper}>    
        <TestChart />
      </div>
      <div className={Styles.daysWrapper}>
        <div className={Styles.daySelect}>
          <span>SAT</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>SUN</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>MON</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>TUE</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>WED</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
