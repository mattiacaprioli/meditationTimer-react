import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

export default function Settings() {
    const settingsInfo = useContext(SettingsContext);

  return (
    <div style={{textAlign:'left'}}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider 
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={0}
        max={60} 
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider 
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={0}
        max={60} 
      />
      <div style={{textAlign:'center', marginTop:'20px'}} >
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  )
}
