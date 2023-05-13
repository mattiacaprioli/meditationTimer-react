import React, { useState } from 'react';
import Hero from '../components/Hero';
import TitleTimerPage from '../components/TitleTimerPage';
import Timer from '../components/timerComponents/Timer';
import Settings from '../components/timerComponents/Settings';
import SettingsContext from '../components/timerComponents/SettingsContext';
import SoundsGrid from '../components/SoundsGrid';

const TimerPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes,setWorkMinutes] = useState(15);
  const [breakMinutes,setBreakMinutes] = useState(0);

  const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      <Hero hero='timerHero' >
        <TitleTimerPage />
      </Hero>
      <div className='timerContainer'>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </div>
      <SoundsGrid  isStopped={isStopped} setIsStopped={setIsStopped} />
    </>
  )
}

export default TimerPage;